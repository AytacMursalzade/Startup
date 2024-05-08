import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import art from "../assets/350banner.jpg";
import Tooltip from "@mui/material/Tooltip";

function LatestArt() {
  return (
    <>
      <div className="topic flex flex-col items-center justify-center mt-[126px] mb-[25px] ">
        <h1 className="font-bold text-[34px] ">LATEST AUCTIONS</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span className="font-bold text-[#2695FF] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>
      
      <div className="PhonesAll flex gap-[18px] px-[71px] ">
        <div className="first">
          <div className="allPhones w-[328px] h-[380px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img className="w-full mb-[80px] " src={art} alt="phones" />
                </div>
              </div>
              <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF]">
                  Dual SIM Smartphone
                </h2>
                <p className="text-[#606060] text-[14px] font-light loading-[22px]">
                  Sealed Bid Auction
                </p>
              </div>
            </div>
          </div>
          <div className="allPhones w-[328px] h-[380px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img className="w-full mb-[80px] " src={art} alt="phones" />
                </div>
              </div>
              <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF]">
                  Dual SIM Smartphone
                </h2>
                <p className="text-[#606060] text-[14px] font-light loading-[22px]">
                  Sealed Bid Auction
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="second">
          <div className="allPhones w-[328px] h-[380px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img className="w-full mb-[80px] " src={art} alt="phones" />
                </div>
              </div>
              <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF]">
                  Dual SIM Smartphone
                </h2>
                <p className="text-[#606060] text-[14px] font-light loading-[22px]">
                  Sealed Bid Auction
                </p>
              </div>
            </div>
          </div>
          <div className="allPhones w-[328px] h-[380px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img className="w-full mb-[80px] " src={art} alt="phones" />
                </div>
              </div>
              <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF]">
                  Dual SIM Smartphone
                </h2>
                <p className="text-[#606060] text-[14px] font-light loading-[22px]">
                  Sealed Bid Auction
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default LatestArt;
