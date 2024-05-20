import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSubmenu, closeSubmenu } from "../redux/slice/navbarSlice";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { FaTruck } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarBook = ({bgColorTop}) => {
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

  return (
    <div className="flex flex-col   ">
      <div style={{backgroundColor:bgColorTop}} className="headerTop text-white flex justify-between h-[45px] px-[75px] py-[8px]  ">
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
      {/* <div
        className={`h-[70px] bg-[${props.bgColor}] flex justify-between items-center `}
      >
        <nav className="relative">
          <ul className="flex gap-[44px] text-white items-center text-[14px] font-medium ">
            <Link to="/home">
              <li
                onMouseEnter={() => handleHomeHover("home")}
                onMouseLeave={() => handleHomeLeave("home")}
                className={`border-t-2 border-transparent border-white transition duration-300 ${
                  isSubmenuOpen ? "visible" : ""
                }`}
              >
                Home
                {isSubmenuOpen && isHomeHovered["home"] && (
                  <div className="submenu absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                    <Card />
                  </div>
                )}
              </li>
            </Link>

            <Link to="/store">
              <li className="border-t-2 border-transparent hover:border-white transition duration-300">
                Store
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
      </div> */}
    </div>
  );
};

export default NavbarBook;
