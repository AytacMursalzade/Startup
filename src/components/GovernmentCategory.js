import React, { useEffect, useState } from "react";
import { FaGavel } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { items } from "../components/items";

function GovernmentCategory() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items);

  const filters = ["ENDING SOON", "NEWLY ADDED", "BEST MATCHED"];

  const handleFilterButtonClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      const tempItems = items.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems(items);
    }
  }, [selectedCategory]);

  return (
    <div>
      <div className="w-[100%] px-[60px] pt-[50px] flex justify-between ">
        <div>
          <h1 className="text-[32px] text-[#252525] font-bold  ">RECENT AUCTIONS</h1>
        </div>
        <div className="flex gap-[8px] text-[14px] font-bold text-[#333] ">
          {filters.map((category, idx) => (
            <button
              onClick={() => handleFilterButtonClick(category)}
              className={`button ${
                selectedCategory === category ? "active" : ""
              }`}
              key={`filters-${idx}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-around flex-wrap">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item flex flex-col">
            <div className="flex justify-around gap-[30px]">
              <div className="mt-[150px] flex flex-col gap-[12px]">
                <img width={440} src={item.img} alt="government" />

                <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px]">
                  <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold">
                    {item.name}
                  </h1>
                  <p className="text-[#666666] text-[14px]">{item.paragraf}</p>
                </div>
                <div className="w-[440px] px-[10px] flex justify-between pt-[15px] border border-t-[gray]">
                  <p className="flex gap-[5px] justify-center items-center">
                    <FaGavel style={{ color: "#4AD493" }} /> Bid: {item.price}
                  </p>
                  <p className="flex gap-[5px] justify-center items-center">
                    <FaLocationDot style={{ color: "#4AD493" }} /> Area:{" "}
                    {item.area}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovernmentCategory;
