import React, { useState } from 'react';
import imgBoxed1 from "../assets/gadget1.jpg";
import imgBoxed2 from "../assets/boxedBlog1.jpg";
import imgBoxed3 from "../assets/BoxedBlog2.jpg";
import imgBoxed4 from "../assets/boxedBlog3.jpg";
import imgBoxed5 from "../assets/boxedBlog4.jpg";
import imgBoxed6 from "../assets/boxedBlog5.jpg";
import { Link } from 'react-router-dom';

function BlogFiltered() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const data = [
    {
      id: 1,
      img: imgBoxed1,
      description: "A Phone Keeps Your Friends Away",
      name: "James Colins",
      type: "June 9, 2019",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution.",
      concept: "Gadgets"
    },
    {
      id: 2,
      img: imgBoxed2,
      description: "Chromebook Tab 10 review",
      name: "James Colins",
      type: "September 27, 2019",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution.",
      concept: "Smart"
    },
    {
      id: 3,
      img: imgBoxed3,
      description: "Alexa isn’t just an assistant",
      name: "James Colins",
      type: "August 9, 2019",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution.",
      concept: "Smart"
    },
    {
      id: 4,
      img: imgBoxed4,
      description: "VR Boxes Sales for Black Friday",
      name: "James Colins",
      type: "June 9, 2019",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution.",
      concept: "Smart"
    },
    {
      id: 5,
      img: imgBoxed5,
      description: "eBay is now selling wireless plans",
      name: "James Colins",
      type: "July 23, 2019",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution.",
      concept: "Technology"
    },
    {
      id: 6,
      img: imgBoxed6,
      description: "Black Friday vs Cyber Monday",
      name: "James Colins",
      type: "May 24, 2019",
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution.",
      concept: "Technology"
    }
  ];

  const categories = ["All", "Gadgets", "Smart", "Technology"];

  const filteredData = selectedCategory === "All" ? data : data.filter(item => item.concept === selectedCategory);

  return (
    <div className="p-5 ml-[45px] mt-[75px] ">
      <div className="flex justify-center mb-5">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 mx-2 border-b-4 ${selectedCategory === category ? 'border-blue-500 text-blue-500' : 'border-transparent text-black'} rounded-none`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-start">
        {filteredData.map((item) => (
          <div key={item.id} className="w-[430px] m-[20px] shadow-2xl">
            <Link to="/">
              <div className="relative w-[430px] h-[235px] bg-center bg-cover transition-opacity duration-300" style={{ backgroundImage: `url(${item.img})` }}>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </Link>
            <div className="flex flex-col p-[20px] text-center bg-white">
              <Link to="/">
                <h1 className="text-[18px] text-[#333] font-bold mb-[10px] transition-opacity duration-300 hover:opacity-75">{item.description}</h1>
              </Link>
              <div className='flex justify-center items-center gap-[8px]'>
                <p className="flex gap-[8px] items-center  mb-[10px]">By</p>
                <p className='text-[#2695ff] text-[14px]'><Link to="/">{item.name}</Link> //</p>
                <p className='text-[#606060] text-[14px]'><Link to="/">{item.type}</Link></p>
              </div>
              <p className='text-[16px] font-light text-[#606060]'>
                {item.paragraph}<br />
                {item.paragraph1}<br />
                {item.paragraph2}<br />
                {item.paragraph3}<br />
                {item.paragraph4}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogFiltered;
