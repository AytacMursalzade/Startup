import React from "react";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

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
  const data = [
    {
      id: 1,
      description: "Useful Links",
      items: [
        { id: 1, label: "Mobile Phone" },
        { id: 2, label: "Laptop" },
        { id: 3, label: "Headphones" },
      ],
    },
    {
      id: 2,
      description: "Our Policy",
      items: [
        { id: 4, label: "Homepage" },
        { id: 5, label: "Blog" },
        { id: 6, label: "Services" },
      ],
    },
  ];

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
          {data.map((item) => (
            <div key={item.id}>
              <h1
                style={{ color: textH1 }}
                className="font-bold text-[24px] mb-[12px] "
              >
                {item.description}
              </h1>
              <ul className="text-[#AFAFAF] text-[16px] font-normal  flex flex-col gap-[8px] ">
                {item.items.map((subItem) => (
                  <Link key={subItem.id}>
                    <li  className={`${hoverFB} flex gap-[4px] items-center `}><FaAnglesRight />{subItem.label}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
          <div className="max-600:w-[448px]">
            <h1
              style={{ color: textH1 }}
              className="font-bold text-[24px] mb-[12px] "
            >
              Subscribe to our Newsletter
            </h1>
            <form className="formLabelOne flex shadow-md relative max-600:w-[410px] ">
              <label>
                <input
                  style={{ borderRadius: BrdInput }}
                  className="formFooter w-[200px] h-[40px] px-[12px] focus:outline-none focus:border-gray-700 "
                  type="text"
                  name="name"
                  placeholder="Enter your email"
                />
              </label>
              <button
                style={{ borderRadius: BtnRadius }}
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
