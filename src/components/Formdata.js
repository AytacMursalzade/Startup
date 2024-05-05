import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    lastname: "",
    subject: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-[680px]  p-6 bg-white shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between px-[15px]  ">
          
          <div className="flex flex-col gap-[82px] ">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-3 py-2 mt-1 input focus:outline-none focus:ring-0"
              placeholder="First Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-3 py-2 mt-1  input focus:outline-none focus:ring-0"
              placeholder="Your Email"
              required
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="px-3 py-2 mt-1 input focus:outline-none focus:ring-0"
              placeholder="Your Message"
              rows="4"
              required
            />
          </div>
          <div className="flex flex-col gap-[82px]">
            <input
              type="lastname"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="px-3 py-2 mt-1  input focus:outline-none focus:ring-0"
              placeholder="Last Name"
              required
            />
            <input
              type="subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="px-3 py-2 mt-1 input focus:outline-none focus:ring-0"
              placeholder="Subject"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center gap-[10px] px-3 font-semibold w-[100%] rounded-[45px] text-white bg-[#2695FF] py-3  mt-1 input"
        >
         <div> SEND MESSAGE</div>
          <div className="mt-[4px] "><FaArrowRightLong /></div>
        </button>
      </form>
    </div>
  );
}

export default Form;
