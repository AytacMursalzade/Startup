import React, { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";


function FundFiltercat({ toggleShowFilters }) {
  const filtered = [
    {
      id: 1,
      description: "AUTHOR",
      paragraphs: ["Erin Morgenstern", "Margaret Atwood", "Mary Beth Keane"],
    },
    {
      id: 2,
      description: "TYPES",
      paragraphs: ["Audiobook", "Comicbook", "eBook","Hardcover Book"],
    },
   
    {
      id: 3,
      description: "YEARS",
      paragraphs: [
        "1900 - 1949",
        "1950 - 1999",
        "2000 - 2009",
        "2010 - 2019",
        "Before 1900"
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

  return (
    <div>
      <div className="flex justify-between items-center w-[295px] h-[45px] px-[15px] py-[12px] bg-[#D4A619]">
        <h1 className="flex items-center gap-[8px] text-[white]">
          <FaSortAmountDown />
          FILTERS
        </h1>

        <button onClick={toggleShowFilters} className="text-[white]">Close</button>
      </div>
      <div className="w-[295px] flex flex-col gap-[15px] shadow-2xl">
        <div className="px-[35px] flex flex-col gap-[25px]">
          <div className="filter-category">
            <h2 className="text-[#333333] pt-[20px] font-bold text-[16px]">Search</h2>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-[220px] h-[43px] mt-3 px-[20px] bg-[#E6E6E6]"
            />
          </div>
          {filtered.map((item) => (
            <div key={item.id} className="collection-category mb-4">
              <h2
                className="text-[#333333] font-bold text-[14px] cursor-pointer"
                onClick={() => toggleVisibility(item.id)}
              >
                {item.description}
              </h2>
              {visibleCollections[item.id] && (
                <div>
                  {item.paragraphs.map((paragraph, index) => (
                    <div
                      key={index}
                      className="item flex gap-[13px] text-[14px] mt-3 text-[#252525] font-normal"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FundFiltercat;
