import React from "react";
import { Link } from "react-router-dom";
import coins1 from "../assets/ibid_coin_banner1.jpg";
import coins2 from "../assets/ibid_coins_banner2.jpg";

function PosterCoins() {
  const data = [
    {
      id: 1,
      img: coins1, 
      description: "ASIAN COINS",
      title: "20 Auction"
    },
    {
      id: 2,
      img: coins2,
      description: "EXCLUSIVE COINS",
      title: "29 Auction"
    },
  ];
  return (
    <>
      <div>
        <div className="posterTall flex gap-[15px] ml-[75px] mt-[140px]">
          {data.map((item, index) => {
            const posterPage = {
              backgroundImage: `url(${item.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            };
            return (
              <div
                key={index}
                style={posterPage}
                className="posterTall1 flex gap-[15px]"
              >
                <Link>
                  <div className="posterM w-[600px] h-[382px] ml-[75px]">
                    <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                      <div className="posterMH flex flex-col">
                        <h1 className="font-extrabold text-[30px] text-white mt-[50px]">
                          {item.description}
                        </h1>
                        <p className="text-white font-light">{item.title}</p>
                      </div>
                      <div>
                        <button className="btnHovered border-1 border-black-100 hover:bg-white rounded-[8px] hover:text-[#2695FF] text-white font-semibold  border border-solid-1 px-[20px] py-[6px] ">
                          VIEW MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PosterCoins;
