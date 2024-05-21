import React from 'react'
import { AiOutlinePercentage } from "react-icons/ai";
import { Link } from 'react-router-dom';

function ShopCard() {
  return (
    <div className='w-[500px] h-[200px] gap-[15px] bg-white '>
      <div><h1>SHOP SHORTCODES</h1>
        <ul className='flex'>
          <Link to="/salebanners"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage /> Sale Banners</li></Link>
          <Link to="/categoriesgrid"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Categories Grid</li></Link>
          <Link to="/clientsslider"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Clients Slider</li></Link>
          <Link to="/pricingtables"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Pricing Tables</li></Link>
          <Link to="/shopfeatures"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Shop Features</li></Link>
        </ul>
      </div>
      <div><h1>SHOP PAGE</h1>
        <ul className='flex'>
          <Link to="/salebanners"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage /> Sale Banners</li></Link>
          <Link to="/categoriesgrid"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Categories Grid</li></Link>
          <Link to="/clientsslider"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Clients Slider</li></Link>
          <Link to="/pricingtables"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Pricing Tables</li></Link>
          <Link to="/shopfeatures"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Shop Features</li></Link>
        </ul>
      </div>
      <div><h1>MORE PAGE</h1>
        <ul className='flex'>
          <Link to="/salebanners"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage /> Sale Banners</li></Link>
          <Link to="/categoriesgrid"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Categories Grid</li></Link>
          <Link to="/clientsslider"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Clients Slider</li></Link>
          <Link to="/pricingtables"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Pricing Tables</li></Link>
          <Link to="/shopfeatures"><li className="w-[150px] h-[35px]  flex items-center  py-[15px] hover:text-[#2695ff] text-[14px] font-normal "><AiOutlinePercentage />Shop Features</li></Link>
        </ul>
      </div>
      
    </div>
  )
}

export default ShopCard;
