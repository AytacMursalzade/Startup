import React from 'react';
import { Link } from "react-router-dom";
import posterAnt1 from "../assets/carOne1.jpg";
import posterAnt2 from "../assets/carone2.jpg";

function PosterAntiques() {

  const data = [
    {
      id:1,
      img:posterAnt1,
      description:"SPORT CARS",
      title:"20 Auction"
    },
    {
      id:2,
      img:posterAnt2,
      description:"VINTAGE CARS",
      title:"29 Auction"
    },
  ]

  return (
    <div>
      <div className="flex gap-[15px] ml-[75px] mt-[140px] ">
        {data.map((item,index) => {
          const posterPage = {
            backgroundImage: `url(${item.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }
          return (
            <div key={index} style={posterPage} className="flex gap-[15px]">
              <Link>
                <div className=" w-[600px] h-[382px] ml-[75px]">
                  <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                    <div className="flex flex-col ">
                      <h1 className="font-extrabold text-[30px] text-white mt-[50px] ">
                        {item.description}
                      </h1>
                      <p className="text-white font-light">{item.title}</p>
                    </div>
                    <div>
                      <button className="btnHovered border-1 border-black-100 hover:bg-white  rounded-[45px] hover:text-[#EE964B] text-white font-semibold  border border-solid-1 px-[30px] py-[8px] ">
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
