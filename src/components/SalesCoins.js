import React from "react";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import coins1 from "../assets/coins1.jpg";
import coins2 from "../assets/coins2.jpg";
import coins3 from "../assets/coins3.jpg";
import coins4 from "../assets/coins4.jpg";
import coins5 from "../assets/coins5.jpg";
import coins6 from "../assets/coins6.jpg";
import coins7 from "../assets/coins7.jpg";
import coins8 from "../assets/coins8.jpg";

const Data = [
  {
    id: "1",
    img: coins1,
    description: "Bronzo, c. 415-387",
    paragraf1: "Auction Ended",
    paragraf2: "Current Bid:",
    price: "$250.00"
  },
  {
    id: "2",
    img: coins2,
    description: "HNItaly 1098 (Unique)",
    paragraf1: "Auction Ended"
  },
  {
    id: "3",
    img: coins3,
    description: "Ancient Greek Coin Auction",
    paragraf1: "Current Bid:",
    price: "$30.00"
  },
  {
    id: "4",
    img: coins4,
    description: "Miletos, c. 295-275",
    paragraf1: "Starting Bid:",
    price: "$100.00"
  },
  {
    id: "5",
    img: coins5,
    description: "HNITALY 1098 (Rare)",
    paragraf1: "Auction Ended"
  },
  {
    id: "6",
    img: coins6,
    description: "Roman & Byzantine Coin",
    paragraf1: "Current Bid:",
    price: "$75.00"
  },
  {
    id: "7",
    img: coins7,
    description: "Bronzo, c. 415-387",
    paragraf1: "Current Bid:",
    price: "$250.00"
  },
  {
    id: "8",
    img: coins8,
    description: "Roman & Byzantine Coin",
    paragraf1: "Current Bid:",
    price: "$75.00"
  }
];

function SalesCoins({
  toolBg,
  hoverBGsales,
  productCard,
  productName,
  posterCard,
  numberPoster,
  imgPoster,
  textPosterCard,
  numberProduct,
  hoveredSales,
  imagePoster,
  display7,
  display6
}) {
  const BGimgMil = {
    backgroundImage: `url(${imgPoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  const BGimageMil = {
    backgroundImage: `url(${imagePoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const styling = {
    display: display7 ? "block" : "none"
  };
  const styll = {
    display: display6 ? "block" : "none"
  };

  return (
    <div className="flex flex-col gap-[70px] mt-[100px] mb-[100px] ">
      <style>
        {`
          .zoom-effect {
            transition: transform 0.3s ease;
          }
          .zoom-effect:hover {
            transform: scale(1.2);
          }
        `}
      </style>
      <div className="onePoster flex gap-[60px] ml-[75px] ">
        <div
          style={BGimageMil}
          className=" w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
        >
          <h1 className="text-[27px] text-white font-extrabold ">
            {textPosterCard}
          </h1>
          <p className="text-white flex gap-[8px] ">
            <strong className="font-bold text-[16px] ">{numberProduct}</strong>
            {productCard}
          </p>
          <button
            
            className="w-[205px] h-[50px] hover:bg-[white] bg-[#4F89B0] hover:text-[#4F89B0] text-[14px] font-semibold text-[white] rounded-[9px] "
          >
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPostArt flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {Data.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" className="zoom-effect" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
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
                  <p className="text-[16px] text-[black] font-bold ">{item.price}</p>
                </div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip style={styll} title="Bid Now">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-[9px] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                    >
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip style={styling} title="Add to cart">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-[9px] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
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

      <div className="onePoster flex gap-[60px] ml-[75px] ">
        <div
          style={BGimgMil}
          className=" w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
        >
          <h1 className="text-[27px] text-white font-extrabold ">
            {posterCard}
          </h1>
          <p className="text-white flex gap-[8px] ">
            <strong className="font-bold text-[16px] ">{numberPoster}</strong>
            {productName}
          </p>
          <button
            
            className="w-[205px] h-[50px] hover:bg-[white] bg-[#4F89B0] hover:text-[#4F89B0] text-[14px] font-semibold text-[white] rounded-[9px] "
          >
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPostArt flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {Data.slice(4, 8).map((item, index) => (
            <div
              key={index}
              className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" className="zoom-effect" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
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
                  <p className="text-[16px] text-[black] font-bold ">{item.price}</p>
                </div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip style={styll} title="Bid Now">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-[9px] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                    >
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip style={styling} title="Add to cart">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-[9px] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
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
    </div>
  );
}

export default SalesCoins;
