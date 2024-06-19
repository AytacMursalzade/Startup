import React from 'react';
import imgBoxed1 from "../assets/gadget1.jpg";
import imgBoxed2 from "../assets/boxedBlog1.jpg";
import imgBoxed3 from "../assets/BoxedBlog2.jpg";
import imgBoxed4 from "../assets/boxedBlog3.jpg";
import imgBoxed5 from "../assets/boxedBlog4.jpg";
import imgBoxed6 from "../assets/boxedBlog5.jpg";

function BlogMin() {

    const data = [
        {
            id:1,
            img:imgBoxed1
        },
        {
            id:2,
            img:imgBoxed2
        },
        {
            id:3,
            img:imgBoxed3
        },
        {
            id:4,
            img:imgBoxed4
        },
        {
            id:5,
            img:imgBoxed5
        },
        {
            id:6,
            img:imgBoxed6
        },
    ]

    return (
        <div className="flex flex-wrap px-[70px] mt-[70px] max-600:w-[453px] max-600:flex max-600:flex-wrap max-600:px-[15px]  ">
            {data.map((item) => (
                <div key={item.id} className="w-1/3 p-4 relative max-600:flex  max-600:w-1/2 max-600:gap-1 ">
                    <div
                        className="h-64 bg-cover bg-center max-600:w-[217px] max-600:h-[119px] "
                        style={{
                            backgroundImage: `url(${item.img})`
                        }}
                    >
                        <div className="w-[428px] h-[255px] absolute inset-4 mt-[1px] bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 max-600:w-[179px] max-600:h-[119px] "></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogMin;
