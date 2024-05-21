import React from "react";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import PosterAct from "../components/PosterAct";
import SalesArt from "../components/SalesArt";
import LocationArt from './../components/LocationArt';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-red.png";
import FooterFilterArt from "../components/FooterFilterArt";
import HeaderArrageArt from "../components/HeaderArrageArt";
import LatestArt from "../components/LatestArt";



function ArtAuction() {
  return (
    <div className="container">
      <HeaderArrageArt basketColor="#0543EC" Logoimage={Logoimage1}/>
      <Header bgColor="#0543EC"/>
      <LatestArt />
      <PosterAct />
      <SalesArt />
      <LocationArt helpGavel="#0543EC"/>
      <FooterTop hoverColor="colorBlue" GavelColor="#0543EC"/>
      <FooterAverage GavelColorshop="#0543EC" nameAuction="SHOP BY BRAND"/>
      <FooterFilterArt bgColor="#0543EC"  />
      <Footer textH1="#343E47" textColorFB="#343E47" hoverFB="colorBlue" hoverbgF="colorBluebg" Logoimage={Logoimage1}/>
    </div>
  );
}

export default ArtAuction;
