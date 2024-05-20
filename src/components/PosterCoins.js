import React from "react";
import { Link } from "react-router-dom";

function PosterCoins() {
  return (
    <>
      <div className="posterShow flex flex-wrap gap-[1px] ">
        <div className="posterYelGree flex gap-[7px] ">
          <Link>
            <div className="bulletCoinsOne w-[660px] h-[330px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    ASIAN COINS
                  </h1>
                  <p className="text-white font-light">20 Auctions</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#5E3217] text-white font-semibold rounded-[9px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="bulletCoinsTwo w-[660px] h-[330px]   ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    EXCLUSIVE COINS
                  </h1>
                  <p className="text-white font-light">29 Auctions</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#5E3217] text-white font-semibold rounded-[9px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
       
      </div>
    </>
  );
}

export default PosterCoins;
