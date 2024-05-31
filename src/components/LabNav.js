import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSubmenu, closeSubmenu } from '../redux/navbarSlice';
import { Link } from 'react-router-dom';
import Card from './Card';



const LabNav = (props) => {
  const dispatch = useDispatch();
  const {isSubmenuOpen} = useSelector(state => state.navbar);


   const [isHomeHovered, setIsHomeHovered] = useState({
    home: false
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

  
  
  const handleHomeHover = (home) => {
    dispatch(openSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: true });
 
  };

  const handleHomeLeave = (home) => {
    dispatch(closeSubmenu());
    setIsHomeHovered({ ...isHomeHovered, [home]: false });
   
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
    <div className={`h-[70px] bg-[${props.bgColor}] flex justify-between items-center `}>
      <nav>
        <ul className="flex gap-[44px] text-white items-center text-[14px] font-medium ">
          
          <Link to="/home"><li onMouseEnter={() => handleHomeHover('home')}
            onMouseLeave={() => handleHomeLeave('home')} className={`border-t-2 border-transparent relative border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Home
            {isSubmenuOpen && isHomeHovered['home'] && (
              <div className=" absolute z-50 w-[120px] h-[70px] top-12 left-0 bg-white text-black">
                <Card />
               
              </div>
            )}
          </li></Link>
          <Link to="/auction"><li> Auction
          </li></Link>
          <Link to="/vendors"><li>Vendors
          </li></Link>
          <Link to="/shortcodes"><li>Shortcodes
          </li></Link>
          <Link to="/blog"><li> Blog
          </li></Link>
          <Link to="/media"><li onMouseEnter={() => handleMediaHover('media')}
            onMouseLeave={() => handleMediaLeave('media')} className={`border-t-2 border-transparent relative hover:border-white transition duration-300 ${isSubmenuOpen ? 'visible' : ''}`}>Media
            {isSubmenuOpen && isMediaHovered['media'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                <ul>
                  <Link to="/media"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] text-[14px] font-normal ">Media</li></Link>
                  <Link to="/projects"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] text-[14px] font-normal ">Projects</li></Link>
                </ul>
              </div>
            )}
          </li></Link>
        
          <Link to="/pages"><li onMouseEnter={() => handlePagesHover('pages')}
            onMouseLeave={() => handlePagesLeave('pages')} className={`border-t-2 border-transparent relative hover:border-white transition duration-300${isSubmenuOpen ? 'visible' : ''}`}>Pages
            {isSubmenuOpen && isPagesHovered['pages'] && (
              <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                <ul>
                  <Link to="/media"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#565CE0] text-[14px] font-normal ">Sitemap</li></Link>
                  <Link to="/media"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#565CE0] text-[14px] font-normal ">About</li></Link>
                  <Link to="/media"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#565CE0] text-[14px] font-normal ">Contact</li></Link>
                  <Link to="/projects"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#565CE0] text-[14px] font-normal ">404 Not Found</li></Link>
                </ul>
              </div>
            )}
          </li></Link>
         
          
        </ul>
      </nav>
        
    </div>
  );
};

export default LabNav;
