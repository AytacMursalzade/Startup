import React from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaGavel, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";
import comp1 from "../assets/desktopCount.jpg";
import comp2 from "../assets/desktopCount.jpg";


function CountSoon({hoverBGsales}) {
  const data = [
    {
      id: 1,
      img: comp1,
      paragraph: "The Ragdoll is a cat breed with",
      paragraph1: "blue eyes and a distinct colorpoint",
      paragraph2: "coat. It is a large and muscular",
      paragraph3: "semi-longhair cat with a soft and",
      paragraph4: "silky coat. Like all long haired cats,",
      paragraph5: "Ragdolls need grooming to ensure",
      paragraph6: "their fur does not mat.",
      bid: "Auction Ended"
    },
    {
      id: 2,
      img: comp2,
      paragraph: "The name Ragdoll is derived from",
      paragraph1: "the tendency of individuals from",
      paragraph2: "the original breeding stock to go",
      paragraph3: "limp and relaxed when picked up.",
      paragraph4: "Particularly popular in both the",
      paragraph5: "United Kingdom and the breed",
      bid: "Auction Ended"
    },
  ];

 

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[160px]">
        <h1 className="topic font-bold text-[34px] text-center">AUCTIONS EXPIRING SOON</h1>
        <div className="gavel flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2"></div>
          <span  className="font-bold text-[#EA3546] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2"></div>
        </div>
      </div>
      <div className="PhonesAll flex flex-wrap justify-center ml-[70px] mt-[75px] ">
        {data.map((item) => (
          <div key={item.id} className="allPhones flex w-[720px] justify-between">
            <Link to='/'>
              <div className="flex items-start w-[350px] h-[360px] pt-[30px] shadow-2xl">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button
                      
                      className="text-white flex bg-[#EA3546] rounded-[50%] justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                    >
                      <IoMdEye />
                    </button>
                  </Tooltip>
                  <Tooltip className="falseTooltip" title="View Auction">
                    <button
                     
                      className={`${hoverBGsales} rounded-[50%]  text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                    >
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip className="falseTooltip" title="Quickview">
                    <button
                     
                      className={`${hoverBGsales} rounded-[50%]  text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                    >
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
                <div>
                  <img width={280} src={item.img} alt="item" />
                </div>
              </div>
            </Link>
            <div className="phoneBottom w-[300px] h-[320px] flex flex-col justify-center gap-[25px]">
              <Link to="/">
                <h1 className="text-[#484848] text-[18px] font-bold">
                  Desktop Gamer Las Vegas
                </h1>
              </Link>
              <p className="text-[16px] text-[#606060] font-light">
                {item.paragraph} <br /> {item.paragraph1} <br />
                {item.paragraph2} <br /> {item.paragraph3} <br />
                {item.paragraph4} <br /> {item.paragraph5} <br /> {item.paragraph6}
              </p>
              <span className="text-[16px] text-[#606060] font-light">
                {item.bid}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountSoon;
