import React from "react";
import blg1 from "../assets/blog01.png";
import blg2 from "../assets/blog02.png";
import blg3 from "../assets/blog03.png";
import blg4 from "../assets/blog04.png";
import blg5 from "../assets/blog05.png";

const Blongs = () => {
  const BlogItem = [
    {
      imgUrl: blg2,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blg3,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blg4,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
    {
      imgUrl: blg5,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open AI is the future. Let us exlore how it is?",
    },
  ];

  return (
    <>
      <p className="text-head1 max-w-sm  xl:max-w-xl mb-12 mt-24">
        A lot is happening, We are about it.
      </p>
      <div className=" md:flex h-fit  items-center  ">
        <div className="pr-1 md:w-2/5   rounded-tl-3xl ">
          <img src={blg1} alt="blog" className="" />
          <div className=" bg-primary px-4  xl:px-14 ">
            <p className="text-blog-link pt-6 ">Sep 26, 2021</p>
            <p className=" text-blog  text-xl mt-4">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </p>
            <p className="text-blog-link mt-16 md:mt-24  pb-6 ">
              Read Full Article
            </p>
          </div>
        </div>

        <ul className=" md:w-3/5 mt-2 md:mt-0 mr-2 flex flex-wrap justify-center items-center  ">
          {BlogItem.map((obj) => {
            return (
              <div className=" w-1/2 md:my-1 xl:my-2 py-1 md:py-0  rounded-tl-3xl">
                <img src={obj.imgUrl} alt="logo" className=" pl-2 xl:pl-4 " />
                <div className=" bg-primary px-2 xl:px-7 ml-2 xl:ml-4 ">
                  <p className=" text-blog-link pt-4">{obj.date}</p>
                  <p className="text-blog text-sm   mt-2">{obj.title}</p>
                  <p className=" text-blog-link mt-16 md:mt-8 xl:mt-14 pb-2 ">
                    Read Full Article
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default Blongs;
