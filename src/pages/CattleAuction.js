import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import LogoimageCattle from "../assets/logo-cattle.png"
import Cattle from "../components/Cattle";
import Mainbottom from "../components/Mainbottom";
import LatestAuto from "../components/LatestAuto";
import art from "../assets/cattleCam.jpg";
import CattlePoster from "../components/CattlePoster";
import SalesCattle from "../components/SalesCattle";
import locationimageCat from "../assets/locationBlack.png"
import Locationn from "../components/Locationn";
import FooterTop from "../components/FooterTop";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-cattle.png"
import image1 from "../assets/earphones.png";
import image2 from "../assets/deliveries_icons.png";
import image3 from "../assets/money_icons.png";
import image4 from "../assets/tracking_icons.png";
import AutoLatest from "../components/AutoLatest";
import CattleFooter from "../components/CattleFooter";
import FilterCatCattle from "../components/FilterCatCattle";

function CattleAuction() {
  return (
    <div className="container">
      <HeaderArrage basketColor="#627452" Logoimage={LogoimageCattle} />
      <Header bgColor="#627452" />
      <Cattle />
      <Mainbottom Item1="Call Center" Item2="Completely synergize" Item3="Order Tracking" Item4="Objectively emprowered" Item5="Fastes Delivery" Item6="Efficiently unleash media" Item7="Instant Buying" Item8="Podcasting Operational" image1={image1} image2={image2} image3={image3} image4={image4} imgColor="#627452"/>
      <AutoLatest />
      <FilterCatCattle />
      <CattlePoster /> 
      <SalesCattle />
      <Locationn img={locationimageCat} GavellColor="#627452" inputBg="#627452"/>
      <CattleFooter />
      <FooterFilter rounded="45px" mtfooteR="75px" bgColor="#627452" />
      <Footer ptFtr="50px" BtnRadius="45px" BrdInput="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorGreenField" hoverbgF="colorGreenFieldbg" Logoimage={Logoimage1} />  
    </div>
  );
}

export default CattleAuction;
