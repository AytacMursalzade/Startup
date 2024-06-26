import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import spor from "../db/spor";

function Memoitems({
  tooltipBg,

  OneLatest,
  toolRadius,

  hoverTextBotm,
  display1,
  display2,
}) {
  const ToolStyle = {
    display: display1 ? "block" : "none",
  };

  const ToolStyleNew = {
    display: display2 ? "block" : "none",
  };

  const buttonData = [
    { title: "Bid Now", icon: <IoMdEye />, style: ToolStyle },
    { title: "Add to Wishlist", icon: <CiHeart />, style: {} },
    { title: "Quickview", icon: <FaSearch />, style: {} },
  ];

  return (
    <>
      <div className="topic flex flex-col items-center justify-center mt-[126px] mb-[25px] ">
        <h1 className="font-bold text-[34px] text-[#242424] ">{OneLatest}</h1>
        <p className="MemoText text-[#666666] text-[15px] front-light ">
          Handpicked Memorabilia And Cards By iBid
        </p>
      </div>

      <div className="PhonesMemo flex gap-[50px] justify-center px-[71px] flex-wrap">
        {spor.map((item) => (
          <div
            key={item.id}
            className="allMemo rounded-[9px] w-[290px] min-h-[425px] shadow-lg"
          >
            <div className="flex flex-col">
              <div
                style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                  className={`zoomable-bg w-[290px] h-[296px] rounded-[9px] flex justify-between items-start pt-[30px]`}
                >
                <div className="flex flex-col gap-[8px] pl-[240px] ">
                  {buttonData.map((button, index) => (
                    <Tooltip
                      key={index}
                      style={button.style}
                      title={button.title}
                      className="falseTooltip"

                    >
                      <button
                        style={{
                          backgroundColor: tooltipBg,
                          borderRadius: toolRadius,
                        }}
                        className={` text-white flex justify-center items-center text-[13px] w-[40px] h-[40px] shadow-md`}
                      >
                        {button.icon}
                      </button>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="phoneBottom flex flex-col text-center pt-[24px] items-center gap-[9px]">
                <Link to="/">
                  <h2
                    className={`text-[#484848] text-[18px] font-semibold loading-[22px] ${hoverTextBotm}`}
                  >
                    {item.description1} <br /> {item.description2} <br />
                    {item.description3}
                  </h2>
                </Link>
                <div className="w-[290px] h-[55px] pt-[12px] border-t-2 "><div className="flex gap-[2px] pt-[10px]  mr-[130px] ">
                  <p className="text-[#606060] w-[290px] text-[16px] font-light ">
                    Starting Bid:
                  </p>
                  <p className="text-[#0C7861] text-[16px] font-semibold loading-[22px]">
                    {item.price}
                  </p>
                </div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Memoitems;
