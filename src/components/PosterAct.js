import React from 'react';
import { Link } from "react-router-dom";
import poster1 from "../assets/artPoster1.jpg";
import poster2 from "../assets/ibid_art_banner2.jpg";

function PosterAct() {

  const data = [
    {
      id: 1,
      img: poster1,
      description: "CONTEMPORARY ART",
      title: "20 Auction"
    },
    {
      id: 2,
      img: poster2,
      description: "CLASSICAL ART",
      title: "29 Auction"
    },
  ];

  return (
    <div className="posterTall mt-[140px] lg:ml-[75px]">
      <div className="flex flex-col max-600:flex max-600:items-center lg:flex-row lg:gap-[15px] lg:justify-start">
        {data.map((item, index) => {
          const posterPage = {
            backgroundImage: `url(${item.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          };
          return (
            <div
              key={index}
              style={posterPage}
              className="posterTall1 w-full h-[382px] mb-[15px] lg:mb-0 lg:ml-[75px] max-600:w-[448px] max-600:h-[260px]   md:ml-[10px]"
            >
              <Link to="#">
                <div className="posterM w-full h-full">
                  <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                    <div className="posterMH flex flex-col max-600:mt-[-100px] max-600:ml-[-18px]  ">
                      <h1 className="font-extrabold text-[30px] text-white mt-[50px] max-600:text-[20px]">
                        {item.description}
                      </h1>
                      <p className="text-white font-light">{item.title}</p>
                    </div>
                    <div>
                      <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[9px] border border-solid-1 px-[20px] py-[6px]">
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
  );
}

export default PosterAct;
