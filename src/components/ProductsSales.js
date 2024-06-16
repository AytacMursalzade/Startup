import React from "react";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import imgData1 from "../assets/HomeList1.jpg";
import imgData2 from "../assets/HomeList2.jpg";
import imgData3 from "../assets/HomeList3.jpg";
import imgData4 from "../assets/HomeList5.jpg";
import imgData5 from "../assets/homeList6.jpg";
import imgData6 from "../assets/homeList7.jpg";
import imgData7 from "../assets/homelist8.jpg";
import imgData8 from "../assets/homeList9.jpg";
import imgData9 from "../assets/homeList10.jpg";
import imgData10 from "../assets/HomeList1.jpg";
import imgData11 from "../assets/HomeList3.jpg";
import imgData12 from "../assets/HomeList1.jpg";


function ProductsSales() {
    const data = [
        {
          id: 1,
          img: imgData1,
          description: "Desktop Gamer Las Vegas",
          paragraph: "Auction Ended"
        },
        {
          id: 2,
          img: imgData2,
          description: "Galaxy S10+ Dual SIM",
          paragraph: "Auction Ended"
        },
        {
          id: 3,
          img: imgData3,
          description: "Laptop Inspiron Core i7",
          paragraph: "Auction Ended"
        },
        {
          id: 4,
          img: imgData4,
          description: "Space Grey 64GB Phone",
          paragraph: "Auction Ended"
        },
        {
          id: 5,
          img: imgData5,
          description: "Magic Mouse v2",
          paragraph: "Current Bid:",
          price: " $45.00",
        },
        {
          id: 6,
          img: imgData6,
          description: "Gaming Computer",
          paragraph: "Current Bid:",
          price: " $35.00",
        },
        {
          id: 7,
          img: imgData7,
          description: "Bluetooth Headphones",
          paragraph: "Auction Ended"
        },
        {
          id: 8,
          img: imgData8,
          description: "Smartphone Earbuds",
          paragraph: "Sealed Bid Auction"
        },
        {
          id: 9,
          img: imgData9,
          description: "Laptop Latitude d3300",
          paragraph: "Starting Bid:",
          price: " $50.00",
        },
        {
          id: 10,
          img: imgData10,
          description: "Smart TV 4K Ultra HD",
          paragraph: "Current Bid:",
          price: " $500.00",
        },
        {
          id: 11,
          img: imgData11,
          description: "Desktop TTX gamer",
          paragraph: "Auction Ended"
        },
        {
          id: 12,
          img: imgData12,
          description: "Ultra Laptop ZenBook 13",
          paragraph: "Starting Bid:",
          price: " $55.00",
        },
      ];

  return (
    <>
      <div className="mt-[60px] mb-[75px]">
       

        <div className="flex flex-wrap gap-[28px] mt-[30px]  px-[71px]">
          {data.map((item, index) => (
            <div key={index} className="relative w-[322px] h-[400px] flex flex-col shadow-2xl overflow-hidden group">
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
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#2695FF]">
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

export default ProductsSales;

