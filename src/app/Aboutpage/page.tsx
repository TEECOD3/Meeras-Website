"use client";
import React, { useRef } from "react";
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
  const emailref = useRef<HTMLInputElement>(null!);
  return (
    <main className="mx-auto max-w-[100%] pt-20 ">
      <section className="firstsection| max-w-8xl mx-auto mb-28 flex flex-col py-2  backdrop:relative md:mb-4 md:h-[400px] lg:h-[500px] lg:flex-row lg:py-16 xl:h-[700px]">
        <div className="mx-auto flex  h-full w-full flex-col sm:w-[82%]  md:mt-14  lg:mt-0  lg:w-[90%] lg:flex-row lg:gap-1 lg:p-20 ">
          <div className="mt-0 space-y-5 text-center sm:px-4 md:px-0 md:text-left">
            <h1 className=" px-1 text-3xl font-extrabold  sm:text-4xl md:mt-0  md:w-1/2 md:text-2xl lg:w-2/3 lg:text-4xl xl:w-[60%] xl:text-6xl xxl:text-8xl ">
              Empowering Businesses through Innovative Technology Solutions
            </h1>
            <p className="self-center text-sm font-bold text-blue-500  md:w-1/2 md:text-base">
              We are a leading tech company delivering innovative, customized
              software solutions for businesses of all sizes.
            </p>
          </div>
        </div>
        <div className="right-0  mt-8   w-full md:absolute  md:top-[3rem] md:mt-20 md:w-[70%] xl:top-[6rem] ">
          <Image
            height={800}
            width={900}
            alt="hero image"
            src={aboutlogo}
            className="h-full max-w-[60rwm]"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </section>

      <section className="secondSection|  mt-10 flex flex-col md:flex-row lg:mb-28">
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
            Our Mission
          </h2>
          <p className="mt-2 text-sm text-[#000B17] lg:py-3 lg:text-base xl:w-3/4">
            Our mission is to leverage the power of technology to create
            impactful solutions that drive growth, efficiency, and success for
            our clients. We strive to be a trusted partner, working closely with
            businesses to understand their unique requirements and challenges.
            Through our expertise and dedication, we aim to deliver
            transformative solutions that propel our clients towards their
            goals.
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

        <div className="xl:5/6 relative z-30 flex flex-col  justify-center px-4 py-2 text-center lg:w-1/2 lg:p-12  lg:text-left">
          <h4 className="mt-10 text-4xl font-extrabold text-white md:text-5xl lg:mt-0 xl:text-7xl">
            Tailored <span className="text-orange-500">Solutions</span> for
            <span className="text-orange-500">Success</span>
          </h4>
          <p className="mt-3 text-sm text-white  lg:text-base xl:w-3/4 ">
            We understand that every business is unique, with distinct goals and
            requirements. That is why we take a personalized approach to each
            project. Our team works closely with our clients, taking the time to
            understand their business objectives, target audience, and industry
            dynamics. This enables us to develop customized software solutions
            that precisely meet their needs, drive efficiency, and deliver
            tangible results.
          </p>
        </div>
      </section>

      <section className="mx-auto my-16  mt-16 w-full lg:w-[90%]">
        <h2 className="text-center font-bold capitalize text-blue-400 sm:text-3xl sm:font-semibold md:mt-4 lg:font-semibold ">
          Our team
        </h2>
        <h1 className="mx-auto mb-4 w-2/3 text-center text-xl font-black text-lightdark sm:text-4xl lg:w-1/2 lg:text-5xl">
          Passionate Experts Driving Innovation
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
        <div className="mx-auto flex flex-col gap-4 md:w-[87%] md:flex-row ">
          <div className="lg:justify-left px-10  md:w-3/6 lg:flex lg:items-center">
            <div className="">
              <h4 className="text-left text-2xl font-extrabold md:text-5xl xl:text-6xl">
                Frequent Asked Question
              </h4>
              <p className="mt-4  text-sm font-semibold  lg:text-base">
                If you have any additional questions or would like more
                information, please don not hesitate to contact us. We are here
                to assist you and provide the technology solutions you require
                for your business success.
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = emailref.current.value;
            console.log(email);
            emailref.current.value = "";
          }}
          className="mt-2 flex w-full flex-col items-center justify-center space-y-4 md:h-10 md:w-1/2  md:flex-row md:gap-6"
        >
          <Input
            ref={emailref}
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
        </form>
      </section>
    </main>
  );
};

export default About;
