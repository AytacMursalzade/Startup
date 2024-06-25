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
                  <div className="flex flex-col gap-[40px] mt-[77px] ml-[53px]">
                    <div className="posterMH mt-[-81px] flex flex-col">
                      <h1 className="font-extrabold text-[30px] text-white mt-[50px]">
                        {item.description}
                      </h1>
                      <p className="text-white font-light">{item.title}</p>
                    </div>
                    <div>
                      <button className="btnHovered border-1 border-black-100 hover:bg-white rounded-[45px] hover:text-[#6FCBF4] text-white font-semibold border border-solid-1 px-[20px] py-[6px]">
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

export default TourPoster;
