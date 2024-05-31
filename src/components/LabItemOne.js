import React from "react";
import LabItem1 from "../assets/Labitem1.png";
import LabItem2 from "../assets/Labitem2.png";
import LabItem3 from "../assets/Labitem3.png";

function LabItemOne() {
   
    const data = [
        {   
            is:1,
            img:LabItem1,
            description:"Medical Equipment",
            paragraph1: "Lorem ipsum Dolor Sit Equjenj,",
            paragraph2: "Lorem ipsum Dolor Sit Equ .",
        },
        {   
            is:2,
            img:LabItem2,
            description:"Lab Equipment",
            paragraph1: "Lorem ipsum Dolor Sit Equjenj,",
            paragraph2: "Lorem ipsum Dolor Sit Equ .",
        },
        {   
            is:3,
            img:LabItem3,
            description:"Analytical Equipment",
            paragraph1: "Lorem ipsum Dolor Sit Equjenj,",
            paragraph2: "Lorem ipsum Dolor Sit Equ .",
        },
    ]

    

  return (
    <div>
      <ul className="flex justify-around px-[75px] mt-[100px] ">
                {data.map((item) => {
                    const LabitemImg = {
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }

                    return (
                        <li key={item.id}>
                            <div className="flex">
                                <div style={LabitemImg} className="w-[436px]  h-[232px] flex flex-col justify-center gap-[15px] pl-[200px] ">
                                    <h1 className="text-[#000000] text-[20px] font-bold ">{item.description}</h1>
                                    <p className="text-[#606060] font-light text-[14px] ">{item.paragraph1}<br/>{item.paragraph2}</p>
                                    <button className="w-[138px] h-[38px] rounded-[45px] text-white bg-[#565CE0] font-bold hover:opacity-80">VIEW MORE</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}


export default LabItemOne;
