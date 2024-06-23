import React from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import cattleImg from "../assets/d1.jpg";
import cattleImg1 from "../assets/d2.jpg";
import cattleImg2 from "../assets/d3.jpeg";
import cattleImg3 from "../assets/d4.jpg";
import cattleImg4 from "../assets/v1.jpg";
import cattleImg5 from "../assets/v2.jpeg";
import cattleImg6 from "../assets/v1.jpg";
import cattleImg7 from "../assets/v2.jpeg";
import img1 from "../assets/Villaestate.jpeg";
import img2 from "../assets/villaSmallestate.jpeg";

function RealSales() {

  const PostBgImg1 = {
    backgroundImage: `url(${img1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const PostBgImg2 = {
    backgroundImage: `url(${img2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const data = [
    {
      id: 1,
      img: cattleImg,
      description: "Avenue Penthouse",
      bid: "Current Bid:",
      price: "$60.00",
      concept: "DUPLEX"
    },
    {
      id: 2,
      img: cattleImg1,
      description: "Latitude Penthouse",
      bid: "Current Bid:",
      price: "$100.002.00",
      concept: "DUPLEX"
    },
    {
      id: 3,
      img: cattleImg2,
      description: "Luxury Duplex",
      bid: "Starting Bid:",
      price: "$50.00",
      concept: "DUPLEX"
    },
    {
      id: 4,
      img: cattleImg3,
      description: "New York Penthouse",
      bid: "Current Bid:",
      price: "$76.00",
      concept: "DUPLEX"
    },
    {
      id: 5,
      img: cattleImg4,
      description: "Luxury Villa",
      bid: "Current Bid:",
      price: "$100.00",
      concept: "VILLA"
    },
    {
      id: 6,
      img: cattleImg5,
      description: "Luxury Villas",
      bid: "Current Bid:",
      price: "$50.00",
      concept: "VILLA"
    },
    {
      id: 7,
      img: cattleImg6,
      description: "Trend Villa",
      bid: "Auction Ended",
      concept: "VILLA"
    },
    {
      id: 8,
      img: cattleImg7,
      description: "Villa Flowers",
      bid: "Auction Ended",
      concept: "VILLA"
    },
  ];

  const duplexData = data.filter(item => item.concept === "DUPLEX");
  const villaData = data.filter(item => item.concept === "VILLA");

  const renderItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px]">
        <Link>
          <div className="overflow-hidden " style={{ width: '167px', height: '167px' }}>
            <img src={item.img} alt="sales" className="transition duration-300 transform hover:scale-105" style={{ transformOrigin: 'center', transition: 'transform 0.5s ease' }} />
          </div>
        </Link>
        <div className="titleProduct flex flex-col gap-[20px] pl-[19px] justify-center">
          <Link>
            <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#6449E7] font-bold">
              {item.description} <br /> {item.description1}
            </h1>
          </Link>
          <div className="flex items-center">
            <p className="text-[14px] text-[#606060] font-light">{item.bid}</p>
            <p className="text-[14px] text-[#606060] font-bold">{item.price}</p>
          </div>
          <div className="symbols flex gap-[8px]">
            <Tooltip title="View Auction">
              <button className="rounded-[8px] bg-[#6449E7] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                <IoMdEye />
              </button>
            </Tooltip>
            <Tooltip title="Add to Wishlist">
              <button className="rounded-[8px] hover:bg-[#6449E7] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                <FaHeart />
              </button>
            </Tooltip>
            <Tooltip title="Quickview">
              <button className="rounded-[8px] hover:bg-[#6449E7] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                <FaSearch />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="viewPart flex flex-col gap-[73px] mt-[99px] mb-[100px]">
        <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
          <div style={PostBgImg1} className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]">
            <h1 className="text-[27px] text-white font-extrabold">DUPLEX</h1>
            <p className="text-white flex gap-[8px]">
              <strong className="font-bold text-[16px]">4</strong> Products
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#6449E7] text-[14px] font-semibold text-white rounded-[45px] bg-[#6449E7]">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost1 flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
            {renderItems(duplexData)}
          </div>
        </div>
        <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
          <div style={PostBgImg2} className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]">
            <h1 className="text-[27px] text-white font-extrabold">VILLA</h1>
            <p className="text-white flex gap-[8px]">
              <strong className="font-bold text-[16px]">4</strong> Products
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#6449E7] text-[14px] font-semibold text-white rounded-[45px] bg-[#6449E7]">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost1 flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
            {renderItems(villaData)}
          </div>
        </div>
      </div>
    </>
  );
}

export default RealSales;
