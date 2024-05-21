import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";



function Header({bgColor}) {

 

  return (
    <>
      <div style={{backgroundColor:bgColor}} className="headerNav h-[70px] flex justify-between" >
        <NavbarItem />
        <Link><div className="mr-[94px] text-white font-bold py-[20px] ">Sign in</div></Link>
        
      </div>
      
      
    </>
  );
}

export default Header;
