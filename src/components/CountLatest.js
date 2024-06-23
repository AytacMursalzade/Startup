import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch, FaHeart } from "react-icons/fa";
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

function CountLatest() {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Auto Bidding (Proxy)",
      paragraph: "Current Bid:",
      price: "$435.00",
      concept: "ELECTRONICS",
    },
    {
      id: 2,
      img: imgData2,
      description: "Bluetooth Headphones",
      paragraph: "Auction Ended",
      concept: "ELECTRONICS",
    },
    {
      id: 3,
      img: imgData3,
      description: "Desktop TTX Gamer",
      paragraph: "Auction Ended",
      concept: "ELECTRONICS",
    },
    {
      id: 4,
      img: imgData4,
      description: "Gaming Computer",
      paragraph: "Current Bid:",
      price: "$35.00",
      concept: "LAPTOPS",
    },
    {
      id: 5,
      img: imgData5,
      description: "Laptop Inspiron Core i7",
      paragraph: "Auction Ended",
      concept: "LAPTOPS",
    },
    {
      id: 6,
      img: imgData6,
      description: "Laptop Latitude d3300",
      paragraph: "Starting Bid:",
      price: "$50.00",
      concept: "LAPTOPS",
    },
    {
      id: 7,
      img: imgData7,
      description: "Desktop Gamer Las",
      description1: "Vegas",
      paragraph: "Auction Ended",
      concept: "PHONES",
    },
    {
      id: 8,
      img: imgData8,
      description: "Desktop TTX Gamer",
      paragraph: "Auction Ended",
      concept: "PHONES",
    },
    {
      id: 9,
      img: imgData9,
      description: "Galaxy S10+ Dual SIM",
      paragraph: "Auction Ended",
      concept: "PHONES",
    },
  ];

  

  const BGimageMil = { backgroundColor: "red" };
  const BGimageMil3 = { backgroundColor: "blue" };
  const BGimageMil5 = { backgroundColor: "yellow" };

  const renderCategorySection = (category, BGimage) => {
    const categoryData = data.filter((item) => item.concept === category);
    return categoryData.map((item, index) => (
      <div
        key={index}
        className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px]"
        style={BGimage}
      >
        <Link to="#">
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
          <Link to="#">
            <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#6449E7] font-bold">
              {item.description} <br /> {item.description1}
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
              <button className="rounded-[8px] bg-[#6449E7] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                <FaGavel />
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
    <div className="viewPart flex flex-col gap-[73px] mt-[99px] mb-[100px]">
      <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
        <div
          style={BGimageMil}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-white font-extrabold">ELECTRONICS</h1>
          <p className="text-white flex gap-[8px]">
            <strong className="font-bold text-[16px]">
              {data.filter((item) => item.concept === "ELECTRONICS").length}
            </strong>
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#6449E7] text-[14px] font-semibold text-white rounded-[45px] bg-[#6449E7]">
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="salesPartPost1 flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
          {renderCategorySection("ELECTRONICS", BGimageMil)}
        </div>
      </div>
      <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
        <div
          style={BGimageMil3}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-white font-extrabold">LAPTOPS</h1>
          <p className="text-white flex gap-[8px]">
            <strong className="font-bold text-[16px]">
              {data.filter((item) => item.concept === "LAPTOPS").length}
            </strong>{" "}
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#6449E7] text-[14px] font-semibold text-white rounded-[45px] bg-[#6449E7]">
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="salesPartPost1 flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
          {renderCategorySection("LAPTOPS", BGimageMil3)}
        </div>
      </div>
      <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
        <div
          style={BGimageMil5}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-white font-extrabold">PHONES</h1>
          <p className="text-white flex gap-[8px]">
            <strong className="font-bold text-[16px]">
              {data.filter((item) => item.concept === "PHONES").length}
            </strong>{" "}
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#6449E7] text-[14px] font-semibold text-white rounded-[45px] bg-[#6449E7]">
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="salesPartPost1 flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
          {renderCategorySection("PHONES", BGimageMil5)}
        </div>
      </div>
    </div>
  );
}

export default CountLatest;
