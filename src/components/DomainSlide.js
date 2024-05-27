import React from "react";

function DomainSlide({ DomainImgSlide }) {
  const DomainSlide = {
    backgroundImage: `url(${DomainImgSlide})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={DomainSlide} className="relative w-[92%] h-[550px] mt-[28px] mx-[62px] ">
      <div className="absolute right-20 bottom-[198px] w-[350px] h-[380px] bg-[#FFE347] pt-[60px] pl-[45px] flex flex-col gap-[8px]  ">
        <h1 className="font-bold text-[28px] text-[white] ">Available <br/> Domains :</h1>
        <h1 className="text-[#442244] text-[20px] font-bold ">www.domainname.com</h1>
        <h1 className="text-[#442244] text-[20px] font-bold ">www.thecon.ro</h1>
        <h1 className="text-[#442244] text-[20px] font-bold ">www.dream.shoes</h1>
        <h1 className="text-[#442244] text-[20px] font-bold ">www.onlinedelivery.ca</h1>
        <h1 className="text-[#442244] text-[20px] font-bold ">www.mathsoftware.com</h1>
      </div>
      <div className="h-[272px] flex flex-col gap-[5px] ml-[50px] ">
        <h1 className="text-[#FFE347] text-[50px] font-extrabold ">
          www.domainnname.com
        </h1>
        <h2 className="text-[white] text-[50px] font-extrabold">
          Now Auctioning
        </h2>
        <button className="w-[180px] h-[60px] bg-[#18AE91] hover:bg-[white] hover:text-[#606060] text-[white] font-bold ">
          VIEW DOMAIN
        </button>
      </div>
    </div>
  );
}

export default DomainSlide;
