import React from "react";
import { Link } from "react-router-dom";
import Logoimage from "../assets/logo-ibid.png";
import { FaAngleDoubleRight } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex justify-around ml-[10px] gap-[30px] ">
        <div>
          <ul className="flex flex-col gap-[8px] ">
            <Link>
              <li>
                <img width={120} src={Logoimage} alt="logo" />
              </li>
            </Link>
            <li className="text-[#AFAFAF] ">contact@example.com</li>
            <li className="text-[#AFAFAF] ">+1-541-754-3010</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#343E47] font-bold text-[24px] mb-[12px] ">
            Useful Links
          </h1>
          <ul className="text-[#AFAFAF] text-[16px] font-normal  flex flex-col gap-[8px] ">
            <Link>
              <li className="hover:text-[#2695FF]">Mobile Phone</li>
            </Link>
            <Link>
              <li className="hover:text-[#2695FF]">Laptop</li>
            </Link>
            <Link>
              <li className="hover:text-[#2695FF]">Headphones</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="text-[#343E47] font-bold text-[24px] mb-[12px] ">
            Useful Links
          </h1>
          <ul className="text-[#AFAFAF] text-[16px] font-normal  flex flex-col gap-[8px] ">
            <Link>
              <li className="hover:text-[#2695FF]">Mobile Phone</li>
            </Link>
            <Link>
              <li className="hover:text-[#2695FF]">Laptop</li>
            </Link>
            <Link>
              <li className="hover:text-[#2695FF]">Headphones</li>
            </Link>
          </ul>
        </div>
        <div>
          <h1 className="text-[#343E47] font-bold text-[24px] mb-[12px] ">
            Subscribe to our Newsteller
          </h1>
        </div>
      </div>
      <div className="flex justify-between bg-[#F8F8F8] items-center px-[90px] text-[#343E47] font-normal mt-[70px] w-[100%] h-[80px] ">
        <p>Copyright by ModelTheme. All Rights Reserved.</p>
        <p>Elite Author on ThemeForest.</p>
      </div>
    </>
  );
}

export default Footer;
