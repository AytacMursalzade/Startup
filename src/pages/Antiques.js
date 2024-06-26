import React from "react";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import locationimageSelf from "../assets/locationRed.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-red.png";
import FooterFilterArt from "../components/FooterFilterArt";
import HeaderArrageArt from "../components/HeaderArrageArt";
import LatesAnti from "../components/LatestAnti";
import PosterAntiques from "../components/PosterAntiques";
import SalesAntiques from "../components/SalesAntiques";
import imgPoster from "../assets/700Vintage.png";
import imagePoster from "../assets/440color.png";
import Locationn from "../components/Locationn";

function Antiques() {
  return (
    <div>
      <HeaderArrageArt basketColor="#BE263F" Logoimage={Logoimage1} />
      <Header bgColor="#BE263F" />
      <LatesAnti />
      <PosterAntiques />
      <SalesAntiques
        display5={true}
        imagePoster={imagePoster}
        hoveredSales="RedC"
        hoverBGsales="RedCbg"
        imgPoster={imgPoster}
        toolBg="#BE263F"
        textPosterCard="WATCHES"
        productCard="Products"
        numberProduct="11"
        productName="Products"
        posterCard="JEWELRY"
        numberPoster="5"
      />
      <Locationn
        radiusBorder="9px"
        img={locationimageSelf}
        GavellColor="#BE263F"
        inputBg="#BE263F"
      />
      <FooterTop display={false} hoverColor="RedC" GavelColor="red" />
      <FooterAverage
        GavelColorshop="#BE263F"
        display2={true}
        nameAuction="SHOP BY BRAND"
      />
      <FooterFilterArt bgColor="#BE263F" />
      <Footer
        BtnRadius="8px"
        lastftrM="70px"
        textH1="#343E47"
        textColorFB="#343E47"
        hoverFB="RedC"
        hoverbgF="RedCbg"
        Logoimage={Logoimage1}
      />
    </div>
  );
}

export default Antiques;
