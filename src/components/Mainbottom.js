import React from "react";
import { Link } from "react-router-dom";


function Mainbottom({colorBg,heightMain,mtTop,image1,image2,image3,image4,Item1,Item2,Item3,Item4,Item5,Item6,Item7,Item8}) {
  return (
   <div>
     <div style={{backgroundColor:colorBg,height:heightMain,marginTop:mtTop}} className="tracking flex gap-[145px] mt-[30px] justify-center items-center ">
      <Link to="/"><div className="flex gap-[25px]">
        <img width={50} src={image1} alt="earphones" />
        <div>
          <h1 className="font-bold text-[20px]">{Item1}</h1>
          <p className="text-[14px] ">{Item2}</p>
        </div>
      </div></Link>
      <Link to="/"><div className="flex gap-[25px]">
        <img width={50} src={image4} alt="tracking" />
        <div>
          <h1 className="font-bold text-[20px]  ">{Item3}</h1>
          <p className=" text-[14px] ">{Item4}</p>
        </div>
      </div></Link>
      <Link to="/"><div className="flex gap-[25px]">
        <img  width={50} src={image2} alt="delivery" />
        <div>
          <h1 className="font-bold text-[20px] ">{Item5}</h1>
          <p className="text-[14px] ">{Item6}</p>
        </div>
      </div></Link>
      <Link to="/"><div className="flex gap-[25px]">
        <img width={50} src={image3} alt="buying" />
        <div>
          <h1 className="font-bold text-[20px] ">{Item7}</h1>
          <p className=" text-[14px] ">{Item8}</p>
        </div>
      </div></Link>
     </div>
   </div>
  );
}

export default Mainbottom;
