import React from "react";
import Labslide from "../assets/LabSlide2.jpg";

function LabaratorySlide() {
  const bgImgLab = {
    backgroundImage: `url(${Labslide})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div style={bgImgLab} className="w-[100%] h-[350px] mt-[100px] flex flex-col justify-center ">
      <h1 className="font-bold text-[white] text-[50px] text-center ">Lowest prices on the market</h1>
      <p className="text-[16px] font-light text-[white] text-center ">
        Duis ullamcorper diam a finibus dictum. Phasellus varius feugiat
        finibus. In sagittis, diam vitae mollis <br />
        volutpat, quam nunc consectetur tortor, id imperdiet neque est.
      </p>
    </div>
  );
}

export default LabaratorySlide;
