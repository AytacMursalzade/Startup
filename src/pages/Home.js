import React from "react";
import Mainbottom from "../components/Mainbottom";
import MainArravega from "../components/MainArravega";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import Hovered from "../components/Hovered";
import FooterFilter from "../components/FooterFilter";
import Salespart from "../components/SalesPart";
import Locationn from "../components/Locationn";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderArrage from "../components/HeaderArrage";
import Logoimage1 from "../assets/logo-ibid.png";
import  Slide  from "../components/Slide";
import imageHomeLoc from "../assets/location.png"


function Home() {
  return (
    <>
      <div className="container">
        <HeaderArrage basketColor="#0543EC" Logoimage={Logoimage1}/>
        <Header bgColor="#2695FF"/>
        <Slide />
        <Mainbottom mtTop="30px" colorP="#606060" colorH="#343e47"/>
        <MainArravega />
        <Hovered />
        <Salespart />
        <Locationn radiusBorder="45px" img={imageHomeLoc} GavellColor="#2695FF"  inputBg="#2695FF"/>
        <FooterTop display={false} hoverColor="colorBlue" LatText1="A Phone keeps Your" LatestText2="Friends away" LatestTextp1="Bring to the table win-win survival" LatestTextp2="Strategies to ensure…" GavelColor="#2695FF" />
        <FooterAverage GavelColorshop="#2695FF" nameAuction="SHOP BY BRAND" />
        <FooterFilter mtfooteR="75px" rounded="45px" bgColor="#2695FF"/>
        <Footer ptFtr="50px" BtnRadius="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorBlue" hoverbgF="colorBluebg" Logoimage={Logoimage1}/>
      </div>
    </>
  );
}

export default Home;
