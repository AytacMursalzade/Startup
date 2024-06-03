import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import imgData1 from "../assets/coins1.jpg";
import imgData2 from "../assets/coins2.jpg";
import imgData3 from "../assets/coins3.jpg";
import imgData4 from "../assets/coins4.jpg";

function LatestCoins() {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Bronzo, c. 415-387",
      paragraph: "Current Bid:",
      price: " $250.00",
    },
    {
      id: 2,
      img: imgData2,
      description: "Miletos, c. 295-275",
      paragraph: "Starting Bid:",
      price: " $100.00",
    },
    {
      id: 3,
      img: imgData3,
      description: "Roman & Byzantine Coin",
      paragraph: "Current Bid:",
      price: " $75.00",
    },
    {
      id: 4,
      img: imgData4,
      description: "Sulpicia, 106 a.C.",
      paragraph: "Starting Bid:",
      price: " $243.00",
    },
  ];

  return (
    <>
      <div className="mt-[126px] mb-[75px]">
        <div className="topic flex flex-col items-center justify-center">
          <h1 className="font-bold text-[34px]">LATEST AUCTIONS</h1>
          <div className="flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span className="font-bold text-[#4F89B0] text-[27px]">
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        </div>

        <div className="flex gap-[33px]  mt-[30px]  px-[71px]">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                transformOrigin: "center",
                transition: "transform 0.5s ease",
              }}
              className="absolute inset-0 group-hover:scale-105 w-[310px] h-[400px] flex flex-col shadow-lg"
            >
              <div className="flex items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[8px] bg-[#4F89B0] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[8px] hover:bg-[#4F89B0] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[8px] hover:bg-[#4F89B0] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px]">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] text-center font-bold leading-[22px] hover:text-[#4F89B0]">
                    {item.description}
                  </h2>
                </Link>
                <div className="flex gap-[5px]">
                  <p className="text-[#606060] text-[16px] font-light leading-[22px]">
                    {item.paragraph}
                  </p>
                  <p className="text-[14px] text-[#242424] font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestCoins;
