import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import image1 from "../assets/homelist8.jpg";
import image2 from "../assets/headphones.jpg";
import image3 from "../assets/homeItems2.png";
import image4 from "../assets/HomeList2.jpg";
import image5 from "../assets/homeItem1.jpg";
import image6 from "../assets/HomeList1.jpg";

const SingleProductsMap = () => {
  const data = [
    {
      id: 1,
      paragraphs: [
        "The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat. It is a large and muscular semi-longhair cat with a soft and silky coat. Like all long haired cats,",
        "Ragdolls need grooming to ensure their fur does not mat. Developed by American breeder Ann Baker in the 1960s, it is best known for its docile and placid temperament and",
        "affectionate nature.",
        "The name “Ragdoll” is derived from the tendency of individuals from the original breeding stock to go limp and relaxed when picked up. Particularly popular in both the",
        "United Kingdom and the breed’s native United States, ragdoll cats often are known as “dog-like cats” or “puppy-like cats” due to behaviors such as their tendency to follow",
        "people around, their ease at being physically handled, and their relative lack of aggression toward other pets.",
      ],
      concept: "DESCRIPTION",
    },
    {
      id: 2,
      color: "Red",
      condition: "Used",
      concept: "ADDITIONAL INFORMATION",
    },
    {
      id: 3,
      description: "Auction has finished",
      condition: "Product sold for buy now price:",
      price: "$600.00",
      date: "November 1, 2023",
      clock: "12:00:00 am",
      auction: "Auction started",
      concept: "AUCTION HISTORY",
    },
    {
      id: 4,
      description: ["Reviews"],
      paragraphs: [
        "There are no reviews yet.",
        "Your email address will not be published. Required fields are marked *",
      ],
      details: ["Your rating *", "Your review *", "Name *", "Email *"],
      concept: "REVIEWS (0)",
    },
    {
      id: 5,
      img: image1,
      description: "Laptop Latitude d3300",
      bid: "Starting Bid:",
      price: "$50.00",
      concept: "PRODUCTS",
    },
    {
      id: 6,
      img: image2,
      description: "Bluetooth Headphones",
      bid: "Auction Ended",
      concept: "PRODUCTS",
    },
    {
      id: 7,
      img: image3,
      description: "Proxy Bidding",
      bid: "Starting Bid:",
      price: "$75.00",
      concept: "PRODUCTS",
    },
    {
      id: 8,
      img: image4,
      description: "Product Back to Order",
      bid: "Starting Bid:",
      price: "$19.00",
      concept: "PRODUCTS",
    },
    {
      id: 9,
      img: image5,
      description: "Dual SIM Smartphone",
      bid: "Current Bid:",
      price: "$5,051.00",
      concept: "PRODUCTS",
    },
    {
      id: 10,
      img: image6,
      description: "Touchscreen Tablet",
      bid: "Current Bid:",
      price: "$95.00",
      concept: "PRODUCTS",
    },
  ];

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.concept]) {
      acc[item.concept] = [];
    }
    acc[item.concept].push(item);
    return acc;
  }, {});

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <div>
      <div className="flex gap-4 justify-center mt-[250px]">
        {Object.keys(groupedData).map((key) => (
          <button
            key={key}
            className={`py-2 px-4 text-sm font-semibold border-b-2 ${
              activeCategory === key ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleCategoryClick(key)}
          >
            {key}
          </button>
        ))}
      </div>

      {Object.keys(groupedData).map((key) => (
        <div key={key} className={activeCategory === key ? "" : "hidden"}>
          {groupedData[key].map((item, index) => (
            <div key={index}>
              <div className="flex flex-col gap-[8px] text-left mt-[38px] px-[100px] ">
                {key === "DESCRIPTION" && (
                  <div>
                    {item.paragraphs.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}

                
                  {key === "ADDITIONAL INFORMATION" && (
                    <div  className="flex ">
                      <table>
                        <thead>
                          <tr>
                            <th>Color: {item.color}</th>
                            <th>Condition: {item.condition}</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  )}
                

                {key === "AUCTION HISTORY" && (
                  <div className="flex flex-col">
                    <p>{item.description}</p>
                    <div className="flex gap-[2px]">
                      <p>{item.condition}</p>
                      <p>{item.price}</p>
                    </div>
                    <div className="flex justify-around border-gray-500">
                      <div className="flex">
                        <p>{item.date}</p>
                        <p>{item.clock}</p>
                      </div>
                      <p>{item.auction}</p>
                    </div>
                  </div>
                )}

                {key === "REVIEWS (0)" && (
                  <div>
                    {item.paragraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="font-light text-[#606060] text-[16px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <h1 className="font-bold text-[14px] text-[#242424]">
                      {item.description}
                    </h1>
                    {item.details.map((detail, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h1 className="font-semibold text-[16px] text-[#606060]">
                          {detail}
                        </h1>
                        <textarea rows={2} cols={20} />
                      </div>
                    ))}
                    <button className="font-bold bg-[#2695FF] w-[138px] h-[48px] text-[white] rounded-[30px] flex justify-center items-center">
                      SUBMIT
                    </button>
                  </div>
                )}

                {key === "PRODUCTS" && (
                  <div className="mt-[60px] mb-[75px] flex flex-wrap gap-[28px] px-[71px]">
                    <div className="relative w-[322px] h-[400px] flex flex-col shadow-2xl overflow-hidden group">
                      <div
                        style={{
                          backgroundImage: `url(${item.img})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          transformOrigin: "center",
                          transition: "transform 0.5s ease",
                        }}
                        className="absolute inset-0 group-hover:scale-105"
                      ></div>
                      <div className="flex items-start pt-[30px] z-10">
                        <div className="flex flex-col gap-[8px] pl-[18px]">
                          <Tooltip title="Bid Now">
                            <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                              <FaGavel />
                            </button>
                          </Tooltip>
                          <Tooltip title="Quickview">
                            <button className="rounded-[45px] hover:bg-[#2695FF] bg-white text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[33px] h-[33px] shadow-md">
                              <FaSearch />
                            </button>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="mt-auto h-[120px] bg-white flex flex-col border-t-2 justify-center items-center gap-[9px] z-10">
                        <Link to="/">
                          <h2 className="text-[#484848] text-[18px] font-bold leading-[22px] hover:text-[#2695FF]">
                            {item.description}
                          </h2>
                        </Link>
                        <div className="flex gap-[5px]">
                          <p className="text-[#606060] text-[16px] font-light leading-[22px]">
                            {item.bid}
                          </p>
                          <p className="text-[14px] font-bold">{item.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SingleProductsMap;
