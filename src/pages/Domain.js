import React from 'react'
import NavbarBook from '../components/NavbarBook'
import HeaderBook from '../components/HeaderBook'
import DomainImg from "../assets/DomainLogo.png"
import DomainSlide from '../components/DomainSlide'
import DomainImgSlide from "../assets/ourCruises.jpg"
import LatestDomain from '../components/LatestDomain'
import DomainSlideShow from '../components/DomainSlideShow'

function Domain() {
  return (
    <div>
      <NavbarBook bgColorTop="#00886D"/>
      <HeaderBook display8={false} display9={true} bgColor="#18AE91" src={DomainImg} basketColor="#18AE91" />
      <DomainSlide DomainImgSlide={DomainImgSlide}/>
      <LatestDomain />
      <DomainSlideShow />
    </div>
  )
}

export default Domain
