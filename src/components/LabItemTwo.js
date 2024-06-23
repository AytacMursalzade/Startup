import React from "react";
import { FaGavel } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdSearch } from "react-icons/md";
import Lowitem from "../assets/lowitem.jpg";
import Lowitem1 from "../assets/lowitem1.jpg";
import Lowitem2 from "../assets/lowitem2.jpg";
import Lowitem3 from "../assets/lowitem3.jpg";
import Lowitem4 from "../assets/lowitem4.jpg";
import Lowitem5 from "../assets/lowitem5.jpg";
import Lowitem6 from "../assets/lowitem6.jpg";
import Lowitem7 from "../assets/lowitem7.jpg";
import Lowitem8 from "../assets/lowitem8.jpg";
import Lowitem9 from "../assets/lowitem9.jpg";
import Lowitem10 from "../assets/lowitem10.jpg";
import Lowitem11 from "../assets/lowitem11.jpg";
import { Link } from "react-router-dom";

function LabItemTwo() {
  const data = [
    {
      id: 1,
      img: Lowitem,
      description: "205 Series Liquid",
      description1: "Handler",
      auction: "Current Bid:",
      price: "£1,187.00",
    },
    {
      id: 2,
      img: Lowitem1,
      description: "487 UV Visible Dual ",
      description1: "Absorbance",
      auction: "Current Bid:",
      price: "£2,178.00",
    },
    {
      id: 3,
      img: Lowitem2,
      description: "Accurate-Mass Q-",
      description1: "ATOF LC|MS",
      auction: "Starting Bid:",
      price: "£56.00",
    },
    {
      id: 4,
      img: Lowitem3,
      description: "Acquity UPLC With",
      description1: "TUV Detector",
      auction: "Starting Bid:",
      price: "£75.00",
    },
    {
      id: 5,
      img: Lowitem4,
      description: "Canto II Flow ",
      description1: "Cytometer",
      auction: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 6,
      img: Lowitem5,
      description: "Chromatography",
      description1: "System",
      auction: "Starting Bid:",
      price: "£55.00",
    },
    {
      id: 7,
      img: Lowitem6,
      description: "ICP-OES Mass",
      description1: " Spectrometer",
      auction: "Starting Bid:",
      price: "£80.00",
    },
    {
      id: 8,
      img: Lowitem7,
      description: "JEOL ECX-400 NMR ",
      description1: "FT NMR",
      auction: "Starting Bid:",
      price: "£30.00",
    },
    {
      id: 9,
      img: Lowitem8,
      description: "Photodiode Array ",
      description1: "Detector",
      auction: "Starting Bid:",
      price: "£65.00",
    },
    {
      id: 10,
      img: Lowitem9,
      description: "Professional IC with ",
      description1: "858 Sampler",
      auction: "Starting Bid:",
      price: "£60.00",
    },
    {
      id: 11,
      img: Lowitem10,
      description: "System with Frac-",
      description1: "8950 Fraction",
      auction: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 12,
      img: Lowitem11,
      description: "Thermo Scientific ",
      description1: "Phadia 100",
      auction: "Current Bid:",
      price: "£2.175.00",
    },
  ];

  return (
    <div className="px-[75px] mt-[75px]">
      <h1 className="text-[24px] font-bold text-[#000000]">
        Most Recent Products
      </h1>
      <ul className="LabTwo grid grid-cols-4 gap-6 mt-[48px] max-w-full">
        {data.map((item, index) => (
          <li key={index}>
            <div className="LabThree flex items-center gap-[8px]">
              <Link to="/">
                <img
                  className="LabImg transition-transform duration-300 ease-in-out transform hover:scale-110 "
                  width={112}
                  src={item.img}
                  alt="laboratory"
                />
              </Link>
              <div className="flex flex-col gap-[8px]">
                <Link to="/">
                  <h1 className="text-[17px] text-left hover:text-[#565ce0] text-[#484848] font-bold">
                    {item.description} <br /> {item.description1}
                  </h1>
                </Link>
                <p className="text-[#606060] text-[14px] font-light">
                  {item.auction}
                  <span className="text-[black] text-[14px] font-semibold">
                    {item.price}
                  </span>
                </p>
                <div className="symbol mt-[2px] flex gap-[6px]">
                  <Link to="/">
                    <FaGavel />
                  </Link>
                  <Link to="/">
                    <CiHeart />
                  </Link>
                  <Link to="/">
                    <MdSearch />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LabItemTwo;
