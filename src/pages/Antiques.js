import React from "react";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import LocationArt from "./../components/LocationArt";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-red.png";
import FooterFilterArt from "../components/FooterFilterArt";
import HeaderArrageArt from "../components/HeaderArrageArt";
import LatesAnti from "../components/LatestAnti";
import PosterAntiques from "../components/PosterAntiques";
import SalesAntiques from "../components/SalesAntiques";
import imageAnt from "../assets/culon183.png";
import imagePoster from "../assets/700Vintage.png";
import imgAnt from "../assets/440color.png";

function Antiques() {
  return (
    <div className="container">
      <HeaderArrageArt basketColor="red" Logoimage={Logoimage1} />
      <Header bgColor="red" />
      <LatesAnti textLatest="Jewelry Container" howToused="Current Bid" />
      <PosterAntiques />
      <SalesAntiques
        imagePoster={imgAnt}
        hoveredSales="RedC"
        hoverBGsales="RedCbg"
        imgPoster={imagePoster}
        SalesText="Black Pearl"
        img={imageAnt}
        toolBg="red"
        textPosterCard="WATCHES"
        productCard="Products"
        numberProduct="11"
        productName="Products"
        posterCard="JEWELRY"
        numberPoster="5"
      />
      <LocationArt />
      <FooterTop hoverColor="RedC" GavelColor="red" />
      <FooterAverage GavelColorshop="red" nameAuction="SHOP BY BRAND" />
      <FooterFilterArt bgColor="red" />
      <Footer textH1="#343E47" textColorFB="#343E47" hoverFB="RedC" hoverbgF="RedCbg" Logoimage={Logoimage1} />
    </div>
  );
}

export default Antiques;
