import React, { useState } from "react";

const Navbar = ({theme}) => {
  const [isDark, setIsDark] = theme
  return (
    <div
      className="flex content-center items-center place-content-around w-screen m-0 p-0 h-20 bg-gray-200 text-black dark:bg-gray-800 dark:text-white fixed z-10">
      <div className="text-2xl w-3/5">Where to travel in the world?</div>
      <button
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("isDarkMode", !isDark);
        }}
        className={isDark ? "bi bi-sun-fill" : "bi bi-moon-fill"}
      >
        &nbsp;{isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Navbar;
