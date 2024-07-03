import React, { useEffect } from "react";
import HeaderArrage from "../components/HeaderArrage";
import Header from "../components/Header";
import FooterFilter from "../components/FooterFilter";
import Footer from "../components/Footer";
import Logoimage1 from "../assets/logo-ibid.png";
import ShopTop from "../components/ShopTop";
import AccordionData from "../components/AccordionData";
import GrisSystem from "../components/GrisSystem";
import CountersShort from "../components/CountersShort";
import PieChart from "../components/PieChart";
import PricingTables from "../components/PricingTables";
import ServicesTable from "../components/ServicesTable";
import BarTables from "../components/BarTables";
import MemberSlide from "../components/MemberSlide";
import ShopShort from "../components/ShopShort";
import TerminalSlider from "../components/TerminalSlider";
import { useLocation } from "react-router-dom";

function Shortcodes() {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.getElementById(pathname.replace("/shortcodes/", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="container">
      <HeaderArrage basketColor="#0543EC" Logoimage={Logoimage1} />
      <Header bgColor="#2695FF" />
      <ShopTop title="Shop" paragraph="Shortcodes" description="Shortcodes" />

     
      <div id="accordion">
        <AccordionData />
      </div>
      <div id="pricingtables">
        <PricingTables />
      </div>
      <div id="clientsgrid">
        <GrisSystem />
      </div>
      <div id="counters">
        <CountersShort />
      </div>
      <div id="piecharts">
        <PieChart />
      </div>
      <div id="services">
        <ServicesTable />
      </div>
      <div id="bars">
        <BarTables />
      </div>
      <div id="members">
        <MemberSlide />
      </div>
      <div id="testimonials">
        <TerminalSlider />
      </div>
      <div id="shopfeature">
        <ShopShort />
      </div>

      <FooterFilter mtfooteR="75px" rounded="45px" bgColor="#2695FF" />
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

export default Shortcodes;
