import React from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import Slide from "../components/Slide";
import LogoimageMachine from "../assets/logo-machinery.png";
import MachinePoster from "../components/MachinePoster";
import MachineImg from "../components/MachineImg";
import imgMachineVideo from "../assets/video_ovr.png";
import LocationMachine from "../components/LocationMachine";
import SlideMachine from "../components/SlideMachine";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import LogoimageMachineWhite from "../assets/ibdiWhite.png";
import MachineSales from "../components/MachineSales";
import ReadBtnMachine from "../components/ReadBtnMachine";
import LatestM from "../components/LatestM";
import MachinerySlider from "../components/MachinerySlider";

function Machine() {
  return (
    <div>
      <HeaderArrage basketColor="#FBDE06" Logoimage={LogoimageMachine} />
      <Header bgColor="#151515" />
      <MachinerySlider />
      <LatestM />
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
