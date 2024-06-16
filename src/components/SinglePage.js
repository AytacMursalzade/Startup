import React from "react";
import { Link } from "react-router-dom";
import imgSingle from "../assets/iphone.jpg";
import img1 from "../assets/removeBG.png"; 
import img2 from "../assets/removeBG1.png";
import img3 from "../assets/removeBG2.png";
import { LuTwitter } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";

function SinglePage() {
    const icons = [
        {
            id: 1,
            icon: <LuTwitter />,
            backgroundColor: "#0093D6"
        },
        {
            id: 2,
            icon: <RiFacebookCircleLine />,
            backgroundColor: "#3F51B5"
        },
        {
            id: 3,
            icon: <FaWhatsapp />,
            backgroundColor: "#3D9440"
        },
        {
            id: 4,
            icon: <FaPinterestP />,
            backgroundColor: "#A10718"
        },
        {
            id: 5,
            icon: <FaLinkedinIn />,
            backgroundColor: "#1A7BAA"
        },
        {
            id: 6,
            icon: <FaTelegramPlane />,
            backgroundColor: "#1A7BAA"
        },
        {
            id: 10,
            icon: <MdLocalPostOffice />,
            backgroundColor: "#D44F42"
        }
    ];

    const data = [
        {
            id: 1,
            paragraph: "The Ragdoll is a cat breed with blue eyes and a distinct colorpoint coat. It is a large",
            paragraph1: "and muscular semi-longhair cat with a soft and silky coat. Like all long haired cats,",
            paragraph2: "Ragdolls need grooming to ensure their fur does not mat.",
            bold: "Sold for:",
            price: "$600.00",
            categories: [
                "Cases & Protection ,",
                "Console Gaming ,",
                "Data Cables ,",
                "Mobile Chargers ,",
                "Mobile Phones ,",
                "Phones ,",
                "Power Banks ,",
                "Selfie Sticks ,",
                "Tablets ,",
                "Tablets Protection ,"
            ],
            tags: ["black friday", "sales"]
        }
    ];

    const additionalImages = [img1, img2, img3];

    return (
        <div className="flex justify-evenly mt-[80px] ">
            <div className="w-[530px] h-[550px] shadow-2xl">
                <Link to="/">
                    <div className="zoom-container">
                        <div className="zoom-content">
                            <img src={imgSingle} alt="singlepage" />
                        </div>
                    </div>
                </Link>
                <div className="flex mt-8">
                    {additionalImages.map((image, index) => (
                        <Link to="/" key={index}>
                            <img src={image} alt={`additional-${index}`} className="w-[120px] h-[120px]" />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-[718px] ">
                {data.map((item) => (
                    <div key={item.id} className="w-[718px] h-[300px] flex flex-col justify-evenly gap-[15px] ">
                        <div className="border-b-2 font-light text-[16px] text-[#606060] border-gray-500">
                            <p>
                                {item.paragraph}
                                <br />
                                {item.paragraph1}
                                <br />
                                {item.paragraph2}
                            </p>
                            <div className="flex gap-[5px] mb-[30px] mt-[20px] font-bold text-[24px] text-[#242424] ">
                                <p>{item.bold}</p>
                                <h1>{item.price}</h1>
                            </div>
                        </div>
                        <div className="text-[#606060] flex flex-col">
                            <input
                                className="outline-none min-w-[150px] py-[10px]"
                                type="text"
                                placeholder="Item condition:Used"
                            />
                            <input
                                className="outline-none min-w-[150px] py-[10px]"
                                type="text"
                                placeholder="SKU:BF003"
                            />
                        </div>
                        <div className="flex flex-wrap gap-[2px] ">
                            <h1>Categories:</h1>
                            {item.categories.map((category, index) => (
                                <Link to="/" key={index}>
                                    <p className="text-[#484848] font-bold hover:text-[#0093D6] ">{category}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-[12px]">
                            <h1>Tags:</h1>
                            {item.tags.map((tag, index) => (
                                <Link to="/" key={index}>
                                    <p className="text-[#484848]  font-bold hover:text-[#0093D6] ">{tag}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-[10px]">
                            {icons.map((iconItem) => (
                                <button
                                    className="w-[40px] text-[white] h-[26px] rounded-[45px] flex justify-center items-center "
                                    key={iconItem.id}
                                    style={{ backgroundColor: iconItem.backgroundColor }}
                                >
                                    {iconItem.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SinglePage;
