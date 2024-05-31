import React from "react";
import { FaGavel, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import homeData from "../db/homeData";

function MainArravega() {
  // const homeLatest1 = {
  //   backgroundImage: `url(${HLimg1})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  // };

  

  return (
    <>
      <div className="topic flex flex-col items-center justify-center mt-[126px] mb-[25px] ">
        <h1 className="font-bold text-[34px] ">LATEST AUCTIONS</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span className="font-bold text-[#2695FF] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>

      <div className="PhonesAll flex gap-[17px] px-[71px] flex-wrap">
        {homeData.map((data) => (
          <div key={data.id} className="allPhones w-[320px] h-[450px] shadow-lg">
            <div className="flex flex-col">
              <div className="flex justify-between items-start pt-[30px]">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-[#606060] flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div
                  style={{ backgroundImage: `url(${data.img})`,backgroundPosition: "center",backgroundSize: "cover", }}
                  className="w-[402px] h-[272px]"
                ></div>
              </div>
              <div className="phoneBottom flex flex-col mt-[47px] border-t-2 pt-[18px] items-center gap-[9px]">
                <h2 className="text-[#484848] text-[18px] font-bold loading-[22px] hover:text-[#2695FF]">
                  {data.description}
                </h2>
                <p className="text-[#606060] text-[14px] font-light loading-[22px]">
                  {data.paragraf1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainArravega;
