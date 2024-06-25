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
import { IoMdEye } from "react-icons/io";

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

  

  const salesParts1 = data.slice(0, 4);
  const salesParts2 = data.slice(4, 8);
  const salesParts3 = data.slice(8, 12);

  return (
    <>
      <div className="viewPart flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
        <div className="onePoster1 flex gap-[17px] justify-around ml-[75px] ">
          <div className="Poster w-[420px] h-[501px] flex justify-center items-center flex-col gap-[15px] bg-[blue] ">
            <h1 className="text-[27px] text-white font-extrabold ">Phones</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">12</strong>Products
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#EA3546] text-[14px] font-semibold text-white rounded-[30px] bg-[#EA3546] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost1 flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            {salesParts1.map((item, index) => (
              <div
                key={index}
                className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
              >
                <Link to={item.link}>
                  <div>
                    <img src={item.img} width={170} alt="sales" />
                  </div>
                </Link>
                <div className="titleProduct flex flex-col gap-[20px] justify-center ">
                  <Link to={item.link}>
                    <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#EA3546] font-bold ">
                      {item.description}
                    </h1>
                  </Link>
                  <div className="flex">
                    <p className="text-[14px] text-[#606060] font-light ">
                      {item.paragraf1}
                    </p>
                    <p className="font-bold text-[black] text-[14px] ">{item.price}</p>
                  </div>
                  <div className="symbols flex gap-[8px] ">
                    <Tooltip title="Bid Now">
                      <button className="rounded-[45px] bg-[#EA3546] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaGavel />
                      </button>
                    </Tooltip>
                    <Tooltip title="Add to Wishlist">
                      <button className="rounded-[45px] hover:bg-[#EA3546] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaHeart />
                      </button>
                    </Tooltip>
                    <Tooltip title="Quickview">
                      <button className="rounded-[45px] hover:bg-[#EA3546] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaSearch />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="onePoster1 flex gap-[17px] justify-around ml-[75px] ">
          <div className="Poster w-[420px] h-[501px] flex justify-center items-center flex-col gap-[15px] bg-[red] ">
            <h1 className="text-[27px] text-white font-extrabold ">
              ELECTRONICS
            </h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">9</strong>Products
            </p>
            <button className="w-[205px] h-[50px] text-[14px] hover:bg-white hover:text-[#EA3546] font-semibold text-white rounded-[30px] bg-[#EA3546] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost1 flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            {salesParts2.map((item, index) => (
              <div
                key={index}
                className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
              >
                <Link to={item.link}>
                  <div>
                    <img src={item.img} width={170} alt="sales" />
                  </div>
                </Link>
                <div className="titleProduct flex flex-col gap-[20px] justify-center ">
                  <Link to={item.link}>
                    <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#EA3546] font-bold ">
                      {item.description}
                    </h1>
                  </Link>
                  <div className="flex">
                    <p className="text-[14px] text-[#606060] font-light ">
                      {item.paragraf1}
                    </p>
                    <p className="font-bold text-[black] text-[14px] ">{item.price}</p>
                  </div>
                  <div className="symbols flex gap-[8px] ">
                    <Tooltip title="Bid Now">
                      <button className="rounded-[45px] bg-[#EA3546] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <IoMdEye />
                      </button>
                    </Tooltip>
                    <Tooltip title="Add to Wishlist">
                      <button className="rounded-[45px] hover:bg-[#EA3546] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaHeart />
                      </button>
                    </Tooltip>
                    <Tooltip title="Quickview">
                      <button className="rounded-[45px] hover:bg-[#EA3546] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaSearch />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="onePoster1 flex gap-[17px] justify-around ml-[75px] ">
          <div className="Poster w-[420px] h-[501px] justify-center items-center flex flex-col gap-[15px] bg-[yellow] ">
            <h1 className="text-[27px] text-white font-extrabold ">LAPTOP</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">5</strong>Products
            </p>
            <button className="w-[205px] h-[50px] text-[14px] hover:bg-white hover:text-[#EA3546] font-semibold text-white rounded-[30px] bg-[#EA3546] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost1 flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            {salesParts3.map((item, index) => (
              <div
                key={index}
                className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
              >
                <Link to={item.link}>
                  <div>
                    <img src={item.img} width={170} alt="sales" />
                  </div>
                </Link>
                <div className="titleProduct flex flex-col gap-[20px] justify-center ">
                  <Link to={item.link}>
                    <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#EA3546] font-bold ">
                      {item.description}
                    </h1>
                  </Link>
                  <div className="flex">
                    <p className="text-[14px] text-[#606060] font-light ">
                      {item.paragraf1}
                    </p>
                    <p className="font-bold text-[black] text-[14px] ">{item.price}</p>
                  </div>
                  <div className="symbols flex gap-[8px] ">
                    <Tooltip title="Bid Now">
                      <button className="rounded-[45px] bg-[#EA3546] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaGavel />
                      </button>
                    </Tooltip>
                    <Tooltip title="Add to Wishlist">
                      <button className="rounded-[45px] hover:bg-[#EA3546] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaHeart />
                      </button>
                    </Tooltip>
                    <Tooltip title="Quickview">
                      <button className="rounded-[45px] hover:bg-[#EA3546] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
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


export default CountLatest;
