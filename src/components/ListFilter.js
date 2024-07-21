import React, { useState } from "react";
import { MdOutlineGridView } from "react-icons/md";
import { FaHeart, FaList } from "react-icons/fa";
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
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FilterShop from "./FilterShop";
import { FaArrowRightLong } from "react-icons/fa6";

const CombinedComponent = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [filteredList, setFilteredList] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("Default sorting");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;

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
    { id: 13, img: image13, description: "Simple Product", price: "$500.00" },
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
    { id: 18, img: image18, description: "Test", price: "$50.00" },
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

  const sortOptions = [
    { name: "Default sorting" },
    { name: "Sort by popularity" },
    { name: "Sort by average rating" },
    { name: "Sort by latest" },
    { name: "Sort by price: low to high" },
    { name: "Sort by price: high to low" },
    { name: "Sort by current bid: low to high" },
    { name: "Sort by current bid: high to low" },
    { name: "Sort auction by ending soonest" },
    { name: "Sort auction by recently started" },
    { name: "Sort auction by most active" },
  ];

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const sortedData = () => {
    switch (sortCriteria) {
      case "Sort by price: low to high":
        return [...data].sort(
          (a, b) =>
            parseFloat(a.price?.slice(1) || 0) -
            parseFloat(b.price?.slice(1) || 0)
        );
      case "Sort by price: high to low":
        return [...data].sort(
          (a, b) =>
            parseFloat(b.price?.slice(1) || 0) -
            parseFloat(a.price?.slice(1) || 0)
        );
      default:
        return data;
    }
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredAndSortedData = sortedData().filter((item) => {
    return filteredList.length > 0 ? filteredList.includes(item) : true;
  });

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = filteredAndSortedData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredAndSortedData.length / recordsPerPage);
  const pageNumbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <Container >
      <Row className="flex">
        <Col md={3}>
          <FilterShop setFilteredList={setFilteredList} data={data} />
        </Col>
        <Col md={9}>
          <div className="ml-[47px] " id="listGrid">
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
            <div className="sort-header">
              <select onChange={handleSortChange} value={sortCriteria}>
                {sortOptions.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <ul
              className={`flex flex-wrap ${
                viewMode === "list" ? "flex-row" : ""
              }`}
            >
              {currentRecords.map((item) => (
                <li
                  key={item.id}
                  className={`mb-[30px] shadow-2xl ${
                    viewMode === "grid"
                      ? "w-full md:w-1/2 lg:w-1/3 pr-[15px]"
                      : "w-full pr-[15px]"
                  }`}
                  style={{ width: "320px", height: "410px" }}
                >
                  <div
                    className="box relative border border-[#f1f1f1] p-[10px]"
                    style={{ width: "320px", height: "320px" }}
                  >
                    <Tooltip title="Favourite">
                      <FaHeart className="text-white absolute right-[10px]" />
                    </Tooltip>
                    <Link to="/single-auction">
                      <img
                        src={item.img}
                        alt=""
                        className="mb-[10px] w-[320px] h-[320px] object-cover"
                      />
                    </Link>
                    <div className="border border-[#c5c5c5]"></div>
                    <div className="content py-[10px] px-0 flex flex-col items-center ">
                      <div className="title">{item.description}</div>
                      <div className="dualClass flex gap-[12px] ">
                        {item.bid && <div className="bid">{item.bid}</div>}
                        {item.price && (
                          <div className="price text-[black] font-semibold ">
                            {item.price}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <ul className="pagination flex gap-[15px] ">
                
                {pageNumbers.map((number) => (
                  <li
                    className={`page-item ${
                      currentPage === number ? "active" : ""
                    }`}
                    key={number}
                  >
                    <button
                      className="page-link w-[45px] h-[45px] rounded-[50%] text-[black] hover:text-[white] shadow-md hover:bg-[#2695FF] "
                      onClick={() => handlePagination(number)}
                    >
                      {number}
                    </button>
                  </li>
                ))}
                <li className="page-item">
                  <button
                    className="page-link flex items-center justify-center w-[45px] h-[45px] rounded-[50%] text-[black] hover:text-[white] shadow-md hover:bg-[#2695FF]"
                    onClick={() => handlePagination(currentPage + 1)}
                    disabled={currentPage === npage}
                  >
                   <FaArrowRightLong />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CombinedComponent;
