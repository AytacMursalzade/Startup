import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import Slide from "../components/Slide";
import LogoCount from "../assets/logo-red.png";
import Mainbottom from "../components/Mainbottom";
import TourSales from "../components/TourSales";
import imageCount from "../assets/desktopCount.jpg";
import CountImg from "../components/CountImg";
import FooterTop from "../components/FooterTop";
import Hovered from "../components/Hovered";
import FooterAverage from "../components/FooterAverage";
import locationimageCount from "../assets/location.png";
import Locationn from "../components/Locationn";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import LogoCountBlue from "../assets/logo-ibid.png";
import CountClock from "../components/CountClock";
import CountSoon from "../components/CountSoon";
import image1 from "../assets/earphones.png";
import image2 from "../assets/deliveries_icons.png";
import image3 from "../assets/money_icons.png";
import image4 from "../assets/tracking_icons.png";
import CountLatest from "../components/CountLatest";

function CountDown() {
  return (
    <div className="container">
      <HeaderArrage basketColor="#EA3546" Logoimage={LogoCount} />
      <Header bgColor="#EA3546" />
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
        colorP="#606060"
        colorH="#343e47"
      />
      <CountSoon hoverBGsales="RedCbg" />
      <CountLatest hoveredSales="RedC" hoverBGsales="RedCbg" />
      <CountImg />
      <FooterTop hoverColor="RedC" GavelColor="#EA3546" />
      <Hovered />
      <FooterAverage display2={false} />
      <CountClock />
      <Locationn
        radiusBorder="45px"
        img={locationimageCount}
        GavellColor="#EA3546"
        inputBg="#EA3546"
      />
      <FooterFilter mtfooteR="75px" rounded="45px" bgColor="#EA3546" />
      <Footer
        ptFtr="50px"
        BtnRadius="45px"
        lastftrM="70px"
        textH1="#343E47"
        textColorFB="#343E47"
        hoverFB="RedC"
        hoverbgF="RedCbg"
        Logoimage={LogoCountBlue}
      />
    </div>
  );
}

export default CountDown;
