import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSubmenu, closeSubmenu } from '../redux/slice/NavbarSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const {isSubmenuOpen} = useSelector(state => state.navbar);

  const handleCategoriesHover = () => {
    dispatch(openSubmenu());
  };

  const handleCategoriesLeave = () => {
    dispatch(closeSubmenu());
  };
  

  return (
    <div className="h-[70px] bg-[#2695FF] flex justify-between">
      <nav>
        <ul className="flex gap-[44px] text-white items-center text-[14px] font-medium ">
        <li
            onMouseEnter={handleCategoriesHover}
            onMouseLeave={handleCategoriesLeave}
            className={`ml-[70px] w-[240px] justify-center font-medium h-[70px] flex gap-[5px] items-center py-[20px] px-[15px] text-black bg-[white] ${isSubmenuOpen ? 'visible' : ''}`}
          >
            CATEGORIES
            {isSubmenuOpen && (
              <div>
                <ul  className="absolute w-[80px] h-[80px]  top-full left-0 bg-white text-black">
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Home
            {isSubmenuOpen && (
              <div className="absolute  w-[14px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Shop
            {isSubmenuOpen && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Vendors
            {isSubmenuOpen && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Shortcodes
            {isSubmenuOpen && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Blog
            {isSubmenuOpen && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Media
            {isSubmenuOpen && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>About
            {isSubmenuOpen && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Contact
            {isSubmenuOpen && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
          <li onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesLeave} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Pages
            {isSubmenuOpen && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>
                  <li>Laptops, Tablets & Phones</li>                 
                </ul>
              </div>
            )}
          </li>
         
          
        </ul>
      </nav>
      <div className="mr-[94px] text-white font-bold py-[20px] ">Sign in</div>
        
    </div>
  );
};

export default Navbar;
