import React from "react";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import LocationAuto from './../components/LocationAuto';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoimageAuto from "../assets/logo-ibid-automotive.png";
import FooterFilter from "../components/FooterFilter";
import HeaderArrage from "../components/HeaderArrage";
import PosterAutomotive from "../components/PosterAutomotive";
import SalesAutomotive from "../components/SalesAutomotive";
import AutomotiveLatest from "../components/AutomotiveLatest";

function Automotive() {
  return (
    <div className="container automark ">
    <HeaderArrage basketColor="#EE964B" Logoimage={LogoimageAuto}/>
    <Header bgColor="#EE964B"/>
    <AutomotiveLatest />
    <PosterAutomotive />
    <SalesAutomotive SalesText="El Camino" hoverTextColor="#EE964B"/>
    <LocationAuto helpGavel="#EE964B"/>
    <FooterTop display={false} hoverColor="colorOrange" GavelColor="#EE964B" />
    <FooterAverage display2={true} GavelColorshop="#EE964B" nameAuction="AUCTIONS BY BRAND" />
    <FooterFilter rounded="45px" mtfooteR="75px" bgColor="#EE964B"  />
    <Footer BtnRadius="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorOrange" hoverbgF="colorOrangebg" Logoimage={LogoimageAuto}/>
  </div>
  )
}

export default Automotive
