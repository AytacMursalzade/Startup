import React from "react";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import LocationArt from './../components/LocationArt';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-red.png";
import FooterFilterArt from "../components/FooterFilterArt";
import HeaderArrageArt from "../components/HeaderArrageArt";
import LatesAnti from "../components/LatestAnti";
import PosterAntiques from "../components/PosterAntiques";
import SalesAntiques from "../components/SalesAntiques";

function Antiques() {
  return (
    <div className="container">
    <HeaderArrageArt Logoimage={Logoimage1}/>
    <Header bgColor="red"/>
    <LatesAnti />
    <PosterAntiques />
    <SalesAntiques />
    <LocationArt />
    <FooterTop />
    <FooterAverage />
    <FooterFilterArt bgColor="red"  />
    <Footer Logoimage={Logoimage1}/>
  </div>
  )
}

export default Antiques
