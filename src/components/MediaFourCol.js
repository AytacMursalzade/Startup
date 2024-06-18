import React from 'react';
import Slider from "react-slick";
import imgData from "../assets/col1.jpg";
import imgData1 from "../assets/col2.jpg";
import imgData2 from "../assets/col3.jpg";
import imgData3 from "../assets/col4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MediaFourCol() {
    const data = [
        { id: 1, img: imgData },
        { id: 2, img: imgData1 },
        { id: 3, img: imgData2 },
        { id: 4, img: imgData3 }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
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
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="hidden md:block"> 
                <div className="flex justify-around">
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
            </div>
            <div className="block md:hidden"> 
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="p-4">
                            <img
                                src={item.img}
                                alt={`Image ${item.id}`}
                                className="w-[150px] h-[100px] object-cover"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default MediaFourCol;
