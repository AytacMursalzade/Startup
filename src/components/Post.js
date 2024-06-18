import React, { useState } from 'react';
import Slider from 'react-slick';
import imgBoxed1 from "../assets/boxedBlog.jpg";
import imgBoxed2 from "../assets/boxedBlog1.jpg";
import imgBoxed3 from "../assets/BoxedBlog2.jpg";
import imgBoxed4 from "../assets/boxedBlog3.jpg";
import imgBoxed5 from "../assets/boxedBlog4.jpg";
import imgBoxed6 from "../assets/boxedBlog5.jpg";
import { NextArrow, PrevArrow } from '../components/CustomArrow';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Post() {
  const [hoveredId, setHoveredId] = useState(null);
  const [tooltipContent, setTooltipContent] = useState('');

  const data = [
    {
      id: 1,
      img: imgBoxed1,
      description: "A Phone Keeps Your Friends Away",
      date: "September 27 2019",
      time: "10:30 AM",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution."
    },
    {
      id: 2,
      img: imgBoxed2,
      description: "Chromebook Tab 10 review",
      date: "August 9 2019",
      time: "3:45 PM",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution."
    },
    {
      id: 3,
      img: imgBoxed3,
      description: "Alexa isn’t just an assistant",
      date: "July 23 2019",
      time: "1:20 PM",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution."
    },
    {
      id: 4,
      img: imgBoxed4,
      description: "VR Boxes Sales for Black Friday",
      date: "June 9 2019",
      time: "4:10 PM",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution."
    },
    {
      id: 5,
      img: imgBoxed5,
      description: "eBay is now selling wireless plans",
      date: "June 15 2019",
      time: "11:30 AM",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution."
    },
    {
      id: 6,
      img: imgBoxed6,
      description: "Black Friday vs Cyber Monday",
      date: "September 20 2019",
      time: "2:00 PM",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution."
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mt-[100px] relative max-600:w-[454px] max-600:flex max-600:justify-center ">
      <Slider {...settings} className="w-[1350px] ml-[80px] max-600:w-[420px] ">
        {data.map((item) => (
          <div key={item.id} className="p-[4px] shadow-2xl">
            <div className="relative cursor-pointer w-[409px] h-[262px] rounded-t-[9px] bg-center bg-cover transition-opacity duration-300" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="absolute inset-0 bg-black opacity-0 rounded-t-[9px] hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="w-[409px] flex flex-col justify-center items-center gap-[5px] text-center mt-[15px] bg-white">
              <h1 className="text-[18px] cursor-pointer text-[#333] font-bold mb-[5px] transition-opacity duration-300 hover:opacity-75">{item.description}</h1>
              <div
                className="flex justify-center items-center relative"
                onMouseEnter={() => {
                  setHoveredId(item.id);
                  setTooltipContent(item.time);
                }}
                onMouseLeave={() => setHoveredId(null)}
              >
                <p className="text-[#999999] italic text-[15px] cursor-help border-b-2 border-dashed border-[#999999]">{item.date}</p>
                {hoveredId === item.id && (
                  <div className="absolute bottom-full mt-9 w-max bg-[#606060] text-white text-xs rounded py-1 px-2">
                    {tooltipContent}
                  </div>
                )}
              </div>
              <p className="text-[16px] flex justify-center font-light text-[#606060]">
                {item.paragraph}<br />
                {item.paragraph1}<br />
                {item.paragraph2}<br />
                {item.paragraph3}<br />
                {item.paragraph4}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <PrevArrow />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <NextArrow />
      </div>
    </div>
  );
}

export default Post;
