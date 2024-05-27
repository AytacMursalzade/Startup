import React from 'react'
import HeaderArrageArt from '../components/HeaderArrageArt'
import Header from '../components/Header'
import Slide  from '../components/Slide'
import LatestAuto from '../components/LatestAuto'
import SalesAntiques from '../components/SalesAntiques'
import Locationn from '../components/Locationn'
import FooterTop from '../components/FooterTop'
import FooterAverage from '../components/FooterAverage'
import FooterFilter from '../components/FooterFilter'
import Footer from '../components/Footer'
import Mainbottom from '../components/Mainbottom'
import LogoimageShop from "../assets/ibidBlueOpen.png"
import locationimageShop from "../assets/locationBlueOpen.png"
import imageShop from "../assets/desktopCount.jpg"
import ShopPoster from '../components/ShopPoster'
import ShopFlin from "../assets/121(1).jpg"


function ShopAuction() {
  return (
    <div className="container">
      <HeaderArrageArt basketColor="#009EA3" Logoimage={LogoimageShop} />
      <Header catStyle="catStyle" bgColor="#009EA3" />
      <Slide />
      <Mainbottom />
      <LatestAuto  displayTool={false} ToolStyleNew={true} hoverTextBotm="colorBlueOpen" toolBg="colorBlueOpenbg" hoverLatest="colorBlueOpenbg" OneLatest="LATEST SALES" toolRadius="9px" textLatest="Dual SIM Smartphone" art={ShopFlin} GavelTextColor="#009EA3" tooltipBg="#009EA3" howToused="$160.00" />
      <ShopPoster />
      <SalesAntiques displayBg={false} display6={false} display7={true} posterCardd="LAPTOPS" numberPosterr="5" productNamee="Products" display5={true} hoveredSales="colorBlueOpen" hoverBGsales="colorBlueOpenbg"  SalesText="Desktop Gamer Las Vegas" img={imageShop} toolBg="#009EA3" textPosterCard="PHONES" productCard="Products" numberProduct="10" productName="Products" posterCard="ELECTRONICS" numberPoster="6"/>
      <Locationn radiusBorder="9px" img={locationimageShop} GavellColor="#009EA3" inputBg="#009EA3"/>
      <FooterTop display={false} hoverColor="colorBlueOpen" LatText1="A Phone Keeps Your" LatestText2="Friend Away" LatestTextp1="Bring to the table win-win survival" LatestTextp2="Strategies to ensure…" GavelColor="#009EA3" />
      <FooterAverage display2={true} GavelColorshop="#009EA3" nameAuction="SHOP BY BRAND" />
      <FooterFilter mtfooteR="75px" rounded="8px"  bgColor="#009EA3"/>
      <Footer ptFtr="50px" BtnRadius="8px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorBlueOpen" hoverbgF="colorBlueOpenbg" Logoimage={LogoimageShop}/>
    </div>
  )
}

export default ShopAuction
