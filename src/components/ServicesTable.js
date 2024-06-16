import React from 'react';
import imgServices1 from "../assets/sercice1.png";
import imgServices2 from "../assets/services2.png";
import imgServices3 from "../assets/services3.png";

function ServicesTable() {
    const data = [
        {
            id: 1,
            img: imgServices1,
            description: "PREMIUM WIDGETS",
            paragraph: "We always provide Quality Services.",
            paragraph1: "You dynamically monetize",
            paragraph2: "synergistic."
        },
        {
            id: 2,
            img: imgServices2,
            description: "CUSTOM WEBPAGE",
            paragraph: "We always provide Quality Services.",
            paragraph1: "You dynamically monetize",
            paragraph2: "synergistic."
        },
        {
            id: 3,
            img: imgServices3,
            description: "USER FRIENDLY",
            paragraph: "We always provide Quality Services.",
            paragraph1: "You dynamically monetize",
            paragraph2: "synergistic."
        },
    ];

    return (
        <div>
            <h1 className='text-[32px] font-bold text-[#333] mt-[100px] ml-[75px] mb-[20px]'>Services</h1>
            <div className='flex justify-around flex-wrap'>
                {data.map((item) => (
                    <div key={item.id} className='w-[30%] mb-[20px]'>
                        <div className='flex flex-col items-center'>
                            <img src={item.img} alt="service" className='service-img mb-[10px]' />
                            <h1 className='text-[18px] font-bold text-[#333] mb-[10px]'>{item.description}</h1>
                            <p className='text-center font-light text-[16px] text-[#242424]'>
                                {item.paragraph}<br />
                                {item.paragraph1}<br />
                                {item.paragraph2}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesTable;
