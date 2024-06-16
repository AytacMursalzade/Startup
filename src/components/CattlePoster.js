import React from 'react';
import { Link } from "react-router-dom";
import poster1 from "../assets/chicken.jpg";
import poster2 from "../assets/donkey.jpg";
import poster3 from "../assets/horse400.jpg";
import poster4 from "../assets/cowcattle14.jpg";

function CattlePoster() {

  const data = [
    {
      id: 1,
      img: poster1,
      description: "CHICKEN AUCTIONS",
      title: "20 Animals"
    },
    {
      id: 2,
      img: poster2,
      description: "DONKEY AUCTIONS",
      title: "13 Animals"
    },
    {
      id: 3,
      img: poster3,
      description: "HORSE AUCTIONS",
      title: "30 Animals"
    },
    {
      id: 4,
      img: poster4,
      description: "SHEEP AUCTIONS",
      title: "11 Animals"
    },
  ];

  return (
    <div className="mt-[140px] lg:ml-[75px]">
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
              className="w-full h-[382px] mb-[15px] lg:mb-0 lg:ml-[75px] max-600:w-[448px] max-600:h-[260px]   md:ml-[10px]"
            >
              <Link to="#">
                <div className="w-full h-full">
                  <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                    <div className="flex flex-col max-600:mt-[-100px] max-600:ml-[-18px]  ">
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

export default CattlePoster;
