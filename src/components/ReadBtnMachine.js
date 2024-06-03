import React from "react";
import { FaGavel } from "react-icons/fa";
import DomainBtn1 from "../assets/labLatest.png";
import DomainBtn2 from "../assets/labLatest.png";
import DomainBtn3 from "../assets/labLatest.png";

function ReadBtnMachine() {
    const dataSlide = [
        {
            id:"1",
            img:DomainBtn1,
            description1: "Association of Women",
            description2: "in Construction",
            paragraf1: "Bring to the table win-win survival",
            paragraf2: "strategies to ensure...",
        },
        {
            id:"2",
            img:DomainBtn2,
            description1: "Veterans in Business",
            description2: "Network National",
            paragraf1: "Bring to the table win-win survival",
            paragraf2: "strategies to ensure...",
        },
        {
            id:"3",
            img:DomainBtn3,
            description1: "The mechanical",
            description2: "performs welds metal",
            paragraf1: "Bring to the table win-win survival",
            paragraf2: "strategies to ensure...",
        },
       
    ];

    
  return (
    <div className="flex flex-col items-center  mt-[100px] gap-[50px]">
      <div className=" px-[70px]">
        <h1 className="text-[35px] text-[black] text-center font-bold">LATEST NEWS</h1>
        <div className="flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span
             
              className="font-bold text-[#FBDE06] text-[27px]"
            >
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
      </div>
     
      <div className="mb-[100px] flex justify-center">
        <ul className="flex gap-[25px] flex-wrap justify-center">
          {dataSlide.map((article, index) => (
            <li key={index} className="w-[440px] h-[250px] flex gap-[20px] border-2">
              <div
                style={{
                  backgroundImage: `url(${article.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="w-[150px] h-[100%]"
              ></div>
              <div className="w-[280px] h-[230px] pt-[24px] flex flex-col justify-evenly">
                <h1 className="text-[24px] hover:text-[#FBDE06] text-[#484848] font-bold">
                  {article.description1} <br /> {article.description2}
                </h1>
                <p className="text-[#606060] text-[14px] font-light">
                  {article.paragraf1}
                  <br />
                  {article.paragraf2}
                </p>
                <button className="w-[120px] h-[40px] rounded-[7px] font-bold text-[14px] text-[white] bg-[#FBDE06] hover:bg-[white] hover:text-[#242424] ">
                  READ MORE
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReadBtnMachine;
