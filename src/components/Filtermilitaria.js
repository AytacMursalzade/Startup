import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pistol1 from "../assets/pistol1.jpg";
import pistol2 from "../assets/pistol2.jpg";
import pistol3 from "../assets/pistol3.jpg";
import pistol4 from "../assets/pistol4.jpg";
import pistol5 from "../assets/pistol5.jpg";
import pistol6 from "../assets/pistol6.jpg";
import pistol7 from "../assets/pistol7.jpg";
import pistol8 from "../assets/pistol8.jpg";
import pistol9 from "../assets/pistol9.jpg";
import pistol10 from "../assets/pistol10.jpg";
import pistol11 from "../assets/pistol11.jpg";
import pistol12 from "../assets/pistol12.jpg";
import pistol13 from "../assets/pistol13.jpg";
import pistol14 from "../assets/pistol14.jpg";
import pistol15 from "../assets/pistol15.jpg";
import pistol16 from "../assets/pistol16.jpg";
import pistol17 from "../assets/pistol17.jpg";
import pistol18 from "../assets/pistol18.jpg";
import pistol19 from "../assets/pistol19.jpg";
import pistol20 from "../assets/pistol20.jpg";
import pistol21 from "../assets/pistol21.jpg";
import pistol22 from "../assets/pistol22.jpg";
import pistol23 from "../assets/pistol23.jpg";

function Filtermilitaria() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const data = [
    {
      id:1,
      img:pistol1,
      description:"19th Century",
      description1:".274cal. Gallery air",
      bid:"Starting Bid:",
      price: "£95.00",
      concept:"Pistols"
    },
    {
      id:2,
      img:pistol2,
      description:"A rare Diana Model",
      description1:"58 Luft-Gewehr",
      bid:"Starting Bid:",
      price: "£65.00",
      concept:"Pistols"
    },
    {
      id:3,
      img:pistol3,
      description:"Girondoni style .42R",
      description1:"air pistol",
      bid:"Starting Bid:",
      price: "£45.00",
      concept:"Pistols"
    },
    {
      id:4,
      img:pistol4,
      description:"4.5cal. CO2 pistol,",
      description1:"no. 532, circa 1890",
      bid:"Starting Bid:",
      price: "£45.00",
      concept:"Pistols"
    },
    {
      id:5,
      img:pistol5,
      description:"Brown O.H .22cal.",
      description1:"Pneumatic pistol,",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Pistols"
    },
    {
      id:6,
      img:pistol6,
      description:"Pape Newcastle, A",
      description1:"20 bore box-lock",
      description2:"ejector",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Pistols"
    },
    {
      id:7,
      img:pistol7,
      description:"10 bore 22cms(8",
      description1:"3/4in.)barrel with",
      description2:"London proof",
      bid:"Starting Bid:",
      price: "£50.00",
      concept:"Rifles"
    },
    {
      id:8,
      img:pistol8,
      description:"19th, Century",
      description:"flintlock pistol, by",
      description1:"Henry Nock",
      bid:"Starting Bid:",
      price: "£75.00",
      concept:"Rifles"
    },
    {
      id:9,
      img:pistol9,
      description:"A cased single shot",
      description:"ball reservoir air",
      bid:"Starting Bid:",
      price: "£40.00",
      concept:"Rifles"
    },
    {
      id:10,
      img:pistol10,
      description:"11 Ranelagh Street,",
      description1:"Liverpool,with 29 ",
      description1:"1/2in. .425cal",
      bid:"Starting Bid:",
      price: "£75.00",
      concept:"Rifles"
    },
    {
      id:11,
      img:pistol11,
      description:"19th Century",
      description1:"German naval",
      description1:"sword, the 72cms",
      description1:"blade",
      bid:"Starting Bid:",
      price: "£75.00",
      concept:"Rifles"
    },
    {
      id:12,
      img:pistol12,
      description:"Flintlock action, the",
      description1:"36 1/2in. barrel",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Rifles"
    },
    {
      id:13,
      img:pistol13,
      description:"1796-pattern officer's",
      description1:"light cavalry sabre",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Swords"
    },
    {
      id:14,
      img:pistol14,
      description:"Japanese kai-gunto,",
      description:"police sword,the",
      description:"single edged",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Swords"
    },
    {
      id:15,
      img:pistol15,
      description:"A 19th Century Indo-",
      description1:"Persian khanjar",
      bid:"Starting Bid:",
      price: "£45.00",
      concept:"Swords"
    },
    {
      id:16,
      img:pistol16,
      description:"19th Century military",
      description1:"rifle powder flask for",
      description2:"a Jaeger",
      bid:"Starting Bid:",
      price: "£88.00",
      concept:"Daggers"
    },
    {
      id:17,
      img:pistol17,
      description:"No. 11704,28in. Nitro-",
      description1:"proofed barrels,rib",
      description1:"engraved",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Daggers"
    },
    {
      id:18,
      img:pistol18,
      description:"British Heavy Cavalry",
      description1:"Trooper's sword",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Daggers"
    },
    {
      id:19,
      img:pistol19,
      description:"Queen Victoria",
      description1:"Volunteer Officer's",
      description2:"Decoration awarded",
      bid:"Starting Bid:",
      price: "£30.00",
      concept:"Daggers"
    },
    {
      id:20,
      img:pistol20,
      description:"Africa star with",
      description1:"North Africa 1942-43",
      description2:"clasp and Defence",
      bid:"Starting Bid:",
      price: "£75.00",
      concept:"Uniforms"
    },
    {
      id:21,
      img:pistol21,
      description:"Distinguished Flying",
      description1:"Cross and double bar",
      bid:"Starting Bid:",
      price: "£80.00",
      concept:"Uniforms"
    },
    {
      id:22,
      img:pistol22,
      description:"Air Crew Europe star",
      description1:"with France and",
      description1:"Germany clasp",
      bid:"Starting Bid:",
      price: "£100.00",
      concept:"Uniforms"
    },
    {
      id:23,
      img:pistol23,
      description:"Tenantry Volunteer",
      description1:"Infantry interest",
      description1:"Germany clasp",
      bid:"Starting Bid:",
      price: "£43.00",
      concept:"Uniforms"
    },
  ];

  const categories = [
    'All',
    'Pistols',
    'Rifles',
    'Swords',
    'Daggers',
    'Uniforms'
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
            className={`p-2 h-[100px] font-semibold text-[16px] w-[150px]  border rounded ${selectedCategory === category ? 'bg-[#5E3217] font-semibold text-[16px] text-white' : 'bg-white text-gray-700'}`}
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

export default Filtermilitaria;
