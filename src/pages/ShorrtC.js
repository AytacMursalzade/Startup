import React from 'react'
import HeaderArrage from '../components/HeaderArrage'
import Header from '../components/Header'
import ShopTop from '../components/ShopTop'
import FooterFilter from '../components/FooterFilter'
import Footer from '../components/Footer'
import AccordionData from '../components/AccordionData'
import GrisSystem from '../components/GrisSystem'
import CountersShort from '../components/CountersShort'
import PieChart from '../components/PieChart'
import ServicesTable from '../components/ServicesTable'
import BarTables from '../components/BarTables'
import MemberSlide from '../components/MemberSlide'
import TerminalSlider from '../components/TerminalSlider'
import ShopShort from '../components/ShopShort'
import Logoimage1 from "../assets/logo-ibid.png"

function ShorrtC() {
  return (
    <div className='container'>
      <HeaderArrage basketColor="#0543EC" Logoimage={Logoimage1} />
      <Header bgColor="#2695FF" />
      <ShopTop paragraph="Shortcodes" description="Shortcodes"/>
      <AccordionData />
      <GrisSystem />
      <CountersShort />
      <PieChart />
      <ServicesTable />
      <BarTables />
      <MemberSlide />
      <TerminalSlider />
      <ShopShort />
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
  )
}

export default ShorrtC
