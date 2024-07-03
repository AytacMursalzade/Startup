import React from 'react';
import image from "../assets/Storage-slider_pic-1.jpg";
import imageBuble from '../assets/LabCourse-Pattern-1.png';


function SelfStorageSlider() {
    const style ={
        backgroundImage:`url(${image})`,
        backgoundPosition:"cover",
        backgroundSize:"center"
    }
    const style1 ={
        backgroundImage:`url(${imageBuble})`,
        backgoundPosition:"cover",
        backgroundSize:"center"
    }
  return (
    <div className='SelfSlider flex justify-evenly w-[100%] h-[628px] '>
      <div className='oneSelf flex flex-col gap-[25px] justify-center '>
        <h1 className='text-[40px] text-[black] font-medium '>Get Your Hands on <br/>These Self <br/> Storages</h1>
        <p className='text-[16px] font-semibold '>The mentoring relationship for professional growth</p>
        <button className='w-[170px] h-[48px] rounded-[9px] hover:bg-[#241C19] bg-[#6F7F60] text-[white] font-bold '>VIEW AUCTIONS</button>
      </div>
      <div className='twoSelf flex gap-[30px] mr-[-145px] '><div className='w-[540px] h-[540px] ' style={style}></div>
      <div className='slideTwoself w-[188px] h-[174px] mt-[432px] pl-[-50px] ' style={style1}></div></div>
    </div>
  )
}

export default SelfStorageSlider
