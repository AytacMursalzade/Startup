import React from "react";
import { Link } from "react-router-dom";
import electronic from "../assets/535(1).jpg";
import electronic1 from "../assets/drone.jpg";
import electronic2 from "../assets/535(6.jpg";
import electronic3 from "../assets/535(4).jpg";

function Hovered() {
  const data = [
    {
      id: 1,
      img: electronic,
      description: "BULLETS WIRELESS",
      title: "20 Auction",
      products: 20,
    },
    {
      id: 2,
      img: electronic2,
      description: "HEADPHONES",
      title: "30 Auction",
      products: 30,
    },
    {
      id: 3,
      img: electronic1,
      description: "DRONES",
      title: "13 Auction",
      products: 13,
    },
    {
      id: 4,
      img: electronic3,
      description: "CHARGER WIRELESS",
      title: "11 Auction",
      products: 11,
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
                      <button className="btnHovered border-1 border-black-100 hover:bg-white rounded-[8px] hover:text-[#0000FF] text-white font-semibold border border-solid-1 px-[20px] py-[6px]">
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

export default Hovered;
