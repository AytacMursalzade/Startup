import React from "react";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import LocationAuto from './../components/LocationAuto';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoimageAuto from "../assets/logo-ibid-automotive.png";
import FooterFilter from "../components/FooterFilter";
import HeaderArrage from "../components/HeaderArrage";
import LatestAuto from "../components/LatestAuto";
import PosterAutomotive from "../components/PosterAutomotive";
import SalesAutomotive from "../components/SalesAutomotive";


function Automotive() {
  return (
    <div className="container automark ">
    <HeaderArrage BasketColor="#EE964B" Logoimage={LogoimageAuto}/>
    <Header bgColor="#EE964B"/>
    <LatestAuto textLatest="Orange Fiat 500" howToused="Current Bid" />
    <PosterAutomotive />
    <SalesAutomotive SalesText="El Camino"/>
    <LocationAuto helpGavel="#EE964B"/>
    <FooterTop GavelColor="#EE964B" />
    <FooterAverage GavelColorshop="#EE964B" nameAuction="AUCTIONS BY BRAND" />
    <FooterFilter bgColor="#EE964B"  />
    <Footer Logoimage={LogoimageAuto}/>
  </div>
  )
}

export default Automotive
