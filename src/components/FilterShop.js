import React, { useState } from "react";
import FilteredPrice from "./FilteredPrice";

function FilterShop({ toggleShowFilters }) {
  const filtered = [
    {
      id: 1,
      description: "Color",
      paragraphs: ["Blue", "Dark", "Gray", "Green", "Red", "White", "Yellow"],
    },
    {
      id: 2,
      description: "Condition",
      paragraphs: ["New", "Used"],
    },
    {
      id: 3,
      description: "Size",
      paragraphs: ["Large", "Medium", "Small"],
    },
    {
      id: 4,
      description: "Product tags",
      paragraphs: ["Accessories", "Black Friday", "Gaming", "Sales"],
    },
    {
      id: 5,
      description: "Product categories",
      categories: [
        {
          name: "Electronics",
          subcategories: ["Televisions"],
        },
        {
          name: "Home Appliances",
          subcategories: ["Refrigerators"],
        },
        {
          name: "Kids Toys",
        },
        {
          name: "Laptops IT Products",
          subcategories: ["Accessories"],
        },
        {
          name: "Phones",
          subcategories: [
            "Cases & Protection",
            "Console Gaming",
            "Data Cables",
            "Mobile Chargers",
            "Mobile Phones",
            "Power Banks",
            "Selfie Sticks",
            "Tablets",
            "Tablets Protection",
          ],
        },
        {
          name: "Sales",
        },
      ],
    },
  ];

  const [search, setSearch] = useState("");
  const [visibleCollections, setVisibleCollections] = useState(
    filtered.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {})
  );

  const toggleVisibility = (id) => {
    setVisibleCollections((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderCategories = (categories) => {
    return categories.map((category, index) => (
      <div key={index} className="flex flex-col mt-3 text-[18px] text-[#606060] font-normal">
        <div className="flex gap-[13px]">
          <span>{category.name}</span>
        </div>
        {category.subcategories && (
          <ul className="ml-6 mt-1">
            {category.subcategories.map((subcategory, subIndex) => (
              <li key={subIndex} className="subcategory-name">
                {subcategory}
              </li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  return (
    <div className="w-[303px] flex flex-col gap-[15px]">
      <div className="px-[35px] flex flex-col gap-[25px]">
        <div className="filter-category">
          <h2 className="text-[#333333] pt-[20px] font-bold text-[22px]">Search for auctions</h2>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none rounded-[45px] w-[260px] h-[43px] mt-3 px-[20px] border-2 border-[gray]"
          />
        </div>
        <FilteredPrice />
        {filtered.map((item) => (
          <div key={item.id} className="collection-category mb-4">
            <h2
              className="text-[#333333] font-extrabold border-b-2 border-[#2695FF] text-[22px] cursor-pointer"
              onClick={() => toggleVisibility(item.id)}
            >
              {item.description}
            </h2>
            {visibleCollections[item.id] && (
              <div>
                {item.paragraphs && item.id !== 4 && (
                  <div className="flex flex-col">
                    {item.paragraphs.map((paragraph, index) => (
                      <div
                        key={index}
                        className="item flex gap-[13px] text-[18px] mt-3 text-[#606060] font-normal"
                      >
                        <input
                          type="checkbox"
                          id={`${item.id}-${index}`}
                          name={`${item.id}-${index}`}
                        />
                        <label htmlFor={`${item.id}-${index}`}>{paragraph}</label>
                      </div>
                    ))}
                  </div>
                )}
                {item.id === 4 && (
                  <div className="flex flex-wrap gap-[13px] mt-3">
                    {item.paragraphs.map((paragraph, index) => (
                      <div key={index} className="flex gap-[13px] text-[18px] text-[#606060] font-normal">
                        <label>{paragraph}</label>
                      </div>
                    ))}
                  </div>
                )}
                {item.categories && renderCategories(item.categories)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterShop;
