import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { FaBasketShopping } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { openSubmenu, closeSubmenu } from "../redux/navbarSlice";

function GovernHeader({ bgColor, basketColor,src }) {
  const dispatch = useDispatch();
  const {isSubmenuOpen} = useSelector(state => state.navbar);


  const [isHomeHovered, setIsHomeHovered] = useState({
    home: false
  });
  

  const handleHomeHover = (home) => {
    dispatch(openSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: true });
 
  };

  const handleHomeLeave = (home) => {
    dispatch(closeSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: false });
  };

 

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="headerNav h-[100px]"
      >
        <div className="logoIcons flex  w-[100%] justify-between  items-center gap-[90px] px-[75px] py-[30px] ">
          <div className="logoicon">
            <div className="logo">
              <img width={80} src={src} alt="logo" />
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
          
          <nav>
            <ul className="flex gap-[44px]  text-[black] items-center text-[14px] font-medium ">
              <Link to="/home">
                <li
                  onMouseEnter={() => handleHomeHover("home")}
                  onMouseLeave={() => handleHomeLeave("home")}
                  className={`border-b-2 relative border-transparent font-bold hover:text-[#4AD493] hover:border-[#4AD493] transition duration-300 ${
                    isSubmenuOpen ? "visible" : ""
                  }`}
                >
                  Home
                  {isSubmenuOpen && isHomeHovered["home"] && (
                    <div
                    className=" absolute z-50 w-[70px] h-[70px] top-8 left-0 bg-white text-black"
                  >
                    <Card />
                    </div>
                  )}
                </li>
              </Link>

              <Link to="/auctions">
                <li className="border-b-2 border-transparent font-bold hover:text-[#4AD493] hover:border-[#4AD493] transition duration-300">
                    AUCTIONS
                </li>
              </Link>

              <Link to="/about">
                <li className="border-b-2 border-transparent font-bold hover:text-[#4AD493] hover:border-[#4AD493] transition duration-300">
                  ABOUT
                </li>
              </Link>
              <Link to="/contact">
                <li className="border-b-2 border-transparent font-bold hover:text-[#4AD493] hover:border-[#4AD493] transition duration-300">
                  CONTACT
                </li>
              </Link>
              <Link to="/faq">
                <li className="border-b-2 border-transparent font-bold hover:text-[#4AD493] hover:border-[#4AD493] transition duration-300">
                  FAQ
                </li>
              </Link>
              <Link to="/purchasetheme">
                <li className="border-b-2 border-transparent font-bold hover:text-[#4AD493] hover:border-[#4AD493] transition duration-300">
                  PURCHASE THEME
                </li>
              </Link>
            </ul>
          </nav>
          <div className="basket flex gap-[15px]">
            <div>
             
                <button className=" w-[150px] h-[38px] flex bg-white  gap-[5px]  justify-center items-center rounded-[5px] border-[1.5px] border-b-3 border-[#252525]   hover:text-[#4AD493] text-[14px] font-semibold ">INQUIRY
                </button>
             
              
            </div>
            <Link>
              <div
                style={{ color: basketColor }}
                className="text-[25px] mt-[10px] "
              >
                
              </div>
            </Link>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default GovernHeader;
