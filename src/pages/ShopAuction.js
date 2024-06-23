import React from "react";
import HeaderArrageArt from "../components/HeaderArrageArt";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Locationn from "../components/Locationn";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import LogoimageShop from "../assets/ibidBlueOpen.png";
import locationimageShop from "../assets/locationBlueOpen.png";
import ShopPoster from "../components/ShopPoster";
import ShopSales from "../components/ShopSales";
import ShopLatest from "../components/ShopLatest";

function ShopAuction() {
  return (
    <div className="container">
      <HeaderArrageArt basketColor="#009EA3" Logoimage={LogoimageShop} />
      <Header catStyle="catStyle" bgColor="#009EA3" />
      <Slide />
      <ShopLatest />
      <ShopPoster />
      <ShopSales />
      <Locationn
        radiusBorder="9px"
        img={locationimageShop}
        GavellColor="#009EA3"
        inputBg="#009EA3"
      />
      <FooterTop
        hoverColor="colorBlueOpen"
      />
      <FooterAverage
        display2={true}
        GavelColorshop="#009EA3"
        nameAuction="SHOP BY BRAND"
      />
      <FooterFilter mtfooteR="75px" rounded="8px" bgColor="#009EA3" />
      <Footer
        ptFtr="50px"
        BtnRadius="8px"
        lastftrM="70px"
        textH1="#343E47"
        textColorFB="#343E47"
        hoverFB="colorBlueOpen"
        hoverbgF="colorBlueOpenbg"
        Logoimage={LogoimageShop}
      />
    </div>
  );
}

export default ShopAuction;
