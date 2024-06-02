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

function NftTopHead({ bgColor, src, display9 }) {
  const dispatch = useDispatch();
  const { isSubmenuOpen } = useSelector((state) => state.navbar);

  const [isHomeHovered, setIsHomeHovered] = useState({
    home: false,
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
    display: display9 ? "block" : "none",
  };

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="headerNav h-[100px] flex justify-around "
      >
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
        <div className="logoIcons flex  items-center gap-[130px] px-[75px] py-[30px] ">
          <nav>
            <ul className="flex gap-[44px] text-[black] items-center text-[14px] font-medium ">
              <Link to="/home">
                <li
                  onMouseEnter={() => handleHomeHover("home")}
                  onMouseLeave={() => handleHomeLeave("home")}
                  className={`relative border-transparent border-white transition duration-300 ${
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

              <Link style={listBlock} to="/browsenft">
                <li className="transition duration-300">Browse NFTs</li>
              </Link>

              <Link to="/nftmarketplace">
                <li className="transition duration-300">NFT Marketplace</li>
              </Link>
              <Link to="/about">
                <li className=" transition duration-300">About</li>
              </Link>
              <Link to="/blog">
                <li className=" transition duration-300">Blog</li>
              </Link>
              <Link to="/FAQ">
                <li>FAQ</li>
              </Link>
            </ul>
          </nav>
          <div className="flex gap-[22px] items-center ">
            <div className="flex bg-white border-solid shadow-lg rounded-l-3xl rounded-r-3xl ">
              <button className="rounded-l-[45px] px-[8px] border w-[60px] dropdown ">
                <DropdownButton />
              </button>
              <Filter />
            </div>

            <div className="flex gap-[15px]">
              <FaRegHeart className="text-[black] text-[23px] " />
              <FaBasketShopping className="text-[black] text-[23px] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NftTopHead;
