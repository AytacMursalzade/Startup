import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function Filter() {
  return (
    <div>
      <form className="filtered flex items-center justify-between w-[350px] h-[25px] pt-[16px]  px-[20px] rounded-full bg-white ">
        <input
          className="text-black outline-none "
          type="text"
          placeholder="Search products..."
        />
        <button className="searchButton rounded-[50%] mr-[-25px]  flex justify-center items-center w-[43px] h-[43px] bg-[#484848] text-white ">
          <IoSearchSharp size={20} />
        </button>
      </form>
    </div>
  );
}

export default Filter;
