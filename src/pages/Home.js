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
        <Mainbottom />
        <MainArravega />
        <Hovered />
        <Salespart />
        <Locationn radiusBorder="45px" img={imageHomeLoc} GavellColor="#2695FF"  inputBg="#2695FF"/>
        <FooterTop hoverText="#2695FF" LatText1="A Phone keeps Your" LatestText2="Friends away" LatestTextp1="Bring to the table win-win survival" LatestTextp2="Strategies to ensure…" GavelColor="#2695FF" />
        <FooterAverage GavelColorshop="#2695FF" nameAuction="SHOP BY BRAND" />
        <FooterFilter rounded="45px" bgColor="#2695FF"/>
        <Footer Logoimage={Logoimage1}/>
      </div>
    </>
  );
}

export default Home;
