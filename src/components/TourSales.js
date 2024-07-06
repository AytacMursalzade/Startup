import React from "react";
import { Link } from "react-router-dom";
import {FaSearch, FaHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import imgData1 from "../assets/a1.jpg";
import imgData2 from "../assets/m2.jpg";
import imgData3 from "../assets/m3.jpg";
import imgData4 from "../assets/m4.jpg";
import imgData5 from "../assets/m5.jpg";
import imgData6 from "../assets/m6.jpg";
import imgData7 from "../assets/m7.jpg";
import imgData8 from "../assets/m8.jpg";
import imgData9 from "../assets/m9.jpg";
import imgData10 from "../assets/m10.jpg";
import imgData11 from "../assets/m11.jpg";
import imgData12 from "../assets/m12.jpg";
import imagePoster from "../assets/slidetour1.jpg";
import imagePoster3 from "../assets/slidetour2.jpg";
import imagePoster5 from "../assets/slidetour3.jpg";
import imagePoster6 from "../assets/slidetour4.jpg";

function TourSales() {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Budapest, Hungary",
      paragraph: "Current Bid:",
      price: "£40.00",
      concept: "TOURS"
    },
    {
      id: 2,
      img: imgData2,
      description: "Lisbon, Portugal",
      paragraph: "Starting Bid:",
      price: "£100.00",
      concept: "TOURS"
    },
    {
      id: 3,
      img: imgData3,
      description: "Prague, Czech Republic",
      paragraph: "Starting Bid:",
      price: "£75.00",
      concept: "TOURS"
    },
    {
      id: 4,
      img: imgData4,
      description: "Barcelona, Spain",
      paragraph: "Starting Bid:",
      price: "£100.00",
      concept: "CITY-BREAK"
    },
    {
      id: 5,
      img: imgData5,
      description: "Milan, Italy",
      paragraph: "Starting Bid:",
      price: "£45.00",
      concept: "CITY-BREAK"
    },
    {
      id: 6,
      img: imgData6,
      description: "Paris, France",
      paragraph: "Starting Bid:",
      price: "£100.00",
      concept: "CITY-BREAK"
    },
    {
      id: 7,
      img: imgData7,
      description: "Caribbean - Asia",
      paragraph: "Starting Bid:",
      price: "£100.00",
      concept: "CRUISES"
    },
    {
      id: 8,
      img: imgData8,
      description: "Europe - Bahamas",
      paragraph: "Starting Bid:",
      price: "£100.00",
      concept: "CRUISES"
    },
    {
      id: 9,
      img: imgData9,
      description: "Mexico - Creta",
      paragraph: "Starting Bid:",
      price: "£100.00",
      concept: "CRUISES"
    },
    {
      id: 10,
      img: imgData10,
      description: "Lefkada, Greece",
      paragraph: "Starting Bid:",
      price: "£70.00",
      concept: "VILLAS"
    },
    {
      id: 11,
      img: imgData11,
      description: "Monza, Italy",
      paragraph: "Starting Bid:",
      price: "£100.00",
      concept: "VILLAS"
    },
    {
      id: 12,
      img: imgData12,
      description: "Nicosia, Cyprus",
      paragraph: "Starting Bid:",
      price: "£80.00",
      concept: "VILLAS"
    },
  ];

  const posters = [
    { category: "TOURS", image: imagePoster },
    { category: "CITY-BREAK", image: imagePoster3 },
    { category: "CRUISES", image: imagePoster5 },
    { category: "VILLAS", image: imagePoster6 }
  ];

  const renderCategorySection = (category, BGimage) => {
    const categoryData = data.filter(item => item.concept === category);
    return (
      <div className="onePoster1 flex gap-[17px] justify-around ml-[75px]">
        <div style={{ backgroundImage: `url(${BGimage})`, backgroundSize: "cover", backgroundPosition: "center" }} className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px]">
          <h1 className="text-[27px] text-white font-extrabold">{category}</h1>
          <p className="text-white flex gap-[8px]">
            <strong className="font-bold text-[16px]">{categoryData.length}</strong> Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#6FCBF4] text-[14px] font-semibold text-white rounded-[45px] bg-[#6FCBF4]">
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="salesPartPost1 flex flex-wrap gap-[22px] px-[18px] w-[1272px]">
          {categoryData.map((item, index) => (
            <div key={index} className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px]">
              <Link>
                <div className="overflow-hidden " style={{ width: '167px', height: '167px' }}>
                  <img src={item.img} alt="sales" className="transition duration-300 transform hover:scale-105" style={{ transformOrigin: 'center', transition: 'transform 0.5s ease' }} />
                </div>
              </Link>
              <div className="titleProduct flex flex-col gap-[20px] pl-[19px] justify-center">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#6FCBF4] font-bold">
                    {item.description}
                  </h1>
                </Link>
                <div className="flex items-center">
                  <p className="text-[14px] text-[#606060] font-light">{item.paragraph}</p>
                  <p className="text-[14px] text-[#606060] font-bold">{item.price}</p>
                </div>
                <div className="symbols flex gap-[8px]">
                  <Tooltip title="View Auction">
                    <button className=" bg-[#6FCBF4] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className=" hover:bg-[#6FCBF4] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className=" hover:bg-[#6FCBF4] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="viewPart flex flex-col gap-[73px] mt-[99px] mb-[100px]">
        {posters.map((poster, index) => renderCategorySection(poster.category, poster.image))}
      </div>
    </>
  );
}

export default TourSales;
