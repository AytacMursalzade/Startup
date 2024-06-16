import React from "react";
import { PiUsersThreeFill } from "react-icons/pi";

function ShopCenter() {
  const connetc = [
    {
      id: 1,
      description1: "HOME DELIVERY",
      paragraph1: "We deliver right to your doorstep.",
      backgroundColor: "#393939",
      icon: <PiUsersThreeFill />,
      description2: "24/7 SUPPORT",
    },
    {
      id: 2,
      description1: "HOME DELIVERY",
      paragraph1: "We deliver right to your doorstep.",
      backgroundColor: "#00ADEF",
      icon: <PiUsersThreeFill />,
      description2: "24/7 SUPPORT",
    },
    {
      id: 3,
      description1: "HOME DELIVERY",
      paragraph1: "We deliver right to your doorstep.",
      backgroundColor: "#2DCC70",
      icon: <PiUsersThreeFill />,
      description2: "24/7 SUPPORT",
    },
    {
      id: 4,
      description1: "HOME DELIVERY",
      paragraph1: "We deliver right to your doorstep.",
      backgroundColor: "#1BBC9B",
      icon: <PiUsersThreeFill />,
      description2: "24/7 SUPPORT",
    },
    {
      id: 5,
      description1: "HOME DELIVERY",
      paragraph1: "We deliver right to your doorstep.",
      backgroundColor: "#95A5A5",
      icon: <PiUsersThreeFill />,
      description2: "24/7 SUPPORT",
    },
    {
      id: 6,
      description1: "HOME DELIVERY",
      paragraph1: "We deliver right to your doorstep.",
      backgroundColor: "#E84C3D",
      icon: <PiUsersThreeFill />,
      description2: "24/7 SUPPORT",
    },
    {
      id: 7,
      description1: "HOME DELIVERY",
      paragraph1: "We deliver right to your doorstep.",
      backgroundColor: "#F1C40F",
      icon: <PiUsersThreeFill />,
      description2: "24/7 SUPPORT",
    },
    {
      id: 8,
      description1: "HOME DELIVERY",
      paragraph1: "We deliver right to your doorstep.",
      backgroundColor: "#9B59B6",
      icon: <PiUsersThreeFill />,
      description2: "24/7 SUPPORT",
    },
  ];

  return (
    <div className=" flex flex-col gap-[50px] mt-[60px] ml-[40px]">
      {connetc.map((item) => (
        <div
          key={item.id}
          className="w-[95%] h-[140px] flex px-[78px] justify-between items-center p-[10px] m-[10px]"
          style={{ backgroundColor: item.backgroundColor }}
        >
          <div className="flex flex-col justify-between gap-[10px] ">
            
            <h1 className="text-[25px] text-[white] font-bold">
              {item.description1}
            </h1>
            <p className="text-[16px] font-light text-[white]">
              {item.paragraph1}
            </p>
          </div>
          <div className="flex gap-[10px] items-center ">
          <div className="text-[40px] text-[white]">{item.icon}</div>
            <div><h1 className="text-[25px] text-[white] font-bold">
              {item.description2}
            </h1>
            <p className="text-[16px] font-light text-[white]">
              {item.paragraph1}
            </p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopCenter;
