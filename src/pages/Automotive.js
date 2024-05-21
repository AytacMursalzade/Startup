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
import artAuto from "../assets/Automotive.jpg"

function Automotive() {
  return (
    <div className="container automark ">
    <HeaderArrage basketColor="#EE964B" Logoimage={LogoimageAuto}/>
    <Header bgColor="#EE964B"/>
    <LatestAuto hoverTextBotm="colorOrange" hoverLatest="colorOrangebg" OneLatest="LATEST AUCTIONS" toolRadius="50%" textLatest="Orange Fiat 500" art={artAuto} GavelTextColor="#EE964B" tooltipBg="#EE964B" howToused="Current Bid" />
    <PosterAutomotive />
    <SalesAutomotive SalesText="El Camino" hoverTextColor="#EE964B"/>
    <LocationAuto helpGavel="#EE964B"/>
    <FooterTop hoverColor="colorOrange" GavelColor="#EE964B" />
    <FooterAverage GavelColorshop="#EE964B" nameAuction="AUCTIONS BY BRAND" />
    <FooterFilter bgColor="#EE964B"  />
    <Footer textH1="#343E47" textColorFB="#343E47" hoverFB="colorOrange" hoverbgF="colorOrangebg" Logoimage={LogoimageAuto}/>
  </div>
  )
}

export default Automotive
