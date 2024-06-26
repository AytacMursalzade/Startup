import React from "react";
import { Link } from "react-router-dom";
import { FaGavel, FaSearch, FaShoppingBasket, FaHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import sword1 from "../assets/pistol1.jpg";
import sword2 from "../assets/pistol2.jpg";
import sword3 from "../assets/pistol3.jpg";
import sword4 from "../assets/pistol4.jpg";
import uniform1 from "../assets/pistol20.jpg";
import uniform2 from "../assets/pistol22.jpg";
import uniform3 from "../assets/pistol23.jpg";
import uniform4 from "../assets/pistol23.jpg";

function MilSales({
  toolBg,
  hoverBGsales,
  productCard,
  productName,
  posterCard,
  imgPoster,
  textPosterCard,
  numberProduct,
  hoveredSales,
  imagePoster,
  display7,
  display6,
}) {
  const AntiquesData = [
    {
      id: "1",
      img: sword1,
      description: "19th Century",
      description1: "military rifle powder",
      description2: "flask for a Jaeger",
      paragraf1: "Starting Bid:",
      price: "$88.00",
    },
    {
      id: "2",
      img: sword2,
      description: "British Heavy",
      description1: "military rifle powder",
      description2: "flask for a Jaeger",
      paragraf1: "Starting Bid:",
      price: "$100.00",
    },
    {
      id: "3",
      img: sword3,
      description: "No. 11704, 28in.",
      description1: "Nitro-proofed",
      description2: "barrels,rib",
      description3: "engraved",
      paragraf1: "Starting Bid:",
      price: "$100.00",
    },
    {
      id: "4",
      img: sword4,
      description: "Queen Victoria",
      description1: "Volunteer Officier's",
      description2: "Decoration awarded",
      paragraf1: "Starting Bid:",
      price: "$30.00",
    },
    {
      id: "5",
      img: uniform1,
      description: "Africa star with",
      description1: "North Africa 1942-43",
      description2: "clasp and Defence",
      paragraf1: "Starting Bid:",
      price: "$75.00",
    },
    {
      id: "6",
      img: uniform2,
      description: "Air Crew Europe",
      description1: "star with France",
      description2: "and Germany clasp",
      paragraf1: "Starting Bid:",
      price: "$100.00",
    },
    {
      id: "7",
      img: uniform3,
      description: "Distinguished",
      description1: "Flying Cross and",
      description2: "double bar",
      paragraf1: "Starting Bid:",
      price: "$80.00",
    },
    {
      id: "8",
      img: uniform4,
      description: "Tenantry Volunteer",
      description1: "Infantry interest",
      paragraf1: "Starting Bid:",
      price: "$43.00",
    },
  ];

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

  const post1 = {
    backgroundColor: "blue",
  };
  const post3 = {
    backgroundColor: "red",
  };

  const styling = {
    display: display7 ? "block" : "none",
  };
  const styll = {
    display: display6 ? "block" : "none",
  };

  return (
    <div className="viewPart flex flex-col gap-[70px] mt-[100px] mb-[100px] ">
      <div className="onePoster1 flex gap-[60px] ml-[75px] ">
        <div
          style={{ ...post1, ...BGimageMil }}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
        >
          <h1 className="text-[27px] text-white font-extrabold ">
            {textPosterCard}
          </h1>
          <p className="text-white flex gap-[8px] ">
            <strong className="font-bold text-[16px] ">{numberProduct}</strong>
            {productCard}
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold text-[white] rounded-[9px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPost1 flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {AntiquesData.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="titleProduct flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1
                    className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}
                  >
                    {item.description}
                  </h1>
                </Link>

                <div className="flex">
                  <p className="text-[14px] text-[#606060] font-light ">
                    {item.paragraf1}
                  </p>
                  <p className="text-[16px] text-[black] font-bold ">{item.price}</p>
                </div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip style={styll} title="Bid Now">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-[9px] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                    >
                      <FaGavel />
                    </button>
                  </Tooltip>
                  
                  <Tooltip title="Add to Wishlist">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
                      <FaSearch />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="onePoster1 flex gap-[60px] ml-[75px] ">
        <div
          style={{ ...post3, ...BGimgMil }}
          className="Poster w-[420px] h-[480px] flex justify-center items-center flex-col gap-[15px] "
        >
          <h1 className="text-[27px] text-white font-extrabold ">
            {posterCard}
          </h1>
          <p className="text-white flex gap-[8px] ">
            <strong className="font-bold text-[16px] ">{numberProduct}</strong>
            {productName}
          </p>
          <button
            style={{ backgroundColor: toolBg }}
            className="w-[205px] h-[50px] hover:bg-[white] hover:text-[white] text-[14px] font-semibold text-[white] rounded-[9px]"
          >
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="salesPartPost1 flex flex-wrap gap-[22px] px-[18px] w-[1272px] ">
          {AntiquesData.slice(4, 8).map((item, index) => (
            <div
              key={index}
              className="salesPart w-[457px] h-[230px] shadow-xl flex justify-start items-center gap-[12px] px-[15px] "
            >
              <Link>
                <div>
                  <img src={item.img} width={167} alt="sales" />
                </div>
              </Link>
              <div className="titleProduct flex flex-col gap-[20px] pl-[15px] justify-center ">
                <Link>
                  <h1
                    className={`text-[#484848] text-[18px] transition-all duration-300 ${hoveredSales} font-bold`}
                  >
                    {item.description}
                  </h1>
                </Link>

                <div className="flex">
                  <p className="text-[14px] text-[#606060] font-light ">
                    {item.paragraf1}
                  </p>
                  <p className="text-[16px] text-[black] font-bold ">{item.price}</p>
                </div>
                <div className="symbols flex gap-[8px] ">
                  <Tooltip style={styll} title="Bid Now">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-[9px] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                    >
                      <FaGavel />
                    </button>
                  </Tooltip>
                  <Tooltip style={styling} title="Add to cart">
                    <button
                      style={{ backgroundColor: toolBg }}
                      className="rounded-[9px] text-white flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md "
                    >
                      <FaShoppingBasket />
                    </button>
                  </Tooltip>
                  <Tooltip title="Add to Wishlist">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
                      <FaHeart />
                    </button>
                  </Tooltip>
                  <Tooltip title="Quickview">
                    <button
                      className={`rounded-[9px] ${hoverBGsales} hover:text-white text-[#606060] flex justify-center items-center text-[13px] w-[33px] h-[32px] shadow-md `}
                    >
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
  );
}

export default MilSales;
