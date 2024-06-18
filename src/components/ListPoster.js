import React from 'react'
import imgCar1 from "../assets/bannercar1.jpg"
import imgCar2 from "../assets/bannercar2.jpg"
import imgCar3 from "../assets/bannercar3.jpg"
import imgCar4 from "../assets/bannercar4.jpg"

function ListPoster() {
    
   
  
  return (
    <div className='mt-[100px] mb-[100px] px-[75px] max-600:flex  max-600:justify-center'>
       <ul className='flex justify-around max-600:flex max-600:flex-col  max-600:w-[484px] max-600:gap-[13px] '>
        <li className='w-[320px] h-[175px] max-600:w-[454px] max-600:h-[256px]'><img src={imgCar1} alt="listauction" /></li>
        <li className='w-[320px] h-[175px] max-600:w-[454px] max-600:h-[256px]'><img src={imgCar2} alt="listauction" /></li>
        <li className='w-[320px] h-[175px] max-600:w-[454px] max-600:h-[256px]'><img src={imgCar3} alt="listauction" /></li>
        <li className='w-[320px] h-[175px] max-600:w-[454px] max-600:h-[256px]'><img src={imgCar4} alt="listauction" /></li>
        
       </ul>
    </div>
  )
}

export default ListPoster
