import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-ibid.png";
import ShopTop from "../components/ShopTop";
import SalesHome from "./SalesHome";

function BestSelling() {
  return (
    <div className="container">
      <HeaderArrage basketColor="#0543EC" Logoimage={Logoimage1} />
      <Header bgColor="#2695FF" />
      <ShopTop title="Shop" paragraph="Best Selling Products" description="Best Selling Products"/>
      <SalesHome />
      <FooterFilter mtfooteR="75px" rounded="45px" bgColor="#2695FF" />
      <Footer
        ptFtr="50px"
        BtnRadius="45px"
        lastftrM="70px"
        textH1="#343E47"
        textColorFB="#343E47"
        hoverFB="colorBlue"
        hoverbgF="colorBluebg"
        Logoimage={Logoimage1}
      />
    </div>
  )
}

export default BestSelling
