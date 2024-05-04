import React from "react";
import imageTelephone from "../assets/mobile_prod1-1-400x400.jpg";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import backgroundPhone from "../assets/mobile_prod1-1-400x400.jpg";

function MainArravega() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[126px]">
        <h1 className="font-bold text-[34px] ">LATEST AUCTIONS</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span className="font-bold text-[#2695FF] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>
      <div className=" container flex flex-wrap gap-[41px] px-[70px] mt-[46px] ">
        <div className="WM px-[23px] border-solid shadow-[-2px_5px_28px_-16px_rgba(46,46,46,0.73)] w-[302px] h-[436px] ">
          <div className="flex flex-col items-start pt-[30px] gap-[8px] ">
            <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <FaGavel />
            </button>
            <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <CiHeart />
            </button>
            <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-col ml-[50px]  ">
            <div className="mt-[-80px]  ">
              <img src={imageTelephone} alt="telephone" />
            </div>

            <div className="flex flex-col items-center py-[22px] mt-[73px] border-t-2 ">
              <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF] ">
                Dual SIM Smartphone
              </h2>
              <p className="text-[#606060] text-[14px] font-light loading-[22px] ">
                Current Bid: <span>$5.021.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="WM px-[23px] border-solid shadow-[-2px_5px_28px_-16px_rgba(46,46,46,0.73)] w-[302px] h-[436px] ">
          <div className="flex flex-col items-start pt-[30px] gap-[8px] ">
            <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <FaGavel />
            </button>
            <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <CiHeart />
            </button>
            <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-col ml-[50px]  ">
            <div className="mt-[-80px]  ">
              <img src={imageTelephone} alt="telephone" />
            </div>

            <div className="flex flex-col items-center py-[22px]  mt-[73px] border-t-2 ">
              <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF] ">
                Dual SIM Smartphone
              </h2>
              <p className="text-[#606060] text-[14px] font-light loading-[22px] ">
                Current Bid: <span>$5.021.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="WM px-[23px] border-solid shadow-[-2px_5px_28px_-16px_rgba(46,46,46,0.73)] w-[302px] h-[436px] ">
          <div className="flex flex-col items-start pt-[30px] gap-[8px]  ">
            <button className="rounded-[45px]  bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <FaGavel />
            </button>
            <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <CiHeart />
            </button>
            <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-col ml-[50px]  ">
            <div className="mt-[-80px]  ">
              <img src={imageTelephone} alt="telephone" />
            </div>

            <div className="flex flex-col items-center py-[22px]  mt-[73px] border-t-2 ">
              <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF] ">
                Dual SIM Smartphone
              </h2>
              <p className="text-[#606060] text-[14px] font-light loading-[22px] ">
                Current Bid: <span>$5.021.00</span>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${backgroundPhone})`,
            backgroundSize: "cover",
          }}
          className="WM px-[23px] border-solid shadow-[-2px_5px_28px_-16px_rgba(46,46,46,0.73)] w-[302px] h-[436px] "
        >
          <div className="flex flex-col items-start pt-[30px] gap-[8px] ">
            <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <FaGavel />
            </button>
            <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <CiHeart />
            </button>
            <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-col  ">
            <div className="flex flex-col  py-[22px]  items-center mt-[200px] border-t-2 ">
              <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF] ">
                Dual SIM Smartphone
              </h2>
              <p className="text-[#606060] text-[14px] font-light loading-[22px] ">
                Current Bid: <span>$5.021.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainArravega;
