import React from "react";
import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import Filter from "./Filter";
import DropdownButton from "./DropdownButton";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Logoimage from "../assets/labLogo.png";
import LabNav from "./LabNav";

function LaboratoryHead({ bgColor, display2 }) {
  const handMade = {
    display: display2 ? "block" : "none",
  };
  return (
    <>
      <div>
        <div className="headerTop flex justify-between h-[45px] px-[75px] py-[8px] border border-bottom border-black-500/40 ">
          <div className="flex justify-between gap-[28px]">
            <div className="hidden topHeader">
              <MdEmail />
              <BsFillTelephoneFill />
            </div>
            <div className="nameTop flex gap-[15px] ">
              <div>
                <Link to="/">Dil degisimi</Link>
              </div>
              <div>
                <p>
                  Call us toll free : <Link to="/">+99455815448</Link>
                </p>
              </div>
              <div>
                <p>
                  Send us an email: <Link to="/">contact@example.com</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7"></div>
          <div className="wishTrack flex justify-between gap-[28px]">
            <Link to="/">
              <div className="flex gap-[2px] hover:opacity-50 ">
                <FaTruck className="text-[20px] pt-[5px]" />
                <p>Order Tracking</p>
              </div>
            </Link>
            <Link to="/">
              <div className="flex gap-[2px] hover:opacity-50 ">
                <LuHeart className="text-[20px] pt-[5px]" />
                <p>Wishlist</p>
              </div>
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundColor: bgColor, ...handMade }}
          className="headerTop  flex justify-between h-[45px]  py-[8px] border border-bottom border-black-500/40 "
        >
          <div className="flex justify-between gap-[28px]">
            <div className="hidden topHeader">
              <MdEmail />
              <BsFillTelephoneFill />
            </div>
            <div className="nameTop flex gap-[15px] ">
              <div>
                <Link to="/">Dil degisimi</Link>
              </div>
              <div>
                <p>
                  Call us toll free : <Link to="/">+99455815448</Link>
                </p>
              </div>
              <div>
                <p>
                  Send us an email: <Link to="/">contact@example.com</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7"></div>
          <div className="wishTrack flex justify-between gap-[28px]">
            <Link to="/">
              <div className="flex gap-[2px] hover:opacity-50 ">
                <FaTruck className="text-[20px] pt-[5px]" />
                <p>Order Tracking</p>
              </div>
            </Link>
            <Link to="/">
              <div className="flex gap-[2px] hover:opacity-50 ">
                <LuHeart className="text-[20px] pt-[5px]" />
                <p>Wishlist</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[100%] flex justify-around items-center py-[30px] ">
          <div className="logoicon">
            <div className="iconsHeader  hidden ">
              <Link to="/">
                <RiAdminFill />
              </Link>
              <Link to="/">
                <LuHeart />
              </Link>
              <Link to="/">
                <FaSearch />
              </Link>
              <Link to="/">
                <FaBasketShopping />
              </Link>
              <Link to="/">
                <GiHamburgerMenu className="hamburgerMenu" />
              </Link>
            </div>
          </div>
          <div className="flex  border-solid shadow-lg rounded-l-3xl rounded-r-3xl ">
            <button className="rounded-l-[45px]  border w-[120px] dropdown ">
              <DropdownButton />
            </button>
            <Filter />
          </div>
          <div className="logo">
            <img width={80} src={Logoimage} alt="logo" />
          </div>
          <div className="flex gap-[18px] items-center  ">
            <Link to="/">
              <div className="text-[#606060] font-light text-[14px] ">
                Sign In
              </div>
            </Link>
            <Link>
              <div className="text-[15px] flex items-center gap-[5px]  ">
                <FaBasketShopping />
                <p className="text-[15px] font-light ">My Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#565CE0] flex  justify-center"><LabNav/></div>
    </>
  );
}

export default LaboratoryHead;
