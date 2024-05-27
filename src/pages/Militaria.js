import React from 'react'
import HeaderArrageArt from '../components/HeaderArrageArt'
import Header from '../components/Header'
import LogoimageMil from "../assets/logo-militaria.png"
import MilImg from '../components/MilImg'
import Mainbottom from '../components/Mainbottom'
import LatestAuto from '../components/LatestAuto'
import militariaFlin from "../assets/Militaria-prod.jpg"
import MilPoster from '../components/MilPoster'
import SalesAntiques from '../components/SalesAntiques'
import imageMil from "../assets/Militaria-prod1244.jpg"
import imagePosterMil from "../assets/Militaria-banners420.jpg"
import locationimageMil from "../assets/MilitariaLocation.png"
import Locationn from '../components/Locationn'
import FooterTop from '../components/FooterTop'
import FooterFilterArt from '../components/FooterFilterArt'
import Footer from '../components/Footer'
import imgMil from "../assets/Militaria-banner2.png"

function Militaria() {
  return (
    <div className='container'>
      <HeaderArrageArt  basketColor="#5E3217" Logoimage={LogoimageMil}/>
      <Header catStyle="catStyle" bgColor="#5E3217"/>
      <MilImg />
      <Mainbottom />
      <LatestAuto hoverTextBotm="colorBakersChocolate" hoverLatest="colorBakersChocolatebg" OneLatest="LATEST AUCTIONS" toolRadius="9px" textLatest="Flintlock action, the 36 1/2in." textLatest1="barrel" art={militariaFlin} GavelTextColor="#5E3217" tooltipBg="#5E3217" howToused="Current Bid" />
      <MilPoster /> 
      <SalesAntiques display5={true} imagePoster={imgMil} hoveredSales="colorBakersChocolate" hoverBGsales="colorBakersChocolatebg" imgPoster={imagePosterMil} SalesText="Africa Star with North Africa 1942-43 clasp and Defence" img={imageMil} toolBg="#5E3217" textPosterCard="DAGGERS" productCard="Products" numberProduct="4" productName="Products" posterCard="UNIFORMS" numberPoster="4"/>
      <Locationn img={locationimageMil} GavellColor="#5E3217" mtLocation="15px" inputBg="#5E3217"/>
      <FooterTop display={false} hoverColor="colorBakersChocolate" LatText1="The British Sea Service" LatestText2="Pistol" LatestTextp1="Bring to the table win-win survival" LatestTextp2="Strategies to ensure..."  GavelColor="#5E3217" />
      <FooterFilterArt bgColor="#5E3217" />
      <Footer BtnRadius="9px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="colorBakersChocolate" hoverbgF="colorBakersChocolatebg" Logoimage={LogoimageMil} />
    </div>
  )
}

export default Militaria
