import React from 'react';
import imageMil from "../assets/Militaria-slider-scaled.jpg";

function MilImg() {
  return (
    <div
      style={{ backgroundImage: `url(${imageMil})` }}
      className='w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white'
    >
      <h2 className='text-center text-[55px] font-extrabold '>
        MILITARIA & WAR <br /> MEMORABILIA
      </h2>
    </div>
  );
}

export default MilImg;
