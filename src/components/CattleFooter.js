import React from "react";
import { Link } from "react-router-dom";
import FtTop1 from "../assets/cattletop1.jpg";
import FtTop2 from "../assets/cattletop2.jpg";
import FtTop3 from "../assets/cattletop3.jpg";
import { FaGavel } from "react-icons/fa";

function CattleFooter() {

  const data = [
    {
        id:1,
        img:FtTop1,
        description:"How rotational grazing",
        description1:"helps in a drought",
        paragraph:"Bring to the table win-win survival",
        paragraph1:"strategies to ensure…",
    },
    {
        id:2,
        img:FtTop2,
        description:"It pays to be an",
        description1:"unconventional rancher",
        paragraph:"Bring to the table win-win survival",
        paragraph1:"strategies to ensure…",
    },
    {
        id:3,
        img:FtTop3,
        description:"How to be a profitable",
        description1:"hippie farmer",
        paragraph:"Bring to the table win-win survival",
        paragraph1:"strategies to ensure…",
    },
  ]
    
  

  return (
    <div className="mt-[30px] px-[75px] ">
         <div className="flex flex-col items-center justify-center mt-[126px]">
          <h1 className="topic font-bold text-[34px] ">LATEST NEWS</h1>

          <div className="gavel flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span
              className="font-bold text-[#627452] text-[27px]"
            >
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        </div>
      <ul className="ftres flex flex-row gap-[15px] mt-[15px] justify-around latestnew ">
        {data.map((item,index) =>(
            <li key={index} className="communityPost flex flex-row mt-[20px] gap-[40px] max-600:px-[-50px]">
            <Link to="/" className="relative w-[118px] h-[119px] overflow-hidden max-600:w-[423px] max-600:h-[400px] ">
              <div className="communitylink w-[535px] h-[170px] flex max-600:w-[423px] max-600:h-[400px] ">
                <div >
                  <img width={120} src={item.img} alt="nft" className="w-full h-full mt-[-38px] " />
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
              </div>
            </Link>
  
            <div className="symbolsLatest flex flex-col ">
              <Link>
                <h1 className= "text-[20px] hover:text-[#627452] font-bold">
                  {item.description}
                  <br /> {item.description1}
                </h1>
              </Link>
              <p className="text-[#606060] ">
                {item.paragraph} <br /> {item.paragraph1}
              </p>
         
            </div>
          </li>
         
        ))}
      </ul>
    </div>
  );
}

export default CattleFooter;
