import React from "react";
import { Link } from "react-router-dom";
import poster from "../assets/collectable167.jpg";
import { FaGavel } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";

function SalesArt() {
  return (
    <>
      <div className="viewPartArt flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div className="PosterArt w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] ">
            <h1 className="text-[27px] text-white font-extrabold ">ABSTRACT</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">4</strong>Collections
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#0543EC] text-[14px] font-semibold text-white rounded-[9px] bg-[#0543EC] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={poster} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
                    Bluetooth Headphones
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={poster} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
                    Bluetooth Headphones
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={poster} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
                    Bluetooth Headphones
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={poster} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
                    Bluetooth Headphones
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div className="PosterArtTwo w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] ">
            <h1 className="text-[27px] text-white font-extrabold ">ANTIQUE</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">4</strong>Collections
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#0543EC] text-[14px] font-semibold text-white rounded-[9px] bg-[#0543EC] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={poster} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
                    Bluetooth Headphones
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={poster} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
                    Bluetooth Headphones
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={poster} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
                    Bluetooth Headphones
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img  src={poster} width={167} alt="sales" />
                </div>
              </Link>
              <div className="flex flex-col gap-[20px] justify-center ">
                <Link>
                  <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#2695FF] font-bold ">
                    Bluetooth Headphones
                  </h1>
                </Link>

                <p className="text-[14px] text-[#606060] font-light ">
                  Auction Ended
                </p>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[9px] hover:bg-[#0543EC] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
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

export default SalesArt;
