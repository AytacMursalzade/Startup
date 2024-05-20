import React from 'react'
import DropdownArt from './DropdownArt'
import FilterArt from './FilterArt'
import imageTours from "../assets/toursSlide800.jpg"

function ToursSlide() {
  return (
    <div className='flex flex-col justify-center items-center gap-[30px] ' style={{ backgroundImage: `url(${imageTours})`, width:"100%", height:"800px" }}>
        <h2 className='text-white font-bold text-[55px] text-center '>Search for your perfect vacantion <br/> auctioned on iBid</h2>
       <div className="flex  shadow-lg ">
          <button className=" px-[25px] border-r dropdown ">
            <DropdownArt />
          </button>
          <FilterArt />
        </div>
    </div>
  )
}

export default ToursSlide
