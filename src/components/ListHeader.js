import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSubmenu, closeSubmenu } from '../redux/navbarSlice';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Card from './Card';
import ShopCard from './ShopCard';
import BlogCard from './BlogCard';


const ListHeader = (props) => {
  const dispatch = useDispatch();
  const {isSubmenuOpen} = useSelector(state => state.navbar);


 

  const [isCategoryHovered, setIsCategoryHovered] = useState({
    categories: false
  });
  const [isAuctionHovered, setIsAuctionHovered] = useState({
    auction: false
  });
  const [isHomeHovered, setIsHomeHovered] = useState({
    home: false
  });
  const [isShortcodesHovered, setIsShortcodesHovered] = useState({
    shortcodes: false
  });
  const [isBlogHovered, setIsBlogHovered] = useState({
    blog: false
  });
  const [isMediaHovered, setIsMediaHovered] = useState({
    media: false
  });
  const [isPagesHovered, setIsPagesHovered] = useState({
    pages: false
  });

  const handleCategoryHover = (category) => {
    dispatch(openSubmenu());
    setIsCategoryHovered({ ...isCategoryHovered, [category]: true });
 
  };

  const handleCategoryLeave = (category) => {
    dispatch(closeSubmenu());
    setIsCategoryHovered({ ...isCategoryHovered, [category]: false });
   
  };
  const handleAuctionHover = (auction) => {
    dispatch(openSubmenu());
    setIsAuctionHovered({ ...isAuctionHovered, [auction]: true });
 
  };

  const handleAuctionLeave = (auction) => {
    dispatch(closeSubmenu());
    setIsAuctionHovered({ ...isAuctionHovered, [auction]: false });
   
  };
  const handleHomeHover = (home) => {
    dispatch(openSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: true });
 
  };

  const handleHomeLeave = (home) => {
    dispatch(closeSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: false });
   
  };
  const handleShortcodesHover = (shortcodes) => {
    dispatch(openSubmenu());
    setIsShortcodesHovered({ ...isShortcodesHovered, [shortcodes]: true });
 
  };

  const handleShortcodesLeave = (shortcodes) => {
    dispatch(closeSubmenu());
    setIsShortcodesHovered({ ...isShortcodesHovered, [shortcodes]: false });
   
  };
  const handleBlogHover = (blog) => {
    dispatch(openSubmenu());
    setIsBlogHovered({ ...isBlogHovered, [blog]: true });
 
  };

  const handleBlogLeave = (blog) => {
    dispatch(closeSubmenu());
    setIsBlogHovered({ ...isBlogHovered, [blog]: false });
   
  };
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
  

  return (
    <div className={`h-[70px] bg-[#392061] flex justify-between`}>
      <nav>
        <ul className="flex gap-[44px]  text-white items-center text-[14px] font-medium ">
          <Link to="/categories"><li
            onMouseEnter={() => handleCategoryHover('categories')}
            onMouseLeave={() => handleCategoryLeave('categories')}
            className={`categoriesCattle relative ml-[70px] w-[240px] justify-center font-medium h-[70px] flex gap-[5px] items-center py-[20px] px-[15px] text-black bg-[white] ${isSubmenuOpen ? 'visible' : ''}`}
          ><GiHamburgerMenu /> 
            CATEGORIES
            {isSubmenuOpen && isCategoryHovered['categories'] &&(
              <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
               <Card />
              </div>
            )}
          </li></Link>
          <Link to="/home"><li onMouseEnter={() => handleHomeHover('home')}
            onMouseLeave={() => handleHomeLeave('home')} className={`border-t-2 border-transparent relative border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Home
            {isSubmenuOpen && isHomeHovered['home'] && (
              <div className=" absolute z-50 w-[120px] h-[70px] top-12 left-0 bg-white text-black">
                <Card />
               
              </div>
            )}
          </li></Link>
          <Link to="/auction"><li onMouseEnter={() => handleAuctionHover('auction')}
            onMouseLeave={() => handleAuctionLeave('auction')} className={`border-t-2 border-transparent relative hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Auction
            {isSubmenuOpen && isAuctionHovered['auction'] &&(
              <div className="submenu absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                <ShopCard />
              </div>
            )}
          </li></Link>
          <Link to="/vendors"><li>Vendors
          </li></Link>
          <Link to="/shortcodes"><li onMouseEnter={() => handleShortcodesHover('shortcodes')}
            onMouseLeave={() => handleShortcodesLeave('shortcodes')} className={`border-t-2 border-transparent relative hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Shortcodes
            {isSubmenuOpen && isShortcodesHovered['shortcodes'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                <ShopCard/>
              </div>
            )}
          </li></Link>
          <Link to="/blog"><li onMouseEnter={() => handleBlogHover('blog')}
            onMouseLeave={() => handleBlogLeave('blog')} className={`border-t-2 border-transparent relative hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Blog
            {isSubmenuOpen && isBlogHovered['blog'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                <BlogCard />
              </div>
            )}
          </li></Link>
          <Link to="/media"><li onMouseEnter={() => handleMediaHover('media')}
            onMouseLeave={() => handleMediaLeave('media')} className={`border-t-2 border-transparent relative hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Media
            {isSubmenuOpen && isMediaHovered['media'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                <ul>
                  <Link to="/media"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Media</li></Link>
                  <Link to="/projects"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Projects</li></Link>
                </ul>
              </div>
            )}
          </li></Link>
          <Link to="/about"><li> 
           About
          </li></Link>
          <Link to="/contact"><li>Contact
          </li></Link>
          <Link to="/pages"><li onMouseEnter={() => handlePagesHover('pages')}
            onMouseLeave={() => handlePagesLeave('pages')} className={`border-t-2 border-transparent relative hover:border-white transition duration-300${isSubmenuOpen ? 'visible' : ''}`}>Pages
            {isSubmenuOpen && isPagesHovered['pages'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                <ul>
                  <Link to="/media"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Sitemap</li></Link>
                  <Link to="/projects"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">404 Not Found</li></Link>
                </ul>
              </div>
            )}
          </li></Link>
         
          
        </ul>
        
      </nav>
      <Link><div className="mr-[94px] text-white font-bold py-[20px] ">Sign in</div></Link>
    </div>
  );
};

export default ListHeader;
