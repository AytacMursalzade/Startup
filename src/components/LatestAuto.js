import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import HomeItem1 from "../assets/r1.jpg";
import HomeItem2 from "../assets/r2.jpeg";
import HomeItem3 from "../assets/r3.jpg";
import HomeItem4 from "../assets/r4.jpg";

function LatestAuto() {
  const data = [
    {
        id:"1",
        img:HomeItem1,
        description: "Dual SIM Smartphone",
        paragraf: "Current Bid:",
        price: "$5,043.00",
    },
    {
        id:"2",
        img:HomeItem2,
        description: "Smartphone Earbuds",
        paragraf: "Sealed Bid Auction"
    },
    {
        id:"3",
        img:HomeItem3,
        description: "Bluetooth Headphones",
        paragraf: "Auction Ended"
    },
    {
        id:"4",
        img:HomeItem4,
        description: "Smart TV 4K Ultra HD",
        paragraf: "Current Bid:",
        price:"$500.00"
    },
   
];


  return (
    <>
      <div className="latestMain">
        <div className="viewPartLatest mt-[126px] mb-[75px]">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="topic font-bold text-[34px]">LATEST PROPERTIES AUCTIONS</h1>
            <div className="gavel flex items-center justify-center mt-[15px]">
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
              <span className="font-bold text-[#6449E7] text-[27px]">
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
                      <button className="rounded-[8px] bg-[#6449E7] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <FaGavel />
                      </button>
                    </Tooltip>
                    <Tooltip className="falseTooltip" title="Add to Wishlist">
                      <button className="rounded-[8px] hover:bg-[#6449E7] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <CiHeart />
                      </button>
                    </Tooltip>
                    <Tooltip className="falseTooltip" title="Quickview">
                      <button className="rounded-[8px] hover:bg-[#6449E7] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                        <FaSearch />
                      </button>
                    </Tooltip>
                  </div>
                </div>
                <div className="phoneBottom mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                  <Link to="/">
                    <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#009EA3]">
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

export default LatestAuto;
