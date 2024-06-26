import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import LogoimageCattle from "../assets/logo-cattle.png"
import Cattle from "../components/Cattle";
import Mainbottom from "../components/Mainbottom";
import CattlePoster from "../components/CattlePoster";
import SalesCattle from "../components/SalesCattle";
import locationimageCat from "../assets/locationBlack.png"
import Locationn from "../components/Locationn";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-cattle.png";
import AutoLatest from "../components/AutoLatest";
import CattleFooter from "../components/CattleFooter";
import FilterCatCattle from "../components/FilterCatCattle";

function CattleAuction() {
  return (
    <div>
      <HeaderArrage basketColor="#627452" Logoimage={LogoimageCattle} />
      <Header bgColor="#627452" />
      <Cattle />
      <Mainbottom imgColor="#627452"/>
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
