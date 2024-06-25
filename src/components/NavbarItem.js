import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSubmenu, closeSubmenu } from "../redux/navbarSlice";
import { Link } from "react-router-dom";
import Card from "./Card";
import ShopCard from "./ShopCard";
import BlogCard from "./BlogCard";
import ShortcodeCard from "./ShortcodeCard";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const NavbarItem = (props) => {
  const dispatch = useDispatch();
  const { isSubmenuOpen } = useSelector((state) => state.navbar);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (item) => {
    dispatch(openSubmenu());
    setHoveredItem(item);
  };

  const handleLeave = () => {
    dispatch(closeSubmenu());
    setHoveredItem(null);
  };

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  return (
    <div className={`h-[70px] bg-[${props.bgColor}] flex justify-between`}>
      <nav className="w-full">
        <ul
          className={`flex gap-[44px] text-white items-center text-[14px] font-medium ${
            isMobileMenuOpen ? "nav-links-mobile flex-col" : "nav-links"
          }`}
        >
          <Link to="/categories">
            <li
              onMouseEnter={() => handleHover("categories")}
              onMouseLeave={handleLeave}
              className="relative ml-[70px] w-[240px] justify-between font-medium h-[70px] flex gap-[5px] items-center py-[20px] px-[15px] text-black bg-white"
            >
              <GiHamburgerMenu />
              CATEGORIES
              <span onClick={() => toggleCategory("categories")} className="cursor-pointer">
                {expandedCategory === "categories" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {isSubmenuOpen && hoveredItem === "categories" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <Card />
                </div>
              )}
              {expandedCategory === "categories" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-category1">
                      <li className="p-[10px]">Sub-category 1</li>
                    </Link>
                    <Link to="/sub-category2">
                      <li className="p-[10px]">Sub-category 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
          <Link to="/home">
            <li
              onMouseEnter={() => handleHover("home")}
              onMouseLeave={handleLeave}
              className="relative"
            >
              Home
              {isSubmenuOpen && hoveredItem === "home" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <Card />
                </div>
              )}
            </li>
          </Link>
          <Link to="/shop">
            <li
              onMouseEnter={() => handleHover("shop")}
              onMouseLeave={handleLeave}
              className="relative"
            >
              Shop
              <span onClick={() => toggleCategory("shop")} className="cursor-pointer">
                {expandedCategory === "shop" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {isSubmenuOpen && hoveredItem === "shop" && (
                <div className="submenu absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ShopCard />
                </div>
              )}
              {expandedCategory === "shop" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-shop1">
                      <li className="p-[10px]">Sub-shop 1</li>
                    </Link>
                    <Link to="/sub-shop2">
                      <li className="p-[10px]">Sub-shop 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
          <Link to="/vendors">
            <li className="relative">
              Vendors
              <span onClick={() => toggleCategory("vendors")} className="cursor-pointer">
                {expandedCategory === "vendors" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {expandedCategory === "vendors" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-vendor1">
                      <li className="p-[10px]">Sub-vendor 1</li>
                    </Link>
                    <Link to="/sub-vendor2">
                      <li className="p-[10px]">Sub-vendor 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
          <Link to="/shortcodes">
            <li
              onMouseEnter={() => handleHover("shortcodes")}
              onMouseLeave={handleLeave}
              className="relative"
            >
              Shortcodes
              <span onClick={() => toggleCategory("shortcodes")} className="cursor-pointer">
                {expandedCategory === "shortcodes" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {isSubmenuOpen && hoveredItem === "shortcodes" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ShortcodeCard />
                </div>
              )}
              {expandedCategory === "shortcodes" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-shortcode1">
                      <li className="p-[10px]">Sub-shortcode 1</li>
                    </Link>
                    <Link to="/sub-shortcode2">
                      <li className="p-[10px]">Sub-shortcode 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
          <Link to="/blog">
            <li
              onMouseEnter={() => handleHover("blog")}
              onMouseLeave={handleLeave}
              className="relative"
            >
              Blog
              <span onClick={() => toggleCategory("blog")} className="cursor-pointer">
                {expandedCategory === "blog" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {isSubmenuOpen && hoveredItem === "blog" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <BlogCard />
                </div>
              )}
              {expandedCategory === "blog" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-blog1">
                      <li className="p-[10px]">Sub-blog 1</li>
                    </Link>
                    <Link to="/sub-blog2">
                      <li className="p-[10px]">Sub-blog 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
          <Link to="/media">
            <li
              onMouseEnter={() => handleHover("media")}
              onMouseLeave={handleLeave}
              className="relative"
            >
              Media
              <span onClick={() => toggleCategory("media")} className="cursor-pointer">
                {expandedCategory === "media" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {isSubmenuOpen && hoveredItem === "media" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul className="w-[200px] h-[auto] bg-white px-[25px] text-[14px] font-normal text-[#484848]">
                    <Link to="/media">
                      <li className="w-[150px] h-[50px] border-b-[2px] flex items-center py-[18px] hover:text-[#2695ff] text-[14px] font-normal">
                        Media
                      </li>
                    </Link>
                    <Link to="/projects">
                      <li className="w-[150px] h-[35px] flex items-center py-[18px] hover:text-[#2695ff] text-[14px] font-normal">
                        Projects
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
              {expandedCategory === "media" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-media1">
                      <li className="p-[10px]">Sub-media 1</li>
                    </Link>
                    <Link to="/sub-media2">
                      <li className="p-[10px]">Sub-media 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
          <Link to="/about">
            <li className="relative">
              About
              <span onClick={() => toggleCategory("about")} className="cursor-pointer">
                {expandedCategory === "about" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {expandedCategory === "about" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-about1">
                      <li className="p-[10px]">Sub-about 1</li>
                    </Link>
                    <Link to="/sub-about2">
                      <li className="p-[10px]">Sub-about 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
          <Link to="/contact">
            <li className="relative">
              Contact
              <span onClick={() => toggleCategory("contact")} className="cursor-pointer">
                {expandedCategory === "contact" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {expandedCategory === "contact" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-contact1">
                      <li className="p-[10px]">Sub-contact 1</li>
                    </Link>
                    <Link to="/sub-contact2">
                      <li className="p-[10px]">Sub-contact 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
          <Link to="/pages">
            <li
              onMouseEnter={() => handleHover("pages")}
              onMouseLeave={handleLeave}
              className="relative"
            >
              Pages
              <span onClick={() => toggleCategory("pages")} className="cursor-pointer">
                {expandedCategory === "pages" ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              {isSubmenuOpen && hoveredItem === "pages" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul className="w-[200px] h-[auto] bg-white px-[25px] text-[14px] font-normal text-[#484848]">
                    <Link to="/media">
                      <li className="w-[150px] h-[50px] border-b-[2px] flex items-center py-[18px] hover:text-[#2695ff] text-[14px] font-normal">
                        Sitemap
                      </li>
                    </Link>
                    <Link to="/projects">
                      <li className="w-[150px] h-[35px] flex items-center py-[18px] hover:text-[#2695ff] text-[14px] font-normal">
                        404 Not Found
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
              {expandedCategory === "pages" && (
                <div className="absolute z-50 w-[240px] h-[auto] top-12 left-0 bg-white text-black dropdown-menu">
                  <ul>
                    <Link to="/sub-pages1">
                      <li className="p-[10px]">Sub-pages 1</li>
                    </Link>
                    <Link to="/sub-pages2">
                      <li className="p-[10px]">Sub-pages 2</li>
                    </Link>
                  </ul>
                </div>
              )}
            </li>
          </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </nav>
    </div>
  );
};

export default NavbarItem;
