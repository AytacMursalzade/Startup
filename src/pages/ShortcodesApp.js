import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shortcodes from "../pages/Shortcodes";
import PricingTables from "../components/PricingTables";
import AccordionData from "../components/AccordionData";
import GrisSystem from "../components/GrisSystem";
import CountersShort from "../components/CountersShort";
import PieChart from "../components/PieChart";
import ServicesTable from "../components/ServicesTable";
import BarTables from "../components/BarTables";
import MemberSlide from "../components/MemberSlide";
import ShopShort from "../components/ShopShort";
import TerminalSlider from "../components/TerminalSlider";

function ShortcodesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/shortcodes/*" element={<Shortcodes />} />
        <Route path="/shortcodes/pricingtables" element={<PricingTables />} />
        <Route path="/shortcodes/accordion" element={<AccordionData />} />
        <Route path="/shortcodes/clientsgrid" element={<GrisSystem />} />
        <Route path="/shortcodes/counters" element={<CountersShort />} />
        <Route path="/shortcodes/piecharts" element={<PieChart />} />
        <Route path="/shortcodes/services" element={<ServicesTable />} />
        <Route path="/shortcodes/bars" element={<BarTables />} />
        <Route path="/shortcodes/members" element={<MemberSlide />} />
        <Route path="/shortcodes/testimonials" element={<TerminalSlider />} />
        <Route path="/shortcodes/shopfeature" element={<ShopShort />} />
      </Routes>
    </Router>
  );
}

export default ShortcodesApp;
