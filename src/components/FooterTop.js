import React from "react";
import { FaGavel } from "react-icons/fa6";
import AntiqueFooter from "./AntiqueFooter";


function FooterTop({
  GavelColor,
  LatText1,
  LatestText2,
  LatestTextp1,
  LatestTextp2,
  hoverColor
}) {
  return (
    <>
      <div className="community">
        <div className="flex flex-col items-center justify-center mt-[126px]">
          <h1 className="font-bold text-[34px] ">LATEST NEWS</h1>

          <div className="flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span
              style={{ color: GavelColor }}
              className="font-bold text-[27px]"
            >
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        </div>
        <AntiqueFooter
          hoverColor={hoverColor}
          LatText1={LatText1}
          LatestText2={LatestText2}
          LatestTextp1={LatestTextp1}
          LatestTextp2={LatestTextp2}
        />
      </div>
    </>
  );
}

export default FooterTop;
