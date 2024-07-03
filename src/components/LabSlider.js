import React from "react";
import image from "../assets/Laboratory-slider_pic.png";

function LabSlider() {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "cover",
    backgroundSize: "center",
  };
  return (
    <div className="labSlider w-[100%] h-[608px] flex justify-evenly gap-[25px] pl-[45px] pt-[150px] bg-[green] ">
      <div className="flex flex-col gap-[25px] ">
        <h2 className="text-[45px] font-bold text-[white] ">
          Laboratory & Medical <br /> Equipment Auctions
        </h2>
        <p className="text-[16px] text-[white] ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <button className="w-[138px] h-[40px] rounded-[45px] font-bold text-[white] hover:text-[white] hover:bg-[black] bg-[#565CE0]">
          Find More
        </button>
      </div>
      <div className="w-[450px] h-[431px] mt-[-25px]  " style={style}></div>
    </div>
  );
}

export default LabSlider;
