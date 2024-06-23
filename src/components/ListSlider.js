import React from "react";
import listimageC from "../assets/listSlide.jpg";
import imgCar from "../assets/Listslidercar.png";

function ListSlider() {
  const listImg = {
    backgroundImage: listimageC,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div style={listImg} className="listSlider px-[75px] flex justify-between pt-[90px] w-[100%] h-[500px] ">
      <div className="flex flex-col gap-[25px] ">
        <h1 className="text-[55px] font-bold text-left text-[black] ">Audi Q5 Premium</h1>
        <p className="text-[16px] text-[#606060] text-left font-normal ">Capitalize on low hanging fruit to identify a ballpark.</p>
        <div className="flex gap-[5px] ">
          <p className="text-[16px] text-[#606060] font-light  ">Current bid:</p>
          <h1 className="text-[16px] text-[#606060] font-bold ">$5550</h1>
        </div>
        <button className="bg-[#392061] text-[14px] w-[173px] h-[43px] rounded-[45px] text-[white] font-medium ">PLACE BID NOW</button>
      </div>
      <div>
        <img src={imgCar} alt="listauction" />
      </div>
    </div>
  );
}

export default ListSlider;
