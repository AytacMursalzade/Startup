import React from "react";
import { FaGavel, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import homeData from "../db/homeData";
import { Link } from "react-router-dom";

function MainArravega() {
  
 
  return (
    <>
      <div className=" flex flex-col px-[75px] justify-center mt-[126px] mb-[75px] ">
    <div className="flex flex-col items-center justify-center">
      <h1 className="topic font-bold text-[34px]">LATEST AUCTIONS</h1>
      <div className="gavel flex items-center justify-center mt-[15px]">
        <div className="border border-t-[2px] border-[#2695FF] w-[230px] mx-2 arrow_right"></div>
        <span className="font-bold text-[#2695FF] text-[27px]">
          <FaGavel />
        </span>
        <div className="border border-t-[2px] border-[#2695FF] w-[230px] mx-2 arrow_left"></div>
      </div>
    </div>

    <div className="PhonesAll flex flex-wrap justify-center gap-[42px] mt-[30px] max-600:w-full max-600:flex max-600:flex-wrap max-600:mx-auto ">
      {homeData.map((item, index) => (
        <div
          key={index}
          className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group max-600:w-[calc(50%-3px)] max-600:flex max-600:flex-wrap max-600:h-[350px]"
        >
          <div
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              transformOrigin: "center",
              transition: "transform 0.5s ease",
            }}
            className="absolute inset-0 group-hover:scale-105"
          ></div>
          <div className="flex items-start pt-[30px] z-10">
            <div className="flex flex-col gap-[8px] pl-[18px]">
              <Tooltip title="Bid Now">
                <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                  <FaGavel />
                </button>
              </Tooltip>
              <Tooltip className="falseTooltip" title="Add to Wishlist">
                <button className="rounded-[45px] hover:bg-[#2695FF] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                  <CiHeart />
                </button>
              </Tooltip>
              <Tooltip className="falseTooltip" title="Quickview">
                <button className="rounded-[45px] hover:bg-[#2695FF] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                  <FaSearch />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10 max-600:px-[10px]">
            <Link to="/">
              <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#2695FF] ">
                {item.description}
              </h2>
            </Link>
            <div className="flex gap-[5px]">
              <p className="text-[#606060] text-[16px] font-light leading-[22px]">
                {item.paragraph}
              </p>
              <p className="text-[14px] font-bold">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </>
  );
}

export default MainArravega;
