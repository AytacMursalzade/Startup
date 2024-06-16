import React from "react";
import { Link } from "react-router-dom";

function Card() {
  const headerTop = [
    {
      id: 1,
      description: "Art Auctions",
      path: "/artauctions",
    },
    {
      id: 2,
      description: "Antiques & Collectibles",
      path: "/antiques",
    },
    {
      id: 3,
      description: "Automotive Auctions",
      path: "/automotive",
    },
    {
      id: 4,
      description: "Books & Comics",
      path: "/bookauctions",
    },
    {
      id: 5,
      description: "Cattle Auctions",
      path: "/cattleauctions",
    },
    {
      id: 6,
      description: "Memorabilia Auctions",
      path: "/memorabilia",
    },
    {
      id: 7,
      description: "Militaria Auctions",
      path: "/militaria",
    },
    {
      id: 8,
      description: "Freelancer Mode",
      path: "/freelancer",
    },
    {
      id: 9,
      description: "NFT Marketplace",
      path: "/nftmarketplace",
    },
    {
      id: 10,
      description: "Coins Auctions",
      path: "/coins",
    },
    {
      id: 11,
      description: "Electronics Auctions",
      path: "/",
    },
    {
      id: 12,
      description: "Fundraising Auctions",
      path: "/fundraising",
    },
    {
      id: 13,
      description: "Machinery Auctions",
      path: "/machineauction",
    },
    {
      id: 14,
      description: "Laboratory Auctions",
      path: "/laboratory",
    },
    {
      id: 15,
      description: "Organic Food",
      path: "/organicfood",
    },
    {
      id: 16,
      description: "Self Storage Auctions",
      path: "/selfstorage",
    },
    {
      id: 17,
      description: "Government Surplus",
      path: "/government",
    },
    {
      id: 18,
      description: "Real Estate Auctions",
      path: "/realestate",
    },
    {
      id: 19,
      description: "Shop (No Auctions)",
      path: "/shopauctions",
    },
    {
      id: 20,
      description: "Countdown Auctions",
      path: "/countdown",
    },
    {
      id: 21,
      description: "List Auctions",
      path: "/listauction",
    },
    {
      id: 22,
      description: "Fashion Shop",
      path: "/fashionshop",
    },
    {
      id: 23,
      description: "Handmade Auctions",
      path: "/handmadeauctions",
    },
    {
      id: 24,
      description: "Tours Vacantions",
      path: "/toursvacantions",
    },
    {
      id: 25,
      description: "Automobilia Auctions",
      path: "/automobilia",
    },
    {
      id: 25,
      description: "Domain Auctions",
      path: "/domain",
    },
  ];

  const columns = [];
  const itemsPerColumn = 9;

  for (let i = 0; i < 3; i++) {
    columns.push(headerTop.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
  }

  return (
    <div className="flex w-[600px] h-[300px] bg-[white] gap-4">
      {columns.map((column, columnIndex) => (
        <ul
          key={columnIndex}
          className="flex flex-col divide-y w-[200px] divide-gray-200"
        >
          {column.map((item) => (
            <li key={item.id} className="py-2">
              <Link
                to={item.path}
                className="text-[#606060] hover:text-[#554444] transition-colors duration-300"
              >
                {item.description}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Card;
