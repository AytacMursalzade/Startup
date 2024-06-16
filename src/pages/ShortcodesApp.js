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
        <Route path="/shortcodes/*" element={<Shortcodes />}>
          <Route path="pricingtables" element={<PricingTables />} />
          <Route path="accordion" element={<AccordionData />} />
          <Route path="clientsgrid" element={<GrisSystem />} />
          <Route path="counters" element={<CountersShort />} />
          <Route path="piecharts" element={<PieChart />} />
          <Route path="services" element={<ServicesTable />} />
          <Route path="bars" element={<BarTables />} />
          <Route path="members" element={<MemberSlide />} />
          <Route path="testimonials" element={<TerminalSlider />} />
          <Route path="shopfeature" element={<ShopShort />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default ShortcodesApp;
