import React from "react";
import { Link } from "react-router-dom";

function StoragePoster() {
  return (
    <>
      <div className="posterShow flex flex-wrap gap-[1px] ">
        <div className="posterYelGree flex flex-col ">
          <Link>
            <div className="bulletSelf w-[660px] h-[300px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    ASSORTED BOXES
                  </h1>
                  <p className="text-white font-light">20 Storages</p>
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
                    HOUSEHOLD GOODS
                  </h1>
                  <p className="text-white font-light">13 Storages</p>
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
            <div className="sportingSelf w-[660px] h-[430px] ml-[5px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                   SPORTING GOODS
                  </h1>
                  <p className="text-white font-light">30 Storages</p>
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
            <div className="toolStorage w-[660px] h-[300px] ml-[5px] mt-[-82px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    TOOLS WORKSHOP
                  </h1>
                  <p className="text-white font-light">11 Storages</p>
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

export default StoragePoster;
