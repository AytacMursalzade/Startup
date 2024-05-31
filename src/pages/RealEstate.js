import React from "react";
import HeaderArrageArt from "../components/HeaderArrageArt";
import Header from "../components/Header";
import LogoimageEstate from "../assets/realestate.png";
import Slide from "../components/Slide";
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

function RealEstate() {
  return (
    <div className="container">
      <HeaderArrageArt basketColor="#6449E7" Logoimage={LogoimageEstate} />
      <Header catStyle="catStyle" bgColor="#6449E7" />
      <Slide />
      <LatestAuto
        hoverTextBotm="colorPurplishBlue"
        hoverLatest="colorPurplishBluebg"
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
        display5={true}
        hoveredSales="colorPurplishBlue"
        hoverBGsales="colorPurplishBluebg"
        imagePoster={imageRealEstate}
        imgPoster={imagePosterReal}
        
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
        display={false}
        hoverColor="colorPurplishBlue"
        GavelColor="#414144"
        LatText1="A Phone Keeps Your"
        LatestText2="Friends Away"
        LatestTextp1="Bring to the table win-win survival"
        LatestTextp2="Strategies to ensure…"
      />
      <FooterAverage GavelColorshop="#6449E7" nameAuction="SHOP BY BRAND" />
      <FooterFilter mtfooteR="75px" rounded="9px" bgColor="#6449E7" />
      <Footer
        ptFtr="50px"
        BtnRadius="9px"
        lastftrM="70px"
        textH1="#343E47"
        textColorFB="#343E47"
        hoverFB="colorPurplishBlue"
        hoverbgF="colorPurplishBluebg"
        Logoimage={LogoimageEstate}
      />
    </div>
  );
}

export default RealEstate;
