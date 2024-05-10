import React from "react";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";
import NavbarItem from "./NavbarItem";



function Header(props) {

 

  return (
    <>
      <div className={`headerNav h-[70px] bg-[${props.bgColor}] flex justify-between mb-[98px]`} >
        <NavbarItem />
        <Link><div className="mr-[94px] text-white font-bold py-[20px] ">Sign in</div></Link>
        
      </div>
      <Slide />
    </>
  );
}

export default Header;
