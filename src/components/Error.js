import React from 'react'

const Error = ({errorMessage}) => {
  return (
    <div className="shadow-4 bg-red-200 ml-2 mt-2 h-30rem flex justify-content-center flex-column gap-4 align-items-center">
        <h3>Something went wromg : </h3>
        <h4>{errorMessage}</h4>
    </div>
  )
}

export default Error