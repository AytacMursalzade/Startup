import React from "react";
import { Link } from "react-router-dom";

function Footer({
  Logoimage,
  hoverbgF,
  hoverFB,
  FooterBG,
  widthFooter,
  heightFooter,
  bgFootBtm,
  textColorFB,
  textH1,
  lastftrM,
  ptFtr,
  BrdInput,
  BtnRadius,
  
}) {
  return (
    <>
      <div
        style={{
          width: widthFooter,
          height: heightFooter,
          backgroundColor: FooterBG,
          paddingTop: ptFtr,
          
        }}
      >
        <div className="averageFooter flex justify-around pt-[75px]  ml-[10px] gap-[30px] ">
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
            <h1
              style={{ color: textH1 }}
              className="font-bold text-[24px] mb-[12px] "
            >
              Useful Links
            </h1>
            <ul className="text-[#AFAFAF] text-[16px] font-normal  flex flex-col gap-[8px] ">
              <Link>
                <li className={`${hoverFB}`}>Mobile Phone</li>
              </Link>
              <Link>
                <li className={`${hoverFB}`}>Laptop</li>
              </Link>
              <Link>
                <li className={`${hoverFB}`}>Headphones</li>
              </Link>
            </ul>
          </div>
          <div>
            <h1
              style={{ color: textH1 }}
              className="font-bold text-[24px] mb-[12px] "
            >
              Useful Links
            </h1>
            <ul className="text-[#AFAFAF] text-[16px] font-normal  flex flex-col gap-[8px] ">
              <Link>
                <li className={`${hoverFB}`}>Mobile Phone</li>
              </Link>
              <Link>
                <li className={`${hoverFB}`}>Laptop</li>
              </Link>
              <Link>
                <li className={`${hoverFB}`}>Headphones</li>
              </Link>
            </ul>
          </div>
          <div>
            <h1
              style={{ color: textH1 }}
              className="font-bold text-[24px] mb-[12px] "
            >
              Subscribe to our Newsteller
            </h1>
            <form className="flex shadow-md  relative ">
              <label>
                <input style={{borderRadius:BrdInput}}
                  className="formFooter w-[200px] h-[40px] px-[12px] focus:outline-none focus:border-gray-700"
                  type="text"
                  name="name"
                  placeholder="Enter your email"
                />
              </label>
              <button
                style={{borderRadius:BtnRadius}}
                className={`btnFilter flex justify-center items-center ${hoverbgF} w-[110px] h-[40px] absolute right-9  bg-[#484848] text-white`}
              >
                <input type="submit" value="Submit" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: bgFootBtm,
          color: textColorFB,
          marginTop: lastftrM,
        }}
        className="lastFooter flex justify-between  items-center px-[90px] font-normal w-[100%] h-[80px] "
      >
        <p className="CopyLastFooter">
          Copyright by ModelTheme. All Rights Reserved.
        </p>
        <p>Elite Author on ThemeForest.</p>
      </div>
    </>
  );
}

export default Footer;
