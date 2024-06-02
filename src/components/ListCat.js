import React, { useState } from "react";
import { FaGavel, FaHeart, FaSearch } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import imgCar1 from "../assets/car1.jpg";
import imgCar2 from "../assets/car2.jpg";
import imgCar3 from "../assets/car3.jpg";
import imgCar4 from "../assets/car4.jpg";
import bmw1 from "../assets/bmw1.jpg";
import bmw2 from "../assets/bmw2.jpg";
import bmw3 from "../assets/bmw3.jpg";
import bmw4 from "../assets/bmw4.jpg";
import tesla1 from "../assets/tesla1.jpg";
import tesla2 from "../assets/tesla2.jpg";
import tesla3 from "../assets/tesla3.jpg";
import tesla4 from "../assets/tesla4.jpg";

function ListCat() {
  const [selectedCategory, setSelectedCategory] = useState("AUDI");

  const cars = [
    {
      id: 1,
      img: imgCar1,
      description: "Auction Vintage Car",
      paragraph: "Auction Ended",
      content: "AUDI",
    },
    {
      id: 2,
      img: imgCar2,
      description: "BMW M1 1965",
      paragraph: "Current Bid:",
      price: "$700.00",
      content: "AUDI",
    },
    {
      id: 3,
      img: imgCar3,
      description: "El Camino 1974",
      paragraph: "Current Bid:",
      price: "$1.215.00",
      content: "AUDI",
    },
    {
      id: 4,
      img: imgCar4,
      description: "Vintage Gearbox",
      paragraph: "Auction Ended",
      content: "AUDI",
    },
    {
      id: 5,
      img: bmw1,
      description: "Audi R8 2008",
      paragraph: "Current Bid:",
      price: "$698.00",
      content: "BMW",
    },
    {
      id: 6,
      img: bmw2,
      description: "Nissan GTR 2000",
      paragraph: "Starting Bid:",
      price: "$1.175.00",
      content: "BMW",
    },
    {
      id: 7,
      img: bmw3,
      description: "Porshe Carrera GT",
      paragraph: "Current Bid:",
      price: "$330.00",
      content: "BMW",
    },
    {
      id: 8,
      img: bmw4,
      description: "Sccirocco GT R4",
      paragraph: "Starting Bid:",
      price: "$1.000.00",
      content: "BMW",
    },
    {
      id: 9,
      img: tesla1,
      description: "Black Vintage Car",
      paragraph: "Auction Ended",
      content: "TESLA",
    },
    {
      id: 10,
      img: tesla2,
      description: "BMW M1 1965",
      paragraph: "Current Bid:",
      price: "$700.00",
      content: "TESLA",
    },
    {
      id: 11,
      img: tesla3,
      description: "Classic American Car",
      paragraph: "Current Bid:",
      price: "$516.00",
      content: "TESLA",
    },
    {
      id: 12,
      img: tesla4,
      description: "Orange Fiat 500",
      paragraph: "Current Bid:",
      price: "$432.00",
      content: "TESLA",
    },
  ];

  const categories = ["AUDI", "BMW", "TESLA", "VOLKSWAGEN", "OPEL"];

  const filteredCars = cars.filter((car) => car.content === selectedCategory);

  return (
    <div className="flex flex-col mt-[100px] mb-[100px] gap-[20px]">
      <div className="flex justify-center gap-[2px] mb-[20px]">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-[15px] w-[274px] h-[62px] py-[10px] text-white ${
              selectedCategory === category
                ? "bg-[white] text-[#392061] font-normal"
                : "bg-[#392061] font-bold"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredCars.map((item) => (
        <div key={item.id} className="flex ml-[75px] justify-between shadow-2xl items-center px-[50px] w-[90%] h-[188px] ">
          <div className="flex gap-[35px]">
            <img width={188} src={item.img} alt="listauction" />
            <div className="flex pt-[25px] gap-[25px] flex-col">
              <h1 className="text-[#484848] hover:text-[#392061] text-[18px] font-bold">
                {item.description}
              </h1>
              <div className="flex gap-[8px]">
                <p className="text-[14px] text-[#606060] font-light">
                  {item.paragraph}
                </p>
                {item.price && (
                  <p className="text-[14px] text-[#606060] font-bold">
                    {item.price}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] pl-[18px]">
            <Tooltip title="Bid">
              <button className="text-white flex hover:bg-[#671F9B] bg-[#392061] rounded-[45px] justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md">
                <FaGavel />
              </button>
            </Tooltip>
            <Tooltip title="Add to Favorites">
              <button className="text-[white] hover:bg-[#671F9B] rounded-[45px] bg-[#392061] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md">
                <FaHeart />
              </button>
            </Tooltip>
            <Tooltip title="Search">
              <button className="text-[white] rounded-[45px] bg-[#392061] hover:text-white hover:bg-[#671F9B] flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md">
                <FaSearch />
              </button>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListCat;
