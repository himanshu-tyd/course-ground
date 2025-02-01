import React from "react";
import slide1 from "../assets/images/slide-1.jpeg";
import slide2 from "../assets/images/slide-2.png";
import slide3 from "../assets/images/slide-3.jpeg";
import why_us from "../assets/images/whyus.jpeg";
import WrapperContainer from "../components/WrapperContainer";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

const Home = () => {
  return (
    <WrapperContainer containerClass={` flex items-start justify-center w-full h-full overflow-x-hidden`} >
      <div className="flex flex-col w-full space-y-5  ">
        <div className="flex-center flex justify-center w-full ">
          <Swiper spaceBetween={30} slidesPerView={3} autoplay:true>
            <SwiperSlide>
              <div className="inline-block">
                <img
                  src={slide1}
                  className="rounded-lg w-full h-full object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block">
                <img
                  src={slide2}
                  className="rounded-lg w-full h-full object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="inline-block">
                <img
                  src={slide3}
                  className="rounded-lg w-full h-full object-cover "
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h2 className=" font-clash-semibold font-bold text-2xl md:text-5xl  text-center   ">
          You learn Today & <span className="text-yellow  ">earn</span>{" "}
          Tomorrow.
        </h2>

        <div className="h-[0.4px] w-full bg-dark" />

        <div className="flex-center">
          <img src={why_us} />
        </div>

        <div className="flex-center mt-5 flex flex-col gap-5 ">
          <h3 className="text-3xl text-center font-clash-bold font-bold">
            About 100xDevs
          </h3>
          <div className="w-full flex flex-col gap-4 bg-gradient-to-r from-[#E8DDFF] to-[#E1B991] rounded-lg p-4 text-[14px]   ">
            <p className="text-inherit ">Welcome to 100xdevs.</p>
            <p className="text-inherit ">
              This is an initiative by <b>Harkirat Singh</b> to personally
              mentor folks in the field of Programming.
            </p>
            <p className="text-inherit ">
              Harkirat strongly feels that today you are either a 1x engineer or
              a 100x engineer and nothing in the middle, and his hope is to take
              everyone in this community to be a <b>100x Engineer.</b>
            </p>
            <p className="text-inherit ">
              Join him in his first course on Full Stack development with a
              heavy focus on Open source projects to learn programming
              practically.
            </p>
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
};

export default Home;
