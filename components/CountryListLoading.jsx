import React from "react";

const CountryListLoading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-20 max-w-screen-3xl 2xl:max-w-screen-2xl  mx-auto p-5 lg:p-10 bg-white dark:bg-gray-700 h-100 lg:h-screen">
      {Array.from({ length: 8 }).map((e, i) => {
        return (<div key={i}
        className="rounded-lg lg:rounded-lg  xl:rounded-xl 2xl:rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-600 "
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 17px 20px -8px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
      <p className="bg-gray-100 dark:bg-gray-500 h-40 w-80 md:w-90 lg:h-44 lg:w-100"></p>
      <div className="flex flex-col place-content-around ">
        <p className="h-7 bg-gray-100 dark:bg-gray-500 mx-8 my-4 rounded-lg" ></p>
        {Array.from({length: 3}).map((e,i) => {
         return <p key={i} className="h-4 my-1 mx-10 bg-gray-100 dark:bg-gray-500 rounded"></p>
        })}
      </div>

      </div>)
      })}
    </div>
  );
};

export default CountryListLoading;
