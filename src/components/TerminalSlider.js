import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import imageMember1 from "../assets/member01.jpg";
import imageMember2 from "../assets/membership0.jpg";

function TerminalSlider() {
  const data = [
    {
      id: 1,
      icon: <FaQuoteLeft />,
      description:
        "Yahoo Inc. is an American multinational Internet corporation headquartered in",
      description1:
        "Sunnyvale, California. It is globally known for its Web portal, search engine Yahoo",
      description2: "search",
      img: imageMember1,
      paragraph: "MARTIN CULICH",
    },
    {
      id: 2,
      icon: <FaQuoteLeft />,
      description:
        "Google is an American multinational technology company specializing in Internet-",
      description1:
        "related services and products. These include online advertising technologies,",
      description2: "search",
      img: imageMember2,
      paragraph: "NAREN DOE",
    },
    {
      id: 3,
      icon: <FaQuoteLeft />,
      description:
        "Yahoo Inc. is an American multinational Internet corporation headquartered in",
      description1:
        "Sunnyvale, California. It is globally known for its Web portal, search engine Yahoo",
      description2: "search",
      img: imageMember1,
      paragraph: "MARTIN CULICH",
    },
    {
      id: 4,
      icon: <FaQuoteLeft />,
      description:
        "Google is an American multinational technology company specializing in Internet-",
      description1:
        "related services and products. These include online advertising technologies,",
      description2: "search",
      img: imageMember2,
      paragraph: "NAREN DOE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <>
      <div className="mt-[100px] ">
        
        <h1 className="text-[32px] ml-[80px] mb-[55px] font-bold text-[#333]">
          Testimonial Slider
        </h1>
        <div className="terminal-slider flex  justify-center items-center gap-[25px] text-center ">
          <div key={data[currentIndex].id}>
            <p className="text-[32px] text-[#666] mb-[25px] flex justify-center items-center ">
              {data[currentIndex].icon}
            </p>
            <p className="text-[18px] mb-[25px] text-[#666] italic">
              {data[currentIndex].description}
              <br />
              {data[currentIndex].description1}
              <br />
              {data[currentIndex].description2}
            </p>
            <div className="flex gap-[15px]  justify-center items-center">
              <img
                width={64}
                className="text-[#ccc] rounded-[50%]  text-[32px] font-normal"
                src={data[currentIndex].img}
                alt="slider"
              />
              <h1 className="text-[15px] font-bold text-[black] ">
                {data[currentIndex].paragraph}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TerminalSlider;
