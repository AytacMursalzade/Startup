import React from 'react'
import fundImg1 from "../assets/fund1.png"
import fundImg2 from "../assets/fund2.png"
import fundImg3 from "../assets/fund3.jpg"
import { Link } from 'react-router-dom'
import { FaGavel } from 'react-icons/fa'

function FundFooterBtm() {

    const image = [
        {
            id:1,
            img: fundImg1,
            description:"Fighting Human Trafficking Ending",
            description1:"Programs Worldwide",
        },
        {
            id:2,
            img: fundImg2,
            description:"Potable Water and Decent Health",
            description1:" Coverage in Africa",
        },
        {
            id:3,
            img: fundImg3,
            description:"Aiding the medical personnel in the ",
            description1:"front line of COVID-19",
        },
    ]
  return (
    <div>
          <div className="mainFund flex flex-col items-center justify-center">
            <h1 className="topic font-bold text-[34px]">THE CAUSES OF IBID</h1>
            <div className="gavel flex items-center justify-center mt-[15px]">
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
              <span className="font-bold text-[#D4A619] text-[27px]">
                <FaGavel />
              </span>
              <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
            </div>
          </div>
      <ul className="FundMain flex gap-[30px] mt-[75px]  mb-[100px] justify-center ">
        {image.map(item => (
          <li key={item.id} className="w-[420px] min-h-[405px] relative shadow-2xl flex flex-col gap-[10px]  items-center ">
            <Link to="/" >
              <img width={380} src={item.img} alt="memorabilia" className="relative w-full flex justify-center"/>
              <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
            </Link>
            <p className="text-[#D4A619] text-center  text-[14px] font-medium">{item.date}</p>
            <Link to="/">
              <h1 className="text-[#151515] text-center hover:text-[#D4A619]  font-semibold text-[18px]">
                {item.description}<br/>{item.description1}
              </h1>
            </Link>
            <button className='w-[134px] h-[40px] rounded-[45px] absolute bottom-[-22px] bg-[#D4A619] text-[white] font-semibold hover:bg-[white] hover:text-[#D4A619] '>View Cause</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FundFooterBtm
