import React from "react";
import LogoimageEstate from "../assets/realestate.png";
import LatestAuto from "../components/LatestAuto";
import tourLatest from "../assets/tours-vacantions_One.jpg";
import FooterTop from "../components/FooterTop";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import NavbarBook from "../components/NavbarBook";
import HeaderBook from "../components/HeaderBook";
import imageloGo from "../assets/toursLogo.png";
import ToursSlide from "../components/ToursSlide";
import Mainbottom from "../components/Mainbottom";
import TourPoster from './../components/TourPoster';
import TourSales from "../components/TourSales";
import imageTour from "../assets/tourCattle.jpg";
import imagePoster3 from "../assets/ourCruises.jpg";
import imgPoster from "../assets/ToursBullet.jpg";
import imagePoster from "../assets/breaks.jpg";
import imagePoster4 from "../assets/realEstateHome.jpg"
import TourImg from "../components/TourImg";

function ToursVacantions() {
  return (
    <div className="container">
      <NavbarBook bgColorTop="#022147"/>
      <HeaderBook bgColor="#092A5F" src={imageloGo} basketColor="#092A5F" />
      <ToursSlide />
      <Mainbottom colorBg="#6FCBF4" heightMain="145px" mtTop="-1px" colorP="white" colorH="white"/>
      <LatestAuto
        hoverTextBotm="colorBlueMania"
        hoverLatest="colorBlueManiabg"
        OneLatest="LATEST AUCTIONS"    
        textLatest="Athens ,Greece"
        art={tourLatest}
        GavelTextColor="#6FCBF4"
        tooltipBg="#6FCBF4"
        howToused="Current Bid"
      />
      <TourPoster />
      <TourSales
        imagePoster4={imagePoster4}
        imagePoster3={imagePoster3}
        tooltipBg="#6FCBF4"
        howToused="Starting Bid"
        textLatest="Budapest, Hungary"
        hoveredSales="colorBlueMania"
        hoverBGsales="colorBlueManiabg"
        imagePoster={imagePoster}
        imgPoster={imgPoster}
        SalesText="Budapest,Hungary"
        imageTour={imageTour}
        toolBg="#6FCBF4"
        textPosterCard="TOURS"
        productCard="Products"
        numberProduct="3"
        productName="Products"
        posterCard="CRUISES"
        numberPoster="3"
        numberPoster3="3"
        productName1="Products"
        numberPoster1="3"
        productName3="Products"
      />
      <TourImg /> 
      <FooterTop
        hoverColor="colorBlueMania"
        GavelColor="#6FCBF4"
        LatText1="A Phone Keeps Your"
        LatestText2="Friends Away"
        LatestTextp1="Bring to the table win-win survival"
        LatestTextp2="Strategies to ensure…"
      />
      <FooterFilter rounded="45px" bgColor="#6FCBF4" />
      <Footer textH1="white" FooterBG="#092A5F" widthFooter="1897" bgFootBtm="#22406F" heightFooter="120px" textColorFB="white" hoverFB="colorBlueMania" hoverbgF="colorBlueManiabg" Logoimage={imageloGo} />
    </div>
  );
}

export default ToursVacantions;
