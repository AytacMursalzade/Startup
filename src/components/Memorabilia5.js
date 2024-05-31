import React from "react";
import { Link } from "react-router-dom";
import Memo1 from "../assets/blog1.jpg";
import Memo2 from "../assets/blog2.jpg";
import Memo3 from "../assets/blog3.jpg";

function Memorabilia5() {

  const items = [
    {
      id: 1,
      img: Memo1,
      date: "admin | 21 Aug,2020",
      description: "Is The Show a Go? Depends on Where You Live,",
      description1: "Size of Event",
    },
    {
      id: 2,
      img: Memo2,
      date: "admin | 21 Aug,2020",
      description: "The Market for Sports Memorabilia Continues to",
      description1: "Score Big",
    },
    {
      id: 3,
      img: Memo3,
      date: "admin | 21 Aug,2020",
      description: "Celebrate America's Pastime with cards",
      description1: "Autographed Baseballs",
    },
  ];

  return (
    <div className="mt-[30px] px-[75px]">
      <div className="flex flex-col items-center justify-center mt-[126px]">
        <h1 className="font-bold text-[34px] text-[#242424]">
          Articles You Might Like
        </h1>
        <p className="text-[#666666] text-[15px] font-light">
          The standard chunk of Lorem Ipsum used since is reproduced
        </p>
      </div>
      <ul className="flex gap-[10px] mt-[35px] ">
        {items.map(item => (
          <li key={item.id} className="w-[450px] h-[461px] flex flex-col gap-[20px] ">
            <Link to="/">
              <img width={420} src={item.img} alt="memorabilia" />
            </Link>
            <p className="text-[#078169] text-center  text-[14px] font-medium">{item.date}</p>
            <Link to="/">
              <h1 className="text-[#151515] text-center  font-semibold text-[16px]">
                {item.description}<br/>{item.description1}
              </h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Memorabilia5;
