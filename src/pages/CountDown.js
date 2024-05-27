import React from 'react'
import HeaderArrage from '../components/HeaderArrage'
import Header from '../components/Header'
import Slide  from '../components/Slide'
import LogoCount from '../assets/logo-red.png'
import Mainbottom from '../components/Mainbottom'
import TourSales from '../components/TourSales'
import imageCount from '../assets/desktopCount.jpg'
import CountImg from '../components/CountImg'
import FooterTop from '../components/FooterTop'
import Hovered from '../components/Hovered'
import FooterAverage from '../components/FooterAverage'
import locationimageCount from "../assets/location.png"
import Locationn from '../components/Locationn'
import FooterFilter from '../components/FooterFilter'
import Footer from '../components/Footer'
import LogoCountBlue from '../assets/logo-ibid.png'
import CountClock from '../components/CountClock'
import CountSoon from '../components/CountSoon'

function CountDown() {
  return (
    <div className='container'>
        <HeaderArrage basketColor="#EA3546" Logoimage={LogoCount}/>
        <Header bgColor="#EA3546"/>
        <Slide />
        <Mainbottom colorP="#606060" colorH="#343e47"/>
        <CountSoon display4={true} tooltipBg="#EA3546" GavelColorshop="#EA3546" nameAuction="AUCTIONS EXPIRING SOON" toolRadius="45px" hoverBGsales="RedCbg"/>
        <TourSales
        display1={false}
        display={true}
        GavelColorshop="#EA3546"
        nameAuction="FILTERED BY TIME REMAINING"
        toolRadius="50%"
        tooltipBg="#EA3546"
        howToused="Auction Ended"
        textLatest="Gaming Computer"
        hoveredSales="RedC"
        hoverBGsales="RedCbg"
        SalesText="Budapest,Hungary"
        imageTour={imageCount}
        toolBg="#EA3546"
        textPosterCard="ELECTRONICS"
        productCard="Products"
        numberProduct="9"
        productName="Products"
        posterCard="LAPTOPS"
        numberPoster="5"
        numberPoster3="12"
        productName1="Products"
        numberPoster1="3"
        productName3="Products"
      />
      <CountImg />
      <FooterTop display={false} hoverColor="RedC" LatText1="A Phone Keeps Your" LatestText2="Friends Away" LatestTextp1="Bring to the table win-win survival" LatestTextp2="Strategies to ensure..."  GavelColor="#EA3546" />
      <Hovered />
      <FooterAverage display2={false} />
      <CountClock/>
      <Locationn radiusBorder="45px" img={locationimageCount} GavellColor="#EA3546" inputBg="#EA3546"/>
      <FooterFilter mtfooteR="75px" rounded="45px"  bgColor="#EA3546"/>
      <Footer ptFtr="50px" BtnRadius="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="RedC" hoverbgF="RedCbg" Logoimage={LogoCountBlue}/>  
    </div>
  )
}

export default CountDown
