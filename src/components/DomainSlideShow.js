import React from "react";
import src from "../assets/DomainSlideShow.jpg";
import { Link } from "react-router-dom";

function DomainSlideShow() {

  const DomainBackImg = {
    backgroundImage: `url(${src})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  }  
  return (
    <div className="flex gap-[15px] ml-[70px] mt-[120px] ">
      <div>
        <Link>
          <div style={DomainBackImg}  className="w-[750px] h-[660px] rounded-[9px] flex flex-col gap-[20px] justify-center items-center ">
            <h1 className="font-black text-[60px] text-[#FFE347]">.com</h1>
            <div><h1 className="text-[30px] font-extrabold text-[white] ">DOMAINS AUCTIONS</h1>
            <p className="text-[white] text-center font-light text-[16px] ">24 Ongoing Auctions In This Category</p></div>
            <button className="font-semibold w-[150px] h-[40px] rounded-[45px] text-[white] text-[16px] border border-[white] hover:bg-[white] hover:text-[black] ">VIEW MORE</button>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-[20px] rounded-[9px] ">
        <div>
          <Link>
            <div  style={DomainBackImg} className="w-[615px] flex flex-col gap-[10px] justify-center items-center h-[320px] rounded-[9px] "><h1 className="font-black text-[60px] text-[#FFE347]">.co.uk</h1>
            <div><h1 className="text-[30px] font-extrabold text-[white] ">DOMAINS NOW AVAILABLE</h1>
            <p className="text-[white] text-center font-light text-[16px] ">52 Ongoing Auctions In This Category</p></div>
            <button className="font-semibold w-[150px] h-[40px] rounded-[45px] text-[white] text-[16px] border border-[white] hover:bg-[white] hover:text-[black]">VIEW MORE</button></div>
          </Link>
        </div>

        <div >
          <Link>
            <div style={DomainBackImg}  className="w-[615px] flex flex-col gap-[10px] justify-center items-center h-[320px] rounded-[9px] "><h1 className="font-black text-[60px] text-[#FFE347]">.eur</h1>
            <div><h1 className="text-[30px] font-extrabold text-[white] ">DOMAINS ON SALE</h1>
            <p className="text-[white] text-center font-light text-[16px] ">13 Ongoing Auctions In This Category</p></div>
            <button className="font-semibold w-[150px] h-[40px] rounded-[45px] text-[white] text-[16px] border border-[white] hover:bg-[white] hover:text-[black] ">VIEW MORE</button></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DomainSlideShow;
