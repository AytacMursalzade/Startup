import React, { useState } from "react";
import Drama from "../assets/Drama.jpg";
import Drama1 from "../assets/Drama1.jpg";
import Drama2 from "../assets/drama2.jpg";
import Drama3 from "../assets/drama3.jpg";
import Adventure1 from "../assets/adventure1.jpg";
import Adventure2 from "../assets/adventure2.jpg";
import Adventure3 from "../assets/adventure3.jpg";
import Adventure4 from "../assets/adventure4.jpg";
import Adventure5 from "../assets/adventure5.jpg";
import ant1 from "../assets/ant1.jpg";
import ant2 from "../assets/ant2.jpg";
import ant3 from "../assets/ant3.jpg";
import ant4 from "../assets/ant4.jpg";
import ant5 from "../assets/ant5.jpg";
import bio1 from "../assets/bio1.jpg";
import bio2 from "../assets/bio2.jpg";
import bio3 from "../assets/bio3.jpg";
import bio4 from "../assets/bio4.jpg";
import bio5 from "../assets/bio5.jpg";
import bio6 from "../assets/bio6.jpg";
import fan1 from "../assets/bio6.jpg";
import fan2 from "../assets/fan2.jpg";
import fan3 from "../assets/fan3.jpg";
import fan4 from "../assets/fan4.jpg";
import horror1 from "../assets/horror1.jpg";
import horror2 from "../assets/horror2.jpg";
import horror3 from "../assets/horror3.jpg";
import horror4 from "../assets/horror4.jpg";
import scifi1 from "../assets/sici1.jpg";
import scifi2 from "../assets/sici2.jpg";
import scifi3 from "../assets/sici3.jpg";
import scifi4 from "../assets/sici4.jpg";
import { Link } from 'react-router-dom';
import FilterCategory from './FilterCategory';  

function FindFilter() {
  const [activeCat, setActiveCat] = useState("all");
  const [showFilters, setShowFilters] = useState(true);

  const filterGroup = (group) => {
    setActiveCat(group);
  };

  const allCat = [
    {
      id: 1,
      img: Drama,
      description: "Run Silent, Run Deep Old",
      description1: "Book",
      bid:"Starting bid:",
      price: "£76.00",
      on: "Expires on:",
      date:"July 3, 2024",
      content: "DRAMA",
      paragraph: "Bid Now",
    },
    {
      id: 2,
      img: Drama1,
      description: "Germany 1866 - 1945 Cordon A",
      bid:"Starting bid:",
      price: "£80.00",
      on: "Expires on:",
      date:"July 1, 2024",
      content: "DRAMA",
      paragraph: "Bid Now",
    },
    {
      id: 3,
      img: Drama2,
      description: "Scott of the Antartic",
      bid:"Starting bid:",
      price: "£75.00",
      on: "Expires on:",
      date:"June 27, 2024",
      content: "DRAMA",
      paragraph: "Bid Now",
    },
    {
      id: 4,
      img: Drama3,
      description: "Versatile - van Morrison Vinyl",
      bid:"Starting bid:",
      price: "£44.00",
      on: "Expires on:",
      date:"June 26, 2024",
      content: "DRAMA",
      paragraph: "Bid Now",
    },
    {
      id: 5,
      img: Adventure1,
      description: "Rumours Remaster - Fleet",
      bid:"Current bid:",
      price: "£63.00",
      on: "Expires on:",
      date:"July 16, 2024",
      content: "ADVENTURE",
      paragraph: "Bid Now",
    },
    {
      id: 6,
      img: Adventure2,
      description: "2014 Forest Hills Drive - J Cole",
      bid:"Current bid:",
      price: "£116.00",
      on: "Expires on:",
      date:"July 13, 2024",
      content: "ADVENTURE",
      paragraph: "Bid Now",
    },
    {
      id: 7,
      img: Adventure3,
      description: "Last Flight - Amelia Earhart",
      bid:"Starting bid:",
      price: "£98.00",
      on: "Expires on:",
      date:"July 2, 2024",
      content: "ADVENTURE",
      paragraph: "Bid Now",
    },
    {
      id: 8,
      img: Adventure4,
      description: "The Elephant Man - Sir",
      description1: "Frederick",
      bid:"Starting bid:",
      price: "£35.00",
      on: "Expires on:",
      date:"June 30, 2024",
      content: "ADVENTURE",
      paragraph: "Bid Now",
    },
    {
      id: 9,
      img: Adventure5,
      description: "Fifteen Decisive Battles - Sir",
      bid:"Starting bid:",
      price: "£100.00",
      on: "Expires on:",
      date:"June 29, 2024",
      content: "ADVENTURE",
      paragraph: "Bid Now",
    },
    {
      id: 10,
      img: ant1,
      description: "Pink Floyd - The Dark Side",
      description1: "Moon",
      bid:"Starting bid:",
      price: "£100.00",
      on: "Expires on:",
      date:"July 17, 2024",
      content: "ANTHOLOGY",
      paragraph: "Bid Now",
    },
    {
      id: 11,
      img: ant2,
      description: "Hozier Triple Vinyl, Gatefold",
      bid:"Starting bid:",
      price: "£90.00",
      on: "Expires on:",
      date:"July 10, 2024",
      content: "ANTHOLOGY",
      paragraph: "Bid Now",
    },
    {
      id: 12,
      img: ant3,
      description: "Ride the Lightning 180",
      bid:"Starting bid:",
      price: "£100.00",
      on: "Expires on:",
      date:"July 5, 2024",
      content: "ANTHOLOGY",
      paragraph: "Bid Now",
    },
    {
      id: 13,
      img: ant4,
      description: "Sapphira and the Slave Girl",
      description1: "Book",
      bid:"Starting bid:",
      price: "£45.00",
      on: "Expires on:",
      date:"July 4, 2024",
      content: "ANTHOLOGY",
      paragraph: "Bid Now",
    },
    {
      id: 14,
      img: ant5,
      description: "Mots d'Heures Gousses - Old",
      bid:"Starting bid:",
      price: "£100.00",
      on: "Expires on:",
      date:"June 24, 2024",
      content: "ANTHOLOGY",
      paragraph: "Bid Now",
    },
    {
      id: 15,
      img: bio1,
      description: "Fireside Stories - S. Lawson’s",
      bid:"Starting bid:",
      price: "£100.00",
      on: "Expires on:",
      date:"June 28, 2024",
      content: "BIOGRAPHY",
      paragraph: "Bid Now",
    },
    {
      id: 16,
      img: bio2,
      description: "Ask Again, Yes by Mary Beth",
      description1: "Keane",
      bid:"Starting bid:",
      price: "£45.00",
      on: "Expires on:",
      date:"June 25, 2024",
      content: "BIOGRAPHY",
      paragraph: "Bid Now",
    },
    {
      id: 17,
      img: bio3,
      description: "The Art of the Long View - P",
      bid:"Starting bid:",
      price: "£75.00",
      on: "Expires on:",
      date:"June 22, 2024",
      content: "BIOGRAPHY",
      paragraph: "Bid Now",
    },
    {
      id: 18,
      img: bio4,
      description: "The Pioneers by David",
      description1: "McCullough",
      bid:"Starting bid:",
      price: "£50.00",
      on: "Expires on:",
      date:"June 21, 2024",
      content: "BIOGRAPHY",
      paragraph: "Bid Now",
    },
    {
      id: 19,
      img: bio5,
      description: "Crowdfunding 2021",
      price: "£5.00 - £100.00",
      content: "CROWDFUNDINGS",
      paragraph: "SELECT OPTIONS",
    },
    {
      id: 20,
      img: bio6,
      description: "Crowdfunding Product",
      price: "£23.00 - £66.00",
      content: "CROWDFUNDINGS",
      paragraph: "SELECT OPTIONS",
    },
    {
      id: 21,
      img: fan1,
      description: "21 CD Cover LP (12 album) -",
      description1: "Adele",
      bid:"Current bid:",
      price: "£42.00",
      on: "Expires on:",
      date:"July 14, 2024",
      content: "FANTASY",
      paragraph: "Bid Now",
    },
    {
      id: 22,
      img: fan2,
      description: "A Night at the Opera - Queen",
      bid:"Starting bid:",
      price: "£100.00",
      on: "Expires on:",
      date:"July 11, 2024",
      content: "FANTASY",
      paragraph: "Bid Now",
    },
    {
      id: 23,
      img: fan3,
      description: "The Eminem Show by",
      description1: "Eminem",
      bid:"Starting bid:",
      price: "£55.00",
      on: "Expires on:",
      date:"July 8, 2024",
      content: "FANTASY",
      paragraph: "Bid Now",
    },
    {
      id: 24,
      img: fan4,
      description: "Versatile - Van Morrison Vinyl",
      bid:"Starting bid:",
      price: "£44.00",
      on: "Expires on:",
      date:"June 26, 2024",
      content: "FANTASY",
      paragraph: "Bid Now",
    },
    {
      id: 25,
      img: horror1,
      description: "Helplessness Blues - Foxes",
      bid:"Starting bid:",
      price: "£45.00",
      on: "Expires on:",
      date:"July 7, 2024",
      content: "HORROR",
      paragraph: "Bid Now",
    },
    {
      id: 26,
      img: horror2,
      description: "Weezer (Blue Album) -",
      description1: "Weezer",
      bid:"Starting bid:",
      price: "£70.00",
      on: "Expires on:",
      date:"July 6, 2024",
      content: "HORROR",
      paragraph: "Bid Now",
    },
    {
      id: 27,
      img: horror3,
      description: "Harvard Classics - Charles W.",
      description1: "Eliot",
      bid:"Starting bid:",
      price: "£45.00",
      on: "Expires on:",
      date:"June 23, 2024",
      content: "HORROR",
      paragraph: "Bid Now",
    },
    {
      id: 28,
      img: horror4,
      description: "Red White Royal Blue by",
      description1: "Casey",
      bid:"Starting bid:",
      price: "£100.00",
      on: "Expires on:",
      date:"June 20, 2024",
      content: "HORROR",
      paragraph: "Bid Now",
    },
    {
      id: 29,
      img: scifi1,
      description: "Creedence Clearwater",
      bid:"Starting bid:",
      price: "£75.00",
      on: "Expires on:",
      date:"July 15, 2024",
      content: "SCI-FI",
      paragraph: "Bid Now",
    },
    {
      id: 30,
      img: scifi2,
      description: "Ten 180 gram disc - Pearl Jam",
      bid:"Starting bid:",
      price: "£75.00",
      on: "Expires on:",
      date:" July 12, 2024",
      content: "SCI-FI",
      paragraph: "Bid Now",
    },
    {
      id: 31,
      img: scifi3,
      description: "In Between Dreams - Johnson",
      bid:"Starting bid:",
      price: "£35.00",
      on: "Expires on:",
      date:" July 9, 2024 ",
      content: "SCI-FI",
      paragraph: "Bid Now",
    },
    {
      id: 32,
      img: scifi4,
      description: "Scott of the Antarctic",
      bid:"Starting bid:",
      price: "£75.00",
      on: "Expires on:",
      date:"June 27, 2024",
      content: "SCI-FI",
      paragraph: "Bid Now",
    },
    
  ];

  const renderDivs = () => {
    return allCat
      .filter((item) => activeCat === "all" || item.content === activeCat)
      .map((item) => (
        <div
          key={item.id}
          className={`nft-itemCat item flex flex-col  gap-[8px] mt-[45px] items-center shadow-2xl h-[421px] text-center ${item.content.toLowerCase().replace(" ", "-")}`}
        >
          <Link to="/"><img width={259} src={item.img} alt={item.description} /></Link>
          <Link to="/"><h3 className="nft-item-title text-[#484848] hover:text-[#D4A619] text-[24px] font-bold ">{item.description}</h3></Link>
          <p className="nft-item-price text-[16px] text-[#D4A619] font-bold ">{item.price}</p>
          <Link to="/"><button className="nft-item-button bg-[#D4A619] font-bold text-[12px] text-white rounded-[30px] w-[160px] h-[47px] "><p>{item.paragraph}<br/>{item.paragraph1}</p></button></Link>
        </div>
      ));
  };

  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="nft-filter-container flex w-[100%] mt-[100px] mb-[100px] gap-9 ">
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
        <div className="filter-buttons-container h-[50px] w-[100%] pl-[25%] bg-[white] shadow-2xl text-[#666666] flex items-center justify-around buttons mb-4 text-[14px] font-bold ">
          <button onClick={() => setActiveCat("all")} className="filter-button mr-2 cursor hover:text-[#D4A619] ">All</button>
          <button onClick={() => filterGroup("ART")} className="filter-button mr-2 cursor hover:text-[#D4A619] ">ART</button>
          <button onClick={() => filterGroup("DOMAINS")} className="filter-button mr-2 cursor hover:text-[#D4A619] ">DOMAINS</button>
          <button onClick={() => filterGroup("SPORTS")} className="filter-button mr-2 cursor hover:text-[#D4A619] ">SPORTS</button>
          <button onClick={() => filterGroup("TRADING CARDS")} className="filter-button mr-2 cursor hover:text-[#D4A619] ">TRADING CARDS</button>
          <button onClick={() => filterGroup("UTILITY")} className="filter-button mr-2 cursor hover:text-[#D4A619] ">UTILITY</button>
          <button onClick={() => filterGroup("VIRTUAL WORLDS")} className="filter-button mr-2 cursor hover:text-[#D4A619] ">VIRTUAL WORLDS</button>
        </div>
        <div className="nft-items-grid items-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderDivs()}
        </div>
      </div>
    </div>
  );
}

export default FindFilter;
