import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";

import imgData1 from "../assets/a1.jpg";
import imgData2 from "../assets/m2.jpg";
import imgData3 from "../assets/m3.jpg";
import imgData4 from "../assets/m4.jpg";
import imgData5 from "../assets/m5.jpg";
import imgData6 from "../assets/m6.jpg";
import imgData7 from "../assets/m7.jpg";
import imgData8 from "../assets/m8.jpg";
import imgData9 from "../assets/m9.jpg";
import imgData10 from "../assets/m10.jpg";
import imgData11 from "../assets/m11.jpg";
import imgData12 from "../assets/m12.jpg";
import imagePoster from "../assets/slidetour1.jpg";
import imagePoster3 from "../assets/slidetour2.jpg";
import imagePoster5 from "../assets/slidetour3.jpg";
import imagePoster6 from "../assets/slidetour4.jpg";

function TourSales({
  toolBg
}) {
  const data = [
    {
      id: 1,
      img: imgData1,
      description: "Budapest, Hungary",
      paragraph: "Current Bid:",
      price: "£40.00",
    },
    {
      id: 2,
      img: imgData2,
      description: "Lisbon, Portugal",
      paragraph: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 3,
      img: imgData3,
      description: "Prague, Czech Republic",
      paragraph: "Starting Bid:",
      price: "£75.00",
    },
    {
      id: 4,
      img: imgData4,
      description: "Barcelona, Spain",
      paragraph: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 5,
      img: imgData5,
      description: "Milan, Italy",
      paragraph: "Starting Bid:",
      price: "£45.00",
    },
    {
      id: 6,
      img: imgData6,
      description: "Paris, France",
      paragraph: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 7,
      img: imgData7,
      description: "Caribbean - Asia",
      paragraph: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 8,
      img: imgData8,
      description: "Europe - Bahamas",
      paragraph: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 9,
      img: imgData9,
      description: "Mexico - Creta",
      paragraph: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 10,
      img: imgData10,
      description: "Lefkada, Greece",
      paragraph: "Starting Bid:",
      price: "£70.00",
    },
    {
      id: 11,
      img: imgData11,
      description: "Monza, Italy",
      paragraph: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 12,
      img: imgData12,
      description: "Nicosia, Cyprus",
      paragraph: "Starting Bid:",
      price: "£80.00",
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
            TOURS
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">3</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold bg-[#6FCBF4] text-[white] rounded-[45px]"
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
                    <button className="bg-[#6FCBF4] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#6FCBF4] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#6FCBF4] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
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
            CITY-BREAK
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">3</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold bg-[#6FCBF4] text-[white] rounded-[45px]"
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
                    <button className="bg-[#6FCBF4] text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#6FCBF4] bg-[white] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#6FCBF4] bg-[white] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-[white] flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
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
          style={BGimageMil5}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            CRUISES
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">3</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold bg-[#6FCBF4] text-[white] rounded-[45px]"
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
                    <button className="bg-[#6FCBF4] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#6FCBF4] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#6FCBF4] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
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
          style={BGimageMil4}
          className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px]"
        >
          <h1 className="text-[27px] text-[white] font-extrabold">
            VILLAS
          </h1>
          <p className="text-[white] flex gap-[8px]">
            <strong className="font-bold text-[16px]">3</strong>
            Products
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold bg-[#6FCBF4] text-[white] rounded-[45px]"
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
                    <button className="bg-[#6FCBF4] text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button className="hover:bg-[#6FCBF4] bg-[white] text-[#606060] hover:text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <CiHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button className="hover:bg-[#6FCBF4] bg-[white] text-[#606060] hover:text-[white] flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-auto h-[120px] bg-[white] flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
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
    </div>
  );
}

export default TourSales;
