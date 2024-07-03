import React from 'react';
import { FaSignal } from "react-icons/fa";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

function CountersShort() {
    const data = [
        {
            id: 1,
            icon: <FaSignal />,
            numbers: "2,222",
            paragraph: "App Downloads"
        },
        {
            id: 2,
            icon: <BiSolidCoffeeAlt />,
            numbers: "612",
            paragraph: "Coffees Consumed"
        },
        {
            id: 3,
            icon: <FaHeart />,
            numbers: "231",
            paragraph: "Wide Grip Pushups"
        },
        {
            id: 4,
            icon: <FaRegClock />,
            numbers: "458",
            paragraph: "Hours Worked"
        },
    ];

    return (
        <div className='mt-[120px] flex flex-col gap-[50px] '>
            <h1 className='text-[32px] text-[#333333] font-bold ml-[90px]'>Counters</h1>
            <div className='flex-container flex justify-around '>
                {data.map((item, index) => (
                    <div className='count' key={index}>
                        <div className='flex flex-col'>
                            <div className='text-[60px] text-[#333] font-black'>{item.numbers}</div>
                            <div className='flex gap-[10px] items-center text-[20px] text-[#888]'>
                                <div>{item.icon}</div>
                                <div>{item.paragraph}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountersShort;
