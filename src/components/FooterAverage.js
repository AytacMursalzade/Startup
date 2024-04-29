import React from 'react';
import { FaGavel } from "react-icons/fa6";
import PartnerSlider from './PartnerSlider';


function FooterAverage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[230px]">
        <h1 className="font-bold text-[34px] ">SHOP BY BRAND</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span className="font-bold text-[#2695FF] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>
      <PartnerSlider />
    </div>
  )
}

export default FooterAverage
