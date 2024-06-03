import React from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import cattleImg from "../assets/chickhen1.jpg";
import cattleImg1 from "../assets/chickhen2.jpg";
import cattleImg2 from "../assets/chickhen3.jpg";
import cattleImg3 from "../assets/chickhen4.jpg";
import imgcattle1 from "../assets/imgCattle1.jpg";
import imgcattle2 from "../assets/imgCattle2.jpg";

function SalesCattle() {

  const PostBgImg1 = {
    backgroundImage:`url(${imgcattle1})`,
    backgroundPosition: "center",
    backgroundSize:"cover"
  }
  const PostBgImg2 = {
    backgroundImage:`url(${imgcattle2})`,
    backgroundPosition: "center",
    backgroundSize:"cover"
  }

  const data = [
    {
      id: 1,
      img: cattleImg,
      description: "Andalusian chicken ",
      description1: "Lot C#7222",
      bid: "Current Bid:",
      price: "£2,076.00",
    },
    {
      id: 2,
      img: cattleImg1,
      description: "New Hampshire ",
      description1: "chicken #4321",
      bid: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 3,
      img: cattleImg2,
      description: "Old English Game",
      description1: "Lot #788",
      bid: "Starting Bid:",
      price: "£50.00",
    },
    {
      id: 4,
      img: cattleImg3,
      description: "Rhode Island Red",
      description1: "Chicken #299",
      bid: "Starting Bid:",
      price: "£30.00",
    },
  ];

  return (
    <>
      <div className="viewPartArt flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
        <div className="flex gap-[17px] justify-around ml-[75px] ">
          <div style={PostBgImg1} className="w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] ">
            <h1 className="text-[27px] text-white font-extrabold ">CHICKENS</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">4</strong>Products
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#627452] text-[14px] font-semibold text-white rounded-[45px] bg-[#627452] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className=" flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            {data.map((item,index) => (
              <div key={index} className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div className="overflow-hidden rounded-lg" style={{ width: '167px', height: '167px' }}>
                  <img src={item.img} alt="sales" className="transition duration-300 transform hover:scale-105" style={{ transformOrigin: 'center', transition: 'transform 0.5s ease' }} />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[19px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#627452] font-bold ">
                    {item.description}
                  </h1>
                </Link>

                <div className="flex items-center "><p className="text-[14px] text-[#606060] font-light ">
                  {item.bid}
                </p><p className="text-[14px] text-[#606060] font-bold">{item.price}</p></div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="View Auction">
                    <button className="rounded-[50%] bg-[#627452] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[50%] hover:bg-[#627452] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[50%] hover:bg-[#627452] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="flex gap-[17px] justify-around ml-[75px] ">
          <div style={PostBgImg2} className="w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] ">
            <h1 className="text-[27px] text-white font-extrabold ">DONKEYS</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">4</strong>Products
            </p>
            <button className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#627452] text-[14px] font-semibold text-white rounded-[45px] bg-[#627452] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            {data.map((item,index) =>(
              <div key={index} className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div className="overflow-hidden rounded-lg" style={{ width: '167px', height: '167px' }}>
                  <img src={item.img} alt="sales" className="transition duration-300 transform hover:scale-105" style={{ transformOrigin: 'center', transition: 'transform 0.5s ease' }} />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[19px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#627452] font-bold ">
                    {item.description} <br /> {item.description1}
                  </h1>
                </Link>

                <div className="flex items-center "><p className="text-[14px] text-[#606060] font-light ">
                  {item.bid}
                </p><p className="text-[14px] text-[#606060] font-bold">{item.price}</p></div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="View Auction">
                    <button className="rounded-[50%] bg-[#627452] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[50%] hover:bg-[#627452] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[50%] hover:bg-[#627452] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
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

export default SalesCattle;
