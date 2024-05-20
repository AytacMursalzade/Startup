import React from "react";
import { Link } from "react-router-dom";

function HoveredBook() {
  return (
    <>
      <div className="posterShow flex gap-[20px] ">
        <div className="posterYelGree ">
          <Link>
            <div className="bulletBook relative w-[640px] h-[707px] ml-[75px]">
              <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px]  ">
                <div className="flex flex-col">
                  <h1 className="font-extrabold text-[30px] text-white absolute bottom-[80px] ">
                    Collectable Comic Books
                  </h1>
                  <p className="text-white absolute bottom-[50px] font-light">20 Products</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-[19px]">
          <div className="posterTwo flex gap-[19px] ">
            <Link>
              <div className="droneBook relative w-[340px] h-[340px]">
                <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                  <div className="flex flex-col">
                    <h1 className="font-extrabold text-[30px] text-white mt-[50px] absolute bottom-[80px] left-[19px] ">
                      Old Comic Books
                    </h1>
                    <p className="text-white font-light absolute bottom-[50px] left-[19px] ">29 Products</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="handleearphoneBook relative w-[340px] h-[340px] ml-[5px] ">
                <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                  <div className="flex flex-col">
                    <h1 className="font-extrabold absolute left-[19px] bottom-[80px] text-[30px] text-white mt-[50px] ">
                      Literature Books
                    </h1>
                    <p className="text-white font-light absolute bottom-[50px] left-[19px] ">29 Products</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex gap-[19px]">
            <Link>
              <div className="chargerBook relative w-[340px] h-[340px]  mt-[-70px] ">
                <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                  <div className="flex flex-col">
                    <h1 className="font-extrabold absolute left-[19px] bottom-[80px] text-[30px] text-white mt-[50px] ">
                      Develop Personally
                    </h1>
                    <p className="text-white absolute left-[19px] bottom-[50px] font-light">29 Products</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="charBook relative w-[340px] h-[340px] ml-[5px] mt-[-70px] ">
                <div className="flex flex-col gap-[20px] mt-[77px] ml-[53px] ">
                  <div className="flex flex-col">
                    <h1 className="font-extrabold absolute left-[19px] bottom-[80px] text-[30px] text-white mt-[50px] ">
                      Develop Personally
                    </h1>
                    <p className="text-white absolute left-[19px] bottom-[50px] font-light">29 Products</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HoveredBook;
