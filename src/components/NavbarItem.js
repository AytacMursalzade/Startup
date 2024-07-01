import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openSubmenu, closeSubmenu } from '../redux/navbarSlice';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Card from './Card';
import ShopCard from './ShopCard';
import BlogCard from './BlogCard';
import ShortcodeCard from './ShortcodeCard';

const Navbar = (props) => {
  const dispatch = useDispatch();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const closeAllMenus = () => {
    setHoveredItem(null);
  };

  const handleHover = (item) => {
    dispatch(openSubmenu());
    closeAllMenus();
    setHoveredItem(item);
    setIsSubmenuOpen(true);
  };

  const handleLeave = () => {};

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSubmenuOpen && !event.target.closest('.menu-item')) {
        setIsSubmenuOpen(false);
        closeAllMenus();
        dispatch(closeSubmenu());
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSubmenuOpen, dispatch]);

  const data = [
    { id: 1, concept: "CATEGORIES", subMenu: <Card />, icon: <GiHamburgerMenu /> },
    { id: 2, concept: "Home", subMenu: <Card /> },
    { id: 3, concept: "Shop", subMenu: <ShopCard /> },
    { id: 4, concept: "Vendors" },
    { id: 5, concept: "Shortcodes", subMenu: <ShortcodeCard /> },
    { id: 6, concept: "Blog", subMenu: <BlogCard /> },
    { id: 7, concept: "Media" },
    { id: 8, concept: "About" },
    { id: 9, concept: "Contact" },
    { id: 10, concept: "Pages" },
  ];

  return (
    <div className={`h-[70px] bg-[${props.bgColor}] flex justify-between`}>
      <nav>
        <ul className="flex gap-[44px] text-white mt-[3%] ml-[8%] text-[14px] font-medium">
          {data.map((item) => (
            <Link key={item.id} to={`/${item.concept.toLowerCase()}`}>
              <li
                onMouseEnter={() => handleHover(item.id)}
                onMouseLeave={handleLeave}
                className={`menu-item relative border-t-2 border-transparent hover:border-white transition duration-300 ${isSubmenuOpen && hoveredItem === item.id ? 'visible' : ''}`}
                style={{ width: item.id === 1 ? '240px' : 'auto', justifyContent: item.id === 1 ? 'center' : 'initial' }}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.concept}
                {isSubmenuOpen && hoveredItem === item.id && item.subMenu && (
                  <div className="absolute z-50 w-[200px] h-auto top-12 left-0 bg-white text-black">
                    {item.subMenu}
                  </div>
                )}
                {isSubmenuOpen && hoveredItem === item.id && item.concept === "Media" && (
                  <div className="absolute z-50 w-[200px] h-auto top-12 left-0 bg-white text-black">
                    <ul className='w-[200px] h-[80px] bg-[white] px-[25px] text-[14px] font-normal text-[#484848]'>
                      <Link to="/media">
                        <li className="w-[150px] h-[50px] border-b-[2px] flex items-center py-[18px] hover:text-[#2695ff] text-[14px] font-normal">Media</li>
                      </Link>
                      <Link to="/projects">
                        <li className="w-[150px] h-[35px] flex items-center py-[18px] hover:text-[#2695ff] text-[14px] font-normal">Projects</li>
                      </Link>
                    </ul>
                  </div>
                )}
                {isSubmenuOpen && hoveredItem === item.id && item.concept === "Pages" && (
                  <div className="absolute z-50 w-[200px] h-auto top-12 left-0 bg-white text-black">
                    <ul className='w-[200px] h-[80px] bg-[white] px-[25px] text-[14px] font-normal text-[#484848]'>
                      <Link to="/media">
                        <li className="w-[150px] h-[50px] border-b-[2px] flex items-center py-[18px] hover:text-[#2695ff] text-[14px] font-normal">Sitemap</li>
                      </Link>
                      <Link to="/projects">
                        <li className="w-[150px] h-[35px] flex items-center py-[18px] hover:text-[#2695ff] text-[14px] font-normal">404 Not Found</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
