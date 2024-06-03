import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import Slide from "../components/Slide";
import LogoimageMachine from "../assets/logo-machinery.png";
import LatestAuto from "../components/LatestAuto";
import MachineLatestnew from "../assets/machinery_products3-400x400.jpg";
import MachinePoster from "../components/MachinePoster";
import TourSales from "../components/TourSales";
import imagePoster4 from "../assets/buldozers.jpg";
import imagePoster3 from "../assets/buldozers.jpg";
import imagePoster from "../assets/craness.jpg";
import imgPoster from "../assets/machinery_products3-400x400 (1).jpg";
import imageTour from "../assets/machinery_products3-400x400 (1).jpg";
import imagePoster5 from "../assets/craness.jpg";
import MachineImg from "../components/MachineImg";
import imgMachineVideo from "../assets/video_ovr.png";
import LocationMachine from "../components/LocationMachine";
import SlideMachine from "../components/SlideMachine";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import LogoimageMachineWhite from "../assets/ibdiWhite.png";
import MachineLatest from "../components/MachineLatest";
import srcLatestOne from "../assets/labLatest.png";
import MachineSales from "../components/MachineSales";
import ReadBtnMachine from "../components/ReadBtnMachine";

function Machine() {
  return (
    <div className="container">
      <HeaderArrage basketColor="#FBDE06" Logoimage={LogoimageMachine} />
      <Header bgColor="#151515" />
      <Slide />
      <LatestAuto
        hoverTextBotm="colorYellow"
        hoverLatest="colorYellowbg"
        OneLatest="LATEST AUCTIONS"
        toolRadius="2px"
        textLatest="CAT Center-Pivot 420"
        art={MachineLatestnew}
        GavelTextColor="#FBDE06"
        tooltipBg="#FBDE06"
        howToused="Starting Bid"
      />
      <MachinePoster />
      <MachineSales toolBg="#FBDE06" hoveredSales="colorYellow" />
      <MachineImg imgMachineVideo={imgMachineVideo} />
      <LocationMachine
        nameAuction="WHERE YOU CAN FIND US?"
        GavelColorshop="colorYellow"
      />
      <SlideMachine />
      <ReadBtnMachine />
      <FooterFilter rounded="45px" bgColor="#FBDE06" />
      <Footer
        
        BtnRadius="45px"
        ptFtr="50px"
        BrdInput="45px"
        textH1="white"
        FooterBG="#1C1F26"
        widthFooter="1897"
        bgFootBtm="#27282A"
        heightFooter="290px"
        textColorFB="white"
        hoverFB="colorYellow"
        hoverbgF="colorYellowbg"
        Logoimage={LogoimageMachineWhite}
      />
    </div>
  );
}

export default Machine;
