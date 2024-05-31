import React from "react";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.png";
import post5 from "../assets/post5.png";
import post6 from "../assets/post6.png";
import post7 from "../assets/post7.png";
import post8 from "../assets/post8.png";
import post9 from "../assets/post9.png";
import post10 from "../assets/post10.png";
import post11 from "../assets/post11.png";
import post12 from "../assets/post12.png";

function Freelist1() {
 

  return (
    <div className="mt-[75px] ">
      <div className=" px-[120px] mb-[30px] ">
        <h1 className="text-[32px] text-[#222222] font-bold">
        Categories
        </h1>
        <p className="text-[18px] text-[#606060] font-light">
          Nunc est velit, dapibus nec mi id, laoreet mattis elit.
        </p>
      </div>
      <ul className="flex flex-wrap justify-around mx-[100px] gap-[20px] ">
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post1} alt="frelancer" /> Web Development (5)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post2} alt="frelancer" /> Php (3)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post3} alt="frelancer" /> Banner Design (3)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post4} alt="frelancer" /> CSS (2)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post5} alt="frelancer" /> Copywriting (5)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post6} alt="frelancer" /> Web Analytics (3)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post7} alt="frelancer" /> JavaScript (3)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post8} alt="frelancer" /> Photo Editing (1)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post9} alt="frelancer" /> Web Designert (5)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post10} alt="frelancer" /> Link Building (2)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post11} alt="frelancer" /> Linux (3)</li>
       <li className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] px-[12px] border-2 border-[gray] "><img width={38} src={post12} alt="frelancer" /> Server (3)</li>
      
      </ul>
    </div>
  );
}

export default Freelist1;

