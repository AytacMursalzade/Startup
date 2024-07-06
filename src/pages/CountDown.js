import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import LogoCount from "../assets/logo-red.png";
import Mainbottom from "../components/Mainbottom";
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
import CountLatest from "../components/CountLatest";
import CountDownSlider from "../components/CountDownSlider";

function CountDown() {
  return (
    <div>
      <HeaderArrage basketColor="#EA3546" Logoimage={LogoCount} />
      <Header bgColor="#EA3546" />
      <CountDownSlider />
      <Mainbottom
       
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
