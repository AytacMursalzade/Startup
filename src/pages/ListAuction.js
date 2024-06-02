import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import LogoListimage from "../assets/list-logo.png";
import ListHeader from "../components/ListHeader";
import ListSlider from "../components/ListSlider";
import Mainbottom from "../components/Mainbottom";
import image1 from "../assets/listItem1.png";
import image2 from "../assets/listItem2.png";
import image3 from "../assets/listItem3.png";
import image4 from "../assets/listItem4.png";
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
      <Mainbottom Item1="Call Center" Item2="Completely synergize" Item3="Order Tracking" Item4="Objectively emprowered" Item5="Fastes Delivery" Item6="Efficiently unleash media" Item7="Instant Buying" Item8="Podcasting Operational" mtTop="30px" colorP="#606060" colorH="#343e47" image1={image1} image2={image2} image3={image3} image4={image4}/>
      <ListPoster />
      <ListCat />
      <ListFinish />
      <FooterFilter rounded="45px" mtfooteR="75px" bgColor="#392061" />
      <Footer ptFtr="50px" BtnRadius="45px" BrdInput="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="list" hoverbgF="listbg" Logoimage={LogoimageList} />  
    </div>
  );
}

export default ListAuction;
