import React from "react";

const chartData = [
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 50],
      ["Remaining", 50]
    ],
    title: "50%",
    completedColor: "#FE5000",
    remainingColor: "#E5E5E5"
  },
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 60],
      ["Remaining", 40]
    ],
    title: "34%",
    completedColor: "#1E73BE",
    remainingColor: "#E5E5E5"
  },
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 30],
      ["Remaining", 70]
    ],
    title: "77%",
    completedColor: "#DD9933",
    remainingColor: "#E5E5E5"
  },
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 70],
      ["Remaining", 30]
    ],
    title: "Marketing 22%",
    completedColor: "#FE5000",
    remainingColor: "#E5E5E5"
  },
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 80],
      ["Remaining", 20]
    ],
    title: "SEO 55%",
    completedColor: "#1E73BE",
    remainingColor: "#E5E5E5"
  },
  {
    data: [
      ["Task", "Percentage"],
      ["Completed", 40],
      ["Remaining", 60]
    ],
    title: "Prototyping 78%",
    completedColor: "#DD9933",
    remainingColor: "#E5E5E5"
  },
];

function BarTables() {
  return (
    <div className="mt-[100px]">
      <h1 className='text-[32px] ml-[80px] font-bold text-[#333] mb-[20px]'>Bar Charts</h1>
      <div className="flex justify-evenly gap-[25px]">
        <div className="flex flex-col items-center w-[30%]">
          {chartData.slice(0, 3).map((item, index) => (
            <div key={index} className="mb-[20px]">
              <h2 className="text-[16px] text-[#333] font-normal  mb-[10px]">{item.title}</h2>
              <div style={{ display: "flex", width: "650px", height: "10px", marginBottom: "10px" }}>
                <div style={{ width: `${item.data[1][1]}%`, backgroundColor: item.completedColor, height: "100%", borderRadius: "5px 0 0 5px" }}></div>
                <div style={{ width: `${item.data[2][1]}%`, backgroundColor: item.remainingColor, height: "100%", borderRadius: "0 5px 5px 0" }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center w-[30%]">
          {chartData.slice(3).map((item, index) => (
            <div key={index} className="mb-[20px]">
              <h2 className="text-[16px] text-[#333] font-normal  mb-[10px]">{item.title}</h2>
              <div style={{ display: "flex", width: "650px", height: "10px", marginBottom: "10px" }}>
                <div style={{ width: `${item.data[1][1]}%`, backgroundColor: item.completedColor, height: "100%", borderRadius: "5px 0 0 5px" }}></div>
                <div style={{ width: `${item.data[2][1]}%`, backgroundColor: item.remainingColor, height: "100%", borderRadius: "0 5px 5px 0" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BarTables;
