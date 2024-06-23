import React from "react";

function DomainList() {
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
      description: "www.onlinedelivery.ca",
      bid: "Starting bid:",
      price: "£100.00",
      date: "May 31, 2024",
    },
    {
      id: 3,
      description: "carinsurance.com.co",
      auction: "Auction Ended",
    },
    {
      id: 4,
      description: "www.teablenders.com",
      bid: "Current bid:",
      price: "£61.00",
      date: "June 1, 2024",
    },
    {
      id: 5,
      description: "www.mathsoftware.com",
      auction: "Auction Ended",
    },
    {
      id: 6,
      description: "www.europe.mx",
      auction: "Auction Ended",
    },
  ];

  return (
    <div className="Listdomain mt-[100px]">
      <div className="flex justify-between items-center px-[68px]">
        <h1 className="text-[35px] text-[black] font-bold">NEW .COM DOMAINS</h1>
        <button className="text-[16px] text-[#45414166] font-semibold w-[170px] h-[40px] rounded-[9px] bg-[#18AE91] hover:text-[black]">
          ALL DOMAINS
        </button>
      </div>

      <div className="flex mt-[50px]">
        <ul className="flex flex-col gap-[40px]">
          {data.slice(0, 3).map((dataItem) => (
            <li
              key={dataItem.id}
              className="w-[660px] h-[90px] px-[15px] rounded-[9px] shadow-2xl bg-[white] py-[10px] flex justify-between items-center ml-[68px]"
            >
              <h1 className="text-[16px] text-[#484848] font-bold hover:text-[#18ae91]">
                {dataItem.description}
              </h1>
              <div className="flex items-center gap-[20px]">
                {dataItem.auction ? (
                  <h1 className="text-[14px] text-[#606060] font-light">{dataItem.auction}</h1>
                ) : (
                  <>
                    <h1 className="text-[14px] text-[#606060] flex font-light">
                      {dataItem.bid}
                      <p className="text-[14px] font-semibold text-[#18AE91]">{dataItem.price}</p>
                    </h1>
                    <h1 className="text-[14px] text-[#606060] flex font-light">
                      Expires on:
                      <p className="text-[14px] font-semibold text-[black]">{dataItem.date}</p>
                    </h1>
                    <button className="font-semibold rounded-[5px] bg-[#18AE91] hover:bg-[white] text-[white] hover:text-[#484848] px-[18px] py-[5px]">
                      Bid Now
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-[40px]">
          {data.slice(3).map((dataItem) => (
            <li
              key={dataItem.id}
              className="w-[660px] h-[90px] px-[15px] rounded-[9px] shadow-2xl bg-[white] py-[10px] flex justify-between items-center ml-[68px]"
            >
              <h1 className="text-[16px] text-[#484848] font-bold hover:text-[#18ae91]">
                {dataItem.description}
              </h1>
              <div className="flex items-center gap-[20px]">
                {dataItem.auction ? (
                  <h1 className="text-[14px] text-[#606060] font-light">{dataItem.auction}</h1>
                ) : (
                  <>
                    <h1 className="text-[14px] text-[#606060] flex font-light">
                      {dataItem.bid}
                      <p className="text-[14px] font-semibold text-[#18AE91]">{dataItem.price}</p>
                    </h1>
                    <h1 className="text-[14px] text-[#606060] flex font-light">
                      Expires on:
                      <p className="text-[14px] font-semibold text-[black]">{dataItem.date}</p>
                    </h1>
                    <button className="font-semibold rounded-[5px] bg-[#18AE91] hover:bg-[white] text-[white] hover:text-[#484848] px-[18px] py-[5px]">
                      Bid Now
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DomainList;
