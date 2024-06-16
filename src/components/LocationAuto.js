import React from "react";
import { FaGavel } from "react-icons/fa6";
import locationimage from "../assets/ibid-automotive-contact-maporange.png"
import FormDataBlue from "./FormDataBlue";

function LocationAuto({helpGavel}) {
  return (
    <div>
      <div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="topic font-bold text-[34px] ">NEED HELP? CONTACT US</h1>

        <div className="gavel flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span style={{color:helpGavel}} className="font-bold  text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>
      <div className="formData flex justify-evenly items-center  mt-[57px] ">
        <div className="location mt-[80px] ">
          <img width={680} src={locationimage} alt="location" />
        </div>
        <div><FormDataBlue submitColor="#EE964B" /></div>
      </div>
    </div>
    </div>
  )
}

export default LocationAuto
