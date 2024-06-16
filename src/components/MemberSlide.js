import React from 'react';
import memberImg1 from '../assets/memberShip1.png';
import memberImg2 from '../assets/memberShip2.png';
import memberImg3 from '../assets/memberShip3.png';


function MemberSlide() {
  const data = [
    {
      id: 1,
      img: memberImg1,
      name: "Melinda Steel",
      topic:"Manager"
    },
    {
      id: 2,
      img: memberImg2,
      name: "Alex Dewes",
      topic:"Front end developer"
    },
    {
      id: 3,
      img: memberImg3,
      name: "Andy More",
      topic:"Accounting"
    }
  ];

  return (
    <div><h1 className='text-[32px] text-[#333] ml-[75px] mb-[20px] mt-[120px] font-bold '>Member Slider</h1>
    <div className="flex justify-around ">
        
      {data.map((item) => (
        <div><div
        key={item.id}
        className="member-card rounded-[50%] "
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <div className="overlay"></div>
        <div className="member-name">{item.name}</div>
        
      </div>
      <div className='text-center mt-[20px] text-[17px] text-[#888] italic '>{item.topic}</div></div>
      ))}
    </div></div>
  );
}

export default MemberSlide;
