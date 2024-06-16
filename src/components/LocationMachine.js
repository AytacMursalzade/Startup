import React from 'react'
import locationImgMac from "../assets/locationMachine.png"
import { FaGavel } from 'react-icons/fa6'

function LocationMachine({nameAuction,GavelColorshop}) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[160px]">
          <h1 className="topic font-bold text-[34px] text-center">{nameAuction}</h1>

          <div className="gavel flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span
             
              className="font-bold text-[#FBDE06]  text-[27px]"
            >
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
      </div>
      <div><img src={locationImgMac} alt="location" /></div>
    </div>
  )
}

export default LocationMachine
