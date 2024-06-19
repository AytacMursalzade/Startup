import React from 'react';
import Slider from "react-slick";
import imgData from "../assets/col1.jpg";
import imgData1 from "../assets/col2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MediaTwoCol() {
    const data = [
        {
            id: 1,
            img: imgData
        },
        {
            id: 2,
            img: imgData1
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: "gray", background: "transparent" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="mt-8 mx-auto w-[90%] max-600:w-[484px] ">
            <Slider {...settings} className=' max-600:w-[448px]'>
                {data.map((item) => (
                    <div key={item.id} className="px-2 ">
                        <div className="relative pt-[80px] w-full h-64">
                            <img
                                src={item.img}
                                alt={`Slide ${item.id}`}
                                className="w-[150px] h-[100px] object-cover max-600:w-[150px] max-600:h-[100px] "
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MediaTwoCol;
