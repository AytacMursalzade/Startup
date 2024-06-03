import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cowCattle1 from "../assets/cowcattle1.jpg";
import cowCattle2 from "../assets/cowcattle2.jpg";
import cowCattle3 from "../assets/cowcattle3.jpg";
import cowCattle4 from "../assets/cowcattle4.jpg";
import cowCattle5 from "../assets/cowcattle5.jpg";
import cowCattle6 from "../assets/cowcattle6.jpg";
import cowCattle7 from "../assets/cowcattle7.jpg";
import cowCattle8 from "../assets/cowcattle8.jpg";
import cowCattle9 from "../assets/cowcattle9.jpg";
import cowCattle10 from "../assets/cowcattle10.jpg";
import cowCattle11 from "../assets/cowcattle11.jpg";
import cowCattle12 from "../assets/cowcattle12.jpg";
import cowCattle13 from "../assets/cowcattle13.jpg";
import cowCattle14 from "../assets/cowcattle14.jpg";
import cowCattle15 from "../assets/cowcattle15.jpg";
import cowCattle16 from "../assets/cowcattle16.jpg";
import cowCattle17 from "../assets/cowcattle17.jpg";
import cowCattle18 from "../assets/cowcattle18.jpg";
import cowCattle19 from "../assets/cowcattle18.jpg";
import cowCattle20 from "../assets/cowcattle18.jpg";
import cowCattle21 from "../assets/cowcattle18.jpg";
import cowCattle22 from "../assets/cowcattle18.jpg";

function FilterCatCattle() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const data = [
    {
      id:1,
      img:cowCattle1,
      description:"Bendoc Park",
      description1:"BPKP006",
      bid:"Current Bid:",
      price: "£508.00",
      concept:"Cattle Livestock"
    },
    {
      id:2,
      img:cowCattle2,
      description:"Dairy Shorthorn",
      description1:"cattle",
      bid:"Current Bid:",
      price: "£40.00",
      concept:"Cattle Livestock"
    },
    {
      id:3,
      img:cowCattle3,
      description:"Hereford cattle",
      bid:"Current Bid:",
      price: "£150.00",
      concept:"Cattle Livestock"
    },
    {
      id:4,
      img:cowCattle4,
      description:"North Devon cattle",
      bid:"Current Bid:",
      price: "£150.00",
      concept:"Cattle Livestock"
    },
    {
      id:5,
      img:cowCattle5,
      description:"Welsh Black cattle",
      bid:"Current Bid:",
      price: "£455.00",
      concept:"Cattle Livestock"
    },
    {
      id:6,
      img:cowCattle6,
      description:"Brown Swiss cattle",
      bid:"Current Bid:",
      price: "£300.00",
      concept:"Cattle Livestock"
    },
    {
      id:7,
      img:cowCattle7,
      description:"Herd Bull Punch",
      description1:"P007",
      bid:"Current Bid:",
      price: "£301.00",
      concept:"Cattle Livestock"
    },
    {
      id:8,
      img:cowCattle8,
      description:"Holstein Friesian",
      description1:"cattle",
      bid:"Current Bid:",
      price: "£365.00",
      concept:"Cattle Livestock"
    },
    {
      id:9,
      img:cowCattle9,
      description:"Texas Longhorn",
      bid:"Starting Bid:",
      price: "£600.00",
      concept:"Cattle Livestock"
    },
    {
      id:10,
      img:cowCattle10,
      description:"Dartmoor pony Lot",
      description1:"808",
      bid:"Current Bid:",
      price: "£251.00",
      concept:"Horse Livestock"
    },
    {
      id:11,
      img:cowCattle11,
      description:"Shagya Arabian Lot",
      description1:"#444",
      bid:"Current Bid:",
      price: "£3.500.00",
      concept:"Horse Livestock"
    },
    {
      id:12,
      img:cowCattle12,
      description:"Pure Spanish Breed",
      description1:"#T277",
      bid:"Current Bid:",
      price: "£11.490.00",
      concept:"Horse Livestock"
    },
    {
      id:13,
      img:cowCattle13,
      description:"Barbados Black",
      description1:"Belly Sheeps",
      bid:"Current Bid:",
      price: "£773.00",
      concept:"Sheep Livestock"
    },
    {
      id:14,
      img:cowCattle14,
      description:"Sire F-17063",
      bid:"Current Bid:",
      price: "£336.00",
      concept:"Sheep Livestock"
    },
    {
      id:15,
      img:cowCattle15,
      description:"Leicester Longwool",
      description1:"#222",
      bid:"Starting Bid:",
      price: "£355.00",
      concept:"Sheep Livestock"
    },
    {
      id:16,
      img:cowCattle16,
      description:"Hebridean sheep",
      bid:"Starting Bid:",
      price: "£5.00",
      concept:"Goat Livestock"
    },
    {
      id:17,
      img:cowCattle17,
      description:"Ram lambs",
      bid:"Current Bid:",
      price: "£1.445.00",
      concept:"Goat Livestock"
    },
    {
      id:18,
      img:cowCattle18,
      description:"Valais Blacknose",
      bid:"Current Bid:",
      price: "£320.00",
      concept:"Goat Livestock"
    },
    {
      id:19,
      img:cowCattle19,
      description:"American",
      description1:"Mammoth",
      description2:"Jackstock",
      bid:"Current Bid:",
      price: "£615.00",
      concept:"Pig Livestock"
    },
    {
      id:20,
      img:cowCattle20,
      description:"Bourbonnais",
      description1:"Donkey #111",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Pig Livestock"
    },
    {
      id:21,
      img:cowCattle21,
      description:"Baudet du Poitou",
      description1:"#1222",
      bid:"Starting Bid:",
      price: "£400.00",
      concept:"Pig Livestock"
    },
    {
      id:22,
      img:cowCattle22,
      description:"Grand Noir du Berry",
      description1:"#556",
      bid:"Starting Bid:",
      price: "£245.00",
      concept:"Pig Livestock"
    },
  ];

  const categories = [
    'All',
    'Cattle Livestock',
    'Horse Livestock',
    'Sheep Livestock',
    'Goat Livestock',
    'Pig Livestock'
  ];

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter(item => item.concept === selectedCategory);

  return (
    <div>
      <div className="mb-4 flex gap-2 justify-center ">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`p-2 h-[100px] font-semibold text-[16px] w-[150px]  border rounded ${selectedCategory === category ? 'bg-[#627452] font-semibold text-[16px] text-white' : 'bg-white text-gray-700'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-[22px] px-[18px]">
        {filteredData.map((item, index) => (
          <div key={index} className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] ">
            <Link to="/">
              <div className="overflow-hidden rounded-lg" style={{ width: '167px', height: '167px' }}>
                <img src={item.img} alt="sales" className="transition duration-300 transform hover:scale-105" style={{ transformOrigin: 'center', transition: 'transform 0.5s ease' }} />
              </div>
            </Link>
            <div className="flex flex-col gap-[20px] pl-[19px] justify-center ">
              <Link>
                <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#627452] font-bold ">
                  {item.description}
                </h1>
              </Link>
              <div className="flex items-center gap-[5px] ">
                <p className="text-[14px] text-[#606060] font-light ">
                  {item.bid}
                </p>
                <p className="text-[14px] text-[#606060] font-bold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterCatCattle;
