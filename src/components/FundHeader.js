import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { FaBasketShopping } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import src from "../assets/ibdiWhite.png";
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { openSubmenu, closeSubmenu } from "../redux/navbarSlice";

function FundHeader() {
  const dispatch = useDispatch();
  const { isSubmenuOpen } = useSelector((state) => state.navbar);

  const [isHomeHovered, setIsHomeHovered] = useState({
    home: false,
  });
  const [isPagesHovered, setIsPagesHovered] = useState({
    page: false,
  });

  const handleHomeHover = (home) => {
    dispatch(openSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: true });
  };

  const handleHomeLeave = (home) => {
    dispatch(closeSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: false });
  };
  const handlePagesHover = (pages) => {
    dispatch(openSubmenu());
    setIsPagesHovered({ ...isPagesHovered, [pages]: true });
  };

  const handlePagesLeave = (pages) => {
    dispatch(closeSubmenu());
    setIsPagesHovered({ ...isPagesHovered, [pages]: false });
  };

  return (
    <>
      <div
        
        className="headerNav w-[100%] bg-[#1C1F26] h-[100px]"
      >
        <div className="logoIcons flex justify-between items-center gap-[90px] px-[75px] py-[30px] ">
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
                    <div className=" absolute z-50 w-[70px] h-[70px] top-8 left-0 bg-white text-black">
                      <Card />
                    </div>
                  )}
                </li>
              </Link>

              <Link to="/auctions">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  Auctions
                </li>
              </Link>

              <Link to="/crowdfundings">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  Crowdfundings
                </li>
              </Link>
              <Link to="/causes">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  Causes
                </li>
              </Link>
              <Link to="/blog">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  Blog
                </li>
              </Link>
              <Link to="/shortcodes">
                <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                  Shortcodes
                </li>
              </Link>
              <Link to="/pages">
                <li
                  onMouseEnter={() => handlePagesHover("pages")}
                  onMouseLeave={() => handlePagesLeave("pages")}
                  className={`border-t-2 border-transparent relative hover:border-white transition duration-300${
                    isSubmenuOpen ? "visible" : ""
                  }`}
                >
                  Pages
                  {isSubmenuOpen && isPagesHovered["pages"] && (
                    <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                      <ul>
                        <Link to="/media">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">
                            Media
                          </li>
                        </Link>
                        <Link to="/404NotFound">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">
                            404 Not Found
                          </li>
                        </Link>
                        <Link to="/sitemap">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">
                            Sitemap
                          </li>
                        </Link>
                        <Link to="/vendors">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">
                            Vendors
                          </li>
                        </Link>
                        <Link to="/about">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">
                            About
                          </li>
                        </Link>
                        <Link to="/contact">
                          <li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">
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
          <div className="basket flex gap-[30px] items-center ">
            <h1 className="text-[16px] font-normal text-[white] ">Sign In</h1>
            <div>
              <button className="border-2 border-[#D4A619] w-[150px] h-[45px] flex gap-[5px]  justify-center items-center rounded-[45px] text-[#D4A619] hover:text-[#D4A619] font-light ">
                <FaBasketShopping className="text-[#D4A619] text-[22px] " />
                My Card (0)
              </button>
            </div>
            <Link>
              <div
                
                className="text-[25px] text-[#D4A619] mt-[10px] "
              ></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FundHeader;
