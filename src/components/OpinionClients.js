import React, { useRef, useState } from "react";
import src1 from "../assets/member-team4.jpg";
import { FaGavel } from "react-icons/fa6";

function OpinionClients({ GavelTextColor, OneLatest }) {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const mouseDownHandler = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const mouseLeaveHandler = () => {
    setIsDown(false);
  };

  const mouseUpHandler = () => {
    setIsDown(false);
  };

  const mouseMoveHandler = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-[100%] h-[600px] bg-[#FFF0FD] px-[75px]">
      <div className="topic flex flex-col items-center pt-[90px] justify-center mt-[126px] mb-[25px]">
        <h1 className="font-bold text-[34px]">{OneLatest}</h1>
        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2"></div>
          <span
            style={{ color: GavelTextColor }}
            className="font-bold text-[27px]"
          >
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2"></div>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-[28px] overflow-x-scroll cursor-grab no-scrollbar"
        onMouseDown={mouseDownHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
      >
        {[1, 2, 3, 4].map((_, index) => (
          <li key={index} className="flex flex-col gap-[30px] list-none">
            <div className="w-[380px] px-[25px] py-[25px] rounded-[9px] min-h-[80px] bg-[white]">
              <p className="text-[#343E47] font-normal text-[16px]">
                Yahoo Inc. is an American multinational <br /> Internet
                corporation headquartered in <br /> Sunnyvale, California. It is
                globally known for <br /> its Web portal, search engine Yahoo
                Search.
              </p>
            </div>
            <div className="w-[250px] flex justify-between items-center">
              <div>
                <img
                  className="rounded-[50%]"
                  width={100}
                  src={src1}
                  alt="client"
                />
              </div>
              <div>
                <h1 className="text-[20px] text-[#484848]">Martin Culich</h1>
                <p className="text-[14px] text-[#999999] font-light">
                  Digital Marketer
                </p>
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default OpinionClients;
