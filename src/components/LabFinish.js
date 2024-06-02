import React from "react";
import { Link } from "react-router-dom";
import LabFinishImg1 from "../assets/labFinish1.jpg";
import LabFinishImg2 from "../assets/LabFinish2.jpg";
import LabFinishImg3 from "../assets/LabFinish3.jpg";

function LabFinish() {

  const items = [
    {
      id: 1,
      img: LabFinishImg1,
      date: "admin | 28 Oct,2020",
      description: "Scienrist receive $3.9 million to optimize",
      description1: "treatment for opioid",
    },
    {
      id: 2,
      img: LabFinishImg2,
      date: "admin | 28 Oct,2020",
      description: "Research finds a problem with concept of herd",
      description1: "immunity",
    },
    {
      id: 3,
      img: LabFinishImg3,
      date: "admin | 28 Oct,2020",
      description: "Researchers to develop new ultrasound system",
      description1: "for next gen",
    },
    
  ];

  return (
    <div className="mt-[30px] px-[75px]">
      <div className="flex flex-col items-center justify-center mt-[126px]">
        <h1 className="font-bold mr-[1180px] text-[24px] text-[#242424]">
          From the Blog
        </h1>
        
      </div>
      <ul className="flex gap-[10px] mt-[35px] ">
        {items.map(item => (
          <li key={item.id} className="w-[450px] h-[461px] flex flex-col gap-[20px] ">
            <Link to="/" >
              <img width={380} src={item.img} alt="memorabilia" className="relative w-full flex justify-center"/>
              <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
            </Link>
            <p className="text-[#1163FA] text-center  text-[14px] font-medium">{item.date}</p>
            <Link to="/">
              <h1 className="text-[#151515] text-center hover:text-[#1163FA]  font-semibold text-[18px]">
                {item.description}<br/>{item.description1}
              </h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabFinish;
