import React from "react";
import harkirat from "../assets/images/harkirat.png";
import { HiSparkles } from "react-icons/hi2";
import { IoStarSharp } from "react-icons/io5";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Hero = () => {
  return (
    <section className="flex w-full flex-col mt-5 relative ">
      <div className="flex-center m-auto w-full ">
        <span className="uppercase  px-8 py-2 border-[2px] border-dark text-[14px] sm:text-[18px]  rounded-full  ">
          welcome to CourseGround
        </span>
      </div>

      <div className="mt-5  w-full capitalize flex-center">
        <h1 className="text-6xl md:text-8xl max-w-[998px]  text-center   font-clash-semibold font-bold  ">
          meet the professional Mentor
        </h1>
      </div>

      <div className=" flex justify-between px-10 items-center mt-10   ">
        <div className=" flex-col max-w-[380px] mr-auto hidden sm:flex ">
          <RiDoubleQuotesL className="text-2xl" />
          <p>
            Learn anytime, anywhere, at your own pace with ease and flexibility.
          </p>
          <h2 className="text-dark font-semibold text-3xl font-clash mt-3  ">
            10K+
          </h2>
          <p className="font-extralight text-gray ">Student join</p>
        </div>

        <img
          src={harkirat}
          alt="harkirat"
          className="absolute w-[300px] sm:w-[400px] translate-x-[30px] translate-y-[200px] lg:translate-x-[500px] rounded-b-[50px] md:translate-y-[100px] m-auto md:translate-x-[240px]    "
        />

        <div className="flex flex-col max-w-[380px] ml-auto ">
          <div className="flex items-center mt-2 text-yellow ">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <RiDoubleQuotesR className="text-2xl text-dark ml-3 " />
          </div>

          <p className="mt-2">
            "This course was comprehensive and covered everything I needed to
            know about web-dev."
          </p>
          <div className="flex gap-4 text-gray mt-2">
            <HiSparkles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
