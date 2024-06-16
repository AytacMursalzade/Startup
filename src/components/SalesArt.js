import React from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import ArtImg from "../assets/art1new.jpg";
import ArtImg1 from "../assets/art22new.jpg";
import ArtImg2 from "../assets/art33new.jpg";
import ArtImg3 from "../assets/art4new.jpg";
import ArtImg5 from "../assets/art5new.jpg";
import ArtImg6 from "../assets/art6new.jpg";
import ArtImg7 from "../assets/art7new.jpg";
import ArtImg8 from "../assets/art8new.jpg";
import imgcattle1 from "../assets/artPoster1new.jpg";
import imgcattle2 from "../assets/artPoster2new.jpg";

function SalesArt() {
  const PostBgImg1 = {
    backgroundImage: `url(${imgcattle1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const PostBgImg2 = {
    backgroundImage: `url(${imgcattle2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const data = [
    {
      id: 1,
      img: ArtImg,
      description: "Le bouquet de Paris",
      bid: "Current Bid:",
      price: "$2,500.00",
    },
    {
      id: 2,
      img: ArtImg1,
      description: "Maison alsacienne",
      bid: "Current Bid:",
      price: "$55.00",
    },
    {
      id: 3,
      img: ArtImg2,
      description: "Marina de Sitges",
      bid: "Current Bid:",
      price: "$20.00",
    },
    {
      id: 4,
      img: ArtImg3,
      description: "Organico Monaco",
      bid: "Starting Bid:",
      price: "$100.00",
    },
    // {
    //   id: 5,
    //   img: ArtImg5,
    //   description: "Bosque Nevado",
    //   bid: "Current Bid:",
    //   price: "$110.00",
    // },
    // {
    //   id: 6,
    //   img: ArtImg6,
    //   description: "Le charme de la foret",
    //   bid: "Auction Ended"
    // },
    // {
    //   id: 7,
    //   img: ArtImg7,
    //   description: "Maison alsacienne",
    //   bid: "Current Bid:",
    //   price: "$55.00",
    // },
    // {
    //   id: 8,
    //   img: ArtImg8,
    //   description: "Marina de Sitges",
    //   bid: "Current Bid:",
    //   price: "$20.00",
    // },
  ];

  return (
    <>
      <div className=" flex flex-col gap-[73px] mt-[99px] mb-[100px] ">
        <div className="flex gap-[17px] justify-around ml-[75px] max-600:flex max-600:flex-col max-600:w-[486px] max-600:ml-[15px] ">
          <div
            style={PostBgImg1}
            className="w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] max-600:w-[454px] max-600:h-[236px] "
          >
            <h1 className="text-[27px] text-white font-extrabold ">ABSTRACT</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">4</strong>Collections
            </p>
            <button className="w-[205px] h-[50px] hover:bg-white hover:text-[#0543EC] text-[14px] font-semibold text-white rounded-[9px] bg-[#0543EC] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="flex flex-wrap gap-[22px]  px-[18px] w-[1272px] max-600:w-[486px] max-600:flex   max-600:flex-wrap max-600:px-[2px] max-600:items-center ">
            {data.map((item, index) => (
              <div
                key={index}
                className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] max-600:flex max-600:flex-col max-600:w-[219px] max-600:h-[331px] "
              >
                <Link>
                  <div
                    className="overflow-hidden rounded-lg"
                    style={{ width: "167px", height: "167px" }}
                  >
                    <img
                      src={item.img}
                      alt="sales"
                      className="transition duration-300 transform hover:scale-105"
                      style={{
                        transformOrigin: "center",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-[20px] pl-[19px] justify-center ">
                  <Link>
                    <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#0543EC] font-bold ">
                      {item.description} <br /> {item.description1}
                    </h1>
                  </Link>

                  <div className="flex items-center ">
                    <p className="text-[14px] text-[#606060] font-light ">
                      {item.bid}
                    </p>
                    <p className="text-[14px] text-[#606060] font-bold">
                      {item.price}
                    </p>
                  </div>
                  <div className="symbols flex gap-[8px] ">
                    <Tooltip title="View Auction">
                      <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                        <IoMdEye />
                      </button>
                    </Tooltip>
                    <Tooltip title="Add to Wishlist">
                      <button className="rounded-[9px] hover:bg-[#0543EC] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                        <FaHeart />
                      </button>
                    </Tooltip>
                    <Tooltip title="Quickview">
                      <button className="rounded-[9px] hover:bg-[#0543EC] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                        <FaSearch />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-[17px] justify-around ml-[75px] max-600:flex max-600:flex-col max-600:w-[486px] max-600:ml-[15px] ">
          <div
            style={PostBgImg2}
            className="w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] max-600:w-[454px] max-600:h-[236px] "
          >
            <h1 className="text-[27px] text-white font-extrabold ">ANTIQUE</h1>
            <p className="text-white flex gap-[8px] ">
              <strong className="font-bold text-[16px] ">4</strong>Collections
            </p>
            <button className="w-[205px] h-[50px] hover:bg-[white] hover:text-[#0543EC] text-[14px] font-semibold text-white rounded-[9px] bg-[#0543EC] ">
              VIEW ALL ITEMS
            </button>
          </div>
          <div className="flex flex-wrap gap-[22px]  px-[18px] w-[1272px] max-600:w-[486px] max-600:flex   max-600:flex-wrap max-600:px-[2px] max-600:items-center ">
            {data.map((item, index) => (
              <div
                key={index}
                className="salesPartArt w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] max-600:flex max-600:flex-col max-600:w-[219px] max-600:h-[331px] "
              >
                <Link>
                  <div
                    className="overflow-hidden rounded-lg"
                    style={{ width: "167px", height: "167px" }}
                  >
                    <img
                      src={item.img}
                      alt="sales"
                      className="transition duration-300 transform hover:scale-105"
                      style={{
                        transformOrigin: "center",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-[20px] pl-[19px] justify-center ">
                  <Link>
                    <h1 className="text-[#484848] text-[18px] transition-all duration-300 hover:text-[#0543EC] font-bold ">
                      {item.description} <br /> {item.description1}
                    </h1>
                  </Link>

                  <div className="flex items-center ">
                    <p className="text-[14px] text-[#606060] font-light ">
                      {item.bid}
                    </p>
                    <p className="text-[14px] text-[#606060] font-bold">
                      {item.price}
                    </p>
                  </div>
                  <div className="symbols flex gap-[8px] ">
                    <Tooltip title="View Auction">
                      <button className="rounded-[9px] bg-[#0543EC] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                        <IoMdEye />
                      </button>
                    </Tooltip>
                    <Tooltip title="Add to Wishlist">
                      <button className="rounded-[9px] hover:bg-[#0543EC] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                        <FaHeart />
                      </button>
                    </Tooltip>
                    <Tooltip title="Quickview">
                      <button className="rounded-[9px] hover:bg-[#0543EC] hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md ">
                        <FaSearch />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesArt;
