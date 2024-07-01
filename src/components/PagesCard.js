import React from "react";
import { Link } from "react-router-dom";

function PagesCard() {
  const headerTop = [
    {
      id: 1,
      description: "Sitemap",
      path: "/artauctions",
    },
    {
      id: 2,
      description: "404 Not Found",
      path: "/antiques",
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

export default PagesCard;
