import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-ibid.png";
import { FaBasketShopping } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";

function HeaderArrage() {
  return (
    <>
        <div className="flex justify-between h-[45px] py-[8px] border border-bottom border-black-500/40 ">
            <div className="grid grid-cols-3 gap-x-16 ">
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
            <div className="grid grid-cols-7"></div>
            <div className="grid grid-cols-2 justify-end">
            <Link to="/">
                <div className="flex gap-[2px]">
                <FaTruck className="text-[20px] pt-[5px]" />
                <p>Order Tracking</p>
                </div>
            </Link>
            <Link to="/">
                <div className="flex gap-[2px]">
                <LuHeart className="text-[20px] pt-[5px]" />
                <p>Wishlist</p>
                </div>
            </Link>
            </div>
        </div>
        <div className="flex col-3 justify-around items-center py-[30px] ">
            <div>
            <img width={80} src={Logo} alt="logo" />
            </div>
            <div>Filter</div>
            <div className="flex gap-[15px]">
                <div className="flex flex-col">
                    <Link>
                    <p className="text-end hover:text-[#395b7c] font-bold ">My Card</p>
                    </Link>
                    <Link>
                    <p className="text-[#999999]">0 items - $0.00</p>
                    </Link>
                </div>
                <Link>
                    <div className="text-[25px] mt-[10px] text-[#395b7c] ">
                        <FaBasketShopping />
                    </div>
                </Link>
            </div>
        </div>
    </>
  );
}

export default HeaderArrage;
