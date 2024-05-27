import React from "react";
import { IoSearchSharp } from "react-icons/io5";

function FilterTour() {
  return (
    <div>
      <form className="filtered rounded-[9px] flex items-center justify-between  px-[20px] bg-white w-[480px]">
      <input
          className="text-black outline-none "
          type="text"
          placeholder="Search products..."
        />
        <button className="searchButton rounded-[9px] mr-[-25px]  flex justify-center items-center w-[50px] h-[43px] bg-[#6FCBF4] text-white ">
          <IoSearchSharp size={20} />
        </button>
      </form>
    </div>
  );
}

export default FilterTour;
