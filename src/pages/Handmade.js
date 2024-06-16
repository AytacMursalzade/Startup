import React from "react";
import LogoimageHandMade from "../assets/logo_handmade.png";
import HeaderArrage from "../components/HeaderArrage";
import Header from '../components/Header';
import imgHandPoster from "../assets/slide-handmade-scaled.jpg";
import Slidehandmade from "../components/Slidehandmade";
import SlideHand from "../components/SlideHand";
import imgHandPosterAverage from "../assets/bg_plat-scaled.jpg";
import symbols from "../assets/HandmadeSynbol.png";
import symbols1 from "../assets/HandmadeSynbol2.png";
import symbols2 from "../assets/HandmadeSynbol3.png";
import HandmadeL from "../components/HandmadeL";
import PopularProducts from "../components/PopularProducts";
import HandmadeBtmSlide from "../components/HandmadeBtmSlide";
import Footer from "../components/Footer";
import FooterFilter from "../components/FooterFilter";
import HandmadeLatest from "../components/HandmadeLatest";
import HandTitle from "../components/HandTitle";


function Handmade() {
   

  return (
    <div className="container">
      <HeaderArrage display2={false} basketColor="#C16BB6" Logoimage={LogoimageHandMade} />
      <Header bgColor="#C16BB6"/>
      <Slidehandmade imgHandPoster={imgHandPoster} />  
      <HandmadeLatest hoverTextBotm="colorPurple" hoverLatest="colorPurplebg" />
      <SlideHand  imgHandPosterAverage={imgHandPosterAverage} symbols={symbols} symbols1={symbols1} symbols2={symbols2} symbolsH="A Variety of Products" symbolsP="Lorem ipsum dolor sit amet, consectetur adipiscing" symbolsP1="elit. Fusce vehicula hendrerit dolor." symbolsP2="Lorem ipsum dolor sit amet, consectetur adipiscing" symbolsP3="elit. Fusce vehicula hendrerit dolor." symbolsP4="Lorem ipsum dolor sit amet, consectetur adipiscing" symbolsP5="elit. Fusce vehicula hendrerit dolor." symbolsH1="Building a Community" symbolsH2="Quality Insurance" symbolsH3="Quality Insurance"/>
      <HandmadeL hoverTextBotm="colorBluishBlack"/>
      <PopularProducts hoverTextBotm="colorPurple" hoverLatest="colorPurplebg" 
       />
      <HandTitle />
      <HandmadeBtmSlide />
      <FooterFilter rounded="45px" mtfooteR="75px" bgColor="#C16BB6" />
      <Footer BtnRadius="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorPurple" hoverbgF="colorPurplebg" Logoimage={LogoimageHandMade} ptFtr="65px" />
    </div>
  );
}

export default Handmade;
