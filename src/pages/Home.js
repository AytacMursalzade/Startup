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


function Home() {
  return (
    <>
      <div className="container">
        <HeaderArrage BasketColor="#0543EC" Logoimage={Logoimage1}/>
        <Header bgColor="#2695FF"/>
        <Mainbottom />
        <MainArravega />
        <Hovered />
        <Salespart />
        <Locationn />
        <FooterTop GavelColor="#2695FF" />
        <FooterAverage GavelColorshop="#2695FF" nameAuction="SHOP BY BRAND" />
        <FooterFilter  bgColor="#2695FF"/>
        <Footer Logoimage={Logoimage1}/>
      </div>
    </>
  );
}

export default Home;
