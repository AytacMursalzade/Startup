import React from "react";
import searchImg from "../assets/seacrhDomain.png";
import searchImgone from "../assets/gavelDomain.png";
import searchImgtwo from "../assets/transferDomain.png";

function DomainTable() {
  return (
    <div className="mt-[100px]">
      <div className="flex justify-between items-center px-[99px]">
        <h1 className="text-[35px] text-[black] font-bold">HOW IT WORKS</h1>
        <button className="text-[16px] text-[#45414166] font-semibold w-[170px] h-[40px] rounded-[9px] bg-[#18AE91] hover:text-[black]">
          CONTACT US
        </button>
      </div>
      <div>
        <ul className="flex gap-[45px] justify-center mt-[48px] ">
          <li className="w-[410px] h-[280px] border-2  border-[#18AE91] rounded-[9px] flex flex-col gap-[12px] justify-center items-center px-[25px] ">
            <img width={50} src={searchImg} alt="domain" />
            <h1 className="text-[20px] font-bold text-center text-[#606060] ">Search for domains suitable for <br/> your business</h1>
            <p className="text-[16px] font-light text-center text-[#606060] ">Lorem ipsum dolor sit amet, consecte <br/> adipiscing elit. Nulla eget massa.</p>
          </li>
          <li className="w-[410px] h-[280px] border-2  border-[#18AE91] rounded-[9px] flex flex-col gap-[12px] justify-center items-center px-[25px] ">
            <img width={50} src={searchImgone} alt="domain" />
            <h1 className="text-[20px] font-bold text-center text-[#606060] ">Place a bid on your desired <br/> domain name</h1>
            <p className="text-[16px] font-light text-center text-[#606060] ">Lorem ipsum dolor sit amet, consecte <br/> adipiscing elit. Nulla eget massa.</p>
          </li>
          <li className="w-[410px] h-[280px] border-2  border-[#18AE91] rounded-[9px] flex flex-col gap-[12px] justify-center items-center px-[25px] ">
            <img width={50} src={searchImgtwo} alt="domain" />
            <h1 className="text-[20px] font-bold text-center text-[#606060] ">Win the auction and transfer <br/> the domain name</h1>
            <p className="text-[16px] font-light text-center text-[#606060] ">Lorem ipsum dolor sit amet, consecte <br/> adipiscing elit. Nulla eget massa.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DomainTable;
