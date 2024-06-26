import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch, FaHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { IoMdEye } from "react-icons/io";

import imgData1 from "../assets/buldozer3.jpg";
import imgData2 from "../assets/buldozers.jpg";
import imgData3 from "../assets/buldozers4.jpg";
import imgData4 from "../assets/bul1.jpg";
import imgData5 from "../assets/bul2.jpg";
import imgData6 from "../assets/bul3.jpg";
import imgData7 from "../assets/bul4.png";
import imgData8 from "../assets/bul5.jpg";
import imgData9 from "../assets/bul6.jpg";
import imgData10 from "../assets/bul7.jpg";
import imgData11 from "../assets/buldozer3.jpg";
import imgData12 from "../assets/bul5.jpg";
import imagePoster from "../assets/bul3.jpg";
import imagePoster3 from "../assets/bul5.jpg";
import imagePoster5 from "../assets/buldozer3.jpg";
import imagePoster6 from "../assets/buldozers4.jpg";

function MachineSales() {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "CAT Center-Pivot 420",
      paragraph: "Starting Bid:",
      price: "£23.00",
      concept: "EXCAVATORS",
      icon:<FaGavel />
    },
    {
      id: 2,
      img: imgData2,
      description: "CAT Center-Pivot 420",
      paragraph: "Starting Bid:",
      price: "£12.00",
      concept: "EXCAVATORS",
      icon:<FaGavel />
    },
    {
      id: 3,
      img: imgData3,
      description: "CAT Medium 320 GC",
      paragraph: "Starting Bid:",
      price: "£32.00",
      concept: "EXCAVATORS",
      icon:<FaGavel />
    },
    {
      id: 4,
      img: imgData4,
      description: "1999 John Deere 650G Ex",
      paragraph: "Current Bid:",
      price: "£43.00",
      concept: "BULDOZERS",
      icon:<FaGavel />
    },
    {
      id: 5,
      img: imgData5,
      description: "2007 John Deere 700J LT",
      paragraph: "Starting Bid:",
      price: "£12.00",
      concept: "BULDOZERS",
      icon:<FaGavel />
    },
    {
      id: 6,
      img: imgData6,
      description: "2009 John Deere 850JR",
      paragraph: "Starting Bid:",
      price: "£23.00",
      concept: "BULDOZERS",
      icon:<FaGavel />
    },
    {
      id: 7,
      img: imgData7,
      description: "BARTELL BR1570",
      paragraph: "Starting Bid:",
      price: "£36.00",
      concept: "COMPACTORS",
      icon:<FaGavel />
    },
    {
      id: 8,
      img: imgData8,
      description: "Brothers Hydraulic",
      paragraph: "Starting Bid:",
      price: "£65.00",
      concept: "COMPACTORS",
      icon:<FaGavel />
    },
    {
      id: 9,
      img: imgData9,
      description: "HOC C160 HONDA",
      paragraph: "Starting Bid:",
      price: "£65.00",
      concept: "COMPACTORS",
      icon:<FaGavel />
    },
    {
      id: 10,
      img: imgData10,
      description: "Cranes Cleveland",
      paragraph: "Starting Bid:",
      price: "£40.00",
      concept: "CRANES",
      icon:<IoMdEye />
    },
    {
      id: 11,
      img: imgData11,
      description: "Kobelco Hydraulic",
      paragraph: "Starting Bid:",
      price: "£70.00",
      concept: "CRANES",
      icon:<FaGavel />
    },
    {
      id: 12,
      img: imgData12,
      description: "Reverse Auction",
      paragraph: "Auction Ended",
      concept: "CRANES",
      icon:<IoMdEye />
    },
  ];

  const BGimageMil = {
    backgroundImage: `url(${imagePoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil3 = {
    backgroundImage: `url(${imagePoster3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil5 = {
    backgroundImage: `url(${imagePoster5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil4 = {
    backgroundImage: `url(${imagePoster6})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const excavatorsData = data.filter((item) => item.concept === "EXCAVATORS");
  const buldozersData = data.filter((item) => item.concept === "BULDOZERS");
  const compactorsData = data.filter((item) => item.concept === "COMPACTORS");
  const cranesData = data.filter((item) => item.concept === "CRANES");

  const renderItems = (items) => {
    return items.map((item) => (
      <div
        key={item.id}
        className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px]"
      >
        <Link>
          <div
            className="overflow-hidden"
            style={{ width: "167px", height: "167px" }}
          >
            <img
              src={item.img}
              alt="sales"
              className="transition duration-300 transform hover:scale-105"
              style={{
                transformOrigin: "center",
                transition: "transform 0.5s ease",
              }}
            />
          </div>
        </Link>
        <div className="titleProduct flex flex-col gap-[20px] pl-[19px] justify-center">
          <Link>
            <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#FBDE06] font-bold">
              {item.description}
            </h1>
          </Link>
          <div className="flex items-center">
            <p className="text-[14px] text-[#606060] font-light">
              {item.paragraph}
            </p>
            <p className="text-[14px] text-[#606060] font-bold">{item.price}</p>
          </div>
          <div className="symbols flex gap-[8px]">
            <Tooltip title="View Auction">
              <button className="bg-[#FBDE06] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                {item.icon}
              </button>
            </Tooltip>
            <Tooltip title="Add to Wishlist">
              <button className="hover:bg-[#FBDE06] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                <FaHeart />
              </button>
            </Tooltip>
            <Tooltip title="Quickview">
              <button className="hover:bg-[#FBDE06] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                <FaSearch />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="viewPart flex flex-col gap-[73px] mt-[99px] mb-[100px]">
      <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
        <div
          style={BGimageMil}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-white font-extrabold">EXCAVATORS</h1>
          <p className="text-white flex gap-[8px]">
            <strong className="font-bold text-[16px]">
              {excavatorsData.length}
            </strong>{" "}
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#FBDE06] text-[14px] font-semibold text-white rounded-[45px] bg-[#FBDE06]">
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
          {renderItems(excavatorsData)}
        </div>
      </div>
      <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
        <div
          style={BGimageMil3}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-white font-extrabold">BULDOZERS</h1>
          <p className="text-white flex gap-[8px]">
            <strong className="font-bold text-[16px]">
              {buldozersData.length}
            </strong>{" "}
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#FBDE06] text-[14px] font-semibold text-white rounded-[45px] bg-[#FBDE06]">
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
          {renderItems(buldozersData)}
        </div>
      </div>
      <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
        <div
          style={BGimageMil5}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-white font-extrabold">COMPACTORS</h1>
          <p className="text-white flex gap-[8px]">
            <strong className="font-bold text-[16px]">
              {compactorsData.length}
            </strong>{" "}
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#FBDE06] text-[14px] font-semibold text-white rounded-[45px] bg-[#FBDE06]">
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
          {renderItems(compactorsData)}
        </div>
      </div>
      <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
        <div
          style={BGimageMil4}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-white font-extrabold">CRANES</h1>
          <p className="text-white flex gap-[8px]">
            <strong className="font-bold text-[16px]">
              {cranesData.length}
            </strong>{" "}
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#FBDE06] text-[14px] font-semibold text-white rounded-[45px] bg-[#FBDE06]">
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
          {renderItems(cranesData)}
        </div>
      </div>
    </div>
  );
}

export default MachineSales;
