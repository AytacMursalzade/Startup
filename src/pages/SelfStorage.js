import React from "react";
import HeaderArrageArt from "../components/HeaderArrageArt";
import Header from "../components/Header";
import LogoimageStorage from "../assets/logo-cattle.png";
import Slide from "../components/Slide";
import LatestAuto from "../components/LatestAuto";
import StorageFlin from "../assets/strageLatest.jpg";
import SalesAntiques from "../components/SalesAntiques";
import imagePosterself from "../assets/householdSelf.jpg";
import imageSelf from "../assets/Storagestore.jpg";
import locationimageSelf from "../assets/locationBlack.png";
import Locationn from "../components/Locationn";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import Mainbottom from "../components/Mainbottom";
import StoragePoster from "../components/StoragePoster";
import imgSelf from "../assets/assortStorage1.jpg";
import image1 from "../assets/earphones.png";
import image2 from "../assets/deliveries_icons.png";
import image3 from "../assets/money_icons.png";
import image4 from "../assets/tracking_icons.png";
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
        Item1="Call Center"
        Item2="Completely synergize"
        Item3="Order Tracking"
        Item4="Objectively emprowered"
        Item5="Fastes Delivery"
        Item6="Efficiently unleash media"
        Item7="Instant Buying"
        Item8="Podcasting Operational"
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
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
