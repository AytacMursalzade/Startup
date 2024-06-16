import React from 'react'
import GovernmentHeader from '../components/GovernmentHeader'
import src from "../assets/Government-logo.png"
import GovernmentSlide from '../components/GovernmentSlide'
import imageGovern from "../assets/Government-slider-1.jpg"
import GovernmentList from '../components/GovernmentList'
import GovernmentSlide2 from '../components/GovernmentSlide2'
import GovernImg2 from "../assets/Goverment-counter.jpg"
import GovernmentCategory from '../components/GovernmentCategory'
import governmentHome from "../assets/GovernmentHome.jpg"
import GovernmentSlide3 from '../components/GovernmentSlide3'
import imageSlideGovern from "../assets/GovernmenTestimonials.jpg"
import GovernBottm from '../components/GovernBottm'
import Footer from '../components/Footer'



function Government() {
  return (
    <div className='container'>
      <GovernmentHeader src={src}/>
      <GovernmentSlide imageGovern={imageGovern}/>
      <GovernmentList />
      <GovernmentSlide2 GovernImg2={GovernImg2}/>
      <GovernmentCategory governmentHome={governmentHome} GovernmentHH1="Townsville Motor Salvage" GovernmentHP1="Going forward knowledge is power or we need to button up our approach old boys club. Please use solutionise" price="100.00" area="London" />
      <GovernmentSlide3 imageSlideGovern={imageSlideGovern}/>
      <GovernBottm />
      <Footer BtnRadius="2px" lastftrM="70px" textH1="#606060" textColorFB="#343E47" hoverFB="colorGreenBlue" hoverbgF="colorGreenBluebg" Logoimage={src} />
    </div>
  )
}

export default Government
