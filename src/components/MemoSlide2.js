import React from 'react';
import SportItemsHockey1 from "../assets/hockeyslide1.png";
import SportItemsHockey2 from "../assets/hockeySlide2.png";
import { FaAngleRight } from "react-icons/fa6";

function MemoSlide2() {

    const sportsImage1 = {
        backgroundImage:`url(${SportItemsHockey1})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
    const sportsImage2 = {
        backgroundImage:`url(${SportItemsHockey2})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
  return (
    <div className='w-[100%] h-[600px]  mt-[170px] flex justify-around'>
      <div className='w-[590px] h-[500px] flex flex-col justify-end ' style={sportsImage1}><h1 className='font-bold text-[#242424] text-[30px] '>Must-Haves</h1><p className='text-[#888888] text-[14px] font-light flex items-center gap-[8px]  '>Don't miss our newest NFL collections<FaAngleRight /> </p></div>
      <div className='w-[590px] h-[500px] flex flex-col justify-end ' style={sportsImage2}><h1 className='font-bold text-[#242424] text-[30px] '>Own History</h1><p className='text-[#888888] flex items-center gap-[8px] text-[14px] font-light  '>Shop exclusive game-Used memorabilia<FaAngleRight /> </p></div>
    </div>
  )
}

export default MemoSlide2
