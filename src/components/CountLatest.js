import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";

import imgData1 from "../assets/homeItem1.jpg";
import imgData2 from "../assets/homeItems2.png";
import imgData3 from "../assets/homeItem3.jpg";
import imgData4 from "../assets/HomeItem4.jpg";
import imgData5 from "../assets/HomeList1.jpg";
import imgData6 from "../assets/HomeList2.jpg";
import imgData7 from "../assets/HomeList3.jpg";
import imgData8 from "../assets/HomeList5.jpg";
import imgData9 from "../assets/homeList6.jpg";



function CountLatest({
  toolBg
}) {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Auto Bidding (Proxy)",
      paragraph: "Current Bid:",
      price: "$435.00",
    },
    {
      id: 2,
      img: imgData2,
      description: "Bluetooth Headphones",
      paragraph: "Auction Ended"
    },
    {
      id: 3,
      img: imgData3,
      description: "Desktop TTX Gamer",
      paragraph: "Auction Ended"
    },
    {
      id: 4,
      img: imgData4,
      description: "Gaming Computer",
      paragraph: "Current Bid:",
      price: "$35.00",
    },
    {
      id: 5,
      img: imgData5,
      description: "Laptop Inspiron Core i7",
      paragraph: "Auction Ended"
    },
    {
      id: 6,
      img: imgData6,
      description: "Laptop Latitude d3300",
      paragraph: "Starting Bid:",
      price: "$50.00",
    },
    {
      id: 7,
      img: imgData7,
      description: "Desktop Gamer Las",
      description1: "Vegas",
      paragraph: "Auction Ended"
    },
    {
      id: 8,
      img: imgData8,
      description: "Desktop TTX Gamer",
      paragraph: "Auction Ended"
    },
    {
      id: 9,
      img: imgData9,
      description: "Galaxy S10+ Dual SIM",
      paragraph: "Auction Ended"
    },
    
  ];

  const BGimageMil = {
    backgroundColor:"red"
  };
  const BGimageMil3 = {
    backgroundColor:"blue"
  };
  const BGimageMil5 = {
    backgroundColor:"yellow"
  };
 

  return (
    <div className="viewPartArt flex flex-col gap-[73px] mt-[99px] mb-[100px]">
      <div className="onePoster flex gap-[17px] justify-around ml-[75px]">
      <div
          style={BGimageMil}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            ELECTRONICS
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">9</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#EA3546] text-[14px] font-semibold bg-[#EA3546] text-[white] rounded-[45px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="flex gap-[13px] mt-[30px] px-[71px]">
          {data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group"
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
                    <button className="bg-[#EA3546] text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#EA3546] bg-[white] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#EA3546] bg-[white] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-[white] flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#EA3546]">
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
      <div className="onePoster flex gap-[17px] justify-around ml-[75px]">
      <div
          style={BGimageMil3}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            LAPTOPS
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">5</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#EA3546] text-[14px] font-semibold bg-[#EA3546] text-[white] rounded-[45px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="flex gap-[13px] mt-[30px] px-[71px]">
          {data.slice(3, 6).map((item, index) => (
            <div
              key={index}
              className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group"
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
                    <button className="bg-[#EA3546] text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#EA3546] bg-[white] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#EA3546] bg-[white] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-[white] flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#EA3546]">
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
      <div className="onePoster flex gap-[17px] justify-around ml-[75px]">
      <div
          style={BGimageMil5}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            PHONES
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">12</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#EA3546] text-[14px] font-semibold bg-[#EA3546] text-[white] rounded-[45px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="flex gap-[13px] mt-[30px] px-[71px]">
          {data.slice(6, 9).map((item, index) => (
            <div
              key={index}
              className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group"
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
                    <button className="bg-[#EA3546] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#EA3546] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#EA3546] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#EA3546]">
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
      
    </div>
  );
}

export default CountLatest;
