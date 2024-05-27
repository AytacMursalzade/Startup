import React from 'react';
import { FaGavel } from "react-icons/fa6";
import PartnerSlider from './PartnerSlider';


function FooterAverage({GavelColorshop, nameAuction,display2}) {
  const Footr = {
    display: display2 ? 'block' : 'none',
  };
  return (
    <div>
      <div style={Footr} className="flex flex-col items-center justify-center mt-[160px]">
        <h1 className="font-bold text-[34px] text-center">{nameAuction}</h1>

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
