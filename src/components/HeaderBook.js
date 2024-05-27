import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { FaBasketShopping } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import Filter from "./Filter";
import DropdownButton from "./DropdownButton";
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { openSubmenu, closeSubmenu } from "../redux/navbarSlice";

function HeaderBook({ bgColor, basketColor,src,display9,display8 }) {
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

  const listBlock = {
    display: display9 ? 'block' :'none'
  };
  const listBlockStore = {
    display: display8 ? 'block' :'none'
  };

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="headerNav h-[100px] flex justify-between "
      >
        <div className="logoIcons flex  items-center gap-[90px] px-[75px] py-[30px] ">
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
          <div className="flex bg-white border-solid shadow-lg rounded-l-3xl rounded-r-3xl ">
          <button className="rounded-l-[45px] px-[8px]   border w-[120px] dropdown ">
            <DropdownButton />
          </button>
          <Filter />
        </div>
          <nav >
            <ul className="flex gap-[44px] text-white items-center text-[14px] font-medium ">
              <Link to="/home">
                <li
                  onMouseEnter={() => handleHomeHover("home")}
                  onMouseLeave={() => handleHomeLeave("home")}
                  className={`border-t-2 relative border-transparent border-white transition duration-300 ${
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

              <Link style={listBlockStore} to="/store">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  Store
                </li>
              </Link>
              <Link style={listBlock} to="/auctions">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                 Auctions
                </li>
              </Link>

              <Link to="/blog">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  Blog
                </li>
              </Link>
              <Link to="/contact">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  Contact
                </li>
              </Link>
              <Link to="/faq">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  FAQ
                </li>
              </Link>
            </ul>
          </nav>
          <div className="basket flex gap-[15px]">
            <div>
             
                <button className=" w-[150px] h-[38px] flex bg-white  gap-[5px]  justify-center items-center rounded-[45px] hover:text-[#F27928] font-light "><FaBasketShopping className="text-[#F27928] text-[22px] "/>
                  My Card (0)
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

export default HeaderBook;
