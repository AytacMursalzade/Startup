import React from "react";
import { FaGavel } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import imgData1 from "../assets/bear1.jpg";
import imgData2 from "../assets/bear2.jpg";
import imgData3 from "../assets/bear3.jpg";
import imgData4 from "../assets/bear4.jpg";

function HandmadeLatest() {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Vintage toys, teddy bear and",
      description1: "rabbit by home workshop",
      paragraph: "Starting Bid:",
      price: " $75.00",
    },
    {
      id: 2,
      img: imgData2,
      description: "Ballerinas and Heart nursery",
      description1: "wall art in pink",
      paragraph: "Starting Bid:",
      price: " $106.00",
    },
    {
      id: 3,
      img: imgData3,
      description: "Artisan hair hoop with",
      description1: "flowers and ribbons",
      paragraph: "Current Bid:",
      price: " $130.00",
    },
    {
      id: 4,
      img: imgData4,
      description: "Personalized 1st Anniversary",
      description1: "Gift for Him or Her",
      paragraph: "Current Bid:",
      price: " $86.00",
    },
  ];

  return (
    <div className="flex flex-col px-[75px] justify-center mt-[126px] mb-[75px] max-600:w-[537px] max-600:px-[0] max-600:flex max-600:p-[20px] max-600:mx-auto ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="topic font-bold text-[34px]">LATEST AUCTIONS</h1>
        <div className="gavel flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span className="font-bold text-[#C16BB6] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>

      <div className="PhonesAll flex flex-wrap justify-center gap-[20px] mt-[30px] max-600:gap-2 max-600:justify-center  ">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group max-600:w-[calc(50%-4px)] max-600:h-[350px]"
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
                  <button className="rounded-[45px] bg-[#C16BB6] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                    <FaGavel />
                  </button>
                </Tooltip>
                <Tooltip title="Add to Wishlist">
                  <button className="rounded-[45px] hover:bg-[#C16BB6] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                    <CiHeart />
                  </button>
                </Tooltip>
                <Tooltip title="Quickview">
                  <button className="rounded-[45px] hover:bg-[#C16BB6] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                    <FaSearch />
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10 max-600:px-[10px]">
              <Link to="/">
                <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#C16BB6] ">
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
  );
}

export default HandmadeLatest;
