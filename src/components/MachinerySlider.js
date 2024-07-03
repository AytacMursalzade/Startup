import React from 'react'
import image from "../assets/card1.jpg"
import { height } from '@mui/system'

function MachinerySlider() {

    const style = {
        backgroundImage:`url(${image})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        transformOrigin: "center",
        transition: "transform 0.5s ease",
        height:"700px"
    }    
  return (
    <div style={style} className='machinerySlider text-[white] flex flex-col gap-[15px] pt-[15%] pl-[8%]  '>
      <h1 className='text-[40px] '>Heavy Machinery <br/> Auctions Marketplace</h1>
      <p className='text-[17px] '>Lorem ipsum dolor, sit amet consectetur adipisicing <br/>elit. Magni, et!Lorem ipsum dolor, sit amet consectetur adipisicing <br/>elit. Magni, et! </p>
      <button className='w-[141px] h-[51px] bg-[yellow] text-[black] font-semibold '>ABOUT US</button>
    </div>
  )
}

export default MachinerySlider
