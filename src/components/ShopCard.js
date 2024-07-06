import React from 'react'
import { Link } from 'react-router-dom';
import { FaObjectGroup, FaSlidersH } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";

function ShopCard() {
  const data = [
    {
      id: 1,
      description: "SHOP SHORTCODES",
      items: [
        { id: 1, label: "Sale Banners", link: "/salebanners",icon:<FaPercent /> },
        { id: 2, label: "Categories Grid", link: "/categoriesgrid",icon:<BiSolidCategoryAlt /> },
        { id: 3, label: "Clients Slider", link: "/clientsslider", icon:<FaSlidersH /> },
        { id: 4, label: "Pricing Tables", link: "/pricingtables", icon:<FaTableList /> },
        { id: 5, label: "Shop Features", link: "/shopfeatures", icon:<FaCartArrowDown /> },
      ],
    },
    {
      id: 2,
      description: "SHOP PAGES",
      items: [
        { id: 6, label: "Best Selling", link: "/bestselling" , icon:<FaChartLine />},
        { id: 7, label: "Featured", link: "/featured", icon:<FaStar /> },
        { id: 8, label: "By Category", link: "/bycategory", icon:<FaObjectGroup /> },
        { id: 9, label: "Recent Added", link: "/recentadded", icon:<FaClock /> },
        { id: 10, label: "Sales Now", link: "/salesnow", icon:<FaBolt /> },
      ],
    },
    {
      id: 3,
      description: "MORE PAGES",
      items: [
        { id: 11, label: "Single Product", link: "/singleproduct", icon:<FaLink /> },
        { id: 12, label: "My Account", link: "/myaccount", icon:<FaAddressCard /> },
        { id: 13, label: "My Basket", link: "/mybasket",icon:<FaBasketShopping /> },
        { id: 14, label: "Checkout", link: "/checkout", icon:<FaCreditCard />},
      ],
    },
  ];

  return (
    <div className='w-[500px] min-h-[200px] bg-[white] py-[30px] px-[30px] flex pt-[9px] justify-around gap-[5px] '>
      {data.map((section) => (
        <div key={section.id}>
          <h1>{section.description}</h1>
          <ul className='flex flex-col mt-[15px]'>
            {section.items.map((item) => (
              <Link key={item.id} to={item.link}>
                <li className="w-[150px] h-[35px] text-[#484848] flex gap-[8px] items-center py-[15px] hover:text-[#2695ff] text-[14px] font-semibold ">
                  {item.icon} {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ShopCard;
