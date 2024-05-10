import React from 'react';
import { Link } from "react-router-dom";


function PosterAct() {
  return (
    <div>
      <div className="posterShow flex ml-[75px] mt-[140px] ">
        <div className="posterYelGreeArt flex gap-[8px]">
          <Link className='bulletArt'>
            <div className=" w-[658px] h-[382px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    CONTEMPORARY ART
                  </h1>
                  <p className="text-white font-light">20 Auctions</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[9px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link className='classicalArt'>
            <div className=" w-[658px] h-[382px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    CLASSICAL ART
                  </h1>
                  <p className="text-white font-light">29 Auctions</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[9px] border border-solid-1  px-[20px] py-[6px] ">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default PosterAct
