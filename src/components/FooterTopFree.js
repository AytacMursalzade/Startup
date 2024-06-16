import React from "react";
import Info1 from "../assets/Info1.png";
import Info2 from "../assets/Info2.png";
import Info3 from "../assets/Info3.png";
import Info4 from "../assets/Info4.png";
import Info5 from "../assets/Info5.png";
import Info6 from "../assets/Info6.png";

function FooterTopFree() {
  const information = [
    {
      img: Info1,
      description: "Browse projects",
      paragraph: "Pellentesque pharetra lobortis lorem, ut imperdiet erat",
      paragraph1: "finibus sed. Etiam bibendum quis enim lacinia. Donec",
      paragraph3: "tempus sit amet libero in aliquam.",
    },
    {
      img: Info2,
      description: "Quality Work",
      paragraph: "Pellentesque pharetra lobortis lorem, ut imperdiet erat",
      paragraph1: "finibus sed. Etiam bibendum quis enim lacinia. Donec",
      paragraph3: "tempus sit amet libero in aliquam.",
    },
    {
      img: Info3,
      description: "Live Chat",
      paragraph: "Pellentesque pharetra lobortis lorem, ut imperdiet erat",
      paragraph1: "finibus sed. Etiam bibendum quis enim lacinia. Donec",
      paragraph3: "tempus sit amet libero in aliquam.",
    },
    {
      img: Info4,
      description: "View Your Bids",
      paragraph: "Pellentesque pharetra lobortis lorem, ut imperdiet erat",
      paragraph1: "finibus sed. Etiam bibendum quis enim lacinia. Donec",
      paragraph3: "tempus sit amet libero in aliquam.",
    },
    {
      img: Info5,
      description: "Online Support",
      paragraph: "Pellentesque pharetra lobortis lorem, ut imperdiet erat",
      paragraph1: "finibus sed. Etiam bibendum quis enim lacinia. Donec",
      paragraph3: "tempus sit amet libero in aliquam.",
    },
    {
      img: Info6,
      description: "Advertise Jobs",
      paragraph: "Pellentesque pharetra lobortis lorem, ut imperdiet erat",
      paragraph1: "finibus sed. Etiam bibendum quis enim lacinia. Donec",
      paragraph3: "tempus sit amet libero in aliquam.",
    },
  ];
  return (
    <div className="mt-[100px] ">
      <div className=" px-[120px] mb-[30px] ">
        <h1 className="topic text-[32px] text-[#222222] font-bold">
          Benefits of iBid
        </h1>
        <p className="gavel text-[18px] text-[#606060] font-light">
          Nunc est velit, dapibus nec mi id, laoreet mattis elit.
        </p>
      </div>
      <ul className="ftres grid grid-cols-3 gap-[30px] px-[120px]">
        {information.map((item, index) => (
          <li key={index} className="communityPost w-[420px] flex flex-wrap pb-[2px]">
            <div className="communitylink flex flex-col">
              
              <div className="flex gap-[15px] items-center ">
                <img width={50} src={item.img} alt="freelancer" />
                <h1 className="text-[18px] text-[#222222] font-bold">
                  {item.description}
                </h1>
              </div>
              <div>
                <p className="text-[15px] text-[#606060] mt-[10px] font-light">
                  {item.paragraph} <br />
                  {item.paragraph1} <br />
                  {item.paragraph3}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterTopFree;
