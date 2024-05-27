import React from "react";
import friend from "../assets/community.jpg";
import { Link } from "react-router-dom";

function AntiqueFooter({
  LatText1,
  LatestText2,
  LatestTextp1,
  LatestTextp2,
  hoverColor,
  LatestWidth,
  LatestHeight,
  display,
}) {
  const btnLatest = {
    display: display ? "block" : "none",
  };

  return (
    <div className="mt-[30px] px-[75px] ">
      <ul className="flex flex-row gap-[15px] justify-around latestnew ">
        <li className="communityPost flex flex-row mt-[20px] gap-[40px] ">
          <Link to="/" className="relative w-[118px] h-[119px] overflow-hidden">
            <div className="communitylink">
              <div style={{ width: LatestWidth, height: LatestHeight }}>
                <img src={friend} alt="community" className="w-full h-full" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
            </div>
          </Link>

          <div className="symbolsLatest flex flex-col justify-around ">
            <Link>
              <h1 className={`${hoverColor} text-[20px] font-bold`}>
                {LatText1}
                <br /> {LatestText2}
              </h1>
            </Link>
            <p>
              {LatestTextp1} <br /> {LatestTextp2}
            </p>
            <Link to="/">
              <div style={btnLatest}>
                <button className="bg-[#6fcbf4] font-bold rounded-[5px] text-[white] hover:bg-[white] hover:text-[#484848] border border-[#f7f2f2] px-[30px] py-[10px]">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        </li>
        <li className="communityPost flex flex-row mt-[20px] gap-[40px] ">
          <Link to="/" className="relative w-[118px] h-[119px] overflow-hidden">
            <div className="communitylink">
              <img src={friend} alt="community" className="w-full h-full" />
              <div className="absolute inset-0cl bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
            </div>
          </Link>

          <div className="symbolsLatest flex flex-col justify-around ">
            <Link>
              <h1 className={`${hoverColor} text-[20px] font-bold`}>
                {LatText1}
                <br /> {LatestText2}
              </h1>
            </Link>
            <p>
              {LatestTextp1} <br /> {LatestTextp2}
            </p>
            <Link to="/">
              <div style={btnLatest}>
                <button className="bg-[#6fcbf4] font-bold rounded-[5px] text-[white] hover:bg-[white] hover:text-[#484848] border border-[#f7f2f2] px-[30px] py-[10px]">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        </li>
        <li className="communityPost flex flex-row mt-[20px] gap-[40px] ">
          <Link to="/" className="relative w-[118px] h-[119px] overflow-hidden">
            <div className="communitylink">
              <img src={friend} alt="community" className="w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
            </div>
          </Link>

          <div className="symbolsLatest flex flex-col gap-3 justify-around ">
            <Link>
              <h1 className={`${hoverColor} text-[20px] font-bold`}>
                {LatText1}
                <br /> {LatestText2}
              </h1>
            </Link>
            <p>
              {LatestTextp1} <br /> {LatestTextp2}
            </p>
            <Link to="/">
              <div style={btnLatest}>
                <button className="bg-[#6fcbf4] font-bold rounded-[5px] text-[white] hover:bg-[white] hover:text-[#484848] border border-[#f7f2f2] px-[30px] py-[10px]">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AntiqueFooter;
