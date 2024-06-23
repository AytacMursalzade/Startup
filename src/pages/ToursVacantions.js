import React from "react";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import NavbarBook from "../components/NavbarBook";
import HeaderBook from "../components/HeaderBook";
import imageloGo from "../assets/toursLogo.png";
import ToursSlide from "../components/ToursSlide";
import Mainbottom from "../components/Mainbottom";
import TourPoster from "./../components/TourPoster";
import TourSales from "../components/TourSales";
import TourImg from "../components/TourImg";
import ReadBtn from "./../components/ReadBtn";
import LatestTour from "../components/LatestTour";

function ToursVacantions() {
  return (
    <div className="container">
      <NavbarBook bgColorTop="#022147" />
      <HeaderBook bgColor="#092A5F" src={imageloGo} basketColor="#6FCBF4" />
      <ToursSlide />
      <Mainbottom
        
        colorBg="#6FCBF4"
        heightMain="145px"
        mtTop="-1px"
        colorP="white"
        colorH="white"
      />
      <LatestTour/>
      <TourPoster />
      <TourSales/>
      <TourImg />
      <ReadBtn
        nameAuction="LATEST NEWS"
        GavelColorshop="#6FCBF4"
        display1={false}
        display2={true}
        btnColor="bg-[#6FCBF4]"
      />
      <FooterFilter rounded="45px" bgColor="#6FCBF4" />
      <Footer
        
        BtnRadius="45px"
        ptFtr="50px"
        BrdInput="45px"
        textH1="white"
        FooterBG="#092A5F"
        widthFooter="1897"
        bgFootBtm="#22406F"
        heightFooter="300px"
        textColorFB="white"
        hoverFB="colorBlueMania"
        hoverbgF="colorBlueManiabg"
        Logoimage={imageloGo}
      />
    </div>
  );
}

export default ToursVacantions;
