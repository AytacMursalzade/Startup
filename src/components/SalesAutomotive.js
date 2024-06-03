import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch, FaShoppingBasket, FaHeart } from "react-icons/fa";
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

  const styling = {
    display: display7 ? "block" : "none",
  };
  
  const styll = {
    display: display6 ? "block" : "none",
  };

  return (
    <div className="flex flex-col gap-16 mt-24 mb-24">
      <div className="onePoster flex gap-16 ">
        <div
          style={{ ...BGimageMil }}
          className="w-[420px] h-[480px] flex justify-center items-center flex-col gap-4 relative overflow-hidden"
        >
          <h1 className="text-2xl text-white font-extrabold">{textPosterCard}</h1>
          <p className="text-white flex gap-2">
            <strong className="font-bold text-lg">{numberProduct}</strong>
            {productCard}
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-white hover:text-white text-lg font-semibold text-white rounded-lg"
          >
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPostArt flex flex-wrap gap-5 px-5 w-[1272px]">
          {AntiquesData.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-3 px-4"
            >
              <Link>
                <div className="overflow-hidden rounded-lg" style={{ width: '167px', height: '167px' }}>
                  <img src={item.img} alt="sales" className="transition duration-300 transform hover:scale-105" style={{ transformOrigin: 'center', transition: 'transform 0.5s ease' }} />
                </div>
              </Link>
              <div className="flex flex-col gap-5 pl-4 justify-center">
                <Link>
                  <h1 className={`text-[#484848] text-lg transition-all duration-300 ${hoveredSales} font-bold`}>
                    {item.description}
                  </h1>
                </Link>

                <div className="flex">
                  <p className="text-sm text-[#606060] font-light">{item.paragraf1}</p>
                  <p className="text-lg text-black font-bold">{item.price}</p>
                </div>
                <div className="symbols flex gap-2">
                  <Tooltip style={styll} title="Bid Now">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-lg text-white flex justify-center items-center text-sm w-[33px] h-[32px] shadow-md"
                    >
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip style={styling} title="Add to cart">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-lg text-white flex justify-center items-center text-sm w-[33px] h-[32px] shadow-md"
                    >
                      <FaShoppingBasket />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button
                      className={`rounded-lg ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-sm w-[33px] h-[32px] shadow-md`}
                    >
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button
                      className={`rounded-lg ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-sm w-[33px] h-[32px] shadow-md`}
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

      <div className="onePoster flex gap-16 ">
        <div
          style={{ ...BGimgMil }}
          className="w-[420px] h-[480px] flex justify-center items-center flex-col gap-4 relative overflow-hidden"
        >
                    <h1 className="text-2xl text-white font-extrabold">{posterCard}</h1>
          <p className="text-white flex gap-2">
            <strong className="font-bold text-lg">{numberPoster}</strong>
            {productName}
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-white hover:text-red text-lg font-semibold text-white rounded-lg"
          >
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPostArt flex flex-wrap gap-5 px-5 w-[1272px]">
          {AntiquesData.slice(4, 8).map((item, index) => (
            <div
              key={index}
              className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-3 px-4"
            >
              <Link>
                <div className="overflow-hidden rounded-lg" style={{ width: '167px', height: '167px' }}>
                  <img src={item.img} alt="sales" className="transition duration-300 transform hover:scale-105" style={{ transformOrigin: 'center', transition: 'transform 0.5s ease' }} />
                </div>
              </Link>
              <div className="flex flex-col gap-5 pl-4 justify-center">
                <Link>
                  <h1 className={`text-[#484848] text-lg transition-all duration-300 ${hoveredSales} font-bold`}>
                    {item.description}
                  </h1>
                </Link>

                <div className="flex">
                  <p className="text-sm text-[#606060] font-light">{item.paragraf1}</p>
                  <p className="text-lg text-black font-bold">{item.price}</p>
                </div>
                <div className="symbols flex gap-2">
                  <Tooltip style={styll} title="Bid Now">
                    <button
                      
                      className="rounded-lg hover:bg-[#EE964B] text-white flex justify-center items-center text-sm w-[33px] h-[32px] shadow-md"
                    >
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip style={styling} title="Add to cart">
                    <button
                    
                      className="rounded-lg bg-[#EE964B] text-white flex justify-center items-center text-sm w-[33px] h-[32px] shadow-md"
                    >
                      <FaShoppingBasket />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button
                      className="rounded-lg bg-[#EE964B] text-white flex justify-center items-center text-sm w-[33px] h-[32px] shadow-md"
                    >
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button
                      className={`rounded-lg ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-sm w-[33px] h-[32px] shadow-md`}
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

