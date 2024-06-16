import React from "react";
import NavbarBook from "../components/NavbarBook";
import HeaderBook from "../components/HeaderBook";
import DomainImg from "../assets/DomainLogo.png";
import DomainSlide from "../components/DomainSlide";
import DomainImgSlide from "../assets/ourCruises.jpg";
import LatestDomain from "../components/LatestDomain";
import DomainSlideShow from "../components/DomainSlideShow";
import DomainList from "../components/DomainList";
import DomainSlideBtm from "../components/DomainSlideBtm";
import DomainSlide2Img from "../assets/DomainSlide2.jpg";
import DomainTable from "../components/DomainTable";
import Footer from "../components/Footer";
import DomainImgBtm from "../assets/DomainVtmLogo.png";
import DomainRead from "../components/DomainRead";
import FooterFilter from "../components/FooterFilter";

function Domain() {
  return (
    <div>
      <NavbarBook bgColorTop="#00886D" />
      <HeaderBook
        display8={false}
        display9={true}
        bgColor="#18AE91"
        src={DomainImg}
        basketColor="#18AE91"
      />
      <DomainSlide DomainImgSlide={DomainImgSlide} />
      <LatestDomain />
      <DomainSlideShow />
      <DomainList />
      <DomainSlideBtm DomainSlide2Img={DomainSlide2Img} />
      <DomainTable />
      <DomainRead display1={true} display2={false} btnColor="bg-[#18AE91]" />
      <FooterFilter mtfooteR="75px" rounded="45px" bgColor="#18AE91" />
      <Footer
       
        BtnRadius="45px"
        ptFtr="20px"
        BrdInput="45px"
        textH1="white"
        FooterBG="#442244"
        widthFooter="1897"
        bgFootBtm="#321A32"
        heightFooter="280px"
        textColorFB="white"
        hoverFB="colorDomain"
        hoverbgF="colorDomainbg"
        Logoimage={DomainImgBtm}
      />
    </div>
  );
}

export default Domain;
