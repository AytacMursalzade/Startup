import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/earphones.png";
import image2 from "../assets/deliveries_icons.png";
import image3 from "../assets/money_icons.png";
import image4 from "../assets/tracking_icons.png";

function Mainbottom({imgColor}) {
  return (
   <div>
     <div className="tracking flex gap-[145px] mt-[30px] justify-center ">
      <Link to="/"><div className="flex gap-[25px]">
        <img style={{color:imgColor}} width={50} src={image1} alt="earphones" />
        <div>
          <h1 className="font-bold text-[20px] text-[#343e47] ">Call Center</h1>
          <p className="text-[#606060] text-[14px] ">Completely synergize</p>
        </div>
      </div></Link>
      <Link to="/"><div className="flex gap-[25px]">
        <img style={{color:imgColor}} width={50} src={image4} alt="tracking" />
        <div>
          <h1 className="font-bold text-[20px] text-[#343e47] ">Order Tracking</h1>
          <p className="text-[#606060] text-[14px] ">Objectively empowered</p>
        </div>
      </div></Link>
      <Link to="/"><div className="flex gap-[25px]">
        <img style={{color:imgColor}} width={50} src={image2} alt="delivery" />
        <div>
          <h1 className="font-bold text-[20px] text-[#343e47] ">Fastest Delivery</h1>
          <p className="text-[#606060] text-[14px] ">Efficiently unleash media</p>
        </div>
      </div></Link>
      <Link to="/"><div className="flex gap-[25px]">
        <img style={{color:imgColor}} width={50} src={image3} alt="buying" />
        <div>
          <h1 className="font-bold text-[20px] text-[#343e47] ">Instant Buying</h1>
          <p className="text-[#606060] text-[14px] ">Podcasting operational</p>
        </div>
      </div></Link>
     </div>
   </div>
  );
}

export default Mainbottom;
