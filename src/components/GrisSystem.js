import React from 'react';
import memberImg1 from '../assets/memberShip1.png';
import memberImg2 from '../assets/memberShip2.png';
import memberImg3 from '../assets/memberShip3.png';
import memberImg4 from '../assets/memberShip4.png';
import memberImg5 from '../assets/memberShip5.png';

function GrisSystem() {
  const data = [
    {
      id: 1,
      img: memberImg1,
      name: "Melinda Steel",
    },
    {
      id: 2,
      img: memberImg2,
      name: "Alex Dewes",
    },
    {
      id: 3,
      img: memberImg3,
      name: "Andy More",
    },
    {
      id: 4,
      img: memberImg4,
      name: "Matt Mayer",
    },
    {
      id: 5,
      img: memberImg5,
      name: "Dan Tod",
    },
  ];

  return (
    <div><h1 className='text-[32px] text-[#333] ml-[75px] mb-[20px] mt-[120px] font-bold '>Client Grid</h1>
    <div className="containerBG">
        
      {data.map((item) => (
        <div
          key={item.id}
          className="member-card"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="overlay"></div>
          <div className="member-name">{item.name}</div>
        </div>
      ))}
    </div></div>
  );
}

export default GrisSystem;
