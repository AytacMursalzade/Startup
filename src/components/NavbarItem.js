import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSubmenu, closeSubmenu } from '../redux/slice/navbarSlice';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Card from './Card';
import ShopCard from './ShopCard';
import BlogCard from './BlogCard';


const Navbar = (props) => {
  const dispatch = useDispatch();
  const {isSubmenuOpen} = useSelector(state => state.navbar);

  const [isCategoryHovered, setIsCategoryHovered] = useState({
    categories: false
  });

  const handleCategoryHover = (category) => {
    dispatch(openSubmenu());
    setIsCategoryHovered({ ...isCategoryHovered, [category]: true });
 
  };

  const handleCategoryLeave = (category) => {
    dispatch(closeSubmenu());
    setIsCategoryHovered({ ...isCategoryHovered, [category]: false });
   
  };

  return (
    <div className={`h-[70px] bg-[${props.bgColor}] flex justify-between`}>
      <nav className='relative'>
        <ul className="flex gap-[44px] text-white items-center text-[14px] font-medium ">
          <Link to="/categories"><li
            onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')}
            className={`ml-[70px] w-[240px] justify-center font-medium h-[70px] flex gap-[5px] items-center py-[20px] px-[15px] text-black bg-[white] ${isSubmenuOpen ? 'visible' : ''}`}
          ><GiHamburgerMenu /> 
            CATEGORIES
            {isSubmenuOpen && isCategoryHovered['categories'] &&(
              <div className="submenu absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
               <Card />
              </div>
            )}
          </li></Link>
          <Link to="/home"><li onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Home
            {isSubmenuOpen && isCategoryHovered['categories'] && (
              <div className="submenu absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <Card />
               
              </div>
            )}
          </li></Link>
          <Link to="/shop"><li onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Shop
            {isSubmenuOpen && isCategoryHovered['categories'] &&(
              <div className="submenu absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ShopCard />
              </div>
            )}
          </li></Link>
          <Link to="/vendors"><li onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent hover:border-white transition duration-300${isSubmenuOpen ? 'visible' : ''}`}>Vendors
            {isSubmenuOpen && isCategoryHovered['categories'] &&(
              <div className="submenu absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
               
              </div>
            )}
          </li></Link>
          <Link to="/shortcodes"><li onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Shortcodes
            {isSubmenuOpen && isCategoryHovered['categories'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ShopCard/>
              </div>
            )}
          </li></Link>
          <Link to="/blog"><li onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Blog
            {isSubmenuOpen && isCategoryHovered['categories'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <BlogCard />
              </div>
            )}
          </li></Link>
          <Link to="/media"><li onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Media
            {isSubmenuOpen && isCategoryHovered['categories'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <Link to="/media"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Media</li></Link>
                  <Link to="/projects"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Projects</li></Link>
                </ul>
              </div>
            )}
          </li></Link>
          <Link to="/about"><li onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent hover:border-white transition duration-300${isSubmenuOpen ? 'visible' : ''}`}>About
            {isSubmenuOpen && isCategoryHovered['categories'] &&(
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <Card />
              </div>
            )}
          </li></Link>
          <Link to="/contact"><li  onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent hover:border-white transition duration-300${isSubmenuOpen ? 'visible' : ''}`}>Contact
            {isSubmenuOpen && isCategoryHovered['categories'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <Card />
              </div>
            )}
          </li></Link>
          <Link to="/pages"><li onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')} className={`border-t-2 border-transparent hover:border-white transition duration-300${isSubmenuOpen ? 'visible' : ''}`}>Pages
            {isSubmenuOpen && isCategoryHovered['categories'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-full left-0 bg-white text-black">
                <ul>
                  <Link to="/media"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Sitemap</li></Link>
                  <Link to="/projects"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">404 Not Found</li></Link>
                </ul>
              </div>
            )}
          </li></Link>
         
          
        </ul>
      </nav>
        
    </div>
  );
};

export default Navbar;
