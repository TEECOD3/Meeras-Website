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
    <main className="mx-auto max-w-[100%] pt-20 ">
      <section className="firstsection| max-w-8xl mx-auto flex flex-col py-2  backdrop:relative md:mb-4 md:h-[400px] md:flex-row lg:h-[500px] lg:py-16 xl:h-[700px]">
        <div className="mx-auto flex  h-full w-full flex-col sm:w-[82%]  md:mt-14  lg:mt-0  lg:w-[90%] lg:flex-row lg:gap-1 lg:p-20 ">
          <div className="mt-0 space-y-5 text-center sm:px-4 md:px-0 md:text-left">
            <h1 className="mt-4 px-1 text-3xl  font-extrabold sm:text-4xl md:mt-0 md:w-1/2 md:text-2xl lg:w-2/3 lg:text-4xl xl:w-[60%] xl:text-6xl xxl:text-8xl ">
              Distribute your brand from design to code
            </h1>
            <p className="text-base font-bold   text-blue-500 md:text-xl lg:text-base xxl:text-3xl">
              Software Solution for your Business
            </p>
          </div>
        </div>
        <div className=" top-[1rem] mt-8 w-full md:absolute md:right-[10%] md:mt-20 md:w-[70%]">
          <Image
            alt="hero image"
            src={aboutlogo}
            className="h-full max-w-[60rwm]"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </section>

      <section className="secondSection|  flex flex-col md:flex-row lg:mb-4">
        <div className=" w-full md:w-1/2 lg:h-[500px] ">
          <Image
            src={aboutusimage}
            alt="about us image"
            className="object-cover"
            loading="lazy"
            placeholder="blur"
          />
        </div>

        <div className=" p-4 md:w-1/2 xl:px-8 xl:py-8">
          <h2 className=" text-2xl font-extrabold md:text-4xl lg:mt-10 lg:leading-[4rem] xl:w-3/5 xl:text-[54px] ">
            Distribute your brand from
            <span className="ml-1 text-blue-600">design to code</span>
          </h2>
          <p className="mt-2 text-sm text-[#000B17] lg:py-3 lg:text-base xl:w-3/4">
            We make it easy for you to share and collaborate on critical content
            — everything from contracts to spreadsheets to videos — all on a
            single platform. And we help you keep it all secure. Fill out the
            form and we willl show you how to get more done in the Content
            Cloud. Spreadsheets to videos — all on a single platform.
          </p>

          <Button
            variants="default"
            size="default"
            className="mt-4 rounded-none px-6 py-3 sm:mt-10"
          >
            contact us
          </Button>
        </div>
      </section>

      <section
        className="scrollingsection| mb-6  w-full py-16 xl:mb-4
      "
      >
        <div className="w-full text-center">
          <ul className="mt-1 flex w-full  gap-5 md:mx-auto">
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
                      className="h-12 w-12 rounded-full md:h-24 md:w-24"
                      src={image.image}
                      alt="scrolling images"
                      loading="lazy"
                      placeholder="blur"
                    />
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </section>

      <section className="relative flex h-[450px]   w-full flex-col justify-center md:px-20 xl:h-[700px] ">
        <Image
          src={aboutimage}
          alt="aboutimage"
          className="z-5 absolute left-0 top-0 h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/70" />

        <div className="xl:5/6 relative z-30 flex flex-col  justify-center px-4 py-2 text-center md:w-1/2 lg:p-12  lg:text-left">
          <h4 className="mt-10 text-4xl font-extrabold text-white md:text-5xl lg:mt-0 xl:text-7xl">
            Distribute your brand from
            <span className="ml-3 font-black text-red-600">design</span> to
            <span className="ml-3 font-black text-red-600">code</span>
          </h4>
          <p className="mt-3 text-sm text-white  lg:text-base xl:w-3/4 ">
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

      <section className="mx-auto my-16  mt-16 w-full lg:w-[90%]">
        <h2 className="text-center font-bold capitalize text-blue-400 sm:text-3xl sm:font-semibold md:mt-4 lg:font-semibold ">
          Our services
        </h2>
        <h1 className="mx-auto mb-4 w-2/3 text-center text-xl font-black text-lightdark sm:text-4xl lg:w-1/2 lg:text-5xl">
          Lorem ipsum dolor sit amet consectetur a
        </h1>

        <div className="grid grid-cols-2 gap-4 px-3 md:grid-cols-3 md:gap-10 md:px-24">
          <StaffCard />
          <StaffCard />
          <StaffCard />
          <StaffCard />
          <StaffCard />
          <StaffCard />
        </div>
      </section>

      <section className="accordion|  mb-20 max-w-[100%] bg-[#FFEFE3] px-1 py-8">
        <div className="mx-auto flex flex-col gap-4 sm:flex-row md:w-[87%] ">
          <div className="lg:justify-left px-10  md:w-3/6 lg:flex lg:items-center">
            <div className="">
              <h4 className="text-left text-2xl font-extrabold md:text-5xl xl:text-6xl">
                Frequent Asked Question
              </h4>
              <p className="mt-4  text-sm font-semibold  lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ornare cursus sed nunc eget dictum Sed ornare cursus sed nunc
                eget dictumd nunc eget
              </p>
            </div>
          </div>
          <div className=" w-full px-1 lg:w-3/6">
            <div className="flex  w-full flex-col items-center justify-center px-2 md:px-0">
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
      <section className="mt-20 flex flex-col items-center justify-center bg-grey-100 px-2 py-28">
        <h2 className="lg:3/6 xl:1/4 px-2 text-center text-2xl font-bold text-[#000B17] md:mb-10 md:w-2/4 md:text-4xl lg:text-5xl xl:text-6xl">
          Ready to simplify how you work?
        </h2>
        <div className="mt-2 flex w-full flex-col items-center justify-center space-y-4 md:h-10 md:w-1/2  md:flex-row md:gap-6">
          <Input
            variant="default"
            inputs={{
              type: "email",
              placeholder: "enter your email...",
            }}
            className="w-full border-blue-700 bg-[#EAEAEA] text-base md:-mb-5 md:p-4 xxl:p-9 xxl:text-2xl"
          />
          <Button
            className="mx-auto mt-4 w-1/2 p-3  text-[0.8rem] sm:w-2/3 md:p-5 lg:text-xl xxl:p-10 xxl:text-2xl"
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
