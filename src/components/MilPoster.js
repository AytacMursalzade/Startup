import React from 'react';
import { Link } from "react-router-dom";
import pistol1 from "../assets/Militaria-banner1-1024x481.jpg";
import pistol2 from "../assets/Militaria-banner2.png";
import pistol3 from "../assets/Militaria-banner3.jpg";
import pistol4 from "../assets/Militaria-banners4.jpg";

function MilPoster() {

  const data = [
    {
      id:1,
      img:pistol1,
      description:"PISTOL AUCTIONS",
      title:"15 Products"
    },
    {
      id:2,
      img:pistol2,
      description:"DAGGER AUCTIONS",
      title:"13 Products"
    },
    {
      id:3,
      img:pistol3,
      description:"RIFLE AUCTIONS",
      title:"30 Products"
    },
    {
      id:4,
      img:pistol4,
      description:"UNIFORM AUCTIONS",
      title:"11 Products"
    },
  ]

  return (
    <div>
      <div className="flex gap-[15px] ml-[75px] mt-[140px] max-600:w-[500px]  max-600:flex max-600:flex-col  max-600:ml-[13px] ">
        {data.map((item,index) => {
          const posterPage = {
            backgroundImage: `url(${item.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }
          return (
            <div key={index} style={posterPage} className="flex gap-[15px] max-600:w-[450px] max-600:h-[260px] max-600:flex max-600:justify-center">
              <Link>
                <div className=" w-[600px] h-[382px] ml-[75px]">
                  <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                    <div className="flex flex-col max-600:mt-[-100px] max-600:ml-[-18px] max-600:pl-[30px] ">
                      <h1 className="font-extrabold text-[30px] text-white mt-[50px] max-600:text-[20px] ">
                        {item.description}
                      </h1>
                      <p className="text-white font-light">{item.title}</p>
                    </div>
                    <div>
                      <button className="btnHovered border-1 border-black-100 hover:bg-white rounded-[8px] hover:text-[#EE964B] text-white font-semibold  border border-solid-1 px-[20px] py-[6px] ">
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

export default MilPoster
