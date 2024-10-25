import { React } from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital, data }) => {
  return (
      <Link
      to={`/${name}`}
      className="
        rounded-lg lg:rounded-lg  xl:rounded-xl 2xl:rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out transform lg:hover:scale-105 cursor-pointer  bg-white text-black dark:bg-gray-600 dark:text-white"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 17px 20px -8px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
      state={data}
    >
    {/* flex flex-col  h-auto lg:h-[25vw] w-2/5 my-4 lg:m-4 lg:w-1/5  place-content-around */}
      <img
        src={flag}
        alt={`${name} Flag`}
        className="  sm:h-24 md:h-40 lg:h-44 w-80 md:w-90 lg:w-100 object-cover m-0 "
      />
      <div className="flex flex-col place-content-around m-5  ">
        <p className=" lg:text-lg xl:text-lg 2xl:text-3xl font-bold py-3">{name}</p>
        <p className="text-xs lg:text-sm xl:text-sm 2xl:text-xl">
          <b>Population: </b>
          {population}
        </p>
        <p className=" text-xs lg:text-sm xl:text-sm 2xl:text-xl">
          <b>Region: </b>
          {region}
        </p>
        <p className="text-xs lg:text-sm xl:text-sm 2xl:text-xl">
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
     )
};

export default CountryCard;
