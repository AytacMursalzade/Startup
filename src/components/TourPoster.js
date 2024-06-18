import React from "react";
import { Link } from "react-router-dom";
import tour1 from "../assets/slidetour1.jpg";
import tour2 from "../assets/ourCruises.jpg";
import tour3 from "../assets/breaks.jpg";
import tour4 from "../assets/slidetour4.jpg";


function TourPoster() {
  const data = [
    {
      id: 1,
      img: tour1,
      description: "TOURS",
      title: "15 Auctions"
    },
    {
      id: 2,
      img: tour2,
      description: "CRUISES",
      title: "15 Auctions"
    },
    {
      id: 3,
      img: tour3,
      description: "CITY BREAKS",
      title: "15 Auctions"
    },
    {
      id: 4,
      img: tour4,
      description: "VILLAS",
      title: "15 Auctions"
    },
  ];

  return (
    <>
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
    </>
  );
}

export default TourPoster;
