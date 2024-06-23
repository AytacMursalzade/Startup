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
  return (
    <>
      <div className="mt-[140px] lg:ml-[75px]">
      <div className="posterTall flex flex-col">
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
              className="posterTall1 w-full h-[382px] mb-[15px]"
            >
              <Link to="#">
                <div className="posterM w-full h-full">
                  <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                    <div className="posterMH flex flex-col">
                      <h1 className="font-extrabold text-[30px] text-white mt-[50px]">
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

export default MachinePoster;
