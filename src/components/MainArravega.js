import React from "react";
import imageTelephone from "../assets/mobile_prod1-1-400x400.jpg";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

function MainArravega() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[126px]">
        <h1 className="font-bold text-[34px] ">LATEST AUCTIONS</h1>
        
          <div className="flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span className="font-bold text-[#2695FF] text-[27px]"><FaGavel /></span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        
      </div>
      <div className="WM relative px-[23px]">
        <div>
          <div className="wishlistBefore absolute top-[20px] left-[93px] flex justify-center items-center shadow-[10px_10px_107px_-47px_rgba(224,32,224,1);] text-white w-[33px] h-[33px] rounded-[50%] bg-[#2695FF]">
            <FaGavel />
          </div>
          <div className="wishlistBefore absolute top-[70px] left-[93px] flex justify-center shadow-[10px_10px_92px_-47px_rgba(148,133,148,1);] items-center text-black w-[33px] h-[33px] rounded-[50%] bg-white hover:bg-[#2695FF] hover:text-white  ">
            <CiHeart />
          </div>
          <div className="wishlistBefore absolute top-[120px] left-[93px] flex justify-center items-center shadow-[10px_10px_92px_-47px_rgba(148,133,148,1);] text-black w-[33px] h-[33px] rounded-[50%] bg-white hover:bg-[#2695FF] hover:text-white ">
            <FaSearch />
          </div>
        </div>
        <div className="flex flex-col border-solid shadow-[-2px_5px_28px_-16px_rgba(46,46,46,0.73)] w-[347px] h-[436px] ml-[50px] mt-[45px]">
          <div>
            <img src={imageTelephone} alt="telephone" />
          </div>
          <div className="flex flex-col items-center py-[22px] border-t-2 ">
            <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF] ">
              Dual SIM Smartphone
            </h2>
            <p className="text-[#606060] text-[14px] font-light loading-[22px] ">
              Current Bid: <span>$5.021.00</span>
            </p>
          </div>
        </div>
        <div className="wishlistAfter"></div>
      </div>
    </>
  );
}

export default MainArravega;
