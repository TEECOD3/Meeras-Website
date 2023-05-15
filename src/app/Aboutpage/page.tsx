"use client";
import React from "react";
import aboutlogo from "./assets/images/AboutPagehero.png";
import aboutusimage from "./assets/images/AboutUsImage.png";
import aboutimage from "./assets/images/aboutimage3.png";
import { Button } from "../Components/UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { images } from "../data/Data";
import StaffCard from "./components/staffcard";
import Accordion from "./components/Accordion";
import Input from "../Components/forms/input";
import Image from "next/image";
const About = () => {
  return (
    <main className="pt-20 max-w-[100rem] mx-auto">
      <section className="firstsection| backdrop:relative md:h-[400px] py-2 lg:h-[500px] xl:h-[700px]  lg:py-4 md:mb-4 flex flex-col md:flex-row max-w-8xl mx-auto">
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
        <div className=" w-full md:absolute md:w-[70%] md:right-[10%] top-[1rem] mt-8 md:mt-20">
          <Image
            alt="hero image"
            src={aboutlogo}
            className="h-full max-w-[60rwm]"
          />
        </div>
      </section>

      <section className="secondSection|  flex flex-col md:flex-row lg:mb-4">
        <div className=" w-full lg:h-[500px] md:w-1/2 ">
          <Image
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
            form and we willl show you how to get more done in the Content
            Cloud. Spreadsheets to videos — all on a single platform.
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
        className="scrollingsection| py-8  w-full mb-6 xl:mb-4
      "
      >
        <div className="w-full text-center">
          <ul className="flex gap-5 w-full  mt-1 md:mx-auto">
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
                    <Image
                      key={image.id}
                      className="h-12 w-12 rounded-full md:w-24 md:h-24"
                      src={image.image}
                      alt="scrolling images"
                    />
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </section>

      <section className="relative w-full h-[450px]   xl:h-[700px] flex justify-center flex-col md:px-20 ">
        <Image
          src={aboutimage}
          alt=""
          className="w-full h-full absolute top-0 left-0 z-5 object-cover"
        />
        <div className="bg-black/70 absolute top-0 left-0 h-full w-full z-10" />

        <div className="relative xl:5/6 z-30 py-2 px-4  lg:p-12 text-center lg:text-left flex justify-center flex-col  md:w-1/2">
          <h4 className="font-extrabold text-3xl text-white xl:text-7xl mt-10 lg:mt-0">
            Distribute your brand from
            <span className="text-red-600 font-black">design</span> to
            <span className="text-red-600 font-black ml-3">code</span>
          </h4>
          <p className="text-white text-sm mt-3  lg:text-base xl:w-3/4 ">
            We make it easy for you to share and collaborate on critical content
            — everything from contracts to spreadsheets to videos — all on a
            single platform. And we help you keep it all secure. Fill out the
            form and we qill show you how to get more done in the Content Cloud.
            Spreadsheets to videos — all on a single platform. And we help you
            keep it all secure. We make it easy for you to share and collaborate
            on critical content — everything from contracts to spreadsheets to
            videos — all on a single platform. And we help you keep it all
            secure.
          </p>
        </div>
      </section>

      <section className="mt-16 my-16  w-full ">
        <h2 className="capitalize text-center font-bold text-blue-400 sm:font-semibold sm:text-3xl md:mt-4 lg:font-semibold ">
          Our services
        </h2>
        <h1 className="text-xl sm:text-4xl w-2/3 lg:w-1/2 text-lightdark mb-4 lg:text-5xl text-center font-black mx-auto">
          Lorem ipsum dolor sit amet consectetur a
        </h1>

        <div className="grid grid-cols-2 gap-4 px-3 md:grid-cols-3 md:px-24 md:gap-10">
          <StaffCard />
          <StaffCard />
          <StaffCard />
          <StaffCard />
          <StaffCard />
          <StaffCard />
        </div>
      </section>

      <section className="accordion|  max-w-[100rem] bg-[#FFEFE3] mb-20 py-4">
        <div className="md:w-[88%] mx-auto flex flex-col sm:flex-row gap-4 ">
          <div className=" px-2 w-full md:w-3/6  lg:flex lg:items-center lg:justify-center">
            <div className="lg:w-1/2 ">
              <h4 className="font-extrabold text-2xl text-center md:text-left md:text-5xl xl:text-6xl">
                Frequent Asked Question
              </h4>
              <p className="font-semibold text-sm mt-4 lg:text-base px-5 md:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc
                eget dictumd nunc eget{" "}
              </p>
            </div>
          </div>
          <div className=" w-full px-1 lg:w-3/6">
            <div className="w-full  md:px-0 items-center justify-center flex flex-col">
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey-100 flex items-center justify-center flex-col py-28 px-2 mt-20">
        <h2 className="text-2xl text-[#000B17] text-center font-bold px-2 md:text-4xl md:w-2/4 lg:3/6 lg:text-5xl xl:text-6xl xl:1/4 md:mb-10">
          Ready to simplify how you work?
        </h2>
        <div className="flex flex-col space-y-4 mt-2 w-full md:flex-row md:w-1/2 md:gap-6 md:h-10  items-center justify-center">
          <Input
            variant="default"
            inputs={{
              type: "email",
              placeholder: "enter your email",
            }}
            className="w-full  md:p-4 md:-mb-5 xxl:p-9 xxl:text-2xl"
          />
          <Button
            className="mt-4 text-[0.8rem] p-3 w-1/2  mx-auto sm:w-2/3 lg:text-xl md:p-5 xxl:p-10 xxl:text-2xl  "
            size="default"
            variants="default"
          >
            subscribe Now
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
