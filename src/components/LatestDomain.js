import React from "react";
import { Link } from "react-router-dom";

function LatestDomain() {
  return (
    <div className="mt-[100px] px-[50px] ">
      <div className="flex justify-between items-center px-[15px]">
        <h1 className="text-[35px] text-[black] font-bold ">
          LATEST AUCTIONS
        </h1>
        <button className="text-[16px]  text-[#45414166] font-semibold w-[170px] h-[40px] rounded-[9px] bg-[#18AE91] hover:text-[black] ">
          ALL AUCTIONS
        </button>
      </div>
      <div className="mt-[50px]">
        <ul className="flex justify-around">
          <li className="w-[320px] h-[260px] shadow-2xl flex flex-col  items-center ">
            <div className="w-[320px] h-[90px] bg-[#18AE91] flex justify-center items-center ">
              <Link to='/'><h1 className="text-[18px] font-bold text-[white]">www.mathsoftware.com</h1></Link>
            </div>
            <div className="flex flex-col gap-[7px] pt-[35px] text-center ">
              <p className="text-[16px] font-light text-[#606060] ">Current Bid: <mark>&112.00</mark></p>
              <p className="text-[16px] font-light text-[#606060] ">
                Expries on: <mark>May 30,2024</mark>
              </p>
              <button className="w-[120px] ml-[17px] bg-[#18AE91] h-[50px] rounded-[45px] text-[14px] text-[white] hover:bg-[white] hover:text-[black] font-bold ">Bid Now</button>
            </div>
          </li>
          <li className="w-[320px] h-[260px] shadow-2xl flex flex-col  items-center ">
            <div className="w-[320px] h-[90px] bg-[#18AE91] flex justify-center items-center ">
            <Link to='/'><h1 className="text-[18px] font-bold text-[white]">www.mathsoftware.com</h1></Link>
            </div>
            <div className="flex flex-col gap-[7px] pt-[35px] text-center ">
              <p className="text-[16px] font-light text-[#606060] ">Current Bid: <mark>&112.00</mark></p>
              <p className="text-[16px] font-light text-[#606060] ">
                Expries on: <mark>May 30,2024</mark>
              </p>
              <button className="w-[120px] ml-[17px] bg-[#18AE91] h-[50px] rounded-[45px] text-[14px] text-[white] hover:bg-[white] hover:text-[black] font-bold ">Bid Now</button>
            </div>
          </li>
          <li className="w-[320px] h-[260px] shadow-2xl flex flex-col  items-center ">
            <div className="w-[320px] h-[90px] bg-[#18AE91] flex justify-center items-center ">
            <Link to='/'><h1 className="text-[18px] font-bold text-[white]">www.mathsoftware.com</h1></Link>
            </div>
            <div className="flex flex-col gap-[7px] pt-[35px] text-center ">
              <p className="text-[16px] font-light text-[#606060] ">Current Bid: <mark>&112.00</mark></p>
              <p className="text-[16px] font-light text-[#606060] ">
                Expries on: <mark>May 30,2024</mark>
              </p>
              <button className="w-[120px] ml-[17px] bg-[#18AE91] h-[50px] rounded-[45px] text-[14px] text-[white] hover:bg-[white] hover:text-[black] font-bold ">Bid Now</button>
            </div>
          </li>
          <li className="w-[320px] h-[260px] shadow-2xl flex flex-col  items-center ">
            <div className="w-[320px] h-[90px] bg-[#18AE91] flex justify-center items-center ">
            <Link to='/'><h1 className="text-[18px] font-bold text-[white]">www.mathsoftware.com</h1></Link>
            </div>
            <div className="flex flex-col gap-[7px] pt-[35px] text-center ">
              <p className="text-[16px] font-light text-[#606060] ">Current Bid: <mark>&112.00</mark></p>
              <p className="text-[16px] font-light text-[#606060] ">
                Expries on: <mark>May 30,2024</mark>
              </p>
              <button className="w-[120px] ml-[17px] bg-[#18AE91] h-[50px] rounded-[45px] text-[14px] text-[white] hover:bg-[white] hover:text-[black] font-bold ">Bid Now</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LatestDomain;
