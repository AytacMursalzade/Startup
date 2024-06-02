import React, { useState } from "react";
import book1 from "../assets/Art1.png";
import book2 from "../assets/Art2.jpg";
import book3 from "../assets/Art3.jpg";
import Bookimg1 from "../assets/domain1.jpg";
import Bookimg2 from "../assets/domain2.jpg";
import Bookimg3 from "../assets/domain3.jpg";
import FinitoBook1 from "../assets/sport1.jpg";
import FinitoBook2 from "../assets/sport2.jpg";
import FinitoBook3 from "../assets/sport3.jpg";
import CardsImg from "../assets/card1.jpg";
import CardsImg1 from "../assets/card2.jpg";
import CardsImg2 from "../assets/card3.jpg";
import roman from "../assets/uti1.jpg";
import roman1 from "../assets/uti2.jpg";
import WorldBook from "../assets/world1.jpg";
import WorldBook1 from "../assets/world2.jpg";
import { Link } from 'react-router-dom';
import FilterCategory from './FilterCategory';  

function CategoryBookFilter() {
  const [activeCat, setActiveCat] = useState("all");
  const [showFilters, setShowFilters] = useState(true);

  const filterGroup = (group) => {
    setActiveCat(group);
  };

  const allCat = [
    {
      id: 1,
      img: book1,
      description: "nft product name",
      price: "£40.00",
      content: "ART",
      paragraph: "ADD TO CART",
    },
    {
      id: 2,
      img: book2,
      description: "Honest dream",
      price: "£15.00",
      content: "ART",
      paragraph: "ADD TO CART"
    },
    {
      id: 3,
      img: book3,
      description: "Corgi #2844",
      price: "£9.90",
      content: "ART",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 4,
      img: Bookimg1,
      description: "Eternity #02",
      price: "£45.90",
      content: "DOMAINS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 5,
      img: Bookimg2,
      description: "#33 Hypnotic",
      price: "£49.90",
      content: "DOMAINS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 6,
      img: Bookimg3,
      description: "Ginger Zippykey",
      price: "£150.90",
      content: "DOMAINS",
      paragraph: "ADD TO CART"
    },
    {
      id: 7,
      img: FinitoBook1,
      description: "Breeds #264",
      price: "£130.90",
      content: "SPORTS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 8,
      img: FinitoBook2,
      description: "PIXEL FREAK",
      price: "£75.90",
      content: "SPORTS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 9,
      img: FinitoBook3,
      description: "Crypterior #129",
      price: "£1.50",
      content: "SPORTS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 10,
      img: CardsImg,
      description: "Quirky Cat",
      price: "£45.00",
      content: "TRADING CARDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 11,
      img: CardsImg1,
      description: "MoonCats #3041",
      price: "£1,500.00",
      content: "TRADING CARDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 12,
      img: CardsImg2,
      description: "ASC|| Punk",
      price: "£255.00",
      content: "TRADING CARDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 13,
      img: roman,
      description: "Picasso Kong",
      price: "£2.50",
      content: "UTILITY",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 14,
      img: roman1,
      description: "Cyberpunkz",
      price: "£5.50",
      content: "UTILITY",
      paragraph: "ADD TO CART"
    },
    {
      id: 15,
      img: WorldBook,
      description: "Model #312",
      price: "£444.00",
      content: "VIRTUAL WORLDS",
      paragraph: "BUY ON",
      paragraph1: "OPENSEA.IO",
    },
    {
      id: 16,
      img: WorldBook1,
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
          className={`item flex flex-col  gap-[8px] mt-[45px] items-center shadow-2xl h-[421px] text-center ${item.content.toLowerCase().replace(" ", "-")}`}
        >
          <Link to="/"><img width={259} src={item.img} alt={item.description} /></Link>
          <Link to="/"><h3 className="text-[#484848] hover:text-[#F27928] text-[24px] font-bold ">{item.description}</h3></Link>
          <p className="text-[16px] text-[#F27928] font-bold ">{item.price}</p>
          <Link to="/"><button className="bg-[#F27928] font-bold text-[12px] text-white rounded-[30px] w-[160px] h-[47px] "><p>{item.paragraph}<br/>{item.paragraph1}</p></button></Link>
        </div>
      ));
  };

  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="flex w-[100%] mt-[100px] mb-[100px] gap-9 ">
      {showFilters && (
        <div className="w-[303px]">
          <FilterCategory toggleShowFilters={toggleShowFilters} />
        </div>
      )}
      <div className={`flex-1 ${showFilters ? "pl-4" : ""}`}>
        {!showFilters && (
          <div className="h-[45px]  absolute text-[black] font-bold  flex items-center justify-start mb-4 pl-4">
            <h1 className="cursor-pointer" onClick={toggleShowFilters}>
              FILTERS
            </h1>
          </div>
        )}
        <div className="h-[50px] w-[100%] pl-[25%] bg-[white] shadow-2xl text-[#666666] flex items-center justify-around buttons mb-4 text-[14px] font-bold ">
          <button onClick={() => setActiveCat("all")} className="mr-2 cursor hover:text-[#F27928] ">All</button>
          <button onClick={() => filterGroup("ART")} className="mr-2 cursor hover:text-[#F27928] ">ART</button>
          <button onClick={() => filterGroup("DOMAINS")} className="mr-2 cursor hover:text-[#F27928] ">DOMAINS</button>
          <button onClick={() => filterGroup("SPORTS")} className="mr-2 cursor hover:text-[#F27928] ">SPORTS</button>
          <button onClick={() => filterGroup("TRADING CARDS")} className="mr-2 cursor hover:text-[#F27928] ">TRADING CARDS</button>
          <button onClick={() => filterGroup("UTILITY")} className="mr-2 cursor hover:text-[#F27928] ">UTILITY</button>
          <button onClick={() => filterGroup("VIRTUAL WORLDS")} className="mr-2 cursor hover:text-[#F27928] ">VIRTUAL WORLDS</button>
        </div>
        <div className="items-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderDivs()}
        </div>
      </div>
    </div>
  );
}

export default CategoryBookFilter;
