import React from "react";
import HeaderArrageArt from "../components/HeaderArrageArt";
import Header from "../components/Header";
import LogoimageMil from "../assets/logo-militaria.png";
import MilImg from "../components/MilImg";
import Mainbottom from "../components/Mainbottom";
import MilPoster from "../components/MilPoster";
import imagePosterMil from "../assets/Militaria-banners420.jpg";
import locationimageMil from "../assets/MilitariaLocation.png";
import Locationn from "../components/Locationn";
import FooterFilterArt from "../components/FooterFilterArt";
import Footer from "../components/Footer";
import imgMil from "../assets/Militaria-banner2.png";
import image1 from "../assets/earphones.png";
import image2 from "../assets/deliveries_icons.png";
import image3 from "../assets/money_icons.png";
import image4 from "../assets/tracking_icons.png";
import LatestMilitaria from "../components/LatestMilitaria";
import Filtermilitaria from './../components/Filtermilitaria';
import MilSales from "../components/MilSales";
import Miltopfooter from "../components/Miltopfooter";

function Militaria() {
  return (
    <div className="container">
      <HeaderArrageArt basketColor="#5E3217" Logoimage={LogoimageMil} />
      <Header catStyle="catStyle" bgColor="#5E3217" />
      <MilImg />
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
      />
      <LatestMilitaria />
      <Filtermilitaria />
      <MilPoster />
      <MilSales
        display5={true}
        imagePoster={imgMil}
        hoveredSales="colorBakersChocolate"
        hoverBGsales="colorBakersChocolatebg"
        imgPoster={imagePosterMil}
        toolBg="#5E3217"
        textPosterCard="DAGGERS"
        productCard="Products"
        numberProduct="4"
        productName="Products"
        posterCard="UNIFORMS"
        numberPoster="4"
      />
      <Locationn
        img={locationimageMil}
        GavellColor="#5E3217"
        mtLocation="15px"
        inputBg="#5E3217"
      />
      <Miltopfooter
        hoverColor="colorBakersChocolate"
      />
      <FooterFilterArt bgColor="#5E3217" />
      <Footer
        ftrM="20px"
        BtnRadius="9px"
        lastftrM="40px"
        textH1="#343E47"
        textColorFB="#343E47"
        hoverFB="colorBakersChocolate"
        hoverbgF="colorBakersChocolatebg"
        Logoimage={LogoimageMil}
      />
    </div>
  );
}

export default Militaria;
