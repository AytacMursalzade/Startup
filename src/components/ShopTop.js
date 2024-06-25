import React from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

function ShopTop({
  paragraph,
  description,
  title,
  title1,
  title2,
  watched,
  display1,
  display2,
  display3
}) {
  const icon = {
    display: display1 ? "block" : "none",
  };
  const style1 = {
    display: display2 ? "block" : "none",
  };
  const style2 = {
    display: display3 ? "block" : "none",
  };
  return (
    <div className="w-[100%] h-[150px] shadow-xl px-[75px] py-[40px] max-600:w-[100%] max-600:h-[20px] ">
      <div className="sliderDesc text-[#999999] text-[15px] flex gap-[10px] ">
        <Link to="/">
          <p>iBid Theme /</p>
        </Link>
        <div style={style1} >
          <Link to="/">
            <p>{title} /</p>
          </Link>
        </div>
        <div style={style2} >
          <Link to="/">
            <p>{title1} /</p>
          </Link>
        </div>
        <Link to="/">
          <p>{title2} </p>
        </Link>
        <p>{paragraph}</p>
      </div>
      <div>
        <p className="text-[30px] font-bold text-[#242424] max-600:ml-[-58px] max-600:mt-[-30px] ">{description}</p>
      </div>
      <div style={icon}>
        <div className="flex items-center gap-[8px] mt-[10px] ">
          <FaRegEye />
          <p className="text-[#999999] text-[15px] flex gap-[10px]">
            {watched}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShopTop;
