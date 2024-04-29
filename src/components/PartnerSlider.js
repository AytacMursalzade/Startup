import React from 'react';
import Marquee from 'react-fast-marquee';
import imageTech from "../assets/tech1.png";
import imageTech1 from "../assets/tech2.png";


function PartnerSlider() {
  return (
    <div className='mt-[60px] '>
      <Marquee plays={false} direction="right" delay={3}>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech1} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech1} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech1} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech1} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageTech} alt="tech" /></div>
        
      </Marquee>
    </div>
  )
}

export default PartnerSlider
