import React from "react";
import aboutlogo from "../About/assets/images/AboutPagehero.png";
import aboutusimage from "../About/assets/images/AboutUsImage.png";
import { Button } from "../../Components/UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { images } from "../Home/data/Data";
const About = () => {
  return (
    <main className="pt-20">
      <section className="relative md:h-[400px] lg:h-[500px] xl:h-[700px] bg-white lg:py-4 md:mb-4 flex flex-col md:flex-row max-w-8xl mx-auto">
        <div className="w-full h-full  mx-auto flex flex-col  lg:flex-row   sm:w-[80%] md:w-[70%]  md:mt-14  lg:mt-0 lg:w-[90%] lg:p-20 lg:gap-1 ">
          <div className="mt-0 space-y-5  text-center md:text-left sm:px-4 md:px-0">
            <h1 className="font-extrabold text-3xl sm:text-4xl mt-4 md:mt-0 md:text-2xl lg:text-4xl xl:text-6xl xxl:text-8xl lg:leading-14 px-1 md:w-1/2 lg:w-2/3 xl:w-[60%] ">
              Distribute your brand from design to code
            </h1>
            <p className="font-bold text-base   md:text-xl lg:text-base xxl:text-3xl text-blue-500">
              Software Solution for your Business
            </p>
          </div>
        </div>
        <div className=" w-full md:absolute md:w-[70%] md:right-[10%] top-[1rem] mt-4 md:mt-0">
          <img src={aboutlogo} className="h-full w-full" />
        </div>
      </section>

      <section className="  flex flex-col md:flex-row lg:mb-4">
        <div className=" w-full  lg:h-[500px]  md:w-1/2">
          <img
            src={aboutusimage}
            alt="about us image"
            className="object-cover "
          />
        </div>

        <div className=" md:w-1/2 p-4 xl:px-8 xl:py-8">
          <h2 className=" text-2xl md:text-4xl xl:text-[54px] font-extrabold xl:w-3/4 lg:leading-[1.3] ">
            Distribute your brand from
            <span className="text-blue-600 ml-1">design to code</span>
          </h2>
          <p className="mt-2 text-sm lg:text-base text-[#000B17] xl:w-3/4 lg:py-3">
            We make it easy for you to share and collaborate on critical content
            — everything from contracts to spreadsheets to videos — all on a
            single platform. And we help you keep it all secure. Fill out the
            form and we'll show you how to get more done in the Content Cloud.
            Spreadsheets to videos — all on a single platform.
          </p>

          <Button
            variants="default"
            size="default"
            className="rounded-none px-6 py-3 mt-4 sm:mt-10"
          >
            contact us
          </Button>
        </div>
      </section>

      <section
        className="h-[20vh] p-4 w-full md:mb-10
      "
      >
        <div className="w-full text-center">
          <ul className="flex gap-5 w-full  mt-10 md:mx-auto">
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              speed={2400}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full"
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <li>
                    <img
                      key={image.id}
                      className="h-7 w-7 rounded-full md:w-20 md:h-20"
                      src={image.image}
                      alt=""
                    />
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
