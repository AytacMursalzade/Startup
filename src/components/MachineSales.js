import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";

import imgData1 from "../assets/buldozer3.jpg";
import imgData2 from "../assets/buldozers.jpg";
import imgData3 from "../assets/buldozers4.jpg";
import imgData4 from "../assets/bul1.jpg";
import imgData5 from "../assets/bul2.jpg";
import imgData6 from "../assets/bul3.jpg";
import imgData7 from "../assets/bul4.png";
import imgData8 from "../assets/bul5.jpg";
import imgData9 from "../assets/bul6.jpg";
import imgData10 from "../assets/bul7.jpg";
import imgData11 from "../assets/buldozer3.jpg";
import imgData12 from "../assets/bul5.jpg";
import imagePoster from "../assets/bul3.jpg";
import imagePoster3 from "../assets/bul5.jpg";
import imagePoster5 from "../assets/buldozer3.jpg";
import imagePoster6 from "../assets/buldozers4.jpg";

function MachineSales({
  toolBg
}) {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "CAT Center-Pivot 420",
      paragraph: "Starting Bid:",
      price: "£23.00",
    },
    {
      id: 2,
      img: imgData2,
      description: "CAT Center-Pivot 420",
      paragraph: "Starting Bid:",
      price: "£12.00",
    },
    {
      id: 3,
      img: imgData3,
      description: "CAT Medium 320 GC",
      paragraph: "Starting Bid:",
      price: "£32.00",
    },
    {
      id: 4,
      img: imgData4,
      description: "1999 John Deere 650G Ex",
      paragraph: "Current Bid:",
      price: "£43.00",
    },
    {
      id: 5,
      img: imgData5,
      description: "2007 John Deere 700J LT",
      paragraph: "Starting Bid:",
      price: "£12.00",
    },
    {
      id: 6,
      img: imgData6,
      description: "2009 John Deere 850JR",
      paragraph: "Starting Bid:",
      price: "£23.00",
    },
    {
      id: 7,
      img: imgData7,
      description: "BARTELL BR1570",
      paragraph: "Starting Bid:",
      price: "£36.00",
    },
    {
      id: 8,
      img: imgData8,
      description: "Brothers Hydraulic",
      paragraph: "Starting Bid:",
      price: "£65.00",
    },
    {
      id: 9,
      img: imgData9,
      description: "HOC C160 HONDA",
      paragraph: "Starting Bid:",
      price: "£65.00",
    },
    {
      id: 10,
      img: imgData10,
      description: "Cranes Cleveland",
      paragraph: "Starting Bid:",
      price: "£40.00",
    },
    {
      id: 11,
      img: imgData11,
      description: "Kobelco Hydraulic",
      paragraph: "Starting Bid:",
      price: "£70.00",
    },
    {
      id: 12,
      img: imgData12,
      description: "Reverse Auction",
      paragraph: "Auction Ended"
    },
  ];

  const BGimageMil = {
    backgroundImage: `url(${imagePoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil3 = {
    backgroundImage: `url(${imagePoster3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil5 = {
    backgroundImage: `url(${imagePoster5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil4 = {
    backgroundImage: `url(${imagePoster6})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="viewPartArt flex flex-col gap-[73px] mt-[99px] mb-[100px]">
      <div className="onePoster flex gap-[17px] justify-around ml-[75px]">
      <div
          style={BGimageMil}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            EXCAVATORS
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">4</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold bg-[#FBDE06] text-[white] rounded-[45px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="flex gap-[13px] mt-[30px] px-[71px]">
          {data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group"
            >
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  transformOrigin: "center",
                  transition: "transform 0.5s ease",
                }}
                className="absolute inset-0 group-hover:scale-105"
              ></div>
              <div className="flex items-start pt-[30px] z-10">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button className="bg-[#FBDE06] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#FBDE06] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#FBDE06] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#6FCBF4]">
                    {item.description}
                  </h2>
                </Link>
                <div className="flex gap-[5px]">
                  <p className="text-[#606060] text-[16px] font-light leading-[22px]">
                    {item.paragraph}
                  </p>
                  <p className="text-[14px] font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="onePoster flex gap-[17px] justify-around ml-[75px]">
      <div
          style={BGimageMil3}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            BULDOZERS
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">3</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold bg-[#FBDE06] text-[white] rounded-[45px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="flex gap-[13px] mt-[30px] px-[71px]">
          {data.slice(3, 6).map((item, index) => (
            <div
              key={index}
              className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group"
            >
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  transformOrigin: "center",
                  transition: "transform 0.5s ease",
                }}
                className="absolute inset-0 group-hover:scale-105"
              ></div>
              <div className="flex items-start pt-[30px] z-10">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button className="bg-[#FBDE06] text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#FBDE06] bg-[white] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#FBDE06] bg-[white] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-[white] flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#FBDE06]">
                    {item.description}
                  </h2>
                </Link>
                <div className="flex gap-[5px]">
                  <p className="text-[#606060] text-[16px] font-light leading-[22px]">
                    {item.paragraph}
                  </p>
                  <p className="text-[14px] font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="onePoster flex gap-[17px] justify-around ml-[75px]">
      <div
          style={BGimageMil5}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            COMPACTORS
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">3</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold bg-[#FBDE06] text-[white] rounded-[45px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="flex gap-[13px] mt-[30px] px-[71px]">
          {data.slice(6, 9).map((item, index) => (
            <div
              key={index}
              className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group"
            >
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  transformOrigin: "center",
                  transition: "transform 0.5s ease",
                }}
                className="absolute inset-0 group-hover:scale-105"
              ></div>
              <div className="flex items-start pt-[30px] z-10">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button className="bg-[#FBDE06] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#FBDE06] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#FBDE06] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#FBDE06]">
                    {item.description}
                  </h2>
                </Link>
                <div className="flex gap-[5px]">
                  <p className="text-[#606060] text-[16px] font-light leading-[22px]">
                    {item.paragraph}
                  </p>
                  <p className="text-[14px] font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="onePoster flex gap-[17px] justify-around ml-[75px]">
        <div
          style={BGimageMil4}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            CRANES
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">3</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold bg-[#FBDE06] text-[white] rounded-[45px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>
        <div className="flex gap-[13px] mt-[30px] px-[71px]">
          {data.slice(6, 9).map((item, index) => (
            <div
              key={index}
              className="relative w-[322px] h-[400px] flex flex-col shadow-lg overflow-hidden group"
            >
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  transformOrigin: "center",
                  transition: "transform 0.5s ease",
                }}
                className="absolute inset-0 group-hover:scale-105"
              ></div>
              <div className="flex items-start pt-[30px] z-10">
                <div className="flex flex-col gap-[8px] pl-[18px]">
                  <Tooltip title="Bid Now">
                    <button className="bg-[#FBDE06] text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#FBDE06] bg-[white] text-[#606060] hover:text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#FBDE06] bg-[white] text-[#606060] hover:text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-[white] flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                <Link to="/">
                  <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#FBDE06]">
                    {item.description}
                  </h2>
                </Link>
                <div className="flex gap-[5px]">
                  <p className="text-[#606060] text-[16px] font-light leading-[22px]">
                    {item.paragraph}
                  </p>
                  <p className="text-[14px] font-bold">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MachineSales;
