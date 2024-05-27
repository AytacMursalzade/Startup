import React from "react";
import { FaGavel } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function GovernmentCategory({
  governmentHome,
  GovernmentHH1,
  GovernmentHP1,
  price,
  area,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around gap-[15px] ">
        <div className="mt-[150px] flex flex-col gap-[12px] ">
          <img width={440} src={governmentHome} atl="government" />

          <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
            <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
              {GovernmentHH1}
            </h1>
            <p className="text-[#666666] text-[14px] ">{GovernmentHP1}</p>
          </div>
          <div className="w-[440px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
            <p className="flex gap-[5px] justify-center items-center ">
              <FaGavel style={{ color: "#4AD493" }} /> Bid: {price}
            </p>
            <p className="flex gap-[5px] justify-center items-center ">
              <FaLocationDot style={{ color: "#4AD493" }} /> Area: {area}
            </p>
          </div>
        </div>
        <div className=" mt-[150px] ml-[-120px] flex flex-col gap-[12px] ">
          <img width={440} src={governmentHome} atl="government" />

          <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
            <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
              {GovernmentHH1}
            </h1>
            <p className="text-[#666666] text-[14px] ">{GovernmentHP1}</p>
          </div>
          <div className="w-[440px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
            <p className="flex gap-[5px] justify-center items-center ">
              <FaGavel style={{ color: "#4AD493" }} /> Bid: {price}
            </p>
            <p className="flex gap-[5px] justify-center items-center ">
              <FaLocationDot style={{ color: "#4AD493" }} /> Area: {area}
            </p>
          </div>
        </div>
        <div className="mt-[150px] ml-[-120px] flex flex-col gap-[12px] ">
          <img width={440} src={governmentHome} atl="government" />

          <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
            <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
              {GovernmentHH1}
            </h1>
            <p className="text-[#666666] text-[14px] ">{GovernmentHP1}</p>
          </div>
          <div className="w-[440px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
            <p className="flex gap-[5px] justify-center items-center ">
              <FaGavel style={{ color: "#4AD493" }} /> Bid: {price}
            </p>
            <p className="flex gap-[5px] justify-center items-center ">
              <FaLocationDot style={{ color: "#4AD493" }} /> Area: {area}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-[15px] mt-[55px]  ">
        <div className="flex flex-col gap-[12px] ">
          <img width={440} src={governmentHome} atl="government" />

          <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
            <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
              {GovernmentHH1}
            </h1>
            <p className="text-[#666666] text-[14px] ">{GovernmentHP1}</p>
          </div>
          <div className="w-[440px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
            <p className="flex gap-[5px] justify-center items-center ">
              <FaGavel style={{ color: "#4AD493" }} /> Bid: {price}
            </p>
            <p className="flex gap-[5px] justify-center items-center ">
              <FaLocationDot style={{ color: "#4AD493" }} /> Area: {area}
            </p>
          </div>
        </div>
        <div className="ml-[-120px] flex flex-col gap-[12px] ">
          <img width={440} src={governmentHome} atl="government" />

          <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
            <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
              {GovernmentHH1}
            </h1>
            <p className="text-[#666666] text-[14px] ">{GovernmentHP1}</p>
          </div>
          <div className="w-[440px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
            <p className="flex gap-[5px] justify-center items-center ">
              <FaGavel style={{ color: "#4AD493" }} /> Bid: {price}
            </p>
            <p className="flex gap-[5px] justify-center items-center ">
              <FaLocationDot style={{ color: "#4AD493" }} /> Area: {area}
            </p>
          </div>
        </div>
        <div className="ml-[-120px] flex flex-col gap-[12px] ">
          <img width={440} src={governmentHome} atl="government" />

          <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
            <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
              {GovernmentHH1}
            </h1>
            <p className="text-[#666666] text-[14px] ">{GovernmentHP1}</p>
          </div>
          <div className="w-[440px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
            <p className="flex gap-[5px] justify-center items-center ">
              <FaGavel style={{ color: "#4AD493" }} /> Bid: {price}
            </p>
            <p className="flex gap-[5px] justify-center items-center ">
              <FaLocationDot style={{ color: "#4AD493" }} /> Area: {area}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovernmentCategory;
