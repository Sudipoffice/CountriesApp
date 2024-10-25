import React, { useState } from "react";

const SearchnSortBar = ({ setSortBy, setRegion, setQuery }) => {
  const sortedRegion = (e) => setRegion(e.target.value);
  const sortedBy = (e) => setSortBy(e.target.value);

  return (
    <div className="w-screen h-20 p-5 flex content-center items-center place-content-around bg-white text-black dark:bg-gray-700 pt-32 pb-10">
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search for a country..."
        className="  bg-slate-100 dark:bg-gray-600 dark:text-white h-10 w-1/2 lg:h-10 lg:w-1/3  placeholder:text-left p-2 lg:p-4 rounded-md border-none focus:outline-none "
        style={{
          boxShadow:
            "rgba(20, 20, 43, 0.25) 0px 7px 10px -10px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px ",
        }}
      />
      <div className="flex flex-row w-1/2 lg:w-1/5">
        <select
          onChange={sortedRegion}
          name="language"
          id="language"
          className="h-10 w-1/2 border-none rounded-md focus:outline-none pl-4 m-2 bg-white dark:bg-gray-600 dark:text-gray-300"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 7px" }}
        >
          <option value="" disabled>
            Sort by Region
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>
        </select>

        <select
          onChange={sortedBy}
          name="language"
          id="language"
          className="h-10 w-1/2 border-none rounded-md focus:outline-none pl-4 m-2 bg-white dark:bg-gray-600 dark:text-gray-300"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 2px 7px" }}
        >
          <option value="" disabled>
            Sort by
          </option>
          <option value="All">All</option>
          <option value="Alphabet">Alphabet</option>
          <option value="Population">Population</option>
          <option value="Area">Area</option>
        </select>
      </div>
    </div>
  );
};

export default SearchnSortBar;
