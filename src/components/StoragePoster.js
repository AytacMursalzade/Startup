import React from "react";
import { Link } from "react-router-dom";
import store1 from "../assets/assortStorage1.jpg";
import store2 from "../assets/nftposter1.jpg";
import store3 from "../assets/sportingStorage.jpg";
import store4 from "../assets/toolsStorage.jpg";

function StoragePoster() {

  const data = [
    {
      id: 1,
      img: store1,
      description: "ASSORTED BOXES",
      title: "20 Storages"
    },
    {
      id: 2,
      img: store2,
      description: "HOUSEHOLD GOODS",
      title: "13 Storages"
    },
    {
      id: 3,
      img: store3,
      description: "SPORTING GOODS",
      title: "30 Storages"
    },
    {
      id: 4,
      img: store4,
      description: "TOOLS WORKSHOP",
      title: "11 Storages"
    },
  ];


  return (
    <>
      <div className="mt-[140px] lg:ml-[75px]">
        <div className="posterTall flex flex-col">
          {data.map((item, index) => {
            const posterPage = {
              backgroundImage: `url(${item.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            };
            return (
              <div
                key={index}
                style={posterPage}
                className="posterTall1 w-full h-[382px] mb-[15px]"
              >
                <Link to="#">
                  <div className="posterM w-full h-full">
                    <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]">
                      <div className="posterMH flex flex-col">
                        <h1 className="font-extrabold text-[30px] text-white mt-[50px]">
                          {item.description}
                        </h1>
                        <p className="text-white font-light">{item.title}</p>
                      </div>
                      <div>
                        <button className="btnHovered border-1 border-black-100 hover:bg-white hover:text-[#2695FF] text-white font-semibold rounded-[9px] border border-solid-1 px-[20px] py-[6px]">
                          VIEW MORE
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default StoragePoster;
