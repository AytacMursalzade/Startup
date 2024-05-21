import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";


function LatestAuto({textLatest,howToused,GavelTextColor,tooltipBg,art,textLatest1,OneLatest,toolRadius,hoverLatest,hoverTextBotm}) {
  return (
    <>
      <div className="topic flex flex-col items-center justify-center mt-[126px] mb-[25px] ">
        <h1 className="font-bold text-[34px] ">{OneLatest}</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span style={{color:GavelTextColor}} className="font-bold text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>

      <div className="PhonesAll flex gap-[13px] px-[71px] ">
        <div className="first flex gap-[13px] ">
          <div className="allPhones w-[322px] h-[400px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex  items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:tooltipBg, borderRadius:toolRadius}} className="text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="View Auction">
                    <button style={{borderRadius:toolRadius}} className={`${hoverLatest} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}>
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button style={{borderRadius:toolRadius}} className= {`${hoverLatest} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img width={280} src={art} alt="phones" />
                </div>
              </div>
              <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                <Link to="/"><h2 className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoverTextBotm}`}>
                 {textLatest} <br/> {textLatest1}
                </h2></Link>
                <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                  {howToused}
                </p>
              </div>
            </div>
          </div>
          <div className="allPhones w-[322px] h-[400px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:tooltipBg,borderRadius:toolRadius}} className="  text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button style={{borderRadius:toolRadius}} className={`${hoverLatest} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}>
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button style={{borderRadius:toolRadius}} className={`${hoverLatest} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img width={280} src={art} alt="phones" />
                </div>
              </div>
              <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                <Link to="/"><h2 className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoverTextBotm}`}>
                  {textLatest}
                </h2></Link>
                <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                  {howToused}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="second flex gap-[13px]  ">
          <div className="allPhones w-[322px] h-[400px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:tooltipBg,borderRadius:toolRadius}} className=" text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button style={{borderRadius:toolRadius}} className={`${hoverLatest} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}>
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button style={{borderRadius:toolRadius}} className={`${hoverLatest} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img width={280} src={art} alt="phones" />
                </div>
              </div>
              <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                <Link to="/"><h2 className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoverTextBotm}`}>
                  {textLatest}
                </h2></Link>
                <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                  {howToused}
                </p>
              </div>
            </div>
          </div>
          <div className="allPhones w-[322px] h-[400px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:tooltipBg,borderRadius:toolRadius}} className=" text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button style={{borderRadius:toolRadius}} className={`${hoverLatest} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}>
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button style={{borderRadius:toolRadius}} className={`${hoverLatest} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img width={280} src={art} alt="phones" />
                </div>
              </div>
              <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
               <Link to="/"> <h2 className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoverTextBotm}`}>
                  {textLatest}
                </h2></Link>
                <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                  {howToused}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestAuto;
