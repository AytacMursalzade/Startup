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

function CattleAuction() {
  return (
    <div className="container">
      <HeaderArrage basketColor="#627452" Logoimage={LogoimageCattle} />
      <Header bgColor="#627452" />
      <Cattle />
      <Mainbottom imgColor="#627452"/>
      <LatestAuto hoverTextBotm="colorGreenField" hoverLatest="colorGreenFieldbg" OneLatest="LATEST AUCTIONS" toolRadius="50%" textLatest="Herd Bull Punch P007" art={art} GavelTextColor="#627452" tooltipBg="#627452" howToused="Current Bid" />
      <CattlePoster /> 
      <SalesCattle SalesText="Old English Game Lod #788"/>
      <Locationn img={locationimageCat} GavellColor="#627452" inputBg="#627452"/>
      <FooterTop display={false} hoverColor="colorGreenField" LatText1="How rotational grazing" LatestText2="helps in a drought" LatestTextp1="Bring to the table win-win survival" LatestTextp2="Strategies to..."  GavelColor="#627452" />
      <FooterFilter rounded="45px" mtfooteR="75px" bgColor="#627452" />
      <Footer ptFtr="50px" BtnRadius="45px" BrdInput="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorGreenField" hoverbgF="colorGreenFieldbg" Logoimage={Logoimage1} />  
    </div>
  );
}

export default CattleAuction;
