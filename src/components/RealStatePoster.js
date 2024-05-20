import React from "react";
import { Link } from "react-router-dom";

function RealEstatePoster() {
  return (
    <>
      <div className="posterShow flex flex-wrap gap-[1px] ">
        <div className="posterYelGree flex flex-col ">
          <Link>
            <div className="salesSelf w-[660px] h-[300px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    HOUSE AUCTION SALES
                  </h1>
                  <p className="text-white font-light">All Kind Of Properties</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#414144] text-white font-semibold rounded-[9px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="householdSelf w-[660px] h-[430px] ml-[75px] mt-[-73px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    HOUSES IN CONSTRUCTION
                  </h1>
                  <p className="text-white font-light">13 Listings</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#414144] text-white font-semibold rounded-[9px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="posterTwo flex flex-col gap-[8px] ">
          <Link>
            <div className="landReal w-[660px] h-[430px] ml-[5px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                   LANDS & FIELDS
                  </h1>
                  <p className="text-white font-light">30 Lands</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#414144] text-white font-semibold rounded-[9px] border border-solid-1  px-[20px] py-[6px]">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="apartmanState w-[660px] h-[300px] ml-[5px] mt-[-82px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    APARTMENTS & HOMES
                  </h1>
                  <p className="text-white font-light">215 Apartments</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#414144] text-white font-semibold rounded-[9px] border border-solid-1  px-[20px] py-[6px]">
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

export default RealEstatePoster;
