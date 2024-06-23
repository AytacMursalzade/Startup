import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function FilterPure() {
  return (
    <div className="govFilter flex flex-col gap-[25px] justify-center items-center pt-[140px] ">
      <div className="w-[700px] h-[280px] pl-[75] flex flex-col justify-between py-[20px] items-center bg-[black] border-1 border-[black] opacity-30 ">
      <h1 className="flex justify-center text-[15px] font-semibold text-[white] ">ALL</h1>
        <form className="flex justify-between w-[600px] mb-[80px] bg-[white] rounded-r-[8px]">
          <input
            type="text"
            className="text-[#222] px-[25px] outline-none"
            placeholder="Seacrh all, products..."
          />
          <button className="bg-[#4AD493] py-[18px] w-[140px] text-[white] flex justify-center items-center font-semibold hover:bg-[#262626] rounded-r-[8px] ">
            <IoSearchSharp size={20} />
            SEARCH
          </button>
        </form>
      </div>
      <div>
        <ul className="flex justify-center gap-[14px] text-[15px] font-semibold text-[white] ">
          <li>FIND AUCTIONS:</li>
          <Link to="/">
            <li>VEHICLES,</li>
          </Link>
          <Link to="/">
            <li>SALVAGE,</li>
          </Link>
          <Link to="/">
            <li>INDUSTRIAL,</li>
          </Link>
          <Link to="/">
            <li>GOODS,</li>
          </Link>
          <Link to="/">
            <li>EXTRA</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default FilterPure;
