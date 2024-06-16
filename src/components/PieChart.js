import React from "react";
import { Chart } from "react-google-charts";

const chartData = [
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 50],
      ["Remaining", 50],
    ],
    text: "Repeat Customers",
    percent: "50%",
  },
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 75],
      ["Remaining", 25],
    ],
    text: "Referral Work",
    percent: "75%",
  },
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 30],
      ["Remaining", 70],
    ],
    text: "Wide Grip Pushups",
    percent: "30%",
  },
];

const options = {
  pieHole: 0.92,
  is3D: false,
  pieSliceText: "none",
  backgroundColor: "transparent",
  slices: {
    0: { color: "blue" },
    1: { color: "lightgray" },
  },
  legend: "none",
  pieStartAngle: -90,
};

function PieChart() {
  return (
    <>
      <div className="mt-[100px] ">
        <h1 className="text-[32px] font-bold text-[#333] ml-[100px] mb-[5px]">Piecharts</h1>
        <div className="flex justify-around">
          {chartData.map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "380px",
                height: "400px",
                margin: "1%",
              }}
            >
              <Chart
                chartType="PieChart"
                width="100%"
                height="100%"
                data={item.data}
                options={options}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "calc(100% - 20px)",
                  height: "calc(100% - 20px)",
                  borderRadius: "50%",
                  backgroundColor: "transparent",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  pointerEvents: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "10px solid white",
                }}
              >
                <div>
                  <h1 className="text-[55px] font-bold">{item.percent}</h1>
                  <h1 className="text-[17px] text-[#606060]" style={{ margin: 0 }}>{item.text}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PieChart;
