import React from "react";
import imageEar from "../assets/earphoneSlide.png";

function CountImg() {
  return (
    <div className="w-full h-[720px] pt-[70px] bg-[black] flex max-600:w-[533px] ">
      <div className="countP flex  bg-[white] w-[1300px] h-[600px] mx-[60px] max-600:mx-[20px] max-600:w-[484px] ">
        <div className="flex flex-col px-[90px] py-[60px] gap-[25px] max-600:p-[30px]">
          <h1 className="font-bold text-[45px] text-[#252525] ">
            Smartphone Earbuds
          </h1>
          <p className="text-[#606060] text-[18px]">Sealed Bid Auction</p>
          <span className="text-[16px] text-[#606060] font-light">
            Going forward knowledge is power or we need to button up our
            approach <br/> old boys club. Please use “solutionise” instead of solution
            ideas! 🙂 draw a <br/> line in the sand, for take five, punch the tree,
            and come back in here with a <br/> clear head. Out of scope data-point
            work flows , nor critical mass, and time <br/> to open the kimono yet move
            the needle.
          </span>
          <div></div>
          <div>
            <button className="btnCount bg-[#ea3546] text-[white] text-[16px] rounded-[45px] font-semibold px-[20px] py-[10px] ">
              BID NOW
            </button>
          </div>
        </div>
        <div className="py-[50px] ">
          <img src={imageEar} alt="earphone" />
        </div>
      </div>
    </div>
  );
}

export default CountImg;
