import React from 'react'
import GovernmentSlideCor from './GovernmentSlideCor'

function GovernmentSlide3({imageSlideGovern}) {

  const slideG5 = {
    backgroundImage: `url(${imageSlideGovern})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }  
  return (
    <div style={slideG5} className='w-[100%] h-[500px]  mt-[90px] flex flex-col gap-[40px] justify-center items-center'>
      <h1 className='text-[34px] text-[white] font-bold '>CUSTOMER REVIEWS</h1>
      <GovernmentSlideCor />
    </div>
  )
}

export default GovernmentSlide3
