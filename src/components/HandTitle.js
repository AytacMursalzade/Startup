import React from "react";
import Slider from "react-slick";
import titleImg from "../assets/human.jpg";
import titleImg1 from "../assets/human2.jpg";
import titleImg2 from "../assets/human3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGavel } from "react-icons/fa";

function HandTitle() {
  const title = [
    {
      id: 1,
      img: titleImg,
      description: "Yahoo Inc. is an American multinational",
      description1: "Internet corporation headquartered in",
      description2: "Sunnyvale, California. It is globally known for",
      description3: "its Web portal, search engine Yahoo Search.",
      imgdesc: "Martin Culic",
      paragraph: "Digital Marketer",
    },
    {
      id: 2,
      img: titleImg1,
      description: "Google is an American multinational",
      description1: "technology company specializing in",
      description2: "Internet-related services and products. These",
      description3: "include online advertising.",
      imgdesc: "Naren Doe",
      paragraph: "Digital Marketer",
    },
    {
      id: 3,
      img: titleImg2,
      description: "Yahoo Inc. is an American multinational",
      description1: "Internet corporation headquartered in",
      description2: "Sunnyvale, California. It is globally known for",
      description3: "its Web portal, search engine Yahoo Search.",
      imgdesc: "Martin Culic",
      paragraph: "Digital Marketer",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 8,
    draggable: true,
  };

  return (
    <div className="w-full h-[650px] bg-[#FFF0FD] flex flex-col gap-[35px] ">
      
      <div className="topic flex flex-col mt-[85px] items-center justify-center">
        <h1 className="font-bold text-[34px]">LATEST PRODUCTS</h1>
        <div className="flex items-center justify-center mt-[15px]">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span className="font-bold text-[#C16BB6] text-[27px]">
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>
      <div className=" flex items-center justify-center relative">
        <div className="container" style={{ overflowX: "hidden" }}>
          <Slider {...settings} className="w-full">
            {title.map((item) => (
              <div
                key={item.id}
                className="w-full flex justify-center items-center"
              >
                <div className="flex flex-col items-center p-4">
                  <div className="text-[#3d3c3c] bg-[white] px-[20px] py-[20px] rounded-[45px] font-normal text-[16px] mb-4">
                    <p>{item.description}</p>
                    <p>{item.description1}</p>
                    <p>{item.description2}</p>
                    <p>{item.description3}</p>
                  </div>
                  <div className="flex items-center gap-[18px]">
                    <div className="w-[89px] h-[89px] rounded-full overflow-hidden">
                      <img
                        src={item.img}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[20px] text-[#484848] font-bold">
                        {item.imgdesc}
                      </div>
                      <div className="text-[14px] text-[#999999] font-light">
                        {item.paragraph}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HandTitle;
