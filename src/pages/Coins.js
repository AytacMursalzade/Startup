import React from 'react'
import HeaderArrageArt from '../components/HeaderArrageArt'
import Header from '../components/Header'
import LogoimageCoins from "../assets/logo-red.png"
import  Slide  from '../components/Slide'
import LatestAuto from '../components/LatestAuto'
import CoinsFlin from "../assets/coinsone.jpg"
import imageMil from "../assets/coinsone.jpg"
import PosterCoins from '../components/PosterCoins'
import SalesAntiques from '../components/SalesAntiques'
import imagePosterCoin from "../assets/ibid_coins_banner2.jpg"
import imgMil from "../assets/ibid_coin_banner1.jpg"
import locationimageCoins from "../assets/contact-us-red.png"
import Locationn from '../components/Locationn'
import FooterTop from '../components/FooterTop'
import FooterAverage from '../components/FooterAverage'
import FooterFilter from '../components/FooterFilter'
import Footer from '../components/Footer'


function Coins() {
  return (
    <div>
      <HeaderArrageArt  basketColor="#4F89B0" Logoimage={LogoimageCoins}/>
      <Header catStyle="catStyle" bgColor="#4F89B0"/>
      <Slide />
      <LatestAuto hoverTextBotm="colorshipsHarbour" hoverLatest="colorshipsHarbourbg" OneLatest="LATEST AUCTIONS" toolRadius="9px" textLatest="Flintlock action, the 36 1/2in."  art={CoinsFlin} GavelTextColor="#4F89B0" tooltipBg="#4F89B0" howToused="Current Bid" />
      <PosterCoins />
      <SalesAntiques imagePoster={imgMil} hoveredSales="colorshipsHarbour" hoverBGsales="colorshipsHarbourbg" imgPoster={imagePosterCoin} SalesText="Roman & Byzantine Coin" img={imageMil} toolBg="#4F89B0" textPosterCard="ANCIENT" productCard="Collections" numberProduct="5" productName="Collections" posterCard="SILVER" numberPoster="4"/>
      <Locationn radiusBorder="9px" img={locationimageCoins} GavellColor="#4F89B0" inputBg="#4F89B0"/>
      <FooterTop hoverColor="colorshipsHarbour" LatText1="A Phone keeps Your" LatestText2="Friends away" LatestTextp1="Bring to the table win-win survival" LatestTextp2="Strategies to ensure…" GavelColor="#4F89B0" />
      <FooterAverage GavelColorshop="#4F89B0" nameAuction="SHOP BY BRAND" />
      <FooterFilter rounded="9px"  bgColor="#4F89B0"/>
      <Footer textH1="#343E47" hoverFB="colorshipsHarbour" textColorFB="#343E47" hoverbgF="colorshipsHarbourbg" Logoimage={LogoimageCoins}/>
    </div>
  )
}

export default Coins
