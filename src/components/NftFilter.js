import React, { useState } from "react";
import Art1 from "../assets/Art1.png";
import Art2 from "../assets/Art2.jpg";
import Art3 from "../assets/Art3.jpg";
import Domain1 from "../assets/domain1.jpg";
import Domain2 from "../assets/domain2.jpg";
import Domain3 from "../assets/domain3.jpg";
import Sports1 from "../assets/sport1.jpg";
import Sports2 from "../assets/sport2.jpg";
import Sports3 from "../assets/sport3.jpg";
import Cards from "../assets/card1.jpg";
import Cards1 from "../assets/card2.jpg";
import Cards2 from "../assets/card3.jpg";
import Utility from "../assets/uti1.jpg";
import Utility1 from "../assets/uti2.jpg";
import World from "../assets/world1.jpg";
import World1 from "../assets/world2.jpg";
import { Link } from 'react-router-dom';
import FilterCategory from './FilterCategory';  

function NftFilter() {
  const [activeCat, setActiveCat] = useState("all");
  const [showFilters, setShowFilters] = useState(true);

  const filterGroup = (group) => {
    setActiveCat(group);
  };

  const allCat = [
    {
      id: 1,
      img: Art1,
      description: "nft product name",
      price: "£40.00",
      content: "ART",
      paragraph: "ADD TO CART",
    },
    {
      id: 2,
      img: Art2,
      description: "Honest dream",
      price: "£15.00",
      content: "ART",
      paragraph: "ADD TO CART"
    },
    {
      id: 3,
      img: Art3,
      description: "Corgi #2844",
      price: "£9.90",
      content: "ART",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 4,
      img: Domain1,
      description: "Eternity #02",
      price: "£45.90",
      content: "DOMAINS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 5,
      img: Domain2,
      description: "#33 Hypnotic",
      price: "£49.90",
      content: "DOMAINS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 6,
      img: Domain3,
      description: "Ginger Zippykey",
      price: "£150.90",
      content: "DOMAINS",
      paragraph: "ADD TO CART"
    },
    {
      id: 7,
      img: Sports1,
      description: "Breeds #264",
      price: "£130.90",
      content: "SPORTS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 8,
      img: Sports2,
      description: "PIXEL FREAK",
      price: "£75.90",
      content: "SPORTS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 9,
      img: Sports3,
      description: "Crypterior #129",
      price: "£1.50",
      content: "SPORTS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 10,
      img: Cards,
      description: "Quirky Cat",
      price: "£45.00",
      content: "TRADING CARDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 11,
      img: Cards1,
      description: "MoonCats #3041",
      price: "£1,500.00",
      content: "TRADING CARDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 12,
      img: Cards2,
      description: "ASC|| Punk",
      price: "£255.00",
      content: "TRADING CARDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 13,
      img: Utility,
      description: "Picasso Kong",
      price: "£2.50",
      content: "UTILITY",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 14,
      img: Utility1,
      description: "Cyberpunkz",
      price: "£5.50",
      content: "UTILITY",
      paragraph: "ADD TO CART"
    },
    {
      id: 15,
      img: World,
      description: "Model #312",
      price: "£444.00",
      content: "VIRTUAL WORLDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 16,
      img: World1,
      description: "Hashmasks #113",
      price: "£190.00",
      content: "VIRTUAL WORLDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
  ];

  const renderDivs = () => {
    return allCat
      .filter((item) => activeCat === "all" || item.content === activeCat)
      .map((item) => (
        <div
          key={item.id}
          className={`nft-item flex flex-col gap-[8px] mt-[45px] items-center shadow-2xl h-[421px] text-center ${item.content.toLowerCase().replace(" ", "-")}`}
        >
          <Link to="/"><img width={259} src={item.img} alt={item.description} /></Link>
          <Link to="/"><h3 className="nft-item-title text-[#484848] hover:text-[#4d79d2] text-[24px] font-bold ">{item.description}</h3></Link>
          <p className="nft-item-price text-[16px] text-[#4d79d2] font-bold ">{item.price}</p>
          <Link to="/"><button className="nft-item-button bg-[#4D79D2] font-bold text-[12px] text-white rounded-[30px] w-[160px] h-[47px] "><p>{item.paragraph}<br/>{item.paragraph1}</p></button></Link>
        </div>
      ));
  };

  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="nft-filter-container flex w-[100%] gap-9 ">
      {showFilters && (
        <div className="filter-sidebar w-[303px]">
          <FilterCategory toggleShowFilters={toggleShowFilters} />
        </div>
      )}
      <div className={`nft-items-container flex-1 ${showFilters ? "pl-4" : ""}`}>
        {!showFilters && (
          <div className="filter-toggle h-[45px]  absolute text-[black] font-bold  flex items-center justify-start mb-4 pl-4">
            <h1 className="cursor-pointer" onClick={toggleShowFilters}>
              FILTERS
            </h1>
          </div>
        )}
        <div className="filter-buttons-container h-[50px] w-[100%] pl-[25%] bg-[white] shadow-2xl text-[#666666] flex items-center justify-around mb-4 text-[14px] font-bold">
          <button
            onClick={() => setActiveCat("all")}
            className="filter-button mr-2 cursor hover:text-[#4D79D2] ">
            All
          </button>
          <button
            onClick={() => filterGroup("ART")}
            className="filter-button mr-2 cursor hover:text-[#4D79D2] ">
            ART
          </button>
          <button
            onClick={() => filterGroup("DOMAINS")}
            className="filter-button mr-2 cursor hover:text-[#4D79D2] ">
            DOMAINS
          </button>
          <button
            onClick={() => filterGroup("SPORTS")}
            className="filter-button mr-2 cursor hover:text-[#4D79D2] ">
            SPORTS
          </button>
          <button
            onClick={() => filterGroup("TRADING CARDS")}
            className="filter-button mr-2 cursor hover:text-[#4D79D2] ">
            TRADING CARDS
          </button>
          <button
            onClick={() => filterGroup("UTILITY")}
            className="filter-button mr-2 cursor hover:text-[#4D79D2] ">
            UTILITY
          </button>
          <button
            onClick={() => filterGroup("VIRTUAL WORLDS")}
            className="filter-button mr-2 cursor hover:text-[#4D79D2] ">
            VIRTUAL WORLDS
          </button>
        </div>
        <div className="nft-items-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderDivs()}
        </div>
      </div>
    </div>
  );
}

export default NftFilter;
