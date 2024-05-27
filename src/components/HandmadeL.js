import React from "react";
import { Link } from 'react-router-dom';

function HandmadeL({ src, handMadeH, handMadeP,hoverTextBotm }) {
  return (
    <div className="container">
      <div className=" mx-[75px] my-[100px] flex flex-col gap-[50px] rounded-[9px]  shadow-2xl">
        <ul className="flex justify-around gap-[20px] ">
          <li className="w-[350px] min-h-[110px]">
            <div className="flex gap-[30px]  items-center">
              <Link to="/"><div>
                <img
                  className="flex rounded-[9px]"
                  width={110}
                  src={src}
                  alt="handmade"
                />
              </div></Link>
              <div>
                <Link to="/"><h1 className={`text-[20px] ${hoverTextBotm} font-bold text-[#c16bb6]`}>
                  {handMadeH}
                </h1></Link>
                <p className="text-[16px] font-light text-[#606060] ">
                  {handMadeP}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex w-[350px] min-h-[110px] gap-[30px] items-center">
              <Link to="/"><div>
                <img
                  className="flex rounded-[9px]"
                  width={110}
                  src={src}
                  alt="handmade"
                />
              </div></Link>
              <div>
                <Link to="/"><h1 className={`text-[20px] ${hoverTextBotm} font-bold text-[#c16bb6]`}>
                  {handMadeH}
                </h1></Link>
                <p className="text-[16px] font-light text-[#606060] ">
                  {handMadeP}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex w-[350px] min-h-[110px] gap-[30px] items-center">
              <Link to="/"><div>
                <img
                  className="flex rounded-[9px]"
                  width={110}
                  src={src}
                  alt="handmade"
                />
              </div></Link>
              <div>
                <Link to="/"><h1 className={`text-[20px] ${hoverTextBotm} font-bold text-[#c16bb6]`}>
                  {handMadeH}
                </h1></Link>
                <p className="text-[16px] font-light text-[#606060] ">
                  {handMadeP}
                </p>
              </div>
            </div>
          </li>
        </ul>
        <ul className="flex justify-around gap-[20px] ">
          <li className="w-[350px] min-h-[110px]">
            <div className="flex gap-[30px]  items-center">
              <Link to="/"><div>
                <img
                  className="flex rounded-[9px]"
                  width={110}
                  src={src}
                  alt="handmade"
                />
              </div></Link>
              <div>
                <Link to="/"><h1 className={`text-[20px] ${hoverTextBotm} font-bold text-[#c16bb6]`}>
                  {handMadeH}
                </h1></Link>
                <p className="text-[16px] font-light text-[#606060] ">
                  {handMadeP}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex w-[350px] min-h-[110px] gap-[30px] items-center">
              <Link to="/"><div>
                <img
                  className="flex rounded-[9px]"
                  width={110}
                  src={src}
                  alt="handmade"
                />
              </div></Link>
              <div>
                <Link to="/"><h1 className={`text-[20px] ${hoverTextBotm} font-bold text-[#c16bb6]`}>
                  {handMadeH}
                </h1></Link>
                <p className="text-[16px] font-light text-[#606060] ">
                  {handMadeP}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex w-[350px] min-h-[110px] gap-[30px] items-center">
              <Link to="/"><div>
                <img
                  className="flex rounded-[9px]"
                  width={110}
                  src={src}
                  alt="handmade"
                />
              </div></Link>
              <div>
                <Link to="/"><h1 className={`text-[20px] ${hoverTextBotm} font-bold text-[#c16bb6]`}>
                  {handMadeH}
                </h1></Link>
                <p className="text-[16px] font-light text-[#606060] ">
                  {handMadeP}
                </p>
              </div>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
  );
}

export default HandmadeL;
