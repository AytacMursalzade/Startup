import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Slide from "../components/Slide";

function Header() {
  return (
    <>
      
      <div className="h-[70px] bg-[#2695FF] flex justify-between ">
        <nav>
            <ul className="flex gap-[44px] text-white items-center text-[14px] font-medium ">
                <Link><li className="ml-[70px] w-[240px] justify-center font-medium h-[70px] flex gap-[5px] items-center py-[20px] px-[15px] text-black bg-[white] "><GiHamburgerMenu /> CATEGORIES</li></Link>
                <Link><li className="hover:border-white-t-1">Home</li></Link>
                <Link><li className="hover:border-white-t-1">Shop</li></Link>
                <Link><li className="hover:border-white-t-1">Vendors</li></Link>
                <Link><li className="hover:border-white-t-1">Shortcodes</li></Link>
                <Link><li className="hover:border-white-t-1">Blog</li></Link>
                <Link><li className="hover:border-white-t-1">Media</li></Link>
                <Link><li className="hover:border-white-t-1">About</li></Link>
                <Link><li className="hover:border-white-t-1">Contact</li></Link>
                <Link><li className="hover:border-white-t-1">Pages</li></Link>
            </ul>
        </nav>
        <Link><div className="mr-[94px] text-white font-bold py-[20px] ">Sign in</div></Link>
        
      </div>
      <Slide />
    </>
  );
}

export default Header;
