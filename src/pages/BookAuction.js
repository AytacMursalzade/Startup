import React from "react";
import CategoryBookFilter from "../components/CategoryFilter/CategoryBookFilter";
import HeaderBook from "../components/HeaderBook";
import NavbarBook from "../components/NavbarBook";
import Locationn from "../components/Locationn";
import FooterTop from "../components/FooterTop";
import FooterAverage from "../components/FooterAverage";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-ibid.png";
import HoveredBook from "../components/HoveredBook";
import locationimageB from "../assets/contact-us-red.png"
import src from "../assets/logo-white.png";




function BookAuction() {
  return (
    <div>
      <NavbarBook bgColorTop="#CE6723"/>
      <HeaderBook display8={true} display={false} bgColor="#F27928" src={src} basketColor="#F27928" />
      <HoveredBook />
      <CategoryBookFilter />
      <Locationn img={locationimageB} GavellColor="#F27928" inputBg="#F27928"/>
      <FooterTop display={false} hoverColor="colorOrang" GavelColor="#F27928" />
      <FooterAverage GavelColorshop="#F27928" nameAuction="SHOP BY BRAND" />
      <FooterFilter rounded="45px" mtfooteR="75px" bgColor="#F27928" />
      <Footer BtnRadius="45px" ptFtr="50px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorOrang" hoverbgF="colorOrangbg" Logoimage={Logoimage1} />
    </div>
  );
}

export default BookAuction;
