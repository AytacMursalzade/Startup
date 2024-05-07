import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Slide from "../components/Slide";



function Header() {

 

  return (
    <>
      
      <div className="headerNav h-[70px] bg-[#2695FF] flex justify-between mb-[98px] ">
        <nav>
            <ul className="flex gap-[44px] text-white items-center text-[14px] font-medium ">
                <Link><li className="ml-[70px] w-[240px] justify-center font-medium h-[70px] flex gap-[5px] items-center py-[20px] px-[15px] text-black bg-[white] "><GiHamburgerMenu /> CATEGORIES</li>
               
                </Link>
                <Link><li className="border-t-2 border-transparent border-white transition duration-300">Home</li></Link>
                <Link><li className="border-t-2 border-transparent hover:border-white transition duration-300">Shop</li></Link>
                <Link><li className="border-t-2 border-transparent hover:border-white transition duration-300">Vendors</li></Link>
                <Link><li className="border-t-2 border-transparent hover:border-white transition duration-300">Shortcodes</li></Link>
                <Link><li className="border-t-2 border-transparent hover:border-white transition duration-300">Blog</li></Link>
                <Link><li className="border-t-2 border-transparent hover:border-white transition duration-300">Media</li></Link>
                <Link><li className="border-t-2 border-transparent hover:border-white transition duration-300">About</li></Link>
                <Link><li className="border-t-2 border-transparent hover:border-white transition duration-300">Contact</li></Link>
                <Link><li className="border-t-2 border-transparent hover:border-white transition duration-300">Pages</li></Link>
            </ul>
        </nav>
        <Link><div className="mr-[94px] text-white font-bold py-[20px] ">Sign in</div></Link>
        
      </div>
      <Slide />
    </>
  );
}

export default Header;
