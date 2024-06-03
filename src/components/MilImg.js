import React from "react";
import imageMil from "../assets/Militaria-slider-scaled.jpg";

function MilImg() {

  const titlemil = {
    backgroundImage: `url(${imageMil})`,
    backgroundPosition:"center",
    backgroundSize:"cover"
  }
  return (
    <div style={titlemil} className="w-[100%] h-[600px] flex justify-center items-center ">
      <h2 className="text-center text-[white] text-[55px] font-extrabold ">
        MILITARIA & WAR <br /> MEMORABILIA
      </h2>
    </div>
  );
}

export default MilImg;
