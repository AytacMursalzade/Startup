import React from "react";
import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.png";
import post5 from "../assets/post5.png";
import post6 from "../assets/post6.png";
import post7 from "../assets/post7.png";
import post8 from "../assets/post8.png";
import post9 from "../assets/post9.png";
import post10 from "../assets/post10.png";
import post11 from "../assets/post11.png";
import post12 from "../assets/post12.png";
import { Link } from "react-router-dom";

function Freelist1() {
  const categories = [
    { img: post1, title: "Web Development (5)" },
    { img: post2, title: "Php (3)" },
    { img: post3, title: "Banner Design (3)" },
    { img: post4, title: "CSS (2)" },
    { img: post5, title: "Copywriting (5)" },
    { img: post6, title: "Web Analytics (3)" },
    { img: post7, title: "JavaScript (3)" },
    { img: post8, title: "Photo Editing (1)" },
    { img: post9, title: "Web Designert (5)" },
    { img: post10, title: "Link Building (2)" },
    { img: post11, title: "Linux (3)" },
    { img: post12, title: "Server (3)" },
  ];

  return (
    <div className="listFree mt-[75px] ">
      <div className="listFreeDesc px-[120px] mb-[30px] ">
        <h1 className="text-[32px] text-[#222222] font-bold">Categories</h1>
        <p className="text-[18px] text-[#606060] font-light">
          Nunc est velit, dapibus nec mi id, laoreet mattis elit.
        </p>
      </div>
      <ul className="FreeListOne flex flex-wrap justify-around mx-[100px] gap-[20px] ">
        {categories.map((category, index) => (
          <Link to="/">
            <li
              key={index}
              className="w-[280px] flex items-center gap-[15px] text-[#151515] font-semibold text-[16px] h-[80px] hover:text-[#1163FA] px-[12px] border-2 border-[gray] "
            >
              <img width={38} src={category.img} alt="frelancer" />
              {category.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Freelist1;
