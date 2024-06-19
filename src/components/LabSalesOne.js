import React from "react";
import Lowitem from "../assets/labLow1.jpg";
import Lowitem1 from "../assets/Lablow2.jpg";
import Lowitem2 from "../assets/Lablow3.jpg";
import Lowitem3 from "../assets/Lablow4.jpg";
import Lowitem4 from "../assets/Lablow5.jpg";
import Lowitem5 from "../assets/Lablow6.jpg";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdSearch } from "react-icons/md";

function LabSalesOne() {
  const sales = [
    {
      id: 1,
      img: Lowitem,
      description: "AV Visible Dual",
      description1: "Absorbance",
      description2: "Detector",
      auction: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 2,
      img: Lowitem1,
      description: "HPLC",
      description1: "Seperations",
      description2: "Module",
      auction: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 3,
      img: Lowitem2,
      description: "Kendro",
      description1: "Laboratory",
      description2: "Products",
      description2: "HeraCell",
      auction: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 4,
      img: Lowitem3,
      description: "Meso Scale",
      description1: "Discovery 1200",
      description2: "Sector",
      auction: "Starting Bid:",
      price: "£78.00",
    },
    {
      id: 5,
      img: Lowitem4,
      description: "Sequencing",
      description1: "System with",
      description2: "cBot Flow Cell",
      auction: "Starting Bid:",
      price: "£70.00",
    },
    {
      id: 6,
      img: Lowitem5,
      description: "Spectrometer",
      description1: "With Peak",
      description2: "Nitrogen",
      auction: "Starting Bid:",
      price: "£80.00",
    },
  ];
  return (
    <>
      <div className="mt-[100px] px-[75px] ">
        <h1 className="text-[24px] font-bold text-[#000000] max-600:ml-[-35px]  ">
          Operating Room Equipment
        </h1>
        <ul className="grid grid-cols-6 gap-6 mt-[48px] max-600:grid-cols-2 max-600:w-[483px] max-600:flex max-600:flex-wrap max-600:ml-[-25px]">
          {sales.map((item, index) => (
            <li key={index}>
            <div className="flex flex-col items-center gap-[8px] max-600:w-[231px] max-600:flex-col max-600:gap-4 max-600:ml-[-21px]">
              <Link to="/">
                <img
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110 max-600:w-[217px] "
                  width={198}
                  src={item.img}
                  alt="laboratory"
                />
              </Link>
              <Link to="/">
                <h1 className="text-[18px] text-center hover:text-[#565ce0] text-[#484848] font-bold">
                  {item.description} <br />
                  {item.description1}
                  <br />
                  {item.description2}
                </h1>
              </Link>
              <p className="text-[#606060] text-[14px] font-light ">
                {item.auction}
                <span className="text-[black] text-[14px] font-semibold ">
                  {item.price}
                </span>
              </p>
              <div className="symbol mt-[2px] flex gap-[6px] ">
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
          </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default LabSalesOne;
