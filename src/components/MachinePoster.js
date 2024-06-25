import React from "react";
import { Link } from "react-router-dom";
import poster1 from "../assets/bul6.jpg";
import poster2 from "../assets/bul3.jpg";
import poster3 from "../assets/bul2.jpg";
import poster4 from "../assets/buldozers4.jpg";

function MachinePoster() {
  const data = [
    {
      id: 1,
      img: poster1,
      description: "EXCAVATORS",
      title: "20 Auctions"
    },
    {
      id: 2,
      img: poster2,
      description: "COMPACTORS",
      title: "13 Auctions"
    },
    {
      id: 3,
      img: poster3,
      description: "BULDOZERS",
      title: "30 Auctions"
    },
    {
      id: 4,
      img: poster4,
      description: "CRANES",
      title: "11 Auctions"
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
                  <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                    <div className="posterMH flex flex-col">
                      <h1 className="font-extrabold text-[30px] text-white mt-[50px]">
                        {item.description}
                      </h1>
                      <p className="text-white font-light">{item.title}</p>
                    </div>
                    <div>
                      <button className="btnHovered border-1 border-black-100 hover:bg-[white] rounded-[45px] bg-[#FBDE06] hover:text-[#FBDE06] text-[#676161] font-semibold border border-solid-1 px-[20px] py-[15px]">
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

export default MachinePoster;
