import React from "react";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
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


function ShopSales({ hoverBGsales, hoveredSales }) {
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
      paragraph: "Auction Ended",
    },
    {
      id: 3,
      img: imgData3,
      description: "Desktop TTX Gamer",
      paragraph: "Auction Ended",
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
      paragraph: "Auction Ended",
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
      paragraph: "Auction Ended",
    },
    {
      id: 8,
      img: imgData8,
      description: "Desktop TTX Gamer",
      paragraph: "Auction Ended",
    },
    {
      id: 9,
      img: imgData9,
      description: "Galaxy S10+ Dual SIM",
      paragraph: "Auction Ended",
    },
  ];

  const BGimgMil = {
    backgroundColor: "blue",
  };
  const BGimageMil = {
    backgroundColor: "red",
  };
  const BGimageMil1 = {
    backgroundColor: "yellow",
  };

  return (
    <div className="viewPart flex flex-col gap-[70px] mt-[100px] mb-[100px] ">
      <div className="onePoster1 flex gap-[60px] ml-[75px] ">
        <div
          style={BGimgMil}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
        >
          <h1 className="text-[27px] text-white font-extrabold ">PHONES</h1>
          <p className="text-white flex gap-[8px] ">
            <strong className="font-bold text-[16px] ">10</strong>
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#009EA3] text-[14px] font-semibold text-[white] rounded-[9px]">
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {data.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="titleProduct flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1
                    className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}
                  >
                    {item.description}
                  </h1>
                </Link>

                <div className="flex">
                  <p className="text-[14px] text-[#606060] font-light ">
                    {item.paragraf1}
                  </p>
                  <p className="text-[16px] text-[black] font-bold ">
                    {item.price}
                  </p>
                </div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip  title="Bid Now">
                    <button
                     
                      className="rounded-[9px] bg-[#009EA3] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                    >
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to cart">
                    <button
                   
                      className="rounded-[9px] bg-[#009EA3] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                    >
                      <FaShoppingBasket />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="onePoster1 flex gap-[60px] ml-[75px] ">
        <div
          style={BGimageMil}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
        >
          <h1 className="text-[27px] text-[white] font-extrabold ">
            ELECTRONICS
          </h1>
          <p className="text-[white] flex gap-[8px] ">
            <strong className="font-bold text-[16px] ">6</strong>
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#009EA3] text-[14px] font-semibold text-[white] rounded-[9px] ">
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {data.slice(4, 8).map((item, index) => (
            <div
              key={index}
              className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="titleProduct flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1
                    className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}
                  >
                    {item.description}
                  </h1>
                </Link>

                <div className="flex">
                  <p className="text-[14px] text-[#606060] font-light ">
                    {item.paragraf1}
                  </p>
                  <p className="text-[16px] text-[black] font-bold ">
                    {item.price}
                  </p>
                </div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip  title="Bid Now">
                    <button className="rounded-[9px] bg-[#009EA3] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip  title="Add to cart">
                    <button className="rounded-[9px] bg-[#009EA3] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaShoppingBasket />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="onePoster1 flex gap-[60px] ml-[75px] ">
        <div
          style={BGimageMil1}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
        >
          <h1 className="text-[27px] text-[white] font-extrabold ">LAPTOPS</h1>
          <p className="text-[white] flex gap-[8px] ">
            <strong className="font-bold text-[16px] ">5</strong>
            Products
          </p>
          <button className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#009EA3] text-[14px] font-semibold text-[white] rounded-[9px] ">
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {data.slice(4, 8).map((item, index) => (
            <div
              key={index}
              className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="titleProduct flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1
                    className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}
                  >
                    {item.description}
                  </h1>
                </Link>

                <div className="flex">
                  <p className="text-[14px] text-[#606060] font-light ">
                    {item.paragraf1}
                  </p>
                  <p className="text-[16px] text-[black] font-bold ">
                    {item.price}
                  </p>
                </div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip  title="Bid Now">
                    <button className="rounded-[9px] bg-[#009EA3] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip  title="Add to cart">
                    <button className="rounded-[9px] bg-[#009EA3] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaShoppingBasket />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
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
  );
}

export default ShopSales;
