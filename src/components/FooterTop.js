import React from "react";
import { FaGavel } from "react-icons/fa6";
import FooterTopdiv from "./FooterTopdiv";

function FooterTop() {
  return (
    <>
      <div className="community">
        <div className="flex flex-col items-center justify-center mt-[126px]">
          <h1 className="font-bold text-[34px] ">LATEST NEWS</h1>

          <div className="flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span className="font-bold text-[#2695FF] text-[27px]">
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        </div>
        <FooterTopdiv />
      </div>
    </>
  );
}

export default FooterTop;
