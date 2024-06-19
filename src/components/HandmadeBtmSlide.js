import React from "react";
import srcImg from "../assets/handmadeSlide.png";

function HandmadeBtmSlide() {
  return (
    <div className="flex justify-around mt-[130px] max-600:flex max-600:flex-col max-600:ml-[10px] ">
      <div>
        <img width={480} src={srcImg} alt="handmade" className="max-600:ml-[20px]" />
      </div>
      <div className="flex flex-col justify-evenly max-600:flex max-600:gap-4">
        <h1 className="text-[35px] text-[#151515] font-bold">About iBid <br/> and the business</h1>
        <p className="text-[16px] text-[#606060] font-light">Curabitur volutpat neque a velit fermentum tristique. Morbi eleifend in dui eu <br/>gravida. Ut tempus feugiat nulla, placerat euismod ipsum semper non. Ut molestie <br/> laoreet nisi, eget mollis lorem malesuada at. Aenean eros diam, bibendum in massa <br/> ut, hendrerit eleifend orci. Aenean sem libero, sagittis eget commodo nec, imperdiet <br/> eget quam.</p>
        <button className="w-[170px] h-[45px] rounded-[45px] bg-[#C16BB6] text-[white] px-[30px] py-[10px] hover:bg-[white] hover:text-[#C16BB6] font-bold ">READ MORE</button>
      </div>
    </div>
  );
}

export default HandmadeBtmSlide;
