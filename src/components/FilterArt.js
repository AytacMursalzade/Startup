import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function FilterArt() {
  return (
    <div>
      <form className="filtered flex items-center justify-between mt-[-10px] py-[4px] px-[20px] bg-white w-[420px]">
        <input
          className="text-black outline-none "
          type="text"
          placeholder="Search products..."
        />
        <button className="searchButton rounded-[9px] mr-[-25px]  flex justify-center items-center w-[43px] h-[43px] bg-[#484848] text-white ">
          <IoSearchSharp size={20} />
        </button>
      </form>
    </div>
  );
}

export default FilterArt;
