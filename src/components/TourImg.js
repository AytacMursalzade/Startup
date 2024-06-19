import React from "react";
import imageToursBtm from "../assets/toursSlide5.jpg";
import FilterTour from "./FilterTour";

function TourImg() {
  return (
    <div
      className="flex flex-col justify-center items-center gap-[30px] max-600:w-[500px]  max-600:h-[482px] max-600:flex max-600:flex-col max-600:gap-[15px] "
      style={{
        backgroundImage: `url(${imageToursBtm})`,
        width: "100%",
        height: "550px",
      }}
    >
      <h2 className="text-white font-bold text-[40px] text-center max-600:text-[26px] ">
        Stay in touch with our offers
      </h2>
      <p className="text-[25px] font-normal text-white ">Subscribe to our Newsteller</p>
      <div className="flex  shadow-lg rounded-[9px] py-[5px] bg-white max-600:w-[405px] max-600:h-[44px] ">
        <FilterTour />
      </div>
    </div>
  );
}

export default TourImg;
