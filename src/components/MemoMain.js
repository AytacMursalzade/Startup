import React from "react";
import memoImage1 from "../assets/items1Sport.jpg";
import memoImage2 from "../assets/sportItem7.jpg";
import memoImage3 from "../assets/sportItem4.jpg";
import memoImage4 from "../assets/Memhbdhhcdbh.jpg";

function MemoMain() {
  return (
    <div className="flex mt-[75px] ">
      <div className="flex flex-col px-[75px] mr-[90px]  ">
        <h1 className="font-bold text-[30px] text-[#242424] ">
          Consign Your <br /> Sports with iBid <br /> Auctions
        </h1>
        <p className="text-[#606060] text-[14px] font-light ">
          iBid Auctions provides bidders and <br />
          consignors with first-class service <br />
          when it comes to buying and selling.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <img src={memoImage1} alt="memo" />
            <div className="w-[900px] flex flex-col justify-evenly h-[150px] shadow-2xl ">
              <div>
                <h1 className="font-medium text-center  text-[18px] text-[#484848]">
                  1960 Topss Baseball complete set ranked #20 On PSA Registry
                  With 8.01 Set
                </h1>
              </div>
              <div className="flex justify-between items-center px-[30px] border-t-2 border-[#606060] ">
                <p className="text-[15px]  text-[#606060] font-light ">
                  Starting Bid:
                </p>
                <p className="text-[16px] font-normal text-[#117D66] ">£300.00</p>
              </div>
              <div className="px-[30px] border-t-2 border-[#606060]">
                <p className="text-[15px]  text-[#606060] font-light">
                  Expires on:
                  <span className="text-[14px] ml-[8px] font-semibold text-[#242424]  ">August 8,2024</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <img src={memoImage2} alt="memo" />
            <div className="w-[900px] flex flex-col justify-evenly h-[150px] shadow-2xl ">
              <div>
                <h1 className="font-medium text-center  text-[18px] text-[#484848]">
                2013-14 Kobe Bryant Los Angeles Lakers "Hollywood Nights" Jersey
                </h1>
              </div>
              <div className="flex justify-between items-center px-[30px] border-t-2 border-[#606060] ">
                <p className="text-[15px]  text-[#606060] font-light ">
                  Starting Bid:
                </p>
                <p className="text-[16px] font-normal text-[#117D66] ">£200.00</p>
              </div>
              <div className="px-[30px] border-t-2 border-[#606060]">
                <p className="text-[15px]  text-[#606060] font-light">
                  Expires on:
                  <span className="text-[14px] ml-[8px] font-semibold text-[#242424]  ">August 14, 2024</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <img src={memoImage3} alt="memo" />
            <div className="w-[900px] flex flex-col justify-evenly h-[150px] shadow-2xl ">
              <div>
                <h1 className="font-medium text-center  text-[18px] text-[#484848]">
                1960 Topps Baseball Complete Set Ranked #20 on PSA Registry with 8.01
                </h1>
              </div>
              <div className="flex justify-between items-center px-[30px] border-t-2 border-[#606060] ">
                <p className="text-[15px]  text-[#606060] font-light ">
                  Starting Bid:
                </p>
                <p className="text-[16px] font-normal text-[#117D66] ">£470.00</p>
              </div>
              <div className="px-[30px] border-t-2 border-[#606060]">
                <p className="text-[15px]  text-[#606060] font-light">
                  Expires on:
                  <span className="text-[14px] ml-[8px] font-semibold text-[#242424]  ">August 13, 2024</span>
                </p>
              </div>
            </div>
          </li>
          <li>
            <img src={memoImage4} alt="memo" />
            <div className="w-[900px] flex flex-col justify-evenly h-[150px] shadow-2xl ">
              <div>
                <h1 className="font-medium text-center  text-[18px] text-[#484848]">
                Ed Figuroas 1978 New York Yankees World Series Champions 14K Gold
                </h1>
              </div>
              <div className="flex justify-between items-center px-[30px] border-t-2 border-[#606060] ">
                <p className="text-[15px]  text-[#606060] font-light ">
                  Starting Bid:
                </p>
                <p className="text-[16px] font-normal text-[#117D66] ">£70.00</p>
              </div>
              <div className="px-[30px] border-t-2 border-[#606060]">
                <p className="text-[15px]  text-[#606060] font-light">
                  Expires on:
                  <span className="text-[14px] ml-[8px] font-semibold text-[#242424]  ">August 12, 2024</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MemoMain;
