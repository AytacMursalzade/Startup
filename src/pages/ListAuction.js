import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import LogoListimage from "../assets/list-logo.png";
import ListHeader from "../components/ListHeader";
import ListSlider from "../components/ListSlider";
import Mainbottom from "../components/Mainbottom";
import ListPoster from "../components/ListPoster";
import ListCat from "../components/ListCat";
import ListFinish from "../components/ListFinish";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import LogoimageList from "../assets/logo-ibid-automotive.png";


function ListAuction() {
  return (
    <div className="container">
      <HeaderArrage basketColor="#392061" Logoimage={LogoListimage} />
      <ListHeader />
      <ListSlider />
      <Mainbottom  mtTop="30px" colorP="#606060" colorH="#343e47" />
      <ListPoster />
      <ListCat />
      <ListFinish hoverColor="list"/>
      <FooterFilter rounded="45px" mtfooteR="75px" bgColor="#392061" />
      <Footer ptFtr="50px" BtnRadius="45px" BrdInput="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="list" hoverbgF="listbg" Logoimage={LogoimageList} />  
    </div>
  );
}

export default ListAuction;
