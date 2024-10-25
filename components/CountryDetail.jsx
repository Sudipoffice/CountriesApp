import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import CountryLoading from "./CountryLoading";

const CountryDetail = () => {
  const params = useParams();
  const countryName = params.country;
  const [notFound, setNotFound] = useState(false);
  const [countryData, setCountryData] = useState(null);
  const { state } = useLocation();

  function updateCountryData(data) {
    const [latitude, longitude] = data.capitalInfo?.latlng || [null, null];
    setCountryData({
      name: data.name.common || data.name,
      capital: data.capital?.[0],
      continent: data.continents?.[0],
      currency: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(","),
      flag: data.flags.svg,
      languages: Object.values(data.languages || {}).join(", "),
      latitude: latitude,
      longitude: longitude,
      nativeName: Object.values(data.name.nativeName || {})[0]?.official || data.name.common,
      region: data.region,
      timezone: data.timezones?.[0],
      population: data.population,
      area: data.area,
      borders: [],
    });
    if (data.borders && data.borders.length > 0) {
      Promise.all(
        data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common);
        })
      ).then((borders) => {
        setTimeout(() => {
          setCountryData((prevState) => ({ ...prevState, borders }));
        });
      });
    }
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((e) => {
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return (
      <div className="flex justify-center align-center text-xl mt-10">
        Country Not Found...
      </div>
    );
  }

  return countryData === null ? (
    <CountryLoading />
  ) : (
    <div className="h-[140vh] lg:h-screen w-full flex flex-col translate-y-20 pt-15 lg:pt-20 bg-white text-black dark:bg-gray-700 dark:text-white">
      <button
        onClick={() => history.back()}
        className="bi bi-arrow-left-short border-none bg-white text-black dark:bg-gray-600 dark:text-white p-1 m-2 w-20 rounded-lg ml-4 cursor-pointer hover:bg-slate-100 transition-transform duration-300 ease-in-out transform hover:scale-110"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 7px" }}
      >
        &nbsp;Back
      </button>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start place-content-around">
        <img
          className=" h-40 m-0  lg:h-72  lg:my-0"
          src={countryData.flag}
          alt={`${countryData.name} flag`}
        ></img>
        <div className=" w-72 m-0 lg:mx-36 lg:w-50">
          <h1 className="text-3xl flex justify-center lg:justify-start font-bold">
            {countryData.name}
          </h1>
          <div className=" h-[90vw] lg:h-[30vw] lg:w-[30vw] text-gray-700 dark:text-white">
            <p className="m-2">
              <b>Population:</b> {countryData.population}{" "}
            </p>
            <p className="m-2">
              <b>Native Name:</b> {countryData.nativeName}{" "}
            </p>
            <p className="m-2">
              <b>Area:</b> {countryData.area}
            </p>
            <p className="m-2">
              <b>Capital:</b> {countryData.capital}{" "}
            </p>
            <p className="m-2">
              <b>Currency:</b> {countryData.currency}{" "}
            </p>
            <p className="m-2">
              <b>Languages:</b> {countryData.languages}{" "}
            </p>
            <p className="m-2">
              <b>Lat:</b> {countryData.latitude}{" "}
            </p>
            <p className="m-2">
              <b>Long:</b> {countryData.longitude}{" "}
            </p>
            <p className="m-2">
              <b>Timezone:</b> {countryData.timezone}{" "}
            </p>
            {countryData?.borders?.length !== 0 && (
              <p className="m-2 flex flex-wrap items-center justify-start">
                <b>Border Countries:</b> &nbsp;
                {countryData.borders.map((border) => (
                  <Link
                    key={border}
                    className="rounded-md h-8 lg:h-9  m-2 p-1 bg:white dark:bg-gray-600"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 7px" }}
                    to={`/${border}`}
                  >
                    {border}
                  </Link>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default CountryDetail;
