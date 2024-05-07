import React from "react";
import { Link } from "react-router-dom";
import headphones from "../assets/headphones.jpg";
import { FaGavel } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";

function SalesPart() {
  return (
    <>
      <div className="viewPart flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div className="Poster w-[420px] h-[501px] flex justify-center items-center flex-col gap-[15px] bg-[blue] ">
            <h1 className="text-[27px] text-white font-extrabold ">Phones</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">12</strong>Products
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#2695FF] text-[14px] font-semibold text-white rounded-[30px] bg-[#2695FF] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div className="Poster w-[420px] h-[501px] flex justify-center items-center flex-col gap-[15px] bg-[red] ">
            <h1 className="text-[27px] text-white font-extrabold ">
              ELECTRONICS
            </h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">9</strong>Products
            </p>
            <button className="w-[205px] h-[50px] text-[14px] hover:bg-white hover:text-[#2695FF] font-semibold text-white rounded-[30px] bg-[#2695FF] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div className="Poster w-[420px] h-[501px] justify-center items-center flex flex-col gap-[15px] bg-[yellow] ">
            <h1 className="text-[27px] text-white font-extrabold ">LAPTOP</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">5</strong>Products
            </p>
            <button className="w-[205px] h-[50px] text-[14px] hover:bg-white hover:text-[#2695FF] font-semibold text-white rounded-[30px] bg-[#2695FF] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPost flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="salesPart w-[457px] h-[240px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
              <Link>
                <div>
                  <img src={headphones} width={170} alt="sales" />
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
                  <Tooltip className="tooltip" title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
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

export default SalesPart;
