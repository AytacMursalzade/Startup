import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import HomeItem1 from "../assets/bul1.jpg";
import HomeItem2 from "../assets/bul2.jpg";
import HomeItem3 from "../assets/bul3.jpg";
import HomeItem4 from "../assets/bul4.png";

function LatestM() {
  const data = [
    {
        id:"1",
        img:HomeItem1,
        description: "CAT Center-Pivot 420",
        paragraf: "Starting Bid:",
        price: "£23.00",
    },
    {
        id:"2",
        img:HomeItem2,
        description: "CAT Center-Pivot 420",
        paragraf: "Starting Bid:",
        price: "£23.00",
    },
    {
        id:"3",
        img:HomeItem3,
        description: "CAT Medium 320 GC",
        paragraf: "Starting Bid:",
        price: "£32.00",
    },
    {
        id:"4",
        img:HomeItem4,
        description: "Compact Litronic",
        paragraf: "Starting Bid:",
        price:"£65.00"
    },
   
];


  return (
    <>
      <div className="latestMain">
        <div className="viewPartLatest mt-[126px] mb-[75px]">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="topic font-bold text-[34px]">LATEST AUCTIONS</h1>
            <div className="gavel flex items-center justify-center mt-[15px]">
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
              <span className="font-bold text-[#FBDE06] text-[27px]">
                <FaGavel />
              </span>
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
            </div>
          </div>

          <div className="salesPartPost flex flex-wrap gap-[13px] mt-[30px]  px-[71px]">
            {data.map((item, index) => (
              <div
                key={index}
                className="salesPart relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group max-600:w-[219px]"
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
                      <button className="bg-[#FBDE06] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <FaGavel />
                      </button>
                    </Tooltip>
                    <Tooltip className="falseTooltip" title="Add to Wishlist">
                      <button className="hover:bg-[#FBDE06] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <CiHeart />
                      </button>
                    </Tooltip>
                    <Tooltip className="falseTooltip" title="Quickview">
                      <button className="hover:bg-[#FBDE06] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <FaSearch />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div className="phoneBottom mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                  <Link to="/">
                    <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#FBDE06]">
                      {item.description}
                    </h2>
                  </Link>
                  <div className="tooldesc flex gap-[5px]">
                    <p className="text-[#606060] text-[16px] font-light leading-[22px]">
                      {item.paragraf}
                    </p>
                    <p className="text-[14px] font-bold">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestM;
