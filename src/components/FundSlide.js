import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import Drama from "../assets/fundSlide1.jpg";
import Drama1 from "../assets/fundSlide2.jpg";
import photoMas from "../assets/masagePhotoSlide.jpg";

function FundSlide() {
  const photo = {
    backgroundImage: `url(${photoMas})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "180px",
    position: "relative",
  };

  const overlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  };

  const data = [
    {
      id: 1,
      img: Drama,
      description: "Run Silent, Run Deep Old",
      description1: "Book",
      bid: "Starting bid:",
      price: "£76.00",
      on: "Expires on:",
      date: "July 3, 2024",
      content: "DRAMA",
      paragraph: "Bid Now",
    },
    {
      id: 2,
      img: Drama1,
      description: "Germany 1866 - 1945 Cordon A",
      bid: "Starting bid:",
      price: "£80.00",
      on: "Expires on:",
      date: "July 1, 2024",
      content: "DRAMA",
      paragraph: "Bid Now",
    },
  ];

  return (
    <div className="w-[100%] h-[500px] relative">
      <div style={photo} className="relative">
        <div style={overlay}></div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center p-4 gap-[70px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-[25px] text-center bg-white w-[400px] shadow-2xl p-4"
          >
            <div >
              <img
                width={340}
                src={item.img}
                alt={item.description}
                className="object-cover w-[340px] h-[340px]"
              />
            </div>
            <div className="w-full">
              <h3 className="text-[#484848] hover:text-[#D4A619] text-[18px] font-bold mb-2">
                {item.description}
              </h3>
              <div className="flex gap-[2px] mb-2">
                <p className="text-[14px] text-[#606060]">{item.bid}</p>
                <p className="text-[16px] text-[#242424] font-bold ">
                  {item.price}
                </p>
              </div>
              <div className="flex gap-[2px] mb-2">
                <p className="text-[14px] text-[#606060]">{item.on}</p>
                <p className="text-[16px] text-[#242424] font-bold ">
                  {item.date}
                </p>
              </div>
              <div className="w-[200px] h-[40px] px-[15px] flex gap-[2px] items-center border-2 border-[#606060] text-center mb-2">
                <FaRegHeart width={16} />
                <p className="text-[16px] text-[#606060] ml-2">Cause:</p>
                <p className="text-[#D4A619] text-[15px] ml-2">
                  Stop The Fight
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FundSlide;
