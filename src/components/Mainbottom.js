import React from "react";
import { Link } from "react-router-dom";
import imgPhoneear from "../assets/earphones.png";
import imgWorld from "../assets/deliveries_icons.png";
import imgCar from "../assets/money_icons.png";
import imgBuying from "../assets/tracking_icons.png";

function Mainbottom({
  colorBg,
  heightMain,
  mtTop,
}) {
  const data = [
    {
      id: 1,
      img: imgPhoneear,
      description: "Call Center",
      paragraph: "Completely synergize",
    },
    {
      id: 2,
      img: imgWorld,
      description: "Order Tracking",
      paragraph: "Objectively empowered",
    },
    {
      id: 3,
      img: imgCar,
      description: "Fastest Delivery",
      paragraph: "Efficiently unleash media",
    },
    {
      id: 4,
      img: imgBuying,
      description: "Instant Buying",
      paragraph: "Podcasting operational",
    },
  ];

  return (
    <div className="trackingMain">
      <div
        style={{
          backgroundColor: colorBg,
          height: heightMain,
          marginTop: mtTop,
        }}
        className="tracking flex gap-[145px] mt-[30px] justify-center items-center"
      >
        {data.map((item) => (
          <Link key={item.id} to="/">
            <div className="flex gap-[25px]">
              <img width={50} src={item.img} alt={item.description} />
              <div>
                <h1 className="font-bold text-[20px]">{item.description}</h1>
                <p className="text-[14px]">{item.paragraph}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Mainbottom;
