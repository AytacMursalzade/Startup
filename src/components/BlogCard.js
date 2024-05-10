import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
    <div className='w-[286px] h-[397px] bg-white shadow-lg '>
      <h1>BLOG TYPES</h1>
      <ul>
        <Link to="/boxedlayout"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Boxed Layout</li></Link>
        <Link to="/postcarousel"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Post Carousel</li></Link>
        <Link to="/newsfiltered"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">News Filtered</li></Link>
        <Link to="/blogminimal"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Blog Minimal</li></Link>
        <Link to="/simplelayout"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Simple Layout</li></Link>
        <Link to="/articledetails"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal ">Article Details</li></Link>
      </ul>
    </div>
  )
}

export default BlogCard
