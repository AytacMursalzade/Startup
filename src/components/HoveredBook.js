import React from "react";
import { Link } from "react-router-dom";
import book1 from "../assets/comicBook1.jpg";
import book2 from "../assets/comicBook2.jpg";
import book3 from "../assets/comicBook41.jpg";
import book4 from "../assets/comicBook5.jpg";
import book5 from "../assets/comBook3.jpg";

function HoveredBook() {
  const data = [
    {
      id:1,
      img:book1,
      description:"Collectable Comic Books",
      title:"20 Products"
    },
    {
      id:2,
      img:book2,
      description:"Old Comic Books",
      title:"29 Products"
    },
    {
      id:3,
      img:book3,
      description:"Literature Books",
      title:"29 Products"
    },
    {
      id:4,
      img:book4,
      description:"Develop Personally",
      title:"29 Products"
    },
    {
      id:5,
      img:book5,
      description:"Colored Comics",
      title:"29 Products"
    },
  ]

  return (
    <div className="BookP">
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

export default HoveredBook;
