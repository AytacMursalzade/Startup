import React from "react";
import { Link } from "react-router-dom";

function LatestDomain() {
  const data = [
    {
      id: 1,
      description: "www.dream.shoes",
      bid: "Current bid:",
      price: "£128.00",
      date: "June 2, 2024",
    },
    {
      id: 2,
      description: "www.teablenders.com",
      bid: "Current bid:",
      price: "£61.00",
      date: "June 1, 2024",
    },
    {
      id: 3,
      description: "www.onlinedelivery.ca",
      bid: "Starting bid:",
      price: "£61.00",
      date: "June 1, 2024",
    },
    {
      id: 4,
      description: "www.mathsoftware.com",
      bid: "Auction closed",
    },
  ];

  return (
    <div className="mt-[100px] px-[50px]">
      <div className="flex justify-between items-center px-[15px]">
        <h1 className="topic text-[35px] text-[black] font-bold">LATEST AUCTIONS</h1>
        <button className="gavel text-[16px] text-[#45414166] font-semibold w-[170px] h-[40px] rounded-[9px] bg-[#18AE91] hover:text-[black]">
          ALL AUCTIONS
        </button>
      </div>
      <div className="mt-[50px]">
        <ul className="PhonesDomain flex justify-around">
          {data.map((item) => (
            <li key={item.id} className="PhonesDomain1 w-[320px] h-[260px] shadow-2xl flex flex-col items-center">
              <div className="phoneBottomDom w-[320px] h-[90px] bg-[#18AE91] flex justify-center items-center">
                <Link to="/">
                  <h1 className="text-[18px] font-bold text-[white]">{item.description}</h1>
                </Link>
              </div>
              <div className="flex flex-col gap-[7px] pt-[35px] text-center">
                {item.bid !== "Auction closed" ? (
                  <>
                    <div className="flex gap-[5px] font-semibold "><p className="text-[16px] font-light text-[#606060]">
                      {item.bid} 
                    </p><p>{item.price}</p></div>
                    <div className="flex gap-[5px] font-semibold "><p className="text-[16px] font-light text-[#606060]">
                      Expires on: 
                    </p><p>{item.date}</p></div>
                    <button className="w-[120px] ml-[17px] bg-[#18AE91] h-[50px] rounded-[45px] text-[14px] text-[white] hover:bg-[white] hover:text-[black] font-bold">
                      Bid Now
                    </button>
                  </>
                ) : (
                  <p className="text-[16px] font-light text-[#606060]">{item.bid}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LatestDomain;
