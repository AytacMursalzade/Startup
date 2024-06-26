import React from 'react';
import { Link } from "react-router-dom";
import posterAnt1 from "../assets/440color.png";
import posterAnt2 from "../assets/700Vintage.png";

function PosterAntiques() {

  const data = [
    {
      id:1,
      img:posterAnt1,
      description:"VINTAGE WATCHES",
      title:"20 Auction"
    },
    {
      id:2,
      img:posterAnt2,
      description:"AUTHENTIC JEWELERY",
      title:"29 Auction"
    },
  ]

  return (
    <div>
      <div className="posterTall flex gap-[15px] ml-[75px] mt-[140px]">
        {data.map((item,index) => {
          const posterPage = {
            backgroundImage: `url(${item.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }
          return (
            <div key={index} style={posterPage} className="posterTall1 flex gap-[15px]">
              <Link>
                <div className="posterM w-[600px] h-[382px] ml-[75px]">
                  <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                    <div className="posterMH flex flex-col">
                      <h1 className="font-extrabold text-[30px] text-white mt-[50px]">
                        {item.description}
                      </h1>
                      <p className="text-white font-light">{item.title}</p>
                    </div>
                    <div>
                      <button className="btnHovered border-1 border-black-100 hover:bg-white rounded-[8px] hover:text-[#BE263F] text-white font-semibold  border border-solid-1 px-[20px] py-[6px] ">
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
  )
}

export default PosterAntiques
