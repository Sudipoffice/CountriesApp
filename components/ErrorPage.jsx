import React from 'react'
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page" className='flex flex-col m-20 items-center justify-center text-xl'>
        <h1 className='text-3xl font-bold'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p >
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
}

export default ErrorPage
