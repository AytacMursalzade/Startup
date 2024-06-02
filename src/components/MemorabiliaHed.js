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
import { FaRegHeart } from "react-icons/fa";

function MemorabiliaHed({ bgColor,src, display9}) {
  const dispatch = useDispatch();
  const { isSubmenuOpen } = useSelector((state) => state.navbar);

  const [isHomeHovered, setIsHomeHovered] = useState({
    home: false,
  });
  const [isMediaHovered, setIsMediaHovered] = useState({
    media: false
  });
  const [isPagesHovered, setIsPagesHovered] = useState({
    pages: false
  });


  const handleMediaHover = (media) => {
    dispatch(openSubmenu());
    setIsMediaHovered({ ...isMediaHovered, [media]: true });
 
  };

  const handleMediaLeave = (media) => {
    dispatch(closeSubmenu());
    setIsMediaHovered({ ...isMediaHovered, [media]: false });
   
  };
  const handlePagesHover = (pages) => {
    dispatch(openSubmenu());
    setIsPagesHovered({ ...isPagesHovered, [pages]: true });
 
  };

  const handlePagesLeave = (pages) => {
    dispatch(closeSubmenu());
    setIsPagesHovered({ ...isPagesHovered, [pages]: false });
   
  };

  const handleHomeHover = (home) => {
    dispatch(openSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: true });
  };

  const handleHomeLeave = (home) => {
    dispatch(closeSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: false });
  };

  const listBlock = {
    display: display9 ? "block" : "none",
  };
  
  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="headerNav h-[100px] flex justify-around "
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
         
          <nav>
            <ul className="flex gap-[44px] text-[black] items-center text-[14px] font-medium ">
              <Link to="/home">
                <li
                  onMouseEnter={() => handleHomeHover("home")}
                  onMouseLeave={() => handleHomeLeave("home")}
                  className={`hover:text-[#078169] relative border-transparent border-white transition duration-300 ${
                    isSubmenuOpen ? "visible" : ""
                  }`}
                >
                  Home
                  {isSubmenuOpen && isHomeHovered["home"] && (
                    <div className=" absolute z-50 w-[70px] h-[70px] top-8 left-0 bg-white text-black">
                      <Card />
                    </div>
                  )}
                </li>
              </Link>

              <Link style={listBlock} to="/auctions">
                <li className="hover:text-[#078169]  transition duration-300">
                  Auctions
                </li>
              </Link>

              <Link to="/vendors">
                <li className="hover:text-[#078169] transition duration-300">
                  Vendors
                </li>
              </Link>
              <Link to="/shortcodes">
                <li className="hover:text-[#078169] transition duration-300">
                  Shortcodes
                </li>
              </Link>
              <Link to="/blog">
                <li className="hover:text-[#078169] transition duration-300">
                  Blog
                </li>
              </Link>
              <Link to="/media">
                <li
                  onMouseEnter={() => handleMediaHover("media")}
                  onMouseLeave={() => handleMediaLeave("media")}
                  className={`hover:text-[#078169] relative transition duration-300 ${
                    isSubmenuOpen ? "visible" : ""
                  }`}
                >
                  Media
                  {isSubmenuOpen && isMediaHovered["media"] && (
                    <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                      <ul>
                        <Link to="/media">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#078169] text-[14px] font-normal ">
                            Media
                          </li>
                        </Link>
                        <Link to="/projects">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#078169] text-[14px] font-normal ">
                            Projects
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
              </Link>
              <Link to="/pages">
                <li
                  onMouseEnter={() => handlePagesHover("pages")}
                  onMouseLeave={() => handlePagesLeave("pages")}
                  className={`hover:text-[#078169] relative  transition duration-300${
                    isSubmenuOpen ? "visible" : ""
                  }`}
                >
                  Pages
                  {isSubmenuOpen && isPagesHovered["pages"] && (
                    <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                      <ul>
                        <Link to="/media">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#078169] text-[14px] font-normal ">
                            Sitemap
                          </li>
                        </Link>
                        <Link to="/projects">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#078169] text-[14px] font-normal ">
                            404 Not Found
                          </li>
                        </Link>
                        <Link to="/projects">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#078169] text-[14px] font-normal ">
                            About
                          </li>
                        </Link>
                        <Link to="/projects">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#078169] text-[14px] font-normal ">
                            Contact
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
              </Link>
            </ul>
          </nav>
          <div className="flex gap-[22px] items-center "><div className="flex bg-white border-solid shadow-lg rounded-l-3xl rounded-r-3xl ">
            <button className="rounded-l-[45px] px-[8px] border w-[60px] dropdown ">
              <DropdownButton />
            </button>
            <Filter />
          </div>
          
            <div className="flex gap-[15px]">
            <FaRegHeart className="text-[black] text-[23px] "/>
            <FaBasketShopping className="text-[black] text-[23px] " />
            
            </div></div>
          
        </div>
      </div>
    </>
  );
}

export default MemorabiliaHed;
