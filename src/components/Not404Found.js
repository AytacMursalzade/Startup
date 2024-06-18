import React from 'react'
import NotFound from "../assets/404NotFound.png"

function Not404Found() {
  return (
    <div className='flex justify-center mt-[35px] max-600:w-[482px] '>
      <img width={822} src={NotFound} alt="notfound" />
    </div>
  )
}

export default Not404Found;
