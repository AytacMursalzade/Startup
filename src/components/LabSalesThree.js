import React from "react";
import salesItem from "../assets/salesItem1.jpg";
import salesItem1 from "../assets/salesItem2.jpg";
import salesItem2 from "../assets/salesItem3.jpg";
import salesItem3 from "../assets/salesItem4.jpg";
import salesItem4 from "../assets/salesItem5.jpg";
import salesItem5 from "../assets/salesItem6.jpg";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdSearch } from "react-icons/md";

function LabSalesThree() {
  const sales = [
    {
      id: 1,
      img: salesItem,
      description: "205 Series Liquid",
      description1: "Handler",
      description2: "Detector",
      auction: "Current Bid:",
      price: "£1.187.00",
    },
    {
      id: 2,
      img: salesItem1,
      description: "487 UV Visible",
      description1: "Dual",
      description2: "Absorbance",
      auction: "Starting Bid:",
      price: "£2.178.00",
    },
    {
      id: 3,
      img: salesItem2,
      description: "Accurate-Mass",
      description1: "Q-TOF LC|MS",
      auction: "Starting Bid:",
      price: "£56.00",
    },
    {
      id: 4,
      img: salesItem3,
      description: "Acquity UPLC",
      description1: "With TUV",
      description2: "Detector",
      auction: "Starting Bid:",
      price: "£75.00",
    },
    {
      id: 5,
      img: salesItem4,
      description: "Canto ıı Flow",
      description1: "Cytometer",
      auction: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 6,
      img: salesItem5,
      description: "Chromatograph",
      description1: "y System",
      description2: "Nitrogen",
      auction: "Starting Bid:",
      price: "£55.00",
    },
  ];
  return (
    <>
      <div className="mt-[100px] px-[75px] ">
        <h1 className="text-[24px] font-bold text-[#000000]">
          Operating Room Equipment
        </h1>
        <ul className="LabTwo grid grid-cols-6 gap-6 mt-[48px]">
          {sales.map((item, index) => (
            <li key={index}>
            <div className="LabThree flex flex-col items-center gap-[8px]">
              <Link to="/">
                <img
                  className="LabImg transition-transform duration-300 ease-in-out transform hover:scale-110"
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

export default LabSalesThree;
