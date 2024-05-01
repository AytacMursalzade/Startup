import React from "react";
import Filter from "./Filter";

function FooterFilter() {
  return (
    <div className="w-[100%] h-[80px] mt-[90px] mb-[75px] bg-[#2695FF] ">
      <div  className="flex justify-between pt-[30px] px-[95px] ">   
        <div className="text-white text-[18px] font-extrabold ">
          <h1>Browse through our products library!</h1>
        </div>
        <Filter />
      </div>
    </div>
  );
}

export default FooterFilter;
