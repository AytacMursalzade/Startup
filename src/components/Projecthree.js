import React from 'react';
import imgBoxed1 from "../assets/gadget1.jpg";
import imgBoxed2 from "../assets/boxedBlog1.jpg";
import imgBoxed3 from "../assets/BoxedBlog2.jpg";
import imgBoxed4 from "../assets/boxedBlog3.jpg";
import imgBoxed5 from "../assets/boxedBlog4.jpg";
import imgBoxed6 from "../assets/boxedBlog5.jpg";

function Projecthree() {
    const data = [
        {
            id: 1,
            img: imgBoxed1
        },
        {
            id: 2,
            img: imgBoxed2
        },
        {
            id: 3,
            img: imgBoxed3
        },
        {
            id: 4,
            img: imgBoxed4
        },
        {
            id: 5,
            img: imgBoxed5
        },
        {
            id: 6,
            img: imgBoxed6
        },
    ];

    return (
        <div className="flex flex-wrap ml-[75px] mt-[75px] ">
            {data.map((item) => (
                <div key={item.id} className="relative">
                    <img 
                        src={item.img} 
                        alt={`Project ${item.id}`} 
                        className="w-[457px] h-[457px] transition-shadow duration-300 hover:shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                </div>
            ))}
        </div>
    );
}

export default Projecthree;
