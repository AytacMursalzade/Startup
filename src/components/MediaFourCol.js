import React from 'react';
import imgData from "../assets/col1.jpg";
import imgData1 from "../assets/col2.jpg";
import imgData2 from "../assets/col3.jpg";
import imgData3 from "../assets/col4.jpg";

function MediaFourCol() {
    const data = [
        {
            id: 1,
            img: imgData
        },
        {
            id: 2,
            img: imgData1
        },
        {
            id: 3,
            img: imgData2
        },
        {
            id: 4,
            img: imgData3
        },
    ];

    return (
        <div className="flex justify-around mt-[75px] mr-[180px] mx-auto w-[90%]">
            {data.map((item) => (
                <div key={item.id} className="p-4">
                    <img
                        src={item.img}
                        alt={`Image ${item.id}`}
                        className="w-[150px] h-[100px] object-cover"
                    />
                </div>
            ))}
        </div>
    );
}

export default MediaFourCol;
