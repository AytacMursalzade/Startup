import React from "react";
import articles from '../db/articles';
import { FaGavel } from "react-icons/fa";

function ReadBtn({btnColor,display1,display2,nameAuction,GavelColorshop}) {

  const ArticleHidden = {
    display: display1 ? 'flex' : 'none',
    justifyContent: 'space-between',  
    alignItems: 'center'
  }
  const ArticleHidden2 = {
    display: display2 ? 'block' : 'none'
  }
    
  return (
    <div className="flex flex-col mt-[100px] gap-[50px]">
      <div style={ArticleHidden} className=" px-[70px]">
        <h1 className="text-[35px] text-[black] font-bold">NEW ARTICLES</h1>
        <button className="text-[16px] text-[#45414166] font-semibold w-[170px] h-[40px] rounded-[9px] bg-[#18AE91] hover:text-[black]">
          ALL ARTICLES
        </button>
      </div>
      <div style={ArticleHidden2} className="flex flex-col items-center justify-center mt-[70px]">
        <h1 className="font-bold text-[34px] text-center">{nameAuction}</h1>

        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span style={{color:GavelColorshop}} className="font-bold  text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>
      <div className="mb-[100px] flex justify-center">
        <ul className="flex gap-[25px]">
          {articles.map((article, index) => (
            <li key={index} className="w-[440px] h-[250px] flex gap-[20px] border-2">
              <div
                style={{
                  backgroundImage: `url(${article.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="w-[150px]"
              ></div>
              <div className="w-[280px] h-[230px] pt-[24px] flex flex-col justify-evenly">
                <h1 className="text-[24px] text-[#484848] font-bold">
                  {article.description1} <br /> {article.description2}
                </h1>
                <p className="text-[#606060] text-[14px] font-light">
                  {article.paragraf1}
                  <br />
                  {article.paragraf2}
                </p>
              <button className={`w-[120px] h-[40px] rounded-[9px] font-bold text-[14px] text-[white] hover:bg-[white] hover:text-[#242424] ${btnColor}`}>
                  READ MORE
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReadBtn;
