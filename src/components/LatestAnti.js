import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import imgData1 from "../assets/antidata1.png";
import imgData2 from "../assets/antidata2.png";
import imgData3 from "../assets/antidata3.png";
import imgData4 from "../assets/antidata4.png";

function LatesAnti() {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Jewelry Container",
      paragraph: "Current Bid:",
      price: " $630.00",
    },
    {
      id: 2,
      img: imgData2,
      description: "Beautiful Pyrite Stone",
      paragraph: "Current Bid:",
      price: " $101.00",
    },
    {
      id: 3,
      img: imgData3,
      description: "Stainless Pocket Watch",
      paragraph: "Current Bid:",
      price: " $45.00",
    },
    {
      id: 4,
      img: imgData4,
      description: "Wicker Bowl",
      paragraph: "Auction Ended",
    },
  ];

  return (
    <>
      <div className="mt-[126px] mb-[75px]">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="topic font-bold text-[34px]">LATEST AUCTIONS</h1>
            <div className="gavel  flex items-center justify-center mt-[15px]">
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
              <span className="font-bold text-[#BE263F] text-[27px]">
                <FaGavel />
              </span>
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
            </div>
          </div>

          <div className="PhonesMemo flex flex-wrap gap-[13px] mt-[30px]  px-[71px]">
            {data.map((item, index) => (
              <div
                key={index}
                className="allMemo relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group max-600:w-[219px]"
              >
                <div
                
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    transformOrigin: "center",
                    transition: "transform 0.5s ease",
                  }}
                  className="itemContent absolute inset-0 group-hover:scale-105"
                ></div>
                <div className="flex items-start pt-[30px] z-10">
                  <div className="flex flex-col gap-[8px] pl-[18px]">
                    <Tooltip title="Bid Now">
                      <button className="rounded-[8px] bg-[#BE263F] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <FaGavel />
                      </button>
                    </Tooltip>
                    <Tooltip className="falseTooltip" title="Add to Wishlist">
                      <button className="rounded-[8px] hover:bg-[#BE263F] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <CiHeart />
                      </button>
                    </Tooltip>
                    <Tooltip className="falseTooltip" title="Quickview">
                      <button className="rounded-[8px] hover:bg-[#BE263F] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <FaSearch />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div className="phoneBottom mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                  <Link to="/">
                    <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#BE263F]">
                      {item.description}
                    </h2>
                  </Link>
                  <div className="tooldesc flex gap-[5px]">
                    <p className=" text-[#606060] text-[16px] font-light leading-[22px]">
                      {item.paragraf1}
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

export default LatesAnti;
