import React from 'react'

const CountryLoading = () => {
  return (
      <div className='bg-white dark:bg-gray-700 h-screen'>
    <button className='p-1 h-[7vw] w-[14vw] lg:h-[2.5vw] lg:w-[5vw] m-10 ml-[5vw]  bg-gray-100 dark:bg-gray-600'></button>
    <div className='flex flex-col lg:flex-row justify-center items-center place-content-around '>
      <p className='  h-40 m-2 lg:m-10 w-[75vw] lg:h-[25vw] lg:w-[50vw] bg-gray-100 dark:bg-gray-600'></p>
      <div  className=' w-72 m-10 lg:m-20 lg:w-50'>
      <div  className='my-0 bg-gray-100 dark:bg-gray-600 h-[10vw] w-[60vw] lg:h-[4vw] lg:w-[15vw] flex justify-center items-center lg:justify-start'></div>
      {Array.from({ length: 5 }).map((e, i) => {
       return (<p key={i} className='mt-8 h-[6vw] lg:h-[2vw] lg:w-[15vw]  w-[65vw] lg:w[20vw]  bg-gray-100 dark:bg-gray-600'></p>)
      })}
      </div>
      
    </div>
    </div>
  )
}

export default CountryLoading
