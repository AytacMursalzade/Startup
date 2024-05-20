import React from "react";
import { Link } from "react-router-dom";

function CattlePoster() {
  return (
    <>
      <div className="posterShow flex flex-wrap gap-[1px] ">
        <div className="posterYelGree flex flex-col ">
          <Link>
            <div className="bulletCat w-[660px] h-[300px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    CHICKEN AUCTIONS
                  </h1>
                  <p className="text-white font-light">20 Animals</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#627452] text-white font-semibold rounded-[45px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="droneCat w-[660px] h-[430px] ml-[75px] mt-[-73px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    DONKEY AUCTIONS
                  </h1>
                  <p className="text-white font-light">13 Animals</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#627452] text-white font-semibold rounded-[45px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="posterTwo flex flex-col gap-[8px] ">
          <Link>
            <div className="horseCat w-[660px] h-[430px] ml-[5px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    HORSE AUCTIONS
                  </h1>
                  <p className="text-white font-light">30 Animals</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#627452] text-white font-semibold rounded-[45px] border border-solid-1  px-[20px] py-[6px]">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="chargerCat w-[660px] h-[300px] ml-[5px] mt-[-82px] ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    SHEEP AUCTIONS
                  </h1>
                  <p className="text-white font-light">11 Animals</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#627452] text-white font-semibold rounded-[45px] border border-solid-1  px-[20px] py-[6px]">
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

export default CattlePoster;
