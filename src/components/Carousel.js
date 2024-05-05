import React, { useState, useEffect } from "react";
import image1 from "../assets/chargephone.jpg";
import image2 from "../assets/community.jpg";
import image3 from "../assets/earphones.png";
import image4 from "../assets/illusion.jpg";
import image5 from "../assets/location.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0);
    }
  }, [progress, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0);
  };

  return (
    <div className="carousel w-[100%] h-[770px] relative ">
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <div className="text-[15px]  ">
        <button className="flex items-center justify-center w-[35px] h-[35px] text-white bg-[#7F7F7F] hover:bg-black absolute left-[35px] top-1/2 transform -translate-y-1/2" onClick={handlePrev}><FaChevronLeft /></button>
        <button className="flex items-center justify-center w-[35px] h-[35px] text-white bg-[#7F7F7F] hover:bg-black absolute right-[35px] top-1/2 transform -translate-y-1/2" onClick={handleNext}><FaChevronRight /></button>
      </div>
      <div className="progress-bar mt-[500px] " style={{ height: "12px", backgroundColor:"#D8D7DC", width: `${progress}%` }}></div>
    </div>
  );
};

export default Carousel;
