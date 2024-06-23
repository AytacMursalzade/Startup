import React from "react";
import { Link } from "react-router-dom";
import imageStock1 from "../assets/self5.jpg";
import imageStock2 from "../assets/lock2.jpg";

function GovernBottm() {
  const data = [
    {
      id: 1,
      img: imageStock1,
      description: "Maximise Your Assets?",
      paragraph: "Bring to the table win-win survival strategies to ensure",
      paragraph1: "proactive domination. At the end of the day, going",
      paragraph2: "forward, a new normal that…",
      location: "Government",
      date: "| September 21, 2021"
    },
    {
      id: 2,
      img: imageStock2,
      description: "Looking Relate Deduction?",
      paragraph: "Bring to the table win-win survival strategies to ensure",
      paragraph1: "proactive domination. At the end of the day, going",
      paragraph2: "forward, a new normal that…",
      location: "Government",
      date: "| September 21, 2021"
    },
  ];

  return (
    <div className="flex flex-col mb-[100px] mt-[100px] ">
      <h1 className="text-[32px] px-[96px]  text-[#252525] font-bold">Popular Posts</h1>
      <div className="finishBtn flex justify-around px-[95px] ">
        {data.map((item) => (
          <div key={item.id} className="finishParag mt-[40px] flex gap-[12px] ">
            <img className="w-[280px] h-[265px]" width={200} src={item.img} atl="government" />
            <div className="h-[280px] flex flex-col justify-around ">
              <div className="flex flex-col px-[10px] w-[380px] gap-[12px] pb-[5px] ">
                <h1 className="text-[#242424] text-[20px] hover:text-[#4ad493] font-bold ">
                  {item.description}
                </h1>
                <p className="text-[#666666] text-[14px] ">{item.paragraph}<br/>{item.paragraph1}<br/>{item.paragraph2} </p>
              </div>
              <div className="w-[330px] px-[10px] flex justify-between pt-[15px] border border-t-[gray] ">
                <p className="flex gap-[5px] justify-center items-center ">
                  <Link to="/">
                    <p className="cursor font-bold text-[#4AD493] ">{item.location}</p>
                  </Link>
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovernBottm;
