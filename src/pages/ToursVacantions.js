import React from "react";
import LogoimageEstate from "../assets/realestate.png";
import LatestAuto from "../components/LatestAuto";
import EstateFlin from "../assets/realEstateHome.jpg";
import SalesAntiques from "../components/SalesAntiques";
import imagePosterReal from "../assets/Villaestate.jpeg";
import imageReal from "../assets/villaSmallestate.jpeg";
import locationimageSelf from "../assets/location.png";
import Locationn from "../components/Locationn";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import imageRealEstate from "../assets/estateVillaReal.jpeg";
import RealEstatePoster from "../components/RealStatePoster";
import NavbarBook from "../components/NavbarBook";
import HeaderBook from "../components/HeaderBook";
import imageloGo from "../assets/toursLogo.png";
import ToursSlide from "../components/ToursSlide";

function ToursVacantions() {
  return (
    <div className="container">
      <NavbarBook bgColorTop="#022147"/>
      <HeaderBook bgColor="#092A5F" src={imageloGo} basketColor="#092A5F" />
      <ToursSlide />
      <LatestAuto
        OneLatest="LATEST PROPERTIES AUCTIONS"
        toolRadius="9px"
        textLatest="Villa Flowers"
        art={EstateFlin}
        GavelTextColor="#6449E7"
        tooltipBg="#6449E7"
        howToused="Current Bid"
      />
      <RealEstatePoster />
      <SalesAntiques
        imagePoster={imageRealEstate}
        imgPoster={imagePosterReal}
        SalesText="Luxury Villa"
        img={imageReal}
        toolBg="#6449E7"
        textPosterCard="VILLA"
        productCard="Products"
        numberProduct="6"
        productName="Products"
        posterCard="DUPLEX"
        numberPoster="4"
      />
      <Locationn
        radiusBorder="9px"
        img={locationimageSelf}
        GavellColor="#6449E7"
        inputBg="#6449E7"
      />
      <FooterTop
        GavelColor="#414144"
        LatText1="A Phone Keeps Your"
        LatestText2="Friends Away"
        LatestTextp1="Bring to the table win-win survival"
        LatestTextp2="Strategies to ensure…"
      />
      <FooterAverage GavelColorshop="#6449E7" nameAuction="SHOP BY BRAND" />
      <FooterFilter rounded="9px" bgColor="#6449E7" />
      <Footer Logoimage={LogoimageEstate} />
    </div>
  );
}

export default ToursVacantions;
