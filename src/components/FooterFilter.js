import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function FooterFilter({bgColor,rounded,mtfooteR}) {
  return (
    <div className="finishFooter">
      <div style={{backgroundColor:bgColor,marginTop:mtfooteR}} className="filterfooter w-[100%] h-[80px] " >
      <div className="footerblue flex justify-between pt-[30px] px-[95px] ">
        <div className=" fooTopic text-white text-[18px] font-extrabold ">
          <h1>Browse through our products library!</h1>
        </div>
        <form style={{borderRadius:rounded}}  className="filterown flex items-center justify-between w-[420px] h-[40px] mt-[-10px] py-[4px] px-[18px] rounded-[45px] bg-white ">
          <input style={{borderRadius:rounded}}
            className="fitfoot text-black outline-none "
            type="text"
            placeholder="Search products..."
          />
          <button style={{borderRadius:rounded}} className="searchIcon mr-[-25px]  flex justify-center items-center w-[43px] h-[43px] bg-[#484848] text-white ">
            <IoSearchSharp size={20} />
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default FooterFilter;
