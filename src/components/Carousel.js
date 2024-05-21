
import React, { useState, useEffect } from "react";
import image3 from "../assets/kat150.png";
import image5 from "../assets/earphoneSlide.png";
import image131 from "../assets/asus-laptop-1-BG.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const SlideItem = ({ src, alt, text1, text2, text3, subject, backSubject }) => {
  return (
    <div className="slide-item flex flex-col item w-full h-full pt-[35px] items-center  transition-transform duration-500 transform hover:translate-x-5">
      <h1 className="font-medium">{subject}</h1>
      <h2 className="backSubject text-[120px] text-[grey] ">{backSubject}</h2>
      <img width={280} src={src} alt={alt} className="relative bottom-28 object-cover z-50 " />

      <div className="flex flex-col gap-[5px] mt-[-130px] mb-[18px] ">
        <p  className="overlay-text flex items-center gap-[8px] text-[#908c8c] text-[18px] "><FaCheck className="text-[purple] "/>{text1}</p>
        <p  className="overlay-text flex items-center gap-[8px] text-[#908c8c] text-[18px] "><FaCheck className="text-[purple] "/>{text2}</p>
        <p  className="overlay-text flex items-center gap-[8px] text-[#908c8c] text-[18px] "><FaCheck className="text-[purple] "/>{text3}</p>
        
      </div>
      <button className="px-[35px] flex gap-[12px] items-center py-[15px] rounded-[45px] bg-[#2695FF] text-white ">
      <FaShoppingCart/>

        ADD TO CART</button>
    </div>
  );
};


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image3, image5, image131];
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
    <div className="carousel w-[100%] h-[770px] relative overflow-x-hidden ">
      <div className="slides w-[100%]  h-full flex" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide-item w-full flex items-center justify-center absolute top-0 left-0" style={{ left: `${index * 100}%` }}>
            <SlideItem
              subject="TECH EQUIPMENT"
              backSubject={index === 0 ? "HEADPHONES" : index === 1 ? "MACKBOOK" : "WATCH"}
              src={image}
              alt={`Slide ${index + 1}`}
              text1={index === 0 ? "Balanced High, Mid and Low tones" : index === 1 ? "2.9 GHz Dual-Core Intel Core i5" : "Dual-Core Processor,Integrated GPS"}
              text2={index === 0 ? "Active Noise Cancellation" : index === 1 ? "256 GB SSD auf PCle Basis (On-Board)" : "WIFI (802.11b/g/n 2.4 GHz), Bluetooth 4.0"}
              text3={index === 0 ? "Bluetooth Wireless" : index === 1 ? "8 GB 2133 MHz LPDDR3 Arbeitsspeicher" : "OLED Retina Display"}
            />
          </div>
        ))}
      </div>
      <div className="text-[15px]  ">
        <button className="flex items-center justify-center w-[35px] h-[35px] text-white bg-[#7F7F7F] hover:bg-black absolute left-[35px] top-1/2 transform -translate-y-1/2" onClick={handlePrev}><FaChevronLeft /></button>
        <button className="flex items-center justify-center w-[35px] h-[35px] text-white bg-[#7F7F7F] hover:bg-black absolute right-[35px] top-1/2 transform -translate-y-1/2" onClick={handleNext}><FaChevronRight /></button>
      </div>
      <div className="progress-bar mt-[610px] " style={{ height: "12px", backgroundColor:"#D8D7DC", width: `${progress}%` }}></div>
    </div>
  );
};

export default Carousel