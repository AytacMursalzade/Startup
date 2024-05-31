import React from "react";
import AntiqueFooter from "./AntiqueFooter";

function DomainBottom({
  DomainImgLatest,
  LatText1,
  LatestText2,
  LatestTextp1,
  LatestTextp2,
  hoverColor,
  LatestWidth,
  LatestHeight,
  display,
  bgBtn
}) {
  return (
    <>
      <div className="community mt-[100px] mb-[100px] ">
        <div className="flex justify-between items-center px-[99px]">
          <h1 className="text-[35px] text-[black] font-bold">NEWS ARTICLES</h1>
          <button className="text-[16px] text-[#45414166] font-semibold w-[170px] h-[40px] rounded-[9px] bg-[#18AE91] hover:text-[black]">
            ALL ARTICLES
          </button>
        </div>
        <AntiqueFooter
          bgBtn={bgBtn}
          DomainImgLatest={DomainImgLatest}
          display={display}
          LatestWidth={LatestWidth}
          LatestHeight={LatestHeight}
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

export default DomainBottom;
