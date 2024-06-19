import React from "react";
import watchimage from "../assets/watchCoins.png";

function CountClock() {
  return (
    <div className="container flex justify-around mt-[200px] mb-[200px] max-600:flex max-600:flex-col max-600:items-center ">
      <div>
        <img width={450} src={watchimage} alt="watch" />
      </div>
      <div className="flex flex-col gap-[30px] ">
        <div className="flex flex-col gap-[20px]  max-600:ml-[40px]">
          <h2 className="font-bold text-[45px] text-[#252525]">
            Desktop Gamer Las Vegas
          </h2>
          <h1 className="font-light text-[#606060] text-[16px] ">
            The Ragdoll is a cat breed with blue eyes and a distinct colorpoint
            coat. It is a large <br/> and muscular semi-longhair cat with a soft and
            silky coat. Like all long haired cats, Ragdolls <br/> need grooming to
            ensure their fur does not mat. Developed by American breeder Ann <br/>
            Baker in the 1960s, it is best known for its docile and placid
            temperament and affectionate <br/> nature.
          </h1>
          <h1 className="font-light text-[#606060] text-[16px] ">
            The Ragdoll is a cat breed with blue eyes and a distinct colorpoint
            coat. It is a large <br/> and muscular semi-longhair cat with a soft and
            silky coat. Like all long haired cats, Ragdolls <br/> need grooming to
            ensure their fur does not mat. Developed by American breeder Ann <br/>
            Baker in the 1960s, it is best known for its docile and placid
            temperament and affectionate <br/> nature.
          </h1>
        </div>
        <div></div>
        <div className="flex gap-[16px] max-600:ml-[40px]  items-center ">
          <button className="btnAuc bg-[#EA3546] hover:bg-[white] hover:text-[#EA3546] px-[18px] py-[10px] rounded-[45px] font-semibold text-[white] ">PLACE BID</button>
          <p className="font-light text-[#606060] text-[16px] ">Auction Ended</p>
        </div>
      </div>
    </div>
  );
}

export default CountClock;
