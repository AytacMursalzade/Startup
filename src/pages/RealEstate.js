import React from "react";
import HeaderArrageArt from "../components/HeaderArrageArt";
import Header from "../components/Header";
import LogoimageEstate from "../assets/realestate.png";
import Slide from "../components/Slide";
import LatestAuto from "../components/LatestAuto";
import locationimageSelf from "../assets/location.png";
import Locationn from "../components/Locationn";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import RealEstatePoster from "../components/RealStatePoster";
import RealSales from "../components/RealSales";

function RealEstate() {
  return (
    <div>
      <HeaderArrageArt basketColor="#6449E7" Logoimage={LogoimageEstate} />
      <Header catStyle="catStyle" bgColor="#6449E7" />
      <Slide />
      <LatestAuto/>
      <RealEstatePoster />
      <RealSales />
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
