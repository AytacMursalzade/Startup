import React from "react";
import { Link } from "react-router-dom";
import FtTop1 from "../assets/miltop1.jpg";
import FtTop2 from "../assets/miltop2.jpg";
import FtTop3 from "../assets/miltop3.jpg";
import { FaGavel } from "react-icons/fa";

function Miltopfooter({hoverColor}) {

  const data = [
    {
        id:1,
        img:FtTop1,
        description:"The British Sea Service ",
        description1:"Pistol",
        paragraph:"Bring to the table win-win survival",
        paragraph1:"strategies to ensure…",
    },
    {
        id:2,
        img:FtTop2,
        description:"Light Brigade sabres ",
        description1:"and lances",
        paragraph:"Bring to the table win-win survival",
        paragraph1:"strategies to ensure…",
    },
    {
        id:3,
        img:FtTop3,
        description:"Discover the militaria ",
        description1:"events of 2020",
        paragraph:"Bring to the table win-win survival",
        paragraph1:"strategies to ensure…",
    },
  ]
    
  

  return (
    <div className="mt-[30px] px-[75px] ">
         <div className="topgav flex flex-col items-center justify-center mt-[126px]">
          <h1 className="topic font-bold text-[34px] ">LATEST NEWS</h1>

          <div className="gavel flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span
              className="font-bold text-[#5E3217] text-[27px]"
            >
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        </div>
      <ul className="ftres flex flex-row gap-[15px] mt-[15px] justify-around latestnew ">
        {data.map((item,index) =>(
            <li key={index} className="communityPost flex flex-row mt-[20px] gap-[40px]">
            <Link to="/" className="imgTall relative w-[118px] h-[119px] overflow-hidden ">
              <div className="communitylink w-[535px] h-[170px] flex">
                <div >
                  <img width={120} src={item.img} alt="nft" className="w-full h-full mt-[-38px] " />
                </div>
                <div className="imgHover absolute bottom-0 left-0 right-0 top-0 bg-black bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
              </div>
            </Link>
  
            <div className="symbolsLatest flex flex-col ">
              <Link>
                <h1 className={`${hoverColor} text-[20px] font-bold`}>
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

export default Miltopfooter;
