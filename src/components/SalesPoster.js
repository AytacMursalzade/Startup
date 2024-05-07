import React from "react";

function SalesPoster() {
  return (
    <>
      <div className="poster flex flex-col gap-[60px] mr-[32px] ">       
        <div>
          <div className="bluePoster w-[365px] h-[501px] flex justify-center items-center flex-col gap-[15px] bg-[blue] ">
            <h1 className="text-[27px] text-white font-extrabold ">Phones</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">12</strong>Products
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#2695FF] text-[14px] font-semibold text-white rounded-[30px] bg-[#2695FF] ">
              VIEW ALL ITEMS
            </button>
          </div>
        </div>
        <div>
          <div className="w-[365px] h-[501px] flex justify-center items-center flex-col gap-[15px] bg-[red] ">
            <h1 className="text-[27px] text-white font-extrabold ">
              ELECTRONICS
            </h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">9</strong>Products
            </p>
            <button className="w-[205px] h-[50px] text-[14px] hover:bg-white hover:text-[#2695FF] font-semibold text-white rounded-[30px] bg-[#2695FF] ">
              VIEW ALL ITEMS
            </button>
          </div>
        </div>
        <div>
          <div className="w-[365px] h-[501px] justify-center items-center flex flex-col gap-[15px] bg-[yellow] ">
            <h1 className="text-[27px] text-white font-extrabold ">LAPTOP</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">5</strong>Products
            </p>
            <button className="w-[205px] h-[50px] text-[14px] hover:bg-white hover:text-[#2695FF] font-semibold text-white rounded-[30px] bg-[#2695FF] ">
              VIEW ALL ITEMS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesPoster;
