import React from "react";
import LowItem from "../assets/Lowlab1.jpg";
import LowItem1 from "../assets/Lowlab2.jpg";
import LowItem2 from "../assets/Lowlab3.jpg";
import LowItem3 from "../assets/Lowlab4.jpg";
import LowItem4 from "../assets/Lowlab5.jpg";
import LowItem5 from "../assets/Lowlab6.jpg";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdSearch } from "react-icons/md";

function LabSalesTwo() {
  const sales = [
    {
      id: 1,
      img: LowItem,
      description: "Automated",
      description1: "Workstation",
      description2: "With PC",
      auction: "Starting Bid:",
      price: "£40.00",
    },
    {
      id: 2,
      img: LowItem1,
      description: "Channel",
      description1: "Automated",
      description2: "Pipetting System",
      auction: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 3,
      img: LowItem2,
      description: "Gas",
      description1: "Chromatograph",
      description2: "System",
      auction: "Starting Bid:",
      price: "£20.00",
    },
    {
      id: 4,
      img: LowItem3,
      description: "Microscope with",
      description1: "Teaching",
      description2: "Extension",
      auction: "Starting Bid:",
      price: "£50.00",
    },
    {
      id: 5,
      img: LowItem4,
      description: "Module with",
      description1: "Column Heater",
      auction: "Starting Bid:",
      price: "£100.00",
    },
    {
      id: 6,
      img: LowItem5,
      description: "SFM Sample and",
      description1: "Fraction",
      description2: "Manager",
      auction: "Starting Bid:",
      price: "£100.00",
    },
  ];
  return (
    <>
      <div className="mt-[100px] px-[75px] ">
        <h1 className="text-[24px] font-bold text-[#000000] ">
          Research Machines
        </h1>
        <ul className="grid grid-cols-6 gap-6 mt-[48px] ">
          {sales.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col items-center gap-[8px] ">
                <Link to="/">
                  <img
                    className="transition-transform duration-300 ease-in-out transform hover:scale-110"
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

export default LabSalesTwo;
