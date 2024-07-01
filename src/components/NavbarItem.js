import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openSubmenu, closeSubmenu } from '../redux/navbarSlice';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Card from './Card';
import ShopCard from './ShopCard';
import BlogCard from './BlogCard';
import ShortcodeCard from './ShortcodeCard';
import { GiSplitCross } from "react-icons/gi";
import MediaCard from './MediaCard';
import PagesCard from './PagesCard';

const NavbarItem = (props) => {
  const dispatch = useDispatch();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpenSubmenu = (item) => {
    dispatch(openSubmenu());
    setActiveItem(item);
    setIsSubmenuOpen(true);
  };

  const handleCloseSubmenu = () => {
    dispatch(closeSubmenu());
    setActiveItem(null);
    setIsSubmenuOpen(false);
  };

  const handleMobileClick = (item) => {
    if (isMobile) {
      if (activeItem === item) {
        handleCloseSubmenu();
      } else {
        handleOpenSubmenu(item);
      }
    }
  };

  const handleClickOutside = (event) => {
    if (isSubmenuOpen && !event.target.closest('.menu-item')) {
      handleCloseSubmenu();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSubmenuOpen]);

  const data = [
    { id: 1, concept: "CATEGORIES", subMenu: <Card />, icon: <GiHamburgerMenu />},
    { id: 2, concept: "Home", subMenu: <Card /> },
    { id: 3, concept: "Shop", subMenu: <ShopCard /> },
    { id: 4, concept: "Vendors" },
    { id: 5, concept: "Shortcodes", subMenu: <ShortcodeCard /> },
    { id: 6, concept: "Blog", subMenu: <BlogCard /> },
    { id: 7, concept: "Media", subMenu: <MediaCard/>  },
    { id: 8, concept: "About" },
    { id: 9, concept: "Contact" },
    { id: 10, concept: "Pages", subMenu: <PagesCard />   },
  ];

  return (
    <div className={`h-[70px] bg-[${props.bgColor}] flex justify-between`}>
      <nav>
        <ul className={`${isMobile ? "nav-links-mobile" : "nav-links"} flex gap-[44px] text-white mt-[3%] ml-[1%] text-[14px] font-medium`} >
          {data.map((item) => (
            <li
              key={item.id}
              className={`menu-item relative border-t-2 border-transparent hover:border-white transition duration-300 ${isSubmenuOpen && activeItem === item.id ? 'visible' : ''}`}
              onClick={() => handleMobileClick(item.id)}
              onMouseEnter={() => !isMobile && handleOpenSubmenu(item.id)}
              onMouseLeave={() => !isMobile && handleCloseSubmenu()}
              style={{ width: item.id === 1 ? '240px' : 'auto', justifyContent: item.id === 1 ? 'center' : 'initial' }}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.concept}
              {isSubmenuOpen && activeItem === item.id && item.subMenu && (
                <div className="absolute z-50 w-[200px] h-auto top-12 left-0 bg-white text-black">
                  {item.subMenu}
                </div>
              )}
            </li>
          ))}
        </ul>
        <button onClick={() => setIsMobile(!isMobile)} className='mobilMenuIcon'>{isMobile ? <GiSplitCross /> : <GiHamburgerMenu />}</button>
      </nav>
    </div>
  );
};

export default NavbarItem;
