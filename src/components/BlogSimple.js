import React from 'react';
import imgBoxed1 from "../assets/boxedBlog.jpg";
import imgBoxed2 from "../assets/boxedBlog1.jpg";
import imgBoxed3 from "../assets/BoxedBlog2.jpg";
import imgBoxed4 from "../assets/boxedBlog3.jpg";
import imgBoxed5 from "../assets/boxedBlog4.jpg";
import imgBoxed6 from "../assets/boxedBlog5.jpg";
import { Link } from 'react-router-dom';

function BlogSimple() {
  const data = [
    {
      id: 1,
      img: imgBoxed1,
      description: "A Phone Keeps Your Friends Away",
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
      paragraph: "Bring to the table win-win survival strategies",
      paragraph1: "to ensure proactive domination. At the end of",
      paragraph2: "the day, going forward, a new normal that has",
      paragraph3: "evolved from generation X is on the runway",
      paragraph4: "heading towards a streamlined cloud solution."
    }
  ];

  return (
    <div className="flex flex-wrap  px-[50px] mt-[100px] max-600:w-[484px] max-600:flex max-600:justify-center ">
      {data.map((item) => (
        <div key={item.id} className="w-[430px] m-[20px] ">
          <Link to="/">
            <div className="relative w-[430px] h-[235px] bg-center bg-cover transition-opacity duration-300" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </Link>
          <div className="flex flex-col p-[20px] text-center bg-white">
            <Link to="/">
              <h1 className="text-[18px] text-[#333] font-bold mb-[10px] transition-opacity duration-300 hover:opacity-75">{item.description}</h1>
            </Link>
         
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
  );
}

export default BlogSimple;
