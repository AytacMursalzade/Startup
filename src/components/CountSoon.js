import React from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaGavel, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import imageTour from "../assets/desktopCount.jpg";

function CountSoon({ tooltipBg, toolRadius, hoverBGsales,display4,nameAuction,GavelColorshop }) {

    const HedTop = {

      display: display4 ? 'block' : 'none'  
    };

  return (
    <div>
      <div style={HedTop} className="flex flex-col items-center justify-center mt-[160px]">
        <h1 className="font-bold text-[34px] text-center ">{nameAuction}</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span style={{color:GavelColorshop}} className="font-bold  text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>  
        <div className="flex ml-[100px] ">
        <Link to='/'><div className="mt-[75px] w-[720px] flex justify-between ">
          <div className="flex items-start w-[350px] h-[360px] pt-[30px] shadow-2xl ">
            <div className="flex flex-col gap-[8px] pl-[18px] ">
              <Tooltip title="Bid Now">
                <button
                  style={{
                    backgroundColor: tooltipBg,
                    borderRadius: toolRadius,
                  }}
                  className="text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                >
                  <IoMdEye />
                </button>
              </Tooltip>
              <Tooltip title="View Auction">
                <button
                  style={{ borderRadius: toolRadius }}
                  className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                >
                  <CiHeart />
                </button>
              </Tooltip>
              <Tooltip title="Quickview">
                <button
                  style={{ borderRadius: toolRadius }}
                  className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                >
                  <FaSearch />
                </button>
              </Tooltip>
            </div>
            <div>
              <img width={280} src={imageTour} alt="phones" />
            </div>
          </div></div></Link>
          <div className="w-[300px] h-[320px] flex flex-col gap-[25px] ">
            <Link to="/"><h1 className="text-[#484848] text-[18px] font-bold ">
              Desktop Gamer Las Vegas
            </h1></Link>
            <p className="text-[16px] text-[#606060] font-light">
              The Ragdoll is a cat breed with <br /> blue eyes and a distinct
              colorpoint
              <br /> coat. It is a large and muscular <br /> semi-longhair cat
              with a soft and
              <br />
              silky coat. Like all long haired cats,
              <br /> Ragdolls need grooming to ensure <br /> their fur does not
              mat.
            </p>
            <span className="text-[16px] text-[#606060] font-light">
              Auction Ended
            </span>
          </div>
        </div>
        <div className="mt-[75px] w-[720px] flex justify-between ">
          <div className="flex items-start w-[350px] h-[360px] pt-[30px] shadow-2xl ">
            <div className="flex flex-col gap-[8px] pl-[18px] ">
              <Tooltip title="Bid Now">
                <button
                  style={{
                    backgroundColor: tooltipBg,
                    borderRadius: toolRadius,
                  }}
                  className="text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                >
                  <IoMdEye />
                </button>
              </Tooltip>
              <Tooltip title="View Auction">
                <button
                  style={{ borderRadius: toolRadius }}
                  className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                >
                  <CiHeart />
                </button>
              </Tooltip>
              <Tooltip title="Quickview">
                <button
                  style={{ borderRadius: toolRadius }}
                  className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                >
                  <FaSearch />
                </button>
              </Tooltip>
            </div>
            <div>
              <img width={280} src={imageTour} alt="phones" />
            </div>
          </div>
          <div className="w-[300px] h-[320px] flex flex-col gap-[25px] ">
            <h1 className="text-[#484848] text-[18px] font-bold ">
              Desktop Gamer Las Vegas
            </h1>
            <p className="text-[16px] text-[#606060] font-light">
              The Ragdoll is a cat breed with <br /> blue eyes and a distinct
              colorpoint
              <br /> coat. It is a large and muscular <br /> semi-longhair cat
              with a soft and
              <br />
              silky coat. Like all long haired cats,
              <br /> Ragdolls need grooming to ensure <br /> their fur does not
              mat.
            </p>
            <span className="text-[16px] text-[#606060] font-light">
              Auction Ended
            </span>
          </div>
        </div>
    </div>
    
  );
}

export default CountSoon;
