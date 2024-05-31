import React from "react";
import { Link } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const NavbarBook = ({ bgColorTop }) => {
  return (
    <div className="flex flex-col">
      <div
        style={{ backgroundColor: bgColorTop }}
        className="headerTop text-white flex justify-between h-[45px] px-[75px] py-[8px]  "
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
          <Link>
            <div className="mr-[94px] text-white font-light">Sign in</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarBook;
