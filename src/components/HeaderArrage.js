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

function HeaderArrage({basketColor,Logoimage,bgColor,display2}) {
  const handMade = {
    display: display2 ? 'block' : 'none',
  };
  return (
    <>
      <div className="headerTop flex justify-between h-[45px] px-[75px] py-[8px] border border-bottom border-black-500/40 ">
        <div className="headersmall flex justify-between gap-[28px] ">
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
      <div style={{backgroundColor:bgColor,...handMade}} className="headerTop  flex justify-between h-[45px] px-[75px] py-[8px] border border-bottom border-black-500/40 ">
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
      <div className="logoIcons flex col-3  justify-between items-center px-[75px] py-[30px] max-600:w-[100%]  ">
        <div className="logoicon max-600:flex max-600:justify-between">
          <div className="logo">
            <img width={80} src={Logoimage} alt="logo" />
          </div>
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
          <button className="rounded-l-[45px] px-[8px]  border w-[120px] dropdown ">
            <DropdownButton />
          </button>
          <Filter />
        </div>
        <div className="basket flex gap-[15px]">
          <div className="flex flex-col">
            <Link>
              <p className="text-end hover:text-[#3C55D6] font-bold ">
                My Card
              </p>
            </Link>
            <Link>
              <p className="text-[#999999]">0 items - $0.00</p>
            </Link>
          </div>
          <Link>
            <div style={{color:basketColor}} className="text-[25px] mt-[10px] ">
              <FaBasketShopping />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeaderArrage;
