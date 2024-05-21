import React from "react";
import { Link } from "react-router-dom";
import { FaGavel } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Tooltip from "@mui/material/Tooltip";

function TourSales({
  textLatest,
  hoveredSales,
  hoverBGsales,
  howToused,
  tooltipBg,
  imageTour,
  textLatest1,
  toolRadius,
  toolBg,
  imgPoster,
  imagePoster,
  textPosterCard,
  numberProduct,
  productCard,
  numberPoster,
  posterCard,
  productName,
  imagePoster3,
  imagePoster4,
  numberPoster3,
  numberPoster1,
  productName1,
  productName3
}) {
  const BGimgMil = {
    backgroundImage: `url(${imgPoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil = {
    backgroundImage: `url(${imagePoster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil3 = {
    backgroundImage: `url(${imagePoster3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const BGimageMil4 = {
    backgroundImage: `url(${imagePoster4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="viewPartArt flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div
            style={BGimageMil}
            className="PosterAntiques posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px] "
          >
            <h1 className="text-[27px] text-white font-extrabold ">
              {textPosterCard}
            </h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">
                {numberProduct}
              </strong>
              {productCard}
            </p>
            <button
              style={{ backgroundColor: toolBg }}
              className="w-[205px] h-[50px] hover:bg-white hover:text-[#6FCBF4] text-[14px] font-semibold text-white rounded-[45px]"
            >
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPostArt flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
          <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex  items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className="text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="View Auction">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest} <br /> {textLatest1}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className="  text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="Add to Wishlist">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className=" text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="Add to Wishlist">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div
            style={BGimgMil}
            className="  w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px] "
          >
            <h1 className="text-[27px] text-white font-extrabold ">
              {posterCard}
            </h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">{numberPoster}</strong>
              {productName}
            </p>
            <button
              style={{ backgroundColor: toolBg }}
              className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#6FCBF4] text-[14px] font-semibold text-white rounded-[45px] "
            >
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPostArt flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
          <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex  items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className="text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="View Auction">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest} <br /> {textLatest1}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className="  text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="Add to Wishlist">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className=" text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="Add to Wishlist">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div
            style={BGimageMil3}
            className="  w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px] "
          >
            <h1 className="text-[27px] text-white font-extrabold ">
              {posterCard}
            </h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">{numberPoster1}</strong>
              {productName1}
            </p>
            <button
              style={{ backgroundColor: toolBg }}
              className="w-[205px] h-[50px] hover:bg-[white]  hover:text-[#6FCBF4] text-[14px] font-semibold text-white rounded-[45px] "
            >
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPostArt flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
          <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex  items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className="text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="View Auction">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest} <br /> {textLatest1}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className="  text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="Add to Wishlist">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className=" text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="Add to Wishlist">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
          <div
            style={BGimageMil4}
            className="  w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px] "
          >
            <h1 className="text-[27px] text-white font-extrabold ">
              {posterCard}
            </h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">{numberPoster3}</strong>
              {productName3}
            </p>
            <button
              style={{ backgroundColor: toolBg }}
              className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#6FCBF4] text-[14px] font-semibold text-white rounded-[45px] "
            >
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="salesPartPostArt flex flex-wrap gap-[22px]  px-[18px] w-[1272px] ">
          <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex  items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className="text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="View Auction">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest} <br /> {textLatest1}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className="  text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="Add to Wishlist">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[24px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="allPhones w-[322px] h-[400px] shadow-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-start pt-[30px]">
                      <div className="flex flex-col gap-[8px] pl-[18px] ">
                        <Tooltip title="Bid Now">
                          <button
                            style={{
                              backgroundColor: tooltipBg,
                              borderRadius: toolRadius,
                            }}
                            className=" text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md"
                          >
                            <FaGavel />
                          </button>
                        </Tooltip>
                        <Tooltip title="Add to Wishlist">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <CiHeart />
                          </button>
                        </Tooltip>
                        <Tooltip title="Quickview">
                          <button
                            style={{ borderRadius: toolRadius }}
                            className={`${hoverBGsales} text-[#606060] hover:text-white flex justify-center items-center text-[15px] w-[38px] h-[38px] shadow-md`}
                          >
                            <FaSearch />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <img width={280} src={imageTour} alt="phones" />
                      </div>
                    </div>
                    <div className="phoneBottom flex flex-col  border-t-2 pt-[18px] items-center gap-[9px]">
                      <Link to="/">
                        <h2
                          className={`text-[#484848] text-[18px] font-bold loading-[22px] ${hoveredSales}`}
                        >
                          {textLatest}
                        </h2>
                      </Link>
                      <p className="text-[#606060] text-[16px] font-light loading-[22px]">
                        {howToused}
                      </p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourSales;
