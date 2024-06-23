import React from 'react'
import FundHeader from '../components/FundHeader'
import FundFooterBtm from '../components/FundFooterBtm'
import FooterFilter from '../components/FooterFilter'
import Footer from '../components/Footer'
import imageloGo from "../assets/logo-machinery.png"
import FundSlide from '../components/FundSlide'
import FindFilter from '../components/FindFilter'

function Fundraising() {
  return (
    <div>
      <FundHeader />
      <FundSlide />
      <FindFilter />
      <FundFooterBtm />
      <FooterFilter rounded="45px" bgColor="#D4A619" />
      <Footer
        BtnRadius="45px"
        ptFtr="50px"
        BrdInput="45px"
        textH1="white"
        FooterBG="#1C1F26"
        widthFooter="1897"
        bgFootBtm="#27282A"
        heightFooter="230px"
        textColorFB="white"
        hoverFB="funYellow"
        hoverbgF="funYellowbg"
        Logoimage={imageloGo}
      />
    </div>
  )
}

export default Fundraising
