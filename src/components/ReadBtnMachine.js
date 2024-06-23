import React from "react";
import { FaGavel } from "react-icons/fa";
import DomainBtn1 from "../assets/labLatest.png";
import DomainBtn2 from "../assets/mac1.jpg";
import DomainBtn3 from "../assets/mac2.jpg";

function ReadBtnMachine({ btnColor}) {
  const dataSlide = [
    {
      id: "1",
      img: DomainBtn1,
      description1: "Association of Women",
      description2: "in Construction",
      paragraph1: "Bring to the table win-win survival",
      paragraph2: "strategies to ensure...",
    },
    {
      id: "2",
      img: DomainBtn2,
      description1: "Veterans in Business",
      description2: "Network National",
      paragraph1: "Bring to the table win-win survival",
      paragraph2: "strategies to ensure...",
    },
    {
      id: "3",
      img: DomainBtn3,
      description1: "The mechanical",
      description2: "performs welds metal",
      paragraph1: "Bring to the table win-win survival",
      paragraph2: "strategies to ensure...",
    },
  ];

  

  return (
    <div className="flex flex-col mt-[100px] gap-[50px]">
     <div className=" flex flex-col items-center justify-center">
            <h1 className="topic font-bold text-[34px]">LATEST AUCTIONS</h1>
            <div className="gavel flex items-center justify-center mt-[15px]">
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
              <span className="font-bold text-[#FBDE06] text-[27px]">
                <FaGavel />
              </span>
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
            </div>
          </div>
      <div className="mb-[100px] flex justify-center">
        <ul className="flex gap-[25px] flex-wrap justify-center">
          {dataSlide.map((article) => (
            <li key={article.id} className="readFoto1 w-[440px] h-[250px] flex gap-[20px] border-2">
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
                  {article.paragraph1}
                  <br />
                  {article.paragraph2}
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
