import React from "react";
import Mainbottom from "../../components/Mainbottom";
import MainArravega from "../../components/MainArravega";
import FooterTop from "../../components/FooterTop";
import FooterAverage from "../../components/FooterAverage";
import Hovered from "../../components/Hovered";
import Locationn from "./../../components/Locationn";
import FooterFilter from "../../components/FooterFilter";

function Home() {
  return (
    <>
      <div className="container">
        <Mainbottom />
        <MainArravega />
        <Hovered />
        <Locationn />
        <FooterTop />
        <FooterAverage />
        <FooterFilter />
      </div>
    </>
  );
}

export default Home;
