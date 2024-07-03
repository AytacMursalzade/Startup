import React from 'react';
import { FaBars, FaBriefcase, FaCreditCard, FaPercentage, FaPencilAlt, FaCircleNotch, FaShopify } from 'react-icons/fa';
import { FiPieChart } from 'react-icons/fi';
import { FaTableCellsLarge } from 'react-icons/fa6';
import { HiUsers } from 'react-icons/hi';
import { ImQuotesRight } from 'react-icons/im';
import { MdOutlineGridView } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ShortcodeCard({ scrollToRef }) {
    const card = [
        {
            id: 1,
            icon: <FaBars />,
            description: 'Accordion',
            ref: 'accordionRef'
        },
        {
            id: 2,
            icon: <FaBriefcase />,
            description: 'Clients Grid',
            ref: 'clientsGridRef'
        },
        {
            id: 3,
            icon: <FaCircleNotch />,
            description: 'Counters',
            ref: 'countersRef'
        },
        {
            id: 4,
            icon: <FiPieChart />,
            description: 'Piecharts',
            ref: 'piechartsRef'
        },
        {
            id: 5,
            icon: <MdOutlineGridView />,
            description: 'Products Grid',
            ref: 'productsGridRef'
        },
        {
            id: 6,
            icon: <FaShopify />,
            description: 'Shop Feature',
            ref: 'shopFeatureRef'
        },
        {
            id: 7,
            icon: <FaTableCellsLarge />,
            description: 'Pricing Tables',
            ref: 'pricingTablesRef'
        },
        {
            id: 8,
            icon: <FaCreditCard />,
            description: 'Services',
            ref: 'servicesRef'
        },
        {
            id: 9,
            icon: <FaPercentage />,
            description: 'Bars',
            ref: 'barsRef'
        },
        {
            id: 10,
            icon: <HiUsers />,
            description: 'Members',
            ref: 'membersRef'
        },
        {
            id: 11,
            icon: <ImQuotesRight />,
            description: 'Testimonials',
            ref: 'testimonialsRef'
        },
        {
            id: 12,
            icon: <FaPencilAlt />,
            description: 'Blog posts',
            ref: 'blogPostsRef'
        }
    ];

    return (
        <div className="w-[370px] min-h-[150px] bg-white py-[30px] px-[30px] flex flex-wrap justify-around ">
            {card.map((item) => (
                <Link
                    key={item.id}
                    to={`/shortcodes/${item.ref}`}
                    className="w-[45%] flex items-center text-[#606060]  border-b-2 border-gray-300 mb-4"
                >
                    <div className="mr-2" onClick={() => scrollToRef(item.ref)} data-ref={item.ref}>
                        {item.icon}
                    </div>
                    <span>{item.description}</span>
                </Link>
            ))}
        </div>
    );
}

export default ShortcodeCard;
