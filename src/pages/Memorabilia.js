import React from 'react'
import HeaderHalf from '../components/HeaderHalf'
import src from "../assets/MemorabiliaLogo.png"
import MemoraliaSlide from '../components/MemoraliaSlide'
import MemoImg from "../assets/MemoSport.png"
import MemoImg1 from "../assets/MemoHockey.png"
import Mainbottom from '../components/Mainbottom'
import image1 from "../assets/MemoItem1.png"
import image2 from "../assets/MemoItem4.png"
import image3 from "../assets/MemoItem3.png"
import image4 from "../assets/MemoItem2.png"
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
    <div className='container'>
      <HeaderHalf src={src} bgColorTop="#078169" bgColor="white"/>
      <MemoraliaSlide MemoImg={MemoImg} MemoImg1={MemoImg1}/>
      <Mainbottom image1={image1} image2={image2} image3={image3} image4={image4} Item1="24/7 Support" Item2="Efficiently leash media" Item3="Track Shipment" Item4="Objective the empower" Item5="Fastes Delivery" Item6="Efficiently unleash media" Item7="Weekly Gifts" Item8="Podcasting Operational" />
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
