import React from 'react'
import imageTours from "../assets/toursSlide800.jpg"
import DropdownTour from './DropdownTour'
import FilterTour from './FilterTour'

function ToursSlide() {
  return (
    <div className='flex flex-col justify-center items-center gap-[30px] ' style={{ backgroundImage: `url(${imageTours})`, width:"100%", height:"800px" }}>
        <h2 className='text-white font-bold text-[55px] text-center '>Search for your perfect vacantion <br/> auctioned on iBid</h2>
       <div className="flex  shadow-lg rounded-[9px] py-[5px] bg-white">
          <button className=" px-[30px]  border-r dropdown ">
            <DropdownTour />
          </button>
          <FilterTour />
        </div>
    </div>
  )
}

export default ToursSlide
