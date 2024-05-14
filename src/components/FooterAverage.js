import React from 'react';
import { FaGavel } from "react-icons/fa6";
import PartnerSlider from './PartnerSlider';


function FooterAverage({GavelColorshop, nameAuction}) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[160px]">
        <h1 className="font-bold text-[34px] ">{nameAuction}</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span style={{color:GavelColorshop}} className="font-bold  text-[27px]">
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
