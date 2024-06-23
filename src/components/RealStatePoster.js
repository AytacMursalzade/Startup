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

export default RealEstatePoster;
