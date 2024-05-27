import React from "react";
import { Link } from "react-router-dom";

function MachinePoster() {
  return (
    <>
      <div className="posterShow flex flex-wrap gap-[1px] ">
        <div className="posterYelGree flex flex-col ">
          <Link>
            <div className="Machine1 w-[660px] h-[300px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    EXCAVATORS
                  </h1>
                  <p className="text-white font-light">20 Auctions</p>
                </div>
                <div>
                  <button className="btnHovered bg-[yellow] hover:bg-white hover:text-[#414144] text-[#414144] font-semibold rounded-[45px]  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="compoctors w-[660px] h-[430px] ml-[75px] mt-[-73px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    COMPACTORS
                  </h1>
                  <p className="text-white font-light">13 Auctions</p>
                </div>
                <div>
                  <button className="btnHovered bg-[yellow] hover:bg-white hover:text-[#414144] text-[#414144] font-semibold rounded-[45px]  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="posterTwo flex flex-col gap-[8px] ">
          <Link>
            <div className="buldozers w-[660px] h-[430px] ml-[5px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    BULDOZERS
                  </h1>
                  <p className="text-white font-light">30 Auctions</p>
                </div>
                <div>
                  <button className="btnHovered bg-[yellow] hover:bg-white hover:text-[#414144] text-[#414144] font-semibold rounded-[45px]  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="cranes w-[660px] h-[300px] ml-[5px] mt-[-82px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    CRANES
                  </h1>
                  <p className="text-white font-light">11 Auctions</p>
                </div>
                <div>
                  <button className="btnHovered bg-[yellow] hover:bg-white hover:text-[#414144] text-[#414144] font-semibold rounded-[45px]  px-[20px] py-[6px] ">
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

export default MachinePoster;
