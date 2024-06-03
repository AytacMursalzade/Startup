import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import imgData1 from "../assets/ins1.jpg";
import imgData2 from "../assets/ins2.jpg";
import imgData3 from "../assets/ins3.jpg";
import imgData4 from "../assets/ins4.jpg";


function LatestSelf() {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Here Self Storage",
      paragraph: "Starting Bid:",
      price: " $100.00",
    },
    {
      id: 2,
      img: imgData2,
      description: "iStorage Reading",
      paragraph: "Starting Bid:",
      price: " $245.00",
    },
    {
      id: 3,
      img: imgData3,
      description: "Lot #3278159 Secure Store",
      paragraph: "Starting Bid:",
      price: " $378.00",
    },
    {
      id: 4,
      img: imgData4,
      description: "Lot #2909614 Storage",
      paragraph: "Starting Bid:",
      price: " $400.00",
    },
  ];

  return (
    <>
      <div className="mt-[126px] mb-[75px]">
        <div className="topic flex flex-col items-center justify-center">
          <h1 className="font-bold text-[34px]">LATEST AUCTIONS</h1>
          <div className="flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span className="font-bold text-[#414144] text-[27px]">
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        </div>

        <div className="flex gap-[13px] mt-[30px]  px-[71px]">
          {data.map((item, index) => (
            <div key={index} className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group">
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
                    <button className="rounded-[45px] bg-[#009EA3] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#009EA3] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#009EA3] bg-white text-[#606060] hover:text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#009EA3]">
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

export default LatestSelf;
