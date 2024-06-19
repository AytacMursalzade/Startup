import React from 'react';
import Slider from "react-slick";
import imgData from "../assets/col1.jpg";
import imgData1 from "../assets/col2.jpg";
import imgData2 from "../assets/col3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MediaThree() {
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
        
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
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
                style={{ ...style, display: "block", color: "gray", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="mt-8 mx-auto w-[90%] max-w-[600px]">
            <Slider {...settings}>
                {data.map((item) => (
                    <div key={item.id} className="px-2">
                        <div className="relative pt-[80px] w-full h-64">
                            <img
                                src={item.img}
                                alt={`Slide ${item.id}`}
                                className="w-[150px] h-[100px] object-cover"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MediaThree;
