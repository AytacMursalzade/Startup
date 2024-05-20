import React from "react";
import friend from "../assets/community.jpg";
import { Link } from "react-router-dom";

function AntiqueFooter({LatText1,LatestText2,hoverText,LatestTextp1,LatestTextp2,mouseEnter,mouseLeave}) {

  // const styleHover = {
  //   color: hovered ? 'red' : 'black',
  // };

  return (
    <div className="mt-[30px] px-[75px] ">
      <ul className="flex flex-row gap-[15px] justify-around latestnew ">
      <li className="communityPost flex flex-row mt-[20px] gap-[40px] ">
          
          <Link
            to="/"
            className="relative w-[118px] h-[119px] overflow-hidden"
          ><div className="communitylink">
            <img src={friend} alt="community" className="w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div></div>
          </Link>
        
        <div className="symbolsLatest flex flex-col justify-around ">
          <Link>
            <h1 onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className={`text-20px font-bold hover:${hoverText}`}>
               {LatText1}<br /> {LatestText2}
            </h1>
          </Link>
          <p>
            {LatestTextp1} <br /> {LatestTextp2}
          </p>
        </div>
      </li>
        <li className="communityPost flex flex-row mt-[20px] gap-[40px] ">
          
            <Link
              to="/"
              className="relative w-[118px] h-[119px] overflow-hidden"
            ><div className="communitylink">
              <img src={friend} alt="community" className="w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div></div>
            </Link>
          
          <div className="symbolsLatest flex flex-col justify-around ">
          <Link>
            <h1 className="text-[20px] font-bold hover:text-[#0543EC] ">
               {LatText1}<br /> {LatestText2}
            </h1>
          </Link>
          <p>
            {LatestTextp1} <br /> {LatestTextp2}
          </p>
          </div>
        </li>
        <li className="communityPost flex flex-row mt-[20px] gap-[40px] ">
          
            <Link
              to="/"
              className="relative w-[118px] h-[119px] overflow-hidden"
            ><div className="communitylink">
              <img src={friend} alt="community" className="w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div></div>
            </Link>
          
          <div className="symbolsLatest flex flex-col justify-around ">
          <Link>
            <h1 className="text-[20px] font-bold hover:text-[#0543EC] ">
               {LatText1}<br /> {LatestText2}
            </h1>
          </Link>
          <p>
            {LatestTextp1} <br /> {LatestTextp2}
          </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AntiqueFooter;
