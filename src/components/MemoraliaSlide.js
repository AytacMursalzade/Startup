import React from "react";

function MemoraliaSlide({ MemoImg, MemoImg1 }) {
  const MemoBgImg = {
    backgroundImage: `url(${MemoImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const MemoBgImg1 = {
    backgroundImage: `url(${MemoImg1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="w-[100%] h-[600px] ">
      <div className="flex flex-col justify-around text-center items-center pt-[25px] ">
        <h2 className="text-[40px] font-extrabold text-[black] ">
          Relive The Moment
        </h2>
        <h1 className="text-[35px] font-normal text-[black] ">
          Exclusive Autographed <br /> Memorabilia
        </h1>
        <p className="text-[#606060] text-[20px] font-light ">
          Commemorate your favorite Player & top moments
        </p>
      </div>
      <div className="flex justify-around ">
        <div style={MemoBgImg} className="w-[500px] "></div>
        <div className="flex flex-col justify-around text-center items-center pt-[150px] ">
          <button className="w-[120px] h-[40px] text-[10px] font-semibold bg-[#078169] text-[white] rounded-[45px] hover:bg-[#606060] ">
            View More
          </button>
        </div>
        <div style={MemoBgImg1} className="w-[500px] h-[300px] "></div>
      </div>
    </div>
  );
}

export default MemoraliaSlide;
