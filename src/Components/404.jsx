import React from 'react'
import {useNavigate} from "react-router-dom";

 function Error() {

  const navigate = useNavigate();
  return (
    <div className=" mt-20 md:mt-40 flex justify-center h-screen">
      <div className="text-center w-11/12">
        <p className="text-base font-semibold text-black">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white lg:text-8xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg leading-7 text-white">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
            <button
            type="button"
            onClick={()=>navigate(-1)}
            className="inline-flex items-center rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Go back
          </button>
          <button
            type="button"
            onClick={()=>navigate("/")}
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error

