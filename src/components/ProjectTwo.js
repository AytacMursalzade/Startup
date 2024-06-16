import React from 'react';
import imageP1 from "../assets/boxedBlog.jpg";
import imageP2 from "../assets/boxedBlog1.jpg";
import imageP3 from "../assets/BoxedBlog2.jpg";
import imageP4 from "../assets/boxedBlog3.jpg";
import imageP5 from "../assets/boxedBlog4.jpg";
import imageP6 from "../assets/boxedBlog5.jpg";

function ProjectTwo() {
    const data = [
        { id: 1, img: imageP1 },
        { id: 2, img: imageP2 },
        { id: 3, img: imageP3 },
        { id: 4, img: imageP4 },
        { id: 5, img: imageP5 },
        { id: 6, img: imageP6 },
    ];

    const firstColumn = data.slice(0, 3);
    const secondColumn = data.slice(3, 6);

    return (
        <div className="mt-[75px] mx-auto w-[90%] flex justify-around gap-[28px] ">
            <div className="flex flex-col gap-8">
                {firstColumn.map((item) => (
                    <div key={item.id} className="relative">
                        <img src={item.img} alt={`Project ${item.id}`} className="w-[690px] h-[421px]" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-8">
                {secondColumn.map((item) => (
                    <div key={item.id} className="relative">
                        <img src={item.img} alt={`Project ${item.id}`} className="w-[690px] h-[390px]" />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectTwo;
