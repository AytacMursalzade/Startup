import React, { useState } from "react";
import { MdOutlineGridView } from "react-icons/md";
import { FaGavel, FaHeart, FaList, FaSearch } from "react-icons/fa";
import image1 from "../assets/desktopCount.jpg";
import image2 from "../assets/HomeList1.jpg";
import image3 from "../assets/HomeItem4.jpg";
import image4 from "../assets/homeItem1.jpg";
import image5 from "../assets/HomeList2.jpg";
import image6 from "../assets/homeItem3.jpg";
import image7 from "../assets/HomeList3.jpg";
import image8 from "../assets/homeList6.jpg";
import image9 from "../assets/homeList7.jpg";
import image10 from "../assets/homelist8.jpg";
import image11 from "../assets/homeList9.jpg";
import image12 from "../assets/homeItem3.jpg";
import image13 from "../assets/HomeList3.jpg";
import image14 from "../assets/homeItem1.jpg";
import image15 from "../assets/HomeItem4.jpg";
import image16 from "../assets/homeItem1.jpg";
import image17 from "../assets/HomeItem4.jpg";
import image18 from "../assets/HomeList1.jpg";
import image19 from "../assets/homeItem3.jpg";
import image20 from "../assets/homeList6.jpg";
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

const ListGridView = () => {
  const [viewMode, setViewMode] = useState("grid");

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  const data = [
    {
      id: 1,
      img: image1,
      description: "Auto Bidding (Proxy)",
      bid: "Current Bid",
      price: "$455.00",
    },
    {
      id: 2,
      img: image2,
      description: "Bluetooth Headphones",
      bid: "Auction Ended",
    },
    {
      id: 3,
      img: image3,
      description: "Desktop Gamer Las Vegas",
      bid: "Auction Ended",
    },
    {
      id: 4,
      img: image4,
      description: "Laptop Inspiron Core i7",
      bid: "Auction Ended",
    },
    {
      id: 5,
      img: image5,
      description: "Laptop Latitude d3300",
      bid: "Starting Bid",
      price: "$50.00",
    },
    {
      id: 6,
      img: image6,
      description: "Magic Mouse v2",
      bid: "Current Bid",
      price: "$45.00",
    },
    {
      id: 7,
      img: image7,
      description: "Magic Mouse v2",
      bid: "Current Bid",
      price: "$45.00",
    },
    {
      id: 8,
      img: image8,
      description: "Phablet Surface Go",
      bid: "Starting Bid",
      price: "$70.00",
    },
    {
      id: 9,
      img: image9,
      description: "Product Back to Order",
      bid: "Starting Bid",
      price: "$19.00",
    },
    {
      id: 10,
      img: image10,
      description: "Product Out of Stock",
      bid: "Starting Bid",
      price: "$99.00",
    },
    {
      id: 11,
      img: image11,
      description: "Proxy Bidding",
      bid: "Starting Bid",
      price: "$75.00",
    },
    {
      id: 12,
      img: image12,
      description: "Reverse Auction",
      bid: "Current Bid",
      price: "$9.00",
    },
    {
      id: 13,
      img: image13,
      description: "Simple Product",
      price: "$500.00",
    },
    {
      id: 14,
      img: image14,
      description: "Smartphone Earbuds",
      bid: "Sales Bid Auction",
    },
    {
      id: 15,
      img: image15,
      description: "Space Grey 64GB Phone",
      bid: "Auction Ended",
    },
    {
      id: 16,
      img: image16,
      description: "Surface Go Tablet",
      bid: "Current Bid",
      price: "$75.00",
    },
    {
      id: 17,
      img: image17,
      description: "Tablet Surface Go",
      bid: "Auction Ended",
    },
    {
      id: 18,
      img: image18,
      description: "Test",
      price: "$50.00",
    },
    {
      id: 19,
      img: image19,
      description: "Touchscreen Tablet",
      bid: "Current Bid",
      price: "$95.00",
    },
    {
      id: 20,
      img: image20,
      description: "Ultra Laptop ZenBook 13",
      bid: "Starting Bid",
      price: "$55.00",
    },
  ];

  return (
    <div id="listGrid">
      <div className="glistview">
        <button
          className="gridview text-[22px]"
          onClick={() => handleViewChange("grid")}
        >
          <MdOutlineGridView />
        </button>
        <button
          className="listData text-[22px]"
          onClick={() => handleViewChange("list")}
        >
          <FaList />
        </button>
      </div>

      <ul className={viewMode}>
        {data.map((item) => (
          <li key={item.id} className="itemData">
            <div className="symbolsHop flex gap-[8px] ">
              <Tooltip title="Bid Now">
                <button className="rounded-[45px] bg-[#2695FF] text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                  <FaGavel />
                </button>
              </Tooltip>
              <Tooltip title="Add to Wishlist">
                <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                  <FaHeart />
                </button>
              </Tooltip>
              <Tooltip title="Quickview">
                <button className="rounded-[45px] hover:bg-[#2695FF] text-[#606060] hover:text-white flex justify-center items-center text-[13px] w-[30px] h-[30px] shadow-md ">
                  <FaSearch />
                </button>
              </Tooltip>
            </div>
            <div
              className="item-image"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width:"314px",
                height:"314px"
              }}
            ></div>

            <div className="itemDesc">
              <Link to="/"><div className="description text-[18px] pointer">{item.description}</div></Link>
              <div className="BidPrice">
                {item.bid && <div className="bidData text-[14px]">{item.bid}</div>}
                {item.price && (
                  <div className="priceData text-[14px]">
                    <strong className="text-[14px] text-[#242424] font-bold ">
                      {item.price}
                    </strong>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGridView;
