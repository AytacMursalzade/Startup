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
      <HeaderArrageArt Logoimage={Logoimage1}/>
      <Header bgColor="#0543EC"/>
      <LatestArt />
      <PosterAct />
      <SalesArt />
      <LocationArt />
      <FooterTop />
      <FooterAverage />
      <FooterFilterArt bgColor="#0543EC"  />
      <Footer Logoimage={Logoimage1}/>
    </div>
  );
}

export default ArtAuction;
