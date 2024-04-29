import React, { useState } from "react";
import Imagecons from "../assets/logo-ibid.png";
import Imagecons1 from "../assets/logo-ibid.png";
import image3 from "../assets/logo-ibid.png";
import image4 from "../assets/logo-ibid.png";
import image5 from "../assets/logo-ibid.png";
import image6 from "../assets/logo-ibid.png";
import image7 from "../assets/logo-ibid.png";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function CarouselFadeExample() {
  const images = [
    {
      url: Imagecons,
    },
    {
      url: Imagecons1,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
    {
      url: image6,
    },
    {
      url: image7,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" h-[400px] relative group ">
      <div
        className="relative w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      >
        {/* Left Arrow */}
        {images.length > 1 && (
          <div className="absolute top-[50%]  transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white hidden group-hover:block cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
        )}
        {/* Right Arrow */}
        {images.length > 1 && (
          <div className="absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white hidden group-hover:block cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {images.map((image, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`mx-2 text-2xl cursor-pointer object-contain ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'}`}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselFadeExample;
