import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSubmenu, closeSubmenu } from "../redux/navbarSlice";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import BlogCard from "../components/BlogCard";
import Logoimage from "../assets/logo-ibid.png";
import { RiAdminFill } from "react-icons/ri";

function FreelancerHeader() {
  const dispatch = useDispatch();
  const { isSubmenuOpen } = useSelector((state) => state.navbar);

  const [isBlogHovered, setIsBlogHovered] = useState({
    blog: false,
  });
  const [isFindFreelancerHovered, setIsFindFreelancerHovered] = useState({
    findfreelancer: false,
  });
  const [isHomeHovered, setIsHomeHovered] = useState({
    home: false,
  });
  const [isBrowseJobsHovered, setIsBrowseJobsHovered] = useState({
    browseJobs: false,
  });

  const handleBrowseJobsHover = (browseJobs) => {
    dispatch(openSubmenu());
    setIsBrowseJobsHovered({ ...isBrowseJobsHovered, [browseJobs]: true });
  };

  const handleBrowseJobsLeave = (browseJobs) => {
    dispatch(closeSubmenu());
    setIsBrowseJobsHovered({ ...isBrowseJobsHovered, [browseJobs]: false });
  };
  const handleFindFreelancerHover = (findFreelancer) => {
    dispatch(openSubmenu());
    setIsFindFreelancerHovered({
      ...isFindFreelancerHovered,
      [findFreelancer]: true,
    });
  };

  const handleFindFreelancerLeave = (findFreelancer) => {
    dispatch(closeSubmenu());
    setIsFindFreelancerHovered({
      ...isFindFreelancerHovered,
      [findFreelancer]: false,
    });
  };
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
  return (
    <div>
      <nav>
        <ul className="flex gap-[44px] mt-[25px] justify-around text-[black] items-center text-[14px] font-medium ">
          <div className="logo">
            <img width={80} src={Logoimage} alt="logo" />
          </div>

          <Link to="/browsejobs">
            <nav>
              <ul className="flex gap-[44px] text-[black] items-center text-[14px] font-medium ">
                <Link to="/home">
                  <li
                    onMouseEnter={() => handleHomeHover("home")}
                    onMouseLeave={() => handleHomeLeave("home")}
                    className={`font-semibold relative text-[#454545] text-[15px] ${
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
                <Link to="/browsejobs">
                  <li
                    onMouseEnter={() => handleBrowseJobsHover("browsejobs")}
                    onMouseLeave={() => handleBrowseJobsLeave("browsejobs")}
                    className={`font-semibold  relative text-[#454545] text-[15px] ${
                      isSubmenuOpen ? "visible" : ""
                    }`}
                  >
                    Browse Jobs
                    {isSubmenuOpen && isBrowseJobsHovered["browsejobs"] && (
                      <div className=" absolute z-50 w-[70px] h-[70px] top-8 left-0 bg-white text-black">
                        <Card />
                      </div>
                    )}
                  </li>
                </Link>

                <Link to="/findfreelancer">
                  <li
                    onMouseEnter={() =>
                      handleFindFreelancerHover("findfreelancer")
                    }
                    onMouseLeave={() =>
                      handleFindFreelancerLeave("findfreelancer")
                    }
                    className={`font-semibold relative text-[#454545] text-[15px] ${
                      isSubmenuOpen ? "visible" : ""
                    }`}
                  >
                    Find Freelancer
                    {isSubmenuOpen &&
                      isFindFreelancerHovered["findfreelancer"] && (
                        <div className=" absolute z-50 w-[70px] h-[70px] top-8 left-0 bg-white text-black">
                          <Card />
                        </div>
                      )}
                  </li>
                </Link>
                <Link to="/blog">
                  <li
                    onMouseEnter={() => handleBlogHover("blog")}
                    onMouseLeave={() => handleBlogLeave("blog")}
                    className={`bfont-semibold relative text-[#454545] text-[15px] ${
                      isSubmenuOpen ? "visible" : ""
                    }`}
                  >
                    Blog
                    {isSubmenuOpen && isBlogHovered["blog"] && (
                      <div className="absolute z-50 w-[70px] h-[70px] top-12 left-0 bg-white text-black">
                        <BlogCard />
                      </div>
                    )}
                  </li>
                </Link>
                <Link to="/howitworks">
                  <li className="font-semibold text-[#454545] text-[15px]">
                    How It Works
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="font-semibold text-[#454545] text-[15px]">
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
          </Link>
          <li className="font-semibold flex gap-[5px] items-center text-[#454545] text-[15px]">
            <RiAdminFill /> Sign In
          </li>
          <li>
            <button className="bg-[#2695FF] text-[white] font-semibold w-[126px] h-[36px] text-center rounded-[8px] ">
              Post Project
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FreelancerHeader;
