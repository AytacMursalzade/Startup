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
      <div className="flex flex-col items-center justify-center mt-[126px] mb-[75px] max-600:mb-[-1px] ">
        <h1 className="topic font-bold text-[34px]">LATEST AUCTIONS</h1>
        <div className="gavel flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span className="font-bold text-[red] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>

      <div className="flex gap-[13px] px-[71px] max-600:flex max-600:flex-wrap  max-600:justify-center max-600:px-[8px] ">
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
            className="allPhones absolute inset-0 group-hover:scale-105 shadow-lg max-600:flex max-600:flex-wrap max-600:w-[219px] max-600:justify-around max-600:mt-[20px] "
          >
            <div className="flex w-[322px] h-[400px] flex-col ">
              <div className="flex items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[red] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip className="falseTooltip" title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[red] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip className="falseTooltip" title="Quickview">
                    <button className="rounded-[9px] hover:bg-[red] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="shadow-lg ">
                <div className="phoneBottom  h-[120px] bg-[white] flex flex-col border-t-2 mt-[240px] justify-center items-center gap-[9px]">
                  <Link to="/">
                    <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[red]">
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LatesAnti;
