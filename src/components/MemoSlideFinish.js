import React from 'react'
import memoFinish from "../assets/MemoItemSlide.jpg"

function MemoSlideFinish({rounded}) {
    const styleMemo = {
        backgroundImage: `url(${memoFinish})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
  return (
    <div style={styleMemo} className='w-[100%] h-[500px] flex flex-col justify-center items-center gap-[15px] '>
        <h1 className='text-[white] text-center font-bold text-[34px] '>Stay In Touch With Our Offers</h1>
        <p className='text-[white] text-center text-[15px] pb-[10px] font-light  '>Subscribe to our nesletter for gets daily updates</p>
      <form style={{borderRadius:rounded}}  className="filterown flex items-center justify-between w-[420px] h-[40px] mt-[-10px] py-[4px] px-[18px]  bg-white ">
          <input style={{borderRadius:rounded}}
            className="text-black outline-none "
            type="text"
            placeholder="Enter your email"
          />
          <button style={{borderRadius:rounded}} className="mr-[8px]  flex justify-center items-center font-medium w-[43px] h-[43px] bg-[white] text-[black] ">
            Submit
          </button>
        </form>
    </div>
  )
}

export default MemoSlideFinish
