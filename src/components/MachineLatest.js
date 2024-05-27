import React from "react";
import { FaGavel } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MachineLatest({
  src,
  FooterH1,
  FooterH2,
  display0,
  FooterP1,
  FooterP2,
  nameAuction,
  GavelColorshop
}) {
  const FootrMachine = {
    display: display0 ? "block" : "none",
  };
  return (
    <div>
      <div
        style={FootrMachine}
        className="flex flex-col items-center justify-center mt-[160px]"
      >
        <h1 className="font-bold text-[34px] text-center">{nameAuction}</h1>

        <div className="flex items-center justify-center">
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_right"></div>
          <span
            style={{ color: GavelColorshop }}
            className="font-bold  text-[27px]"
          >
            <FaGavel />
          </span>
          <div className="border border-t-[2px] border-[#D8D7DC] w-[230px] mx-2 arrow_left"></div>
        </div>
      </div>
      <div className="mx-[100px] mt-[50px] ">
        <div className="flex justify-around ">
          <div className="w-[547px] h-[279px] flex gap-[30px]">
            <div>
              <img width={150} src={src} alt="latestnews" />
            </div>
            <div className="flex flex-col gap-[10px] pt-[25px] ">
              <h1 className="text-[#484848] text-[20px] font-bold ">
                {FooterH1}
                <br />
                {FooterH2}
              </h1>
              <p className="text-[#606060] text-[14px] font-light ">
                {FooterP1}
                <br />
                {FooterP2}
              </p>
              <Link to="/">
                <button className="px-[25px] py-[8px] hover:bg-[white] hover:text-[#606060] text-white font-bold rounded-[9px] bg-[yellow] ">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[547px] h-[279px] flex gap-[30px]">
            <div>
              <img width={150} src={src} alt="latestnews" />
            </div>
            <div className="flex flex-col gap-[10px] pt-[25px] ">
              <h1 className="text-[#484848] text-[20px] font-bold ">
                {FooterH1}
                <br />
                {FooterH2}
              </h1>
              <p className="text-[#606060] text-[14px] font-light ">
                {FooterP1}
                <br />
                {FooterP2}
              </p>
              <Link to="/">
                <button className="px-[25px] py-[8px] hover:bg-[white] hover:text-[#606060] text-white font-bold rounded-[9px] bg-[yellow] ">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[547px] h-[279px] flex gap-[30px]">
            <div>
              <img width={150} src={src} alt="latestnews" />
            </div>
            <div className="flex flex-col gap-[10px] pt-[25px] ">
              <h1 className="text-[#484848] text-[20px] font-bold ">
                {FooterH1}
                <br />
                {FooterH2}
              </h1>
              <p className="text-[#606060] text-[14px] font-light ">
                {FooterP1}
                <br />
                {FooterP2}
              </p>
              <Link to="/">
                <button className="px-[25px] py-[8px] hover:bg-[white] hover:text-[#606060] text-white font-bold rounded-[9px] bg-[yellow] ">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineLatest;
