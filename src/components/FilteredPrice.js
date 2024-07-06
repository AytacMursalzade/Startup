import React, { useState } from "react";

const FilteredPrice = () => {
  const [upperValue, setUpperValue] = useState(225800);

  const handleUpperChange = (e) => {
    const value = parseInt(e.target.value);
    setUpperValue(value);
  };

  return (
    <div className="wrapper">
      <fieldset className="filter-price">
        <div className="price-field">
          <input
            type="range"
            min="0"
            max="225800"
            value={upperValue}
            onChange={handleUpperChange}
            id="upper"
            className="w-[250px] mb-[15px] "
          />
        </div>
        <div className="price-wrap flex justify-between ">
          <button className="price-title w-[68px] h-[28px] bg-[#2695FF] text-[white] font-bold rounded-[45px] text-[12px] ">FILTER</button>
          <div className="flex gap-0 justify-normal items-center ">
            <div className="price-wrap-1">
              0$
            </div>
            <div className="price-wrap_line">-</div>
            <div className="price-wrap-2 flex">
              <input
                id="two"
                value={upperValue}
                onChange={handleUpperChange}
                style={{ textAlign: "right",width:"50px",height:"19px" }}
              />
              <label htmlFor="two">$</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default FilteredPrice;
