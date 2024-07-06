import React from "react";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { FaSearch} from "react-icons/fa";
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
import { IoMdEye } from "react-icons/io";
import imgPoster from "../assets/ibid_coin_banner1.jpg";
import imagePoster from "../assets/ibid_coins_banner2.jpg";



function SalesCoins() {

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

  const salesParts1 = Data.slice(0, 4);
  const salesParts2 = Data.slice(4, 8);

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

  return (
    <>
      <div className="viewPart flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
        <div className="onePoster1 flex gap-[17px] justify-around ml-[75px] ">
          <div style={BGimgMil} className="Poster w-[420px] h-[501px] flex justify-center items-center flex-col gap-[15px] bg-[blue] ">
            <h1 className="text-[27px] text-white font-extrabold ">ANCIENT</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">5</strong>Collections
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#2695FF] text-[14px] font-semibold text-white rounded-[30px] bg-[#2695FF] ">
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
                    <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
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
                      <button className="rounded-[45px] bg-[#2695FF] text-[white] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaGavel />
                      </button>
                    </Tooltip>
                    <Tooltip title="Add to Wishlist">
                      <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#fff] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaHeart />
                      </button>
                    </Tooltip>
                    <Tooltip title="Quickview">
                      <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#fff] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
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
          <div style={BGimageMil} className="Poster w-[420px] h-[501px] flex justify-center items-center flex-col gap-[15px] bg-[red] ">
            <h1 className="text-[27px] text-white font-extrabold ">
              SILVER
            </h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">4</strong>Collections
            </p>
            <button className="w-[205px] h-[50px] text-[14px] hover:bg-white hover:text-[#2695FF] font-semibold text-white rounded-[30px] bg-[#2695FF] ">
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
                    <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
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
                      <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <IoMdEye />
                      </button>
                    </Tooltip>
                    <Tooltip title="Add to Wishlist">
                      <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#fff] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                        <FaHeart />
                      </button>
                    </Tooltip>
                    <Tooltip title="Quickview">
                      <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#fff] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
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

export default SalesCoins;
