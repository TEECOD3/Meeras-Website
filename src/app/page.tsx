"use client";
import { FC, useRef, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/components/UI/input";
import mobilemeerasimg from "public/images/meraasIco.png";
import desktopmerrasimage from "public/images/bigmerras.png";
import schollmgt from "public/images/schoomgtsys.png";
import CardServices from "../components/UI/CardServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SwipperNavbuttons from "../components/UI/SwipperNavbuttons";
import { testimoonials, images, services } from "../data/Data";
import TestimonialCard from "../components/UI/TestimonialCard";
import Image from "next/image";

interface homeprops {}
const Home: FC<homeprops> = () => {
  const emailref = useRef<HTMLInputElement>(null!);
  return (
    <>
      <section className=" relative bg-[#FFEFE3] p-4 lg:py-24  ">
        <div className="relative mx-auto flex w-full flex-col sm:w-[80%]  md:w-[70%] lg:w-[100%] xl:w-[90%] lg:flex-row lg:gap-6 lg:p-20 items-center  justify-center ">
          <div className="mt-20 space-y-5 text-center sm:space-y-7 md:mt-20 md:space-y-10 lg:mt-6 lg:w-1/2 lg:space-y-5 lg:text-left xl:space-y-10">
            <h2 className="text-xl font-medium capitalize text-orange-500 sm:text-2xl xxl:text-4xl">
              Software Solution for your Business
            </h2>
            <h1 className="text-3xl font-extrabold sm:text-4xl xl:text-5xl ">
              Empowering Your <br /> Digital Transformation
            </h1>
            <p className="text-base font-medium md:text-base lg:text-xl xl:w-3/4 ">
              Are you ready to unlock the true potential of your business
              through cutting-edge software solutions? Look no further than
              Software Solution! We are a leading technology company dedicated
              to providing innovative and customized software solutions to
              businesses of all sizes
            </p>
          </div>

          <div className="mt-4 flex w-full items-center justify-center lg:hidden">
            <Image
              src={mobilemeerasimg}
              alt="meeras image for mobile"
              className=" bg-contain bg-no-repeat sm:w-[16rem] "
              loading="lazy"
              height={300}
              width={600}
              placeholder="blur"
            />
          </div>

          <Image
            alt="meerasimage"
            src={desktopmerrasimage}
            className="hidden w-3/4 lg: lg:block lg:h-[25rem] lg:w-2/4 xl:mr-[0]  xl:h-[30rem] xxl:w-3/4 "
            loading="lazy"
            placeholder="blur"
            height={300}
            width={600}
          />
        </div>
      </section>

      <section className=" p-4">
        <div className="w-full text-center">
          <p className="mb-4 text-base font-semibold lg:text-xl  text-[#000B17]">
            Join the 100+ companies using the Segment platform
          </p>
          <ul className="mt-10 flex w-full gap-5 md:mx-auto md:w-[80%]">
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={2400}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full"
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <li>
                    <Image
                      key={image.id}
                      className="h-14 w-14 rounded-full md:h-20 md:w-20 "
                      src={image.image}
                      alt="images of clients"
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

      <section className=" mt-8 max-md:px-12 max-sm:p-2 md:p-6 ">
        <div className=" mx-auto  lg:w-[90%] xl:max-w-[83%] ">
          <div className="sticky top-[3.9rem] bg-white p-2 md:top-[4.3rem]">
            <h2 className="text-xl font-bold text-orange-400 md:mb-4 md:text-2xl">
              Our Services
            </h2>
            <h1 className="mb-10  text-2xl  font-extrabold lg:w-4/5 lg:text-5xl  ">
              Transform your digital presence with Meeras Software Solution.
            </h1>
          </div>

          <div className=" mx-auto my-5 grid grid-cols-1 gap-4 gap-y-8 overflow-hidden px-3 sm:w-full md:grid-cols-2 lg:grid-cols-3">
            {services.map((card) => (
              <CardServices
                key={card.id}
                paragraph={card.description}
                title={card.title}
                image={card.img}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative mt-16 text-center sm:mt-32">
        <div className=" clip-octagon h-[10rem] bg-blue-600 pb-10 pt-2 md:h-[15rem] md:pb-20 md:pt-4 lg:h-[24rem] xl:h-[28rem]">
          <h2 className="font-medium text-white sm:text-3xl sm:font-semibold md:mt-4 lg:font-semibold ">
            Our Product
          </h2>
          <h1 className="mb-4 text-xl  font-black text-white sm:text-4xl lg:text-5xl">
            School Management System
          </h1>
        </div>

        <Image
          loading="lazy"
          placeholder="blur"
          src={schollmgt}
          alt="school management system image"
          className="absolute top-[4rem] z-30 h-[15rem] w-full bg-contain bg-no-repeat  sm:top-[5rem] md:h-[28rem] lg:top-[10rem] lg:h-[35rem] xl:left-[15%] xl:h-[50rem]  xl:w-3/4"
        ></Image>
      </section>

      <section className="mt-44  sm:mx-auto sm:max-w-[83%] md:w-full xl:w-[83%] md:mt-[24rem] xl:mt-[32rem] ">
        <h2 className="w-5/6  px-3 text-left text-2xl font-extrabold sm:w-5/6 sm:text-5xl md:w-1/2 md:text-2xl  lg:ml-12 lg:text-4xl  ">
          Trusted by startups and the worlds largest companies
        </h2>
        <div className="mx-auto mt-4 flex h-full flex-col rounded-2xl p-3  px-3 shadow-xl md:p-0 lg:w-[90%] lg:flex-row xl:mt-8 ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            speed={2500}
            loop={true}
            className="relative  flex w-full items-center justify-start rounded-2xl rounded-br-[4rem] bg-blue-600 py-8 "
          >
            {testimoonials.map((testimony) => (
              <SwiperSlide
                key={testimony.id}
                className="h-full w-full transition-all delay-75 ease-in-out"
              >
                <TestimonialCard
                  name={testimony.name}
                  description={testimony.description}
                  key={testimony.id}
                  position={testimony.position}
                />
              </SwiperSlide>
            ))}
            <SwipperNavbuttons className="absolute bottom-8 right-8 z-[3000] lg:bottom-16 " />
          </Swiper>

          <div className="flex  w-full flex-col gap-10 space-y-7 rounded-br-[1rem] bg-[#ffffff] px-2 py-20 text-blue-600 sm:pl-8  lg:w-4/6">
            <div className="">
              <h2 className="text-6xl font-extrabold ">90%</h2>
              <p className="mt-8 text-xl font-bold xl:w-1/2">
                Job success rate across all our project from our clients
              </p>
            </div>
            <h1 className="ml-10 mt-5 flex items-center justify-center gap-2">
              <span className="h-[0.09rem] w-20 bg-blue-600 "></span>
              <span className="font-semibold">Learn More</span>{" "}
              <span>&#62;</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-20 flex flex-col items-center justify-center bg-grey-100 px-4 py-28">
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
            type="email"
            placeholder="enter your email"
            className="w-full  border-[2px] border-blue-600 bg-[#EAEAEA] text-base md:-mb-5 md:p-4 xxl:p-9 xxl:text-2xl "
          />
          <Button
            className="mx-auto mt-4 w-1/2 p-3  text-[0.8rem] sm:w-2/3 md:p-5 lg:text-xl xxl:p-10 xxl:text-2xl  "
            size="default"
            variant="default"
          >
            subscribe Now
          </Button>
        </form>
      </section>
    </>
  );
};

export default Home;
