import React from "react";
import imgItem1 from "../assets/sportM1.png";
import imgItem2 from "../assets/SportM2.png";
import imgItem3 from "../assets/sportM3.png";

function MemoSlide1({Itemimg}) {
  const itemSlide = {
    backgroundImage: `url(${Itemimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div style={itemSlide} className="w-[100%] h-[670px] pt-[20px] mt-[100px] flex flex-col gap-[30px] justify-center ">
      <div className="flex flex-col gap-[8px] text-center ">
        <h1 className="text-[34px] font-medium text-[white] ">
          Browse By Category
        </h1>
        <p className="text-[white] text-[15px] font-light ">
          Get Your Interested product By start Auction on What You Like
        </p>
      </div>
      <div>
        <ul className="flex justify-center gap-[30px] ">
          <li>
            <img width={400} src={imgItem1} alt="memoraible" />
          </li>
          <li>
            <img width={400} src={imgItem2} alt="memoraible" />
          </li>
          <li>
            <img width={400} src={imgItem3} alt="memoraible" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MemoSlide1;
