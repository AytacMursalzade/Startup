import React, { useState } from "react";

const ProgressCart = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["MY CART", "CHECKOUT", "ORDER SUMMARY"];

  return (
    <div>
      
      <div className="flex ml-[150px] mt-[70px] max-600:w-[450px] max-600:flex max-600:ml-[10px] ">
        <ol id="progress-bar">
          {steps.map((step, index) => {
            let className = "";
            if (index < currentStep) {
              className = "step-done";
            } else if (index === currentStep) {
              className = "step-active";
            } else {
              className = "step-todo";
            }
            return (
              <li key={index} className={className}>
                {step}
              </li>
            );
          })}
        </ol>
      </div>
      <div className="mt-[170px] ml-[100px] max-600:ml-[40px] ">
        <button className="w-[190px] h-[44px] font-medium rounded-[30px] hover:bg-[white] hover:text-[#2695FF] text-[white] bg-[#2695FF] ">RETURN TO SHOP</button>
      </div>
    </div>
  );
};

export default ProgressCart;
