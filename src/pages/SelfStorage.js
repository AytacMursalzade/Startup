import React from 'react'
import HeaderArrageArt from '../components/HeaderArrageArt'
import Header from '../components/Header'
import LogoimageStorage from "../assets/logo-cattle.png"
import  Slide  from '../components/Slide'
import LatestAuto from '../components/LatestAuto'
import StorageFlin from "../assets/strageLatest.jpg"
import SalesAntiques from '../components/SalesAntiques'
import imagePosterself from "../assets/householdSelf.jpg"
import imageSelf from "../assets/Storagestore.jpg"
import locationimageSelf from "../assets/locationBlack.png"
import Locationn from '../components/Locationn'
import FooterTop from '../components/FooterTop'
import FooterAverage from '../components/FooterAverage'
import FooterFilter from '../components/FooterFilter'
import Footer from '../components/Footer'
import Mainbottom from '../components/Mainbottom'
import StoragePoster from '../components/StoragePoster'
import imgSelf from "../assets/assortStorage1.jpg"

function SelfStorage() {
  return (
    <div className="container">
      <HeaderArrageArt basketColor="#414144" Logoimage={LogoimageStorage} />
      <Header catStyle="catStyle" bgColor="#414144" />
      <Slide />
      <Mainbottom />
      <LatestAuto hoverTextBotm="colorBluishBlack" hoverLatest="colorBluishBlackbg" OneLatest="LATEST AUCTIONS" toolRadius="9px" textLatest="iStorage Reading" art={StorageFlin} GavelTextColor="#414144" tooltipBg="#414144" howToused="Starting Bid" />
      <StoragePoster />
      <SalesAntiques display5={true} imagePoster={imgSelf} hoveredSales="colorBluishBlack" hoverBGsales="colorBluishBlackbg" imgPoster={imagePosterself} SalesText="Storage 4 Less" img={imageSelf} toolBg="#414144" textPosterCard="HOUSEHOLD" productCard="Collections" numberProduct="4" productName="Storages" posterCard="SILVER" numberPoster="4"/>
      <Locationn radiusBorder="9px" img={locationimageSelf} GavellColor="#414144" inputBg="#414144"/>
      <FooterTop display={false} hoverColor="colorBluishBlack" LatText1="How to Move Out of a" LatestText2="Storage Unit" LatestTextp1="Bring to the table win-win survival" LatestTextp2="Strategies to ensure…" GavelColor="#414144" />
      <FooterAverage GavelColorshop="#414144" nameAuction="LATEST NEWS" />
      <FooterFilter mtfooteR="75px" rounded="9px"  bgColor="#414144"/>
      <Footer ptFtr="50px" BtnRadius="9px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorBluishBlack" hoverbgF="colorBluishBlackbg" Logoimage={LogoimageStorage}/>
    </div>
  );
}

export default SelfStorage;
