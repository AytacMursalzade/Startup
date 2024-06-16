import React from "react";
import HeaderArrageArt from "../components/HeaderArrageArt";
import Header from "../components/Header";
import LogoimageStorage from "../assets/logo-cattle.png";
import Slide from "../components/Slide";
import imagePosterself from "../assets/householdSelf.jpg";
import locationimageSelf from "../assets/locationBlack.png";
import Locationn from "../components/Locationn";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import Mainbottom from "../components/Mainbottom";
import StoragePoster from "../components/StoragePoster";
import imgSelf from "../assets/assortStorage1.jpg";
import SelfLatest from "../components/SelfLatest";
import LatestSelf from "../components/LatestSelf";
import SelfFooter from "../components/SelfFooter";

function SelfStorage() {
  return (
    <div className="container">
      <HeaderArrageArt basketColor="#414144" Logoimage={LogoimageStorage} />
      <Header catStyle="catStyle" bgColor="#414144" />
      <Slide />
      <Mainbottom
        
      />
      <LatestSelf />
      <StoragePoster />
      <SelfLatest
        display5={true}
        imagePoster={imgSelf}
        hoveredSales="colorBluishBlack"
        hoverBGsales="colorBluishBlackbg"
        imgPoster={imagePosterself}
        toolBg="#414144"
        textPosterCard="HOUSEHOLD"
        productCard="Collections"
        numberProduct="4"
        productName="Storages"
        posterCard="SILVER"
        numberPoster="4"
      />
      <Locationn
        radiusBorder="9px"
        img={locationimageSelf}
        GavellColor="#414144"
        inputBg="#414144"
      />
      <SelfFooter hoverColor="colorBluishBlack" />
      <FooterFilter mtfooteR="75px" rounded="9px" bgColor="#414144" />
      <Footer
        ptFtr="50px"
        BtnRadius="9px"
        lastftrM="70px"
        textH1="#343E47"
        textColorFB="#343E47"
        hoverFB="colorBluishBlack"
        hoverbgF="colorBluishBlackbg"
        Logoimage={LogoimageStorage}
      />
    </div>
  );
}

export default SelfStorage;
