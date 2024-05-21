import React from "react";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";

function SalesAntiques({SalesText,img,toolBg,imgPoster,imagePoster,textPosterCard,numberProduct,productCard,numberPoster,posterCard,productName,hoveredSales,hoverBGsales}) {

  const BGimgMil = {
    backgroundImage: `url(${imgPoster})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };
  const BGimageMil = {
    backgroundImage: `url(${imagePoster})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
  };
  return (
    <>
      <div className="viewPartArt flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div style={BGimageMil} className="PosterAntiques posterMilOne w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] ">
            <h1 className="text-[27px] text-white font-extrabold ">{textPosterCard}</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">{numberProduct}</strong>{productCard}
            </p>
            <button style={{backgroundColor:toolBg}} className="w-[205px] h-[50px] hover:bg-white hover:text-[red] text-[14px] font-semibold text-white rounded-[9px]">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPostArt flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1 className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`} >
                  {SalesText}
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Current Bid:
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:toolBg}} className="rounded-[9px]  text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1 className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}>
                  {SalesText}
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Starting Bid:
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:toolBg}} className="rounded-[9px] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1 className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}>
                  {SalesText}
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Starting Bid:
                </p>
                <div className="symbols flex gap-[8px]">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:toolBg}} className="rounded-[9px]  text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1 className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}>
                  {SalesText}
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:toolBg}} className="rounded-[9px]  text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div style={BGimgMil} className="  w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] ">
            <h1 className="text-[27px] text-white font-extrabold ">{posterCard}</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">{numberPoster}</strong>{productName}
            </p>
            <button style={{backgroundColor:toolBg}} className="w-[205px] h-[50px] hover:bg-[white] hover:text-[red] text-[14px] font-semibold text-white rounded-[9px] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPostArt flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1 className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}>
                  {SalesText}
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:toolBg}} className="rounded-[9px]  text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1 className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}>
                  {SalesText}
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:toolBg}} className="rounded-[9px]  text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1 className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}>
                  {SalesText}
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:toolBg}} className="rounded-[9px]  text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1 className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}>
                  {SalesText}
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button style={{backgroundColor:toolBg}} className="rounded-[9px]  text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}>
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
        
       
      </div>
    </>
  );
}

export default SalesAntiques;
