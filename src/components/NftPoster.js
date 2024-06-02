import React from "react";
import { Link } from "react-router-dom";
import imgPoster from "../assets/nftposter1.jpg";
import imgPoster2 from "../assets/nftposter2.jpg";


function NftPoster() {
    const posterOne = {
        backgroundImage:`url(${imgPoster})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    const posterTwo = {
        backgroundImage:`url(${imgPoster2})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
  return (
    <>
      <div className="posterShow flex flex-wrap gap-[1px] ">
        <div className="posterYelGree flex gap-[30px] ">
          <Link>
            <div style={posterOne} className="bulletCoinsOne w-[670px] h-[310px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col pt-[180px] ">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    Bare NFTs Collectibles
                  </h1>
                  <p className="text-white font-light">Kittens, And Memes Are Now Trading Digital Wallets For Crtpto.</p>
                </div>
                
              </div>
            </div>
          </Link>
          <Link>
            <div style={posterTwo} className="bulletCoinsTwo w-[670px] h-[310px]   ">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                <div className="flex flex-col pt-[180px]">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                    Trading Cards
                  </h1>
                  <p className="text-white font-light">Players Can Now Trade In-Game Items On Third-Party Platforms</p>
                </div>
                
              </div>
            </div>
          </Link>
        </div>
       
      </div>
    </>
  );
}

export default NftPoster;
