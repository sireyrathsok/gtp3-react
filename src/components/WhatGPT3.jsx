import React from "react";
import { WhatGPT3List } from "../constants";

const WhatGPT3 = () => {
  return (
    <>
      <p className="absolute mt-24 bg-2layer-opacity "></p>

      <div className=" mt-24 pt-16  px-10 md:px-14   relative  z-30 bg-gradient-to-b bg-primary  ">
        <p className=" horizontal-line"></p>
        <div className=" lg:flex lg:justify-between ">
          <p className=" Feature-header mt-2 lg:w-4/12"> What is GPT-3</p>
          <p className=" text-Content mt-3 lg:w-8/12 lg:max-w-2xl  ">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className=" my-24 lg:flex lg:justify-between">
          <p className="text-head2 lg:max-w-md ">
            The possibilities are beyond your imagination
          </p>
          <p className=" lg:text-end lg:w-2/5 mt-4 lg:relative lg:ring-0  font-manrope text-transparent bg-clip-text bg-gradient-to-r from-mxCol1 to-mxCol2 ">
            Explore The Library
          </p>
        </div>

        {/* -------------WhatGPT3 List-------- */}
        <ul className=" lg:flex md:flex justify-between   ">
          {WhatGPT3List.map((nav) => {
            return (
              <div
                className={` lg:max-w-xs ${
                  nav.id === "Education" ? "pb-6" : ""
                }   ${nav.id === "Knowledge" ? " lg:mx-16 md:mx-8" : ""}`}
              >
                <p className="  horizontal-line my-3"></p>
                <li className="  Feature-header ">{nav.title}</li>
                <li className=" my-10 w-full text-Content">{nav.des}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default WhatGPT3;
