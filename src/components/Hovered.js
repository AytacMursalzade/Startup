import React from "react";
import { Link } from "react-router-dom";

function Hovered() {
  return (
    <>
      <div className="posterShow flex flex-wrap gap-[1px] ">
        <div className="posterYelGree flex flex-col ">
          <Link>
            <div className="bullet w-[660px] h-[300px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    BULLETS WIRELESS
                  </h1>
                  <p className="text-white font-light">20 Products</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[45px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="drone w-[660px] h-[430px] ml-[75px] mt-[-73px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    DRONES
                  </h1>
                  <p className="text-white font-light">13 Products</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[45px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="posterTwo flex flex-col gap-[8px] ">
          <Link>
            <div className="handleearphone w-[660px] h-[430px] ml-[5px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    HEADPHONES
                  </h1>
                  <p className="text-white font-light">30 Products</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[45px] border border-solid-1  px-[20px] py-[6px]">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="charger w-[660px] h-[300px] ml-[5px] mt-[-82px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    CHARGER WIRELESS
                  </h1>
                  <p className="text-white font-light">11 Products</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[45px] border border-solid-1  px-[20px] py-[6px]">
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

export default Hovered;
