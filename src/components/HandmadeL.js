import React from "react";
import { Link } from 'react-router-dom';
import image1 from '../assets/handmade1.jpg';
import image2 from '../assets/handmade2.jpg';
import image3 from '../assets/handmade3.jpg';
import image4 from '../assets/handmade4.jpg';
import image5 from '../assets/handmade5.jpg';
import image6 from '../assets/handmade6.jpg';

function HandmadeL({ hoverTextBotm }) {
  const data = [
    {
      id: 1,
      img: image1,
      description: "Gifts for Him",
      paragraph: "3 Products in this Category"
    },
    {
      id: 2,
      img: image2,
      description: "Personalised gifts",
      paragraph: "3 Products in this Category"
    },
    {
      id: 3,
      img: image3,
      description: "Anniversary Gifts",
      paragraph: "3 Products in this Category"
    },
    {
      id: 4,
      img: image4,
      description: "Crafted Jewelry",
      paragraph: "4 Products in this Category"
    },
    {
      id: 5,
      img: image5,
      description: "Gifts for Her",
      paragraph: "1 Products in this Category"
    },
    {
      id: 6,
      img: image6,
      description: "House Gifts",
      paragraph: "3 Products in this Category"
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="mx-[75px] my-[100px] flex flex-col gap-[50px] rounded-[9px]">
        {[0, 1].map((row) => (
          <ul key={row} className="flex justify-between gap-[20px] flex-wrap max-600:flex-col max-600:gap-[20px]">
            {data.slice(row * 3, row * 3 + 3).map((item) => (
              <li key={item.id} className="w-[calc(25%_-_20px)] bg-white shadow-2xl rounded-[9px] max-600:w-full">
                <div className="flex gap-[30px] items-center p-[10px]">
                  <Link to="/">
                    <div>
                      <img
                        className="rounded-[9px]"
                        width={110}
                        src={item.img}
                        alt={item.description}
                      />
                    </div>
                  </Link>
                  <div>
                    <Link to="/">
                      <h1 className={`text-[20px] ${hoverTextBotm} font-bold text-[#c16bb6]`}>
                        {item.description}
                      </h1>
                    </Link>
                    <p className="text-[16px] font-light text-[#606060]">
                      {item.paragraph}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default HandmadeL;
