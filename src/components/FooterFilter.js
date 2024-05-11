import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function FooterFilter({bgColor}) {
  return (
    <div style={{backgroundColor:bgColor}} className="filterfooter w-[100%] h-[80px] mt-[90px] mb-[75px]" >
      <div className="footerblue flex justify-between pt-[30px] px-[95px] ">
        <div className="text-white text-[18px] font-extrabold ">
          <h1>Browse through our products library!</h1>
        </div>
        <form className="filterown flex items-center justify-between w-[420px] h-[40px] mt-[-10px] py-[4px] px-[18px] rounded-[45px] bg-white ">
          <input
            className="text-black outline-none "
            type="text"
            placeholder="Search products..."
          />
          <button className=" rounded-[45px] mr-[-25px]  flex justify-center items-center w-[43px] h-[43px] bg-[#484848] text-white ">
            <IoSearchSharp size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default FooterFilter;
