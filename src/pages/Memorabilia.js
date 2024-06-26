import React from 'react'
import HeaderHalf from '../components/HeaderHalf'
import src from "../assets/MemorabiliaLogo.png"
import MemoraliaSlide from '../components/MemoraliaSlide'
import MemoImg from "../assets/MemoSport.png"
import MemoImg1 from "../assets/MemoHockey.png"
import Mainbottom from '../components/Mainbottom'
import MemoSlide1 from '../components/MemoSlide1'
import Itemimg from "../assets/MemoItemSlide.jpg"
import Memoitems from '../components/MemoItems'
import MemoSlide2 from '../components/MemoSlide2'
import FooterAverage from '../components/FooterAverage'
import FooterFilter from '../components/FooterFilter'
import Footer from '../components/Footer'
import MemoMain from '../components/MemoMain'
import MemoSlideFinish from '../components/MemoSlideFinish'
import Memorabilia5 from '../components/Memorabilia5'

function Memorabilia() {
  return (
    <div >
      <HeaderHalf src={src} bgColorTop="#078169" bgColor="white"/>
      <MemoraliaSlide MemoImg={MemoImg} MemoImg1={MemoImg1}/>
      <Mainbottom />
      <MemoSlide1 Itemimg={Itemimg}/>
      <Memoitems display1={false} hoverTextBotm="spor" hoverLatest="sporbg" OneLatest="Summer 2020 Sneak Peeks"  tooltipBg="#07745F" />
      <MemoSlide2 />
      <FooterAverage display2={false} />
      <MemoMain />
      <MemoSlideFinish rounded="45px"/>
      <Memorabilia5 />
      <FooterFilter mtfooteR="75px" rounded="45px" bgColor="#078169" />
      <Footer
        BtnRadius="45px"
        ptFtr="50px"
        BrdInput="45px"
        textH1="#606060"
        FooterBG="white"
        widthFooter="1897"
        bgFootBtm="white"
        heightFooter="230px"
        textColorFB="#606060"
        hoverFB="spor"
        hoverbgF="sporbg"
        Logoimage={src}
      />
    </div>
  )
}

export default Memorabilia
