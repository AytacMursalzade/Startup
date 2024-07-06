import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch,FaHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Car1 from "../assets/item1.jpg";
import Car2 from "../assets/item2.jpg";
import Car3 from "../assets/item3.jpg";
import Car4 from "../assets/item4.jpg";
import Car5 from "../assets/item5.jpg";
import Car6 from "../assets/item6.jpg";
import Car7 from "../assets/item7.jpg";
import Car8 from "../assets/item8.jpg";
import imgPosterCar from "../assets/SprotsCars.jpg";
import imagePosterCar1 from "../assets/VINtagecars.jpg";

function SalesAutomotive({
  toolBg,
  hoverBGsales,
  productCard,
  productName,
  posterCard,
  numberPoster,
  textPosterCard,
  numberProduct,
  hoveredSales,
  display7,
  display6,
}) {
  const AntiquesData = [
    { id: "1", img: Car1, description: "Auction Vintage Car", paragraf1: "Auction Ended" },
    { id: "2", img: Car2, description: "El Camino 1974", paragraf1: "Current Bid:", price: "$1.215.00" },
    { id: "3", img: Car3, description: "Audi R8 2008", paragraf1: "Current Bid:", price: "$698.00" },
    { id: "4", img: Car4, description: "Porsche Carrera GT", paragraf1: "Current Bid:", price: "$330.00" },
    { id: "5", img: Car5, description: "BMW M1 1965", paragraf1: "Current Bid:", price: "$700.00" },
    { id: "6", img: Car6, description: "Vintage Gearbox", paragraf1: "Auction Ended" },
    { id: "7", img: Car7, description: "Nissan GTR 2000", paragraf1: "Starting Bid:", price: "$1.175.00" },
    { id: "8", img: Car8, description: "Sccirocco GT R4", paragraf1: "Current Bid:", price: "$1.000.00" },
  ];

  const BGimgMil = {
    backgroundImage: `url(${imgPosterCar})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const BGimageMil = {
    backgroundImage: `url(${imagePosterCar1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };


  const styll = {
    display: display6 ? "block" : "none",
  };

  return (
    <div className="viewPart flex flex-col gap-[70px] mt-[100px] mb-[100px] ">
    <div className="onePoster1 flex gap-[60px] ml-[75px] ">
      <div
        style={BGimageMil}
        className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
      >
        <h1 className="text-[27px] text-white font-extrabold ">
          {textPosterCard}
        </h1>
        <p className="text-white flex gap-[8px] ">
          <strong className="font-bold text-[16px] ">{numberProduct}</strong>
          {productCard}
        </p>
        <button
          style={{ backgroundColor: toolBg }}
          className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold text-[white] rounded-[9px]"
        >
          VIEW ALL ITEMS
        </button>
      </div>

      <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
        {AntiquesData.slice(0, 4).map((item, index) => (
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
                <p className="text-[16px] text-[black] font-bold ">{item.price}</p>
              </div>
              <div className="symbols flex gap-[8px] ">
                <Tooltip style={styll} title="Bid Now">
                  <button
                    style={{ backgroundColor: toolBg }}
                    className="rounded-[9px] text-[white] bg-[#EE964B] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                  >
                    <FaGavel />
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
        style={BGimgMil}
        className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
      >
        <h1 className="text-[27px] text-white font-extrabold ">
          {posterCard}
        </h1>
        <p className="text-white flex gap-[8px] ">
          <strong className="font-bold text-[16px] ">{numberPoster}</strong>
          {productName}
        </p>
        <button
          style={{ backgroundColor: toolBg }}
          className="w-[205px] h-[50px] hover:bg-[white] hover:text-[red] text-[14px] font-semibold text-white rounded-[9px] "
        >
          VIEW ALL ITEMS
        </button>
      </div>

      <div className="salesPartPost flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
        {AntiquesData.slice(4, 8).map((item, index) => (
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
                <p className="text-[16px] text-[black] font-bold ">{item.price}</p>
              </div>
              <div className="symbols flex gap-[8px] ">
                <Tooltip style={styll} title="Bid Now">
                  <button
                    style={{ backgroundColor: toolBg }}
                    className="rounded-[9px] text-white bg-[#EE964B] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                  >
                    <FaGavel />
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

export default SalesAutomotive;

