import React from "react";

function Slidehandmade({ imgHandPoster }) {
  const handMadeImg = {
    backgroundImage: `url(${imgHandPoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={handMadeImg} className="w-[100%] h-[620px] flex flex-col gap-[18px] justify-center px-[75px] max-600:w-full">
      <h1 className="text-[50px] text-[#151515] font-bold ">Items crafted with love <br/> for your home</h1>
      <p className="text-[16px] text-[#606060] font-light ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
        hendrerit <br/> dolor, ut dapibus nunc vehicula ac. Aenean accumsan diam eu
        facilisis malesuada.
      </p>
      <div><button className="w-[270px] h-[45px] rounded-[45px] bg-[#C16BB6] text-[white] px-[50px] py-[10px] hover:bg-[white] hover:text-[#C16BB6] font-bold ">BROWSE PRODUCTS</button></div>
    </div>
  );
}

export default Slidehandmade;
