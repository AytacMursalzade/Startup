import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import imgData1 from "../assets/mil1.jpg";
import imgData2 from "../assets/mil2.jpg";
import imgData3 from "../assets/mil3.jpg";
import imgData4 from "../assets/mil4.jpg";

function LatestMilitaria() {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Flintlock action, the 36 1/2in.",
      description1: "barrel",
      paragraph: "Starting Bid:",
      price: " $100.00",
    },
    {
      id: 2,
      img: imgData2,
      description: "Tenantry Volunteer Infantry",
      description1: "interest",
      paragraph: "Starting Bid:",
      price: " $43.00",
    },
    {
      id: 3,
      img: imgData3,
      description: "Black Vintage Car",
      paragraph: "Auction Ended"
    },
    {
      id: 4,
      img: imgData4,
      description: "19th Century German naval sword,",
      description1: "the 72cms blade",
      paragraph: "Current Bid:",
      price: " $516.00",
    },
  ];

  return (
    <>
      <div className="mt-[126px] mb-[75px]">
        <div className="topic flex flex-col items-center justify-center">
          <h1 className="font-bold text-[34px]">LATEST AUCTIONS</h1>
          <div className="flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span className="font-bold text-[#5E3217] text-[27px]">
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        </div>

        <div className="flex gap-[13px] mt-[30px]  px-[71px]">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-[322px] h-[400px] flex flex-col shadow-lg"
            >
              <div className="flex items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#5E3217] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#5E3217] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#5E3217] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px]">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] text-center font-bold leading-[22px] hover:text-[#5E3217]">
                    {item.description} <br/>{item.description1}
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

export default LatestMilitaria;
