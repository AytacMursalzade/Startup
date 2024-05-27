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
  imagePoster5,
  textPosterCard,
  numberProduct,
  productCard,
  posterCard,
  imagePoster3,
  imagePoster4,
  numberPoster1,
  productName1,
  nameAuction,
  GavelColorshop,
  display,
  display1,
  posterCardNew,
  numberPoster3New,
  productName3New,
  posterCardAverage,
  numberPosterAverage,
  productNameAverage
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
  const BGimageMil5 = {
    backgroundImage: `url(${imagePoster5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const TourD = {
    display: display ? 'block' : 'none',
  };
  const TourDP = {
    display: display1 ? 'block' : 'none',
  };
  return (
    <>
      <div>
        <div style={TourD} className="flex flex-col items-center justify-center mt-[160px]">
          <h1 className="font-bold text-[34px] text-center">{nameAuction}</h1>

          <div className="flex items-center justify-center mt-[15px]">
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
            <span
              style={{ color: GavelColorshop }}
              className="font-bold  text-[27px]"
            >
              <FaGavel />
            </span>
            <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
          </div>
        </div>
        <div className="viewPartArt flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
          <div className="onePoster flex gap-[17px] justify-around ml-[75px] ">
            <div
              style={BGimageMil}
              className="PosterCoins posterMilOne w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px] "
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
                className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#6FCBF4] text-[14px] font-semibold text-[white] rounded-[45px]"
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
              style={BGimageMil5}
              className="CoinsPTwo  w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px] "
            >
              <h1 className="text-[27px] text-white font-extrabold ">
                {posterCardAverage}
              </h1>
              <p className="text-white flex gap-[8px] ">
                <strong className="font-bold text-[16px] ">
                  {numberPosterAverage}
                </strong>
                {productNameAverage}
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
              className="CoinsPThree  w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px] "
            >
              <h1 className="text-[27px] text-white font-extrabold ">
                {posterCard}
              </h1>
              <p className="text-white flex gap-[8px] ">
                <strong className="font-bold text-[16px] ">
                  {numberPoster1}
                </strong>
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
          <div style={TourDP} className="onePoster flex gap-[17px] justify-around ml-[75px] ">
            <div
              style={BGimageMil4}
              className="  w-[380px] h-[430px] flex justify-center items-center flex-col gap-[15px] "
            >
              <h1 className="text-[27px] text-white font-extrabold ">
                {posterCardNew}
              </h1>
              <p className="text-white flex gap-[8px] ">
                <strong className="font-bold text-[16px] ">
                  {numberPoster3New}
                </strong>
                {productName3New}
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
      </div>
    </>
  );
}

export default TourSales;
