import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-ibid.png";
import ShopTop from "../components/ShopTop";
import SinglePage from "../components/SinglePage";
import SingleProductsMap from "../components/SingleProductsMap";
import SingleMap from "../components/SingleMap";

function SinglePages() {
  return (
    <div className="container">
      <HeaderArrage basketColor="#0543EC" Logoimage={Logoimage1} />
      <Header bgColor="#2695FF" />
      <ShopTop
        display1={true}
        watched="1.046 views"
        title1="Phones"
        title2="Cases & Protection"
        title="Products"
        paragraph="Space Grey 64GB Phone"
        description="Space Grey 64GB Phone"
      />
      <SinglePage />
      <SingleProductsMap />
      <SingleMap />
      <FooterFilter mtfooteR="220px" rounded="45px" bgColor="#2695FF" />
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
  );
}

export default SinglePages;
