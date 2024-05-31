import React from "react";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import AntiquesData from "../db/AntiquesData";

function SalesAntiques({
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
  display6,
}) {
  const BGimgMil = {
    backgroundImage: `url(${imgPoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil = {
    backgroundImage: `url(${imagePoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  // const posterThree = {
  //   display: display5 ? "block" : "none",
  //   backgroundColor: "yellow",
  // };
  const post1 = {
    backgroundColor: "blue",
  };
  const post3 = {
    backgroundColor: "red",
  };

  const styling = {
    display: display7 ? "block" : "none",
  };
  const styll = {
    display: display6 ? "block" : "none",
  };

  return (
    <div className="flex flex-col gap-[70px] mt-[100px] mb-[100px] ">
      <div className="onePoster flex gap-[60px] ml-[75px] ">
        <div
          style={{ ...post1, ...BGimageMil }}
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
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-white hover:text-[red] text-[14px] font-semibold text-white rounded-[9px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPostArt flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {AntiquesData.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" />
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
          style={{ ...post3, ...BGimgMil }}
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
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[red] text-[14px] font-semibold text-white rounded-[9px] "
          >
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPostArt flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {AntiquesData.slice(4, 8).map((item, index) => (
            <div
              key={index}
              className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" />
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

export default SalesAntiques;
