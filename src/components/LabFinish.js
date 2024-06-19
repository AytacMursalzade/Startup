import React from "react";
import { Link } from "react-router-dom";
import LabFinishImg1 from "../assets/labFinish1.jpg";
import LabFinishImg2 from "../assets/LabFinish2.jpg";
import LabFinishImg3 from "../assets/LabFinish3.jpg";

function LabFinish() {
  const items = [
    {
      id: 1,
      img: LabFinishImg1,
      date: "admin | 28 Oct,2020",
      description: "Scienrist receive $3.9 million to optimize",
      description1: "treatment for opioid",
    },
    {
      id: 2,
      img: LabFinishImg2,
      date: "admin | 28 Oct,2020",
      description: "Research finds a problem with concept of herd",
      description1: "immunity",
    },
    {
      id: 3,
      img: LabFinishImg3,
      date: "admin | 28 Oct,2020",
      description: "Researchers to develop new ultrasound system",
      description1: "for next gen",
    },
  ];

  return (
    <div className="mt-[30px] px-[75px]">
      <div className="flex flex-col items-center justify-center mt-[126px]">
        <h1 className="font-bold text-[24px] text-[#242424] self-start max-600:self-start max-600:ml-[-36px] max-600:text-[30px] ">
          From the Blog
        </h1>
      </div>
      <div className="flex justify-center ">
        <ul className="flex gap-[45px] mt-[35px]  flex-wrap max-600:gap-[29px]">
          {items.map((item) => (
            <li
              key={item.id}
              className="w-[480px] h-[461px] flex flex-col gap-[20px] max-600:w-[450px] max-600:h-auto max-600:gap-[15px]"
            >
              <Link to="/" className="relative block">
                <img
                  src={item.img}
                  alt="memorabilia"
                  className="w-full h-auto max-600:w-full max-600:h-[253px]"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
              </Link>
              <p className="text-[#1163FA] text-center text-[14px] font-medium">
                {item.date}
              </p>
              <Link to="/">
                <h1 className="text-[#151515] text-center hover:text-[#1163FA] font-semibold text-[18px]">
                  {item.description}
                  <br />
                  {item.description1}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LabFinish;
