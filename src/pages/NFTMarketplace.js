import React from 'react'
import MarketFilter from '../components/MarketFilter'
import NftHeader from '../components/NftHeader'
import src from "../assets/nftLogo.png"
import NftSlide from '../components/NftSlide'
import NftPoster from '../components/NftPoster'
import NftFooterTop from '../components/NftFooterTop'
import FooterFilter from '../components/FooterFilter'
import Footer from '../components/Footer'
import Logonft from "../assets/logo-ibid.png"


function NFTMarketplace() {
  return (
    <div>
      <NftHeader src={src}/>
      <NftSlide />
      <MarketFilter />
      <NftPoster />
      <NftFooterTop hoverColor="nft"/>
      <FooterFilter mtfooteR="75px" rounded="45px"  bgColor="#4D79D2"/>
      <Footer ptFtr="50px" BtnRadius="45px" lastftrM="70px" textH1="#343E47" textColorFB="#343E47" hoverFB="nft" hoverbgF="nftbg" Logoimage={Logonft}/>  
    </div>
  )
}

export default NFTMarketplace
