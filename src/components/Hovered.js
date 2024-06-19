import React from "react";
import { Link } from "react-router-dom";
import electronic from "../assets/535(1).jpg";
import electronic1 from "../assets/535(3).jpg";
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
      img: electronic1,
      description: "DRONES",
      title: "13 Auction",
      products: 13,
    },
    {
      id: 3, 
      img: electronic2,
      description: "HEADPHONES",
      title: "30 Auction",
      products: 30,
    },
    {
      id: 4, 
      img: electronic3,
      description: "CHARGER WIRELESS",
      title: "11 Auction",
      products: 11,
    },
  ];

  return (
    <div className="posterShow flex flex-wrap gap-[1px]">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`${
            index % 2 === 0 ? "posterYelGree" : "posterTwo"
          } flex flex-col ${index % 2 === 0 ? "ml-[75px]" : "ml-[5px]"} ${
            index === 1 || index === 2 ? "mt-[-73px]" : ""
          }`}
        >
          <Link>
            <div
              className={`${item.img} ${
                index % 2 === 0 ? "w-[660px] h-[300px]" : "w-[660px] h-[430px]"
              }`}
            >
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white mt-[50px]">
                    {item.description}
                  </h1>
                  <p className="text-white font-light">{item.products} Products</p>
                </div>
                <div>
                  <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[45px] border border-solid-1 px-[20px] py-[6px]">
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Hovered;
