import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import { GiHamburgerMenu, GiSplitCross } from "react-icons/gi";

function Header({ bgColor }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="headerNav h-[70px] flex justify-between"
      >
        <NavbarItem />
        <Link>
          <div className="mr-[94px] text-white font-bold py-[20px]">Sign in</div>
        </Link>
      </div>
      <div className="hamburgerRes">
        <NavbarItem />
      </div>
      
    </>
  );
}

export default Header;
