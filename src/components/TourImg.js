import React from "react";
import imageToursBtm from "../assets/toursSlide5.jpg";
import FilterTour from "./FilterTour";

function TourImg() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[30px] "
      style={{
        backgroundImage: `url(${imageToursBtm})`,
        width: "100%",
        height: "550px",
      }}
    >
      <h2 className="text-white font-bold text-[40px] text-center ">
        Stay in touch with our offers
      </h2>
      <p className="text-[25px] font-normal text-white ">Subscribe to our Newsteller</p>
      <div className="flex  shadow-lg rounded-[9px] py-[5px] bg-white">
        <FilterTour />
      </div>
    </div>
  );
}

export default TourImg;
