import React from 'react'

function DomainSlideBtm({DomainSlide2Img}) {

  const DomainSlideimage = {
    backgroundImage: `url(${DomainSlide2Img})`,
    backgroundSize: "cover",
    backgroundPosition:"center"
  }
    
  return (
    <div style={DomainSlideimage} className='w-[100%] mt-[100px] h-[600px] flex flex-col justify-center items-center gap-[25px] '>
      <h1 className='font-bold text-[#ffe347] text-[40px]'>Why choose iBid?</h1>
      <p className='font-light text-[16px] text-center text-[white] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel metus massa. Vivamus faucibus augue mi, quis cursus erat ultrices quis. Donec <br/> scelerisque facilisis orci vel semper. Fusce id egestas felis. Mauris mauris arcu, mattis a mollis eu, bibendum at odio. Integer purus nibh, volutpat <br/> eget sem sit amet, imperdiet euismod turpis. In eget aliquet diam.</p>
      <button className='bg-[#18AE91] rounded-[9px] hover:bg-[#509384] text-[white] w-[150px] h-[50px] font-bold text-[16px] '>Find More</button>
    </div>
  )
}

export default DomainSlideBtm
