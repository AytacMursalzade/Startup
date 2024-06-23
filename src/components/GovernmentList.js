import React from 'react';
import { MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom';

function GovernmentList() {

  const data = [
    {
      id: 1,
      description: "VEHICLES",
      items: [
        { id: 1, label: "Aircraft" },
        { id: 2, label: "Ambulance Rescue" },
        { id: 3, label: "Asphalt Equipment" },
        { id: 4, label: "Books Manuals" },
        { id: 5, label: "Clothing Linen" },
        { id: 6, label: "Outdoor Living" },
        { id: 7, label: "Pennsylvania" },
        
      ],
    },
    {
      id: 2,
      description: "PROPERTY AUCTIONS",
      items: [
        { id: 1, label: "Garbage" },
        { id: 2, label: "Garbage Trucks" },
        { id: 3, label: "Pool Supplies" },
        { id: 4, label: "Public Safety Control" },
        { id: 5, label: "Pump Accessories" },
        { id: 6, label: "Outdoor Living" },
        { id: 7, label: "Refuse Containers" },
        
      ],
    },
    {
      id: 3,
      description: "POLICE AUCTIONS",
      items: [
        { id: 1, label: "Aircraft" },
        { id: 2, label: "Ambulance Rescue" },
        { id: 3, label: "Asphalt Equipment" },
        { id: 4, label: "Books Manuals" },
        { id: 5, label: "Clothing Linen" },
        { id: 6, label: "Outdoor Living" },
        { id: 7, label: "Pennsylvania" },
        
      ],
    },
    {
      id: 4,
      description: "BANKRUPTCY AUCTIONS",
      items: [
        { id: 1, label: "Aircraft" },
        { id: 2, label: "Ambulance Rescue" },
        { id: 3, label: "Asphalt Equipment" },
        { id: 4, label: "Books Manuals" },
        { id: 5, label: "Clothing Linen" },
        { id: 6, label: "Outdoor Living" },
        { id: 7, label: "Pennsylvania" },
        
      ],
    },
    {
      id: 5,
      description: "MACHINERY AUCTIONS",
      items: [
        { id: 1, label: "Garbage" },
        { id: 2, label: "Garbage Trucks" },
        { id: 3, label: "Pool Supplies" },
        { id: 4, label: "Public Safety Control" },
        { id: 5, label: "Pump Accessories" },
        { id: 6, label: "Outdoor Living" },
        { id: 7, label: "Refuse Containers" },
        
      ],
    },
    {
      id: 6,
      description: "RESERVE AUCTIONS",
      items: [
        { id: 1, label: "Aircraft" },
        { id: 2, label: "Ambulance Rescue" },
        { id: 3, label: "Asphalt Equipment" },
        { id: 4, label: "Books Manuals" },
        { id: 5, label: "Clothing Linen" },
        { id: 6, label: "Outdoor Living" },
        { id: 7, label: "Pennsylvania" },
        
      ],
    },
    {
      id: 7,
      description: "JEWELRY AUCTIONS",
      items: [
        { id: 1, label: "Garbage" },
        { id: 2, label: "Garbage Trucks" },
        { id: 3, label: "Pool Supplies" },
        { id: 4, label: "Public Safety Control" },
        { id: 5, label: "Pump Accessories" },
        { id: 6, label: "Outdoor Living" },
        { id: 7, label: "Refuse Containers" },
        
      ],
    },
    {
      id: 8,
      description: "JEWELRY AUCTIONS",
      items: [
        { id: 1, label: "Aircraft" },
        { id: 2, label: "Ambulance Rescue" },
        { id: 3, label: "Asphalt Equipment" },
        { id: 4, label: "Books Manuals" },
        { id: 5, label: "Clothing Linen" },
        { id: 6, label: "Outdoor Living" },
        { id: 7, label: "Pennsylvania" },
        
        
      ],
    },
    
  ];
  return (
    <div className='GovernList px-[75px] flex flex-wrap gap-[69px] h-[695px] mt-[90px]  mb-[90px] '>
      {data.map((category) => (
        <div key={category.id} className='category flex justify-around'>
          <ul className='category-list w-[280px] border-r-2 flex flex-col gap-[12px] border-r-[#d6d0d0]'>
            <h1 className='category-title font-bold text-[16px] text-[#242424] '>{category.description} AUCTIONS</h1>
            {category.items.map((item) => (
              <li key={item.id} className='flex items-center gap-[10px] text-[#777777] font-medium text-[17px] hover:text-[#a09797] '>
                <MdChevronRight />
                <Link to="/">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}


export default GovernmentList
