import React, { useState, useRef } from 'react';


const GovernmentSlideCor = () => {
  const slide1 = "Google is an American multinational technology company specializing";
  const slide2 = "Yahoo Inc. is an American multinational Internet corparation headequartered";
  const slide3 = "Yahoo Inc. is an American multinational Internet corparation headequartered";
  const slide4 = "Google is an American multinational technology company specializing";
  const slide5 = "Good service and quality auctions at fixed prices";

  const text1 = "Trend Doe - Digital Margeting";
  const text2 = "Karla Avaia - Digital Marketing";
  const text3 = "Louis Doe - Digital Marketing";
  const text4 = "Naren Doe - Digital Marketing";
  const text5 = "Martin Culich - Digital Marketing";


  const slides = [
    { header: slide1, text: text1 },
    { header: slide2, text: text2 },
    { header: slide3, text: text3 },
    { header: slide4, text: text4 },
    { header: slide5, text: text5 }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const startX = useRef(null);

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const handleStart = (x) => {
    startX.current = x;
  };

  const handleMove = (x) => {
    if (startX.current !== null) {
      const diffX = startX.current - x;
      if (diffX > 50) {
        goToSlide(currentSlide + 1);
        startX.current = null;
      } else if (diffX < -50) {
        goToSlide(currentSlide - 1);
        startX.current = null;
      }
    }
  };

  const handleEnd = () => {
    startX.current = null;
  };

  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
  const handleTouchEnd = handleEnd;

  const handleMouseDown = (e) => handleStart(e.clientX);
  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleMouseUp = handleEnd;
  const handleMouseLeave = handleEnd;

  return (
    <div
      className="w-[694px] m-h-[249px] text-[white] flex flex-col gap-[30px] justify-center items-center "
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide flex flex-col gap-[12px]  items-center ">
        <h2 className='text-[20px] font-normal '>{slides[currentSlide].header}</h2>
        <p className='text-[16px] font-semibold '>{slides[currentSlide].text}</p>
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentSlideCor;
