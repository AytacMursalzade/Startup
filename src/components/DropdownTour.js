import React, { useState } from "react";

function DropdownTour() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log("Choose:", item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown  ">
      <button className="category-button text-[14px] font-normal  text-[#575555] " onClick={toggleDropdown}>
        Category
        <span className={`arrow ${isOpen ? "arrow-up" : "arrow-down"}`} />
      </button>
      {isOpen && (
        <>
          
          <ul className="dropdown-menu w-[250px] text-[16px] text-start font-normal ">
          <h1 className="font-bold text-[16px] ">Category</h1>
            <div className="flex flex-col gap-[25px] text-[#666] h-[48px] justify-center">
              <li onClick={() => handleItemClick("Electronics")}>
                Electronics
              </li>
            </div>
            <div className="flex flex-col gap-[25px] text-[#666] h-[48px] justify-center">
              <li onClick={() => handleItemClick("Laptop IT Products")}>
                Laptop IT Products
              </li>
            </div>
            <div className="flex flex-col gap-[25px] text-[#666] h-[48px] justify-center">
              <li onClick={() => handleItemClick("Phones")}>Phones</li>
            </div>
          </ul>
        </>
      )}
    </div>
  );
}

export default DropdownTour;
