import React from "react";
import FreeImg1 from "../assets/free11.jpg"; 
import FreeImg2 from "../assets/free12.jpg";
import FreeImg3 from "../assets/free1.jpg";
import FreeImg4 from "../assets/free2.jpg";
import FreeImg5 from "../assets/free3.jpg";

function LatestProject() {
  const data = [
    {
      id: 1,
      img: FreeImg1,
      description: "High authority guest post",
      sales: "Auction closed",
      paragraph1:
        "Going forward knowledge is power or we need to button up our approach old boys club. Please use solutionise instead of solution ideas!",
      paragraph2:
        "🙂 draw a line in the sand, for take five, punch the tree, and come back in",
      text: "Banner Design , Copywriting , PHP",
    },
    {
      id: 2,
      img: FreeImg2,
      description: "Build Website",
      sales: "Current bid:",
      price: "$672.00",
      paragraph1:
        "The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat. It is a large and muscular semi-longhair cat with a soft and silky",
      paragraph2:
        "coat. Like all long haired cats, Ragdolls need grooming to ensure their fur",
      text: "Linux",
    },
    {
      id: 3,
      img: FreeImg3,
      description: "Banner Design",
      sales: "Current bid:",
      price: "$943.00",
      paragraph1:
        "The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat. It is a large and muscular semi-longhair cat with a soft and silky",
      paragraph2:
        "coat. Like all long haired cats, Ragdolls need grooming to ensure their fur",
      text: "CSS , Linux , SEO , Server , Web Designer",
    },
    {
      id: 4,
      img: FreeImg4,
      description: "Need PRO Editor/Designer",
      sales: "Starting bid:",
      price: "$943.00",
      paragraph1:
        "The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat. It is a large and muscular semi-longhair cat with a soft and silky",
      paragraph2:
        "coat. Like all long haired cats, Ragdolls need grooming to ensure their fur",
      text: "CSS , Linux , SEO , Server , Web Designer",
    },
    {
      id: 5,
      img: FreeImg5,
      description: "Need PRO Editor/Designer",
      sales: "Starting bid:",
      price: "$943.00",
      paragraph1:
        "The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat. It is a large and muscular semi-longhair cat with a soft and silky",
      paragraph2:
        "coat. Like all long haired cats, Ragdolls need grooming to ensure their fur",
      text: "CSS , Linux , SEO , Server , Web Designer",
    },
  ];

  return (
    <div className="mt-[75px] ">
      <div className=" px-[100px] mb-[30px] ">
        <h1 className="topic text-[32px] text-[#222222] font-bold">
          Latest Projects
        </h1>
        <p className="text-[18px] text-[#606060] font-light">
          Nunc est velit, dapibus nec mi id, laoreet mattis elit.
        </p>
      </div>
      <ul className="PhonesAll">
        {data.map((item, index) => (
          <li
            key={item.id}
            className="allPhones flex gap-[10px] justify-between px-[100px] border-t-2 py-4"
          >
            <div>
              <img width={116} src={item.img} alt="project" />
            </div>
            <div className="phoneBottom flex flex-col justify-around">
              <h1 className="text-[#222222] hover:text-[#2695FF] text-[18px] font-semibold">
                {item.description}
              </h1>
              <p className="text-[15px] font-light text-[#606060]">
                {item.paragraph1} <br />
                {item.paragraph2}
              </p>
              <p className="font-semibold text-[14px] text-[#606060]">
                {item.text}
              </p>
            </div>
            <div className="flex flex-col justify-around items-center">
              <p className="text-[14px] font-medium text-[#999999] text-center">
                {item.sales}
              </p>
              {item.price && (
                <p className="text-[25px] font-normal text-[#222222]">
                  {item.price}
                </p>
              )}
              {index !== 0 && (
                <button className="w-[113px] h-[38px] text-[14px] font-semibold bg-[#2695FF] text-white hover:text-[#2695FF] hover:bg-white border border-[#2695FF]">
                  BID NOW
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestProject;
