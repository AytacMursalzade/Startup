import React from "react";
import { Link } from "react-router-dom";

function GovernBottm({
  governmentHomeImg,
  GovernmentHomeH1,
  GovernmentHomeP1
}) {
  return (
    <div className="flex flex-col mb-[100px] ">
        <h1 className="text-[32px] text-[#252525] font-bold">Popular Posts</h1>
      <div className="flex justify-around px-[95px] ">
        <div className="mt-[150px] flex  gap-[12px] ">
          <img className="w-[280px] h-[265px] " width={200} src={governmentHomeImg} atl="government" />

          <div className="h-[280px] flex flex-col justify-around ">
            <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
              <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
                {GovernmentHomeH1}
              </h1>
              <p className="text-[#666666] text-[14px] ">{GovernmentHomeP1}</p>
            </div>
            <div className="w-[330px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
              <p className="flex gap-[5px] justify-center items-center ">
                <Link to="/">
                  <p className="cursor font-bold text-[#4AD493] ">Government</p>
                </Link>
                | September 21,2021
              </p>
            </div>
          </div>
        </div>        
        <div className="mt-[150px] flex  gap-[12px] ">
          <img className="w-[280px] h-[265px] " width={280} src={governmentHomeImg} atl="government" />

          <div className="h-[280px] flex flex-col justify-around ">
            <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
              <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
                {GovernmentHomeH1}
              </h1>
              <p className="text-[#666666] text-[14px] ">{GovernmentHomeP1}</p>
            </div>
            <div className="w-[330px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
              <p className="flex gap-[5px] justify-center items-center ">
                <Link to="/">
                  <p className="cursor font-bold text-[#4AD493] ">Government</p>
                </Link>
                | September 21,2021
              </p>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}

export default GovernBottm;
