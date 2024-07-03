import React from "react";
import image from "../assets/ibid_automotive_slider.jpg";

function AutomotiveSlider() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "687px",
        }}
      >
        <div className="flex flex-col gap-[26px] pt-[7%] pl-[3%] ">
          <h1 className="text-[55px] text-[#242424] font-medium ">Find your dream car</h1>

          <h1 className="text-[55px] text-[#242424] font-bold ">& give it a try</h1>
          <p className="text-[#EA7F23] text-[20px] font-normal  ">
            Vivamus id ligula non turpis aliquam dignissim.
            <br />
            Fusce tempor vulputate urna, quis malesuada.
          </p>
          <button className="w-[171px] h-[44px] hover:bg-[#EE964B] hover:text-[white] hover:border-none rounded-[45px] border border-black ">VIEW AUCTIONS</button>
        </div>
      </div>
    </>
  );
}

export default AutomotiveSlider;
