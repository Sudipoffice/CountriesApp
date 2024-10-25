import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListLoading from "./CountryListLoading";
import useFilteredCountries from "../hooks/useFilteredCountries";

const CountriesList = ({sortBy, region, query}) => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);

  const filteredCountries = useFilteredCountries(countriesData, query, region, sortBy);

  return filteredCountries.length===0 ? <CountryListLoading/> : (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-20 max-w-screen-3xl 2xl:max-w-screen-2xl  mx-auto p-5 lg:p-10 bg-white text-black dark:bg-gray-700 dark:text-white">
      {filteredCountries
      .map((country, id) => {
        return (
          <CountryCard
            key={id}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population || 0}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        );
      })}
    </div>
  );
};

export default CountriesList;
