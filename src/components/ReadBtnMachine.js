import React from "react";
import { FaGavel } from "react-icons/fa";
import DomainBtn1 from "../assets/labLatest.png";
import DomainBtn2 from "../assets/labLatest.png";
import DomainBtn3 from "../assets/labLatest.png";

function ReadBtnMachine({btnColor}) {
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
    <div className="flex flex-col mt-[100px] gap-[50px]">
      
      <div className="flex flex-col items-center justify-center mt-[70px]">
        <h1 className="topic font-bold text-[34px] text-center">LATEST NEWS</h1>
        <div className="gavel flex items-center justify-center mt-[15px]">
          <div className="border-t-2 border-[#D8D7DC] w-[230px] mx-2"></div>
          <span  className="font-bold text-[27px] text-[#FBDE06] ">
            <FaGavel />
          </span>
          <div className="border-t-2 border-[#D8D7DC] w-[230px] mx-2"></div>
        </div>
      </div>
      <div className="mb-[100px] flex justify-center  ">
        <ul className="flex gap-[25px] flex-wrap justify-center ">
          {dataSlide.map((article, index) => (
            <li key={index} className="w-[440px] h-[250px] flex gap-[20px] border-2 max-600:flex max-600:flex-col max-600:w-[452px] max-600:h-[688px] ">
              <div
                style={{
                  backgroundImage: `url(${article.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="ReadFoto w-[150px] h-[100%]"
              ></div>
              <div className="w-[280px] h-[230px] pt-[24px] flex flex-col justify-evenly">
                <h1 className="text-[24px] text-[#484848] font-bold">
                  {article.description1} <br /> {article.description2}
                </h1>
                <p className="text-[#606060] text-[14px] font-light">
                  {article.paragraf1}
                  <br />
                  {article.paragraf2}
                </p>
                <button className={`ReadBtn w-[120px] h-[40px] rounded-[9px] font-bold text-[14px] text-[white] hover:bg-[white] hover:text-[#242424] ${btnColor}`}>
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
