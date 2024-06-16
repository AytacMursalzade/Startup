import React from 'react';
import { FaBars, FaBriefcase, FaCreditCard, FaPercentage, FaPencilAlt, FaCircleNotch, FaShopify } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { FaTableCellsLarge } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { ImQuotesRight } from "react-icons/im";
import { MdOutlineGridView } from "react-icons/md";
import { Link } from 'react-router-dom';

function ShortcodeCard() {

    const card = [
        {
            id: 1,
            icon: <FaBars />,
            description: "Accordion",
        },
        {
            id: 2,
            icon: <FaBriefcase />,
            description: "Clients Grid",
        },
        {
            id: 3,
            icon: <FaCircleNotch />,
            description: "Counters",
        },
        {
            id: 4,
            icon: <FiPieChart />,
            description: "Piecharts",
        },
        {
            id: 5,
            icon: <MdOutlineGridView />,
            description: "Products Grid",
        },
        {
            id: 6,
            icon: <FaShopify />,
            description: "Shop Feature",
        },
        {
            id: 7,
            icon: <FaTableCellsLarge />,
            description: "Pricing Tables",
        },
        {
            id: 8,
            icon: <FaCreditCard />,
            description: "Services",
        },
        {
            id: 9,
            icon: <FaPercentage />,
            description: "Bars",
        },
        {
            id: 10,
            icon: <HiUsers />,
            description: "Members",
        },
        {
            id: 11,
            icon: <ImQuotesRight />,
            description: "Testimonials",
        },
        {
            id: 12,
            icon: <FaPencilAlt />,
            description: "Blog posts",
        },
    ];

    return (
        <div className='w-[370px] min-h-[150px] bg-white py-[30px] px-[30px] flex flex-wrap justify-around '>
            {card.map((item) => (
                <div key={item.id} className="w-[45%] flex items-center text-[#606060]  border-b-2 border-gray-300 mb-4">
                    <div className="mr-2">
                        {item.icon}
                    </div>
                    <span>{item.description}</span>
                </div>
            ))}
        </div>
    );
}

export default ShortcodeCard;
