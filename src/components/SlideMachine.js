import React from 'react';
import Marquee from 'react-fast-marquee';
import imageMachine from "../assets/MachineSlideOne.png";
import imageMachineOne from "../assets/MachineSlideTwo.png";
import imageMachineTwo from "../assets/MachineSlideThree.png";


function SlideMachine() {
  return (
    <div className='sliderpart mt-[170px] px-[100px]'>
      <Marquee plays={false} direction="right" delay={3}>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachine} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachineOne} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachineTwo} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachine} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachineOne} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachineTwo} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachine} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachine} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachineTwo} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachine} alt="tech" /></div>
        <div><img className="image_wrapper w-[180px] h-[90px] py-[20px] px-[17px] " src={imageMachine} alt="tech" /></div>
        
      </Marquee>
    </div>
  )
}

export default SlideMachine
