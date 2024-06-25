import React from "react";
import { Link } from "react-router-dom";
import poster1 from "../assets/lowReal.jpg";
import poster2 from "../assets/constructionsReal.jpg";
import poster3 from "../assets/landReal.jpg";
import poster4 from "../assets/realestatefinish.jpg";

function RealEstatePoster() {
  const data = [
    {
      id: 1,
      img: poster1,
      description: "HOUSE AUCTION SALES",
      title: "All Kind Of Properties"
    },
    {
      id: 2,
      img: poster2,
      description: "HOUSES IN CONSTRUCTION",
      title: "13 Listings"
    },
    {
      id: 3,
      img: poster3,
      description: "LANDS & FIELDS",
      title: "30 Lands"
    },
    {
      id: 4,
      img: poster4,
      description: "APARTMENTS & HOMES",
      title: "215 Apartments"
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
                      <button className="btnHovered border-1 border-black-100 hover:bg-white rounded-[8px] hover:text-[#6449E7] text-white font-semibold border border-solid-1 px-[20px] py-[6px]">
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

export default RealEstatePoster;
