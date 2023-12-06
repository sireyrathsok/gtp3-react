import React from "react";
import ai from "../assets/ai.png";
import people from "../assets/people.png";

const Hero = () => {
  return (
    <div className=" mt-12  ">
      <div className=" flex flex-1 justify-between ">
        <div className="  ">
          <div className=" bg-blue-200 opacity-10 absolute -z-0 blur-2xl w-150  h-150 -left-60 -top-60"></div>
          <div className=" mt-8">
            <p className=" bg-white  sm:text-head1  text-head2 justify-center">
              Let’s Build Something amazing with GPT-3 OpenAI
            </p>

            <p className="  justify-center my-12 xl:text-2xl  text-lg text-Content">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>

            <div></div>
            <div className="  flex flex-1 mt-2 relative z-30 ">
              <input
                type="text"
                className=" bg-slate-700 relative  font-semibold  font-manrope  h-16 md:h-12  w-9/12 rounded-l-lg px-4"
                placeholder="Dicover Here"
              />
              <button className=" bg-oragne text-white font-semibold  font-manrope w-3/12 rounded-r-lg">
                Submit
              </button>
            </div>
            <div className="mt-6 sm:flex  text-white items-center justify-between">
              <img
                src={people}
                alt="people"
                className="  hidden sm:flex mr-5 relative z-30"
              />
              <p className=" xl:text-lg lg:text-sm relative z-30">
                1,600 people requested access a visit in last 24 hours
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" bg-light w-96 h-96 right-0 top-0"></div> */}
        <img src={ai} alt="ai " className="  w-2/4 h-fit hidden lg:flex" />
      </div>
    </div>
  );
};

export default Hero;
