import React from "react";
import FilterPure from "./FilterPure";

function GovernmentSlide({ imageGovern }) {
  const GSlide = {
    backgroundImage: `url(${imageGovern})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div style={GSlide} className="px-[75px] mx-[75px] h-[600px] ">
      <div>
        <FilterPure />
      </div> 
    </div>
  );
}

export default GovernmentSlide;
