import React from "react";

function SlideHand({ imgHandPosterAverage,symbols,symbolsH,symbolsP,symbolsH1,symbolsP3,symbolsP2,symbols2,symbolsP1,symbolsP4,symbolsP5,symbolsH3,symbols1 }) {
  const handMadeAverage = {
    backgroundImage: `url(${imgHandPosterAverage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={handMadeAverage} className="flex mt-[150px] text-center justify-around items-center w-[100%] h-[380px] max-600:flex max-600:flex-col max-600:h-[854px] max-600:w-[537px] ">
      <div className="flex flex-col gap-[18px] ">
        <img className="ml-[150px] max-600:mx-auto " width={80} src={symbols} alt="symbols" />
        <h1 className="text-[30px] font-semibold text-[white] ">{symbolsH}</h1>
        <p className="text-[16px] text-[white] font-light ">{symbolsP}<br/>{symbolsP1}</p>
      </div>
      <div className="flex flex-col gap-[18px] ">
        <img className="ml-[150px] max-600:mx-auto" width={80} src={symbols1} alt="symbols" />
        <h1 className="text-[30px] font-semibold text-[white] ">{symbolsH1}</h1>
        <p className="text-[16px] text-[white] font-light ">{symbolsP2}<br/>{symbolsP3}</p>
      </div>
      <div className="flex flex-col gap-[18px] ">
        <img className="ml-[150px] max-600:mx-auto" width={80} src={symbols2} alt="symbols" />
        <h1 className="text-[30px] font-semibold text-[white] ">{symbolsH3}</h1>
        <p className="text-[16px] text-[white] font-light ">{symbolsP4}<br/>{symbolsP5}</p>
      </div>
    </div>
  );
}

export default SlideHand;
