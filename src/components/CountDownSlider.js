import React from "react";

function CountDownSlider() {
  return (
    <div className="countSlider flex justify-around pt-[10%] bg-[#F3F3F3] w-[100%] h-[598px] ">
      <div className="countOne flex flex-col gap-4 ">
        <h1 className="text-[48px] text-[#252525] font-normal ">
          Hurry up <br />
          to catch the <strong className="text-[#F4524D] ">ultimate <br />
          sale</strong>  on iBid.
        </h1>
        <p className="text-[18px] text-[#252525] font-normal ">Capitalize on low hanging fruit to identify a ballpark value added <br/>
        activity to beta test. Override the digital divide with additional clickthroughs <br/>from DevOps.</p>
        <button className="w-[227px] h-[47px] rounded-[45px] bg-[#F4524D] hover:bg-[#bb2d29] text-[white] ">AUCTIONS ENDING SOON</button>
      </div>
      <div className="countWo w-[700px] h-[318px] shadow-2xl flex flex-col items-center justify-around ">
        <p className="text-[16px] text-[#606060]  ">The next auction ends in:</p>
        <h1></h1>
        <button className="w-[168px] h-[45px] rounded-[45px] text-[white] bg-[#F4524D] hover:bg-[#bb2d29] font-normal " >VIEW AUCTION</button>
        <div className="countP flex justify-evenly text-[16px] text-[#606060]  ">
            <p>Total auctioneers: |</p>
            <p>Current bid:  |</p>
            <p>Buy price: </p>
        </div>
      </div>
    </div>
  );
}

export default CountDownSlider;
