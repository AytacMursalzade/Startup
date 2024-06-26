import React from "react";
import HeaderArrageArt from "../components/HeaderArrageArt";
import Header from "../components/Header";
import LogoimageCoins from "../assets/logo-red.png";
import Slide from "../components/Slide";
import PosterCoins from "../components/PosterCoins";
import locationimageCoins from "../assets/contact-us-red.png";
import Locationn from "../components/Locationn";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import LatestCoins from "../components/LatestCoins";
import SalesCoins from "../components/SalesCoins";

function Coins() {
  return (
    <div>
      <HeaderArrageArt basketColor="#4F89B0" Logoimage={LogoimageCoins} />
      <Header catStyle="catStyle" bgColor="#4F89B0" />
      <Slide />
      <LatestCoins />
      <PosterCoins />
      <SalesCoins/>
      <Locationn
        radiusBorder="9px"
        img={locationimageCoins}
        GavellColor="#4F89B0"
        inputBg="#4F89B0"
      />
      <FooterTop
     
        hoverColor="colorshipsHarbour"
        
      />
      <FooterAverage display2={true} GavelColorshop="#4F89B0" nameAuction="SHOP BY BRAND" />
      <FooterFilter mtfooteR="75px" rounded="9px" bgColor="#4F89B0" />
      <Footer
        ptFtr="50px"
        BtnRadius="9px"
        lastftrM="70px"
        textH1="#343E47"
        hoverFB="colorshipsHarbour"
        textColorFB="#343E47"
        hoverbgF="colorshipsHarbourbg"
        Logoimage={LogoimageCoins}
      />
    </div>
  );
}

export default Coins;
