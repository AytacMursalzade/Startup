import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import SearchInput from "../components/SearchInput";
import GovernHeader from "./GovernHeader";

function GovernmentHeader({src}) {
  return (
    <>
      <div className="mx-[75px] py-[5px] ">
        <div className="flex justify-between">
          <div>
            <ul className="w-[600px] flex ">
              <li className="flex gap-[9px] px-2 py-1 items-center text-[#334141] ">
                <BsTelephoneFill /> +9445584926578
              </li>
              <li className="flex gap-[9px] px-2 py-1 items-center text-[#334141] ">
                <CiMail /> contact@example.com
              </li>
              <li className="flex gap-[9px] px-2 py-1 items-center text-[#334141] ">
                <IoTimeOutline /> Mon - Fri:10:00 - 18:00
              </li>
            </ul>
          </div>
          <div>
            <ul className="w-[600px] flex justify-end">
              <li className="flex gap-[9px] px-2 py-1 items-center text-[#334141] ">
                <button>
                  <SearchInput />
                </button>
              </li>
              <li className="flex gap-[9px] px-2 py-1 items-center text-[#334141] ">
                <button>Language</button>
              </li>
              <li className="flex gap-[9px] px-2 py-1 items-center text-[#334141] ">
                <button>Sign In</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex "></div>
      </div>
      <div><GovernHeader src={src} /></div>
    </>
  );
}

export default GovernmentHeader;
