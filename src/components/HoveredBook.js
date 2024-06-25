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
      id: 1,
      img: book1,
      description: "Collectable Comic Books",
      title: "20 Products",
    },
    {
      id: 2,
      img: book2,
      description: "Old Comic Books",
      title: "29 Products",
    },
    {
      id: 3,
      img: book3,
      description: "Literature Books",
      title: "29 Products",
    },
    {
      id: 4,
      img: book4,
      description: "Develop Personally",
      title: "29 Products",
    },
    {
      id: 5,
      img: book5,
      description: "Colored Comics",
      title: "29 Products",
    },
  ];

  const getItemSize = (id) => {
    switch (id) {
      case 1:
        return "w-[670px] h-[656px]";
      case 2:
      case 3:
      case 4:
      case 5:
        return "w-[320px] h-[320px]";
      default:
        return "w-[320px] h-[320px]";
    }
  };

  return (
    <div className="book-container ml-[75px] mt-[140px] flex gap-[15px]">
      <div className="flex flex-col gap-[15px]">
       
        <div className={`flex items-center justify-center ${getItemSize(1)}`} style={{ backgroundImage: `url(${data[0].img})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <Link to="#">
            <div className="w-[326px] h-full flex items-center mt-[495px] ml-[-247px] ">
              <div >
                <h1 className="font-extrabold text-[30px] text-white">{data[0].description}</h1>
                <p className="text-white text-[16px] font-light">{data[0].title}</p>
                
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[15px]">
       
        <div className="flex gap-[15px]">
          {data.slice(1, 3).map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${item.img})`, backgroundPosition: "center", backgroundSize: "cover" }} className={`flex items-center justify-center ${getItemSize(item.id)}`}>
              <Link to="#">
                <div className="w-[326px] h-full flex items-center mt-[495px] ml-[-247px] ">
                  <div>
                    <h1 className="font-extrabold text-[20px] text-white">{item.description}</h1>
                    <p className="text-white font-light">{item.title}</p>
                    
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-[15px]">
          {data.slice(3).map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${item.img})`, backgroundPosition: "center", backgroundSize: "cover" }} className={`flex items-center justify-center ${getItemSize(item.id)}`}>
              <Link to="#">
                <div className="w-[326px] h-full flex items-center ml-[25px]  ">
                  <div>
                    <h1 className="font-extrabold text-[20px] text-white">{item.description}</h1>
                    <p className="text-white font-light">{item.title}</p>
                    
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HoveredBook;
