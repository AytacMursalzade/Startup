import React from "react";
import { FaGavel } from "react-icons/fa6";
import locationimage from "../assets/contact-us-red.png"
import Formdata from "./Formdata"
import FormDataBlue from "./FormDataBlue";

function LocationArt() {
  return (
    <div>
      <div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-bold text-[34px] ">NEED HELP? CONTACT US</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span className="font-bold text-[#0543EC] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>
      <div className="formData flex justify-evenly items-center  mt-[57px] ">
        <div className="location mt-[80px] ">
          <img width={680} src={locationimage} alt="location" />
        </div>
        <div><FormDataBlue /></div>
      </div>
    </div>
    </div>
  )
}

export default LocationArt
