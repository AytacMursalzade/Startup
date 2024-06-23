import React from 'react'
import imgCar1 from "../assets/bannercar1.jpg"
import imgCar2 from "../assets/bannercar2.jpg"
import imgCar3 from "../assets/bannercar3.jpg"
import imgCar4 from "../assets/bannercar4.jpg"

function ListPoster() {
    
   
  
  return (
    <div className='poster-container mt-[100px] mb-[100px] px-[75px] '>
       <ul className='poster-list flex justify-around'>
        <li className='w-[320px] h-[175px]'><img src={imgCar1} alt="listauction" /></li>
        <li className='w-[320px] h-[175px]'><img src={imgCar2} alt="listauction" /></li>
        <li className='w-[320px] h-[175px]'><img src={imgCar3} alt="listauction" /></li>
        <li className='w-[320px] h-[175px]'><img src={imgCar4} alt="listauction" /></li>
        
       </ul>
    </div>
  )
}

export default ListPoster
