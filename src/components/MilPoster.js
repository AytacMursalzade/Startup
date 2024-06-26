import React from 'react';
import { Link } from "react-router-dom";
import pistol1 from "../assets/Militaria-banner1-1024x481.jpg";
import pistol2 from "../assets/Militaria-banner2.png";
import pistol3 from "../assets/Militaria-banner3.jpg";
import pistol4 from "../assets/Militaria-banners4.jpg";

function MilPoster() {

  const data = [
    {
      id:1,
      img:pistol1,
      description:"PISTOL AUCTIONS",
      title:"15 Products"
    },
    {
      id:2,
      img:pistol2,
      description:"DAGGER AUCTIONS",
      title:"13 Products"
    },
    {
      id:3,
      img:pistol3,
      description:"RIFLE AUCTIONS",
      title:"30 Products"
    },
    {
      id:4,
      img:pistol4,
      description:"UNIFORM AUCTIONS",
      title:"11 Products"
    },
  ]

  const getItemSize = (id) => {
    switch (id) {
      case 1:
        return "w-[680px] h-[310px]";
      case 2:
        return "w-[680px] h-[434px]";
      case 3:
        return "w-[680px] h-[434px] mt-[-124px] drone";
      case 4:
        return "w-[680px] h-[310px]";
      default:
        return "w-[680px] h-[310px]";
    }
  };


  return (
    <>
      <div>
      <div className="posterTall flex flex-wrap gap-[10px] ml-[75px] mt-[140px]">
        {data.map((item, index) => {
          const posterPage = {
            backgroundImage: `url(${item.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          };
          return (
            <div key={index} style={posterPage} className={`posterTall1 flex gap-[15px] ${getItemSize(item.id)}`}>
              <Link to="#">
                <div className="posterM">
                  <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                    <div className="posterMH flex flex-col">
                      <h1 className="font-extrabold text-[30px] text-white mt-[50px]">
                        {item.description}
                      </h1>
                      <p className="text-white font-light">{item.title}</p>
                    </div>
                    <div>
                      <button className="btnHovered border-1 border-black-100 hover:bg-white rounded-[8px] hover:text-[#414144] text-white font-semibold border border-solid-1 px-[20px] py-[6px]">
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
export default MilPoster
