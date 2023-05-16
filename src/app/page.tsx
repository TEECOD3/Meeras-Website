"use client";
import { FC } from "react";
import { Button } from "./Components/UI/Button";
import Input from "./Components/forms/input";
import mobilemeerasimg from "./images/meraasIco.png";
import desktopmerrasimage from "./images/bigmerras.png";
import schollmgt from "./images/schoomgtsys.png";
import CardServices from "./Components/UI/CardServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SwipperNavbuttons from "./Components/UI/SwipperNavbuttons";
import { testimoonials, images, services } from "./data/Data";
import TestimonialCard from "./Components/UI/TestimonialCard";
import Image from "next/image";

interface homeprops {}
const Home: FC<homeprops> = () => {
  return (
    <main>
      <section className=" bg-[#FFEFE3] relative p-4 lg:py-28  ">
        <div className="w-full mx-auto flex flex-col relative lg:flex-row  sm:w-[80%] md:w-[70%]  lg:w-[95%] lg:p-20 lg:gap-10 ">
          <div className="text-center mt-20 space-y-5 sm:space-y-7 md:space-y-10 lg:space-y-5 xl:space-y-10 md:mt-20 lg:text-left lg:w-1/2 lg:mt-10">
            <h2 className="text-xl capitalize font-medium text-orange-500 sm:text-2xl xxl:text-4xl">
              Software Solution for your Business
            </h2>
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-4xl xl:text-6xl xxl:text-8xl lg:leading-[5rem] ">
              Distribute your brand from design to code
            </h1>
            <p className="font-medium text-base md:text-xl lg:text-base xl:w-3/4 xxl:text-3xl">
              Specify helps you unify your brand identity by collecting, storing
              and distributing design tokens and assets — automatically.
            </p>
          </div>

          <div className="flex items-center w-full justify-center lg:hidden mt-4">
            <Image
              src={mobilemeerasimg}
              alt="meeras image for mobile"
              className="bg-no-repeat bg-contain w-[80%] sm:w-[16rem] h-[24rem] "
            />
          </div>

          <Image
            alt="meerasimage"
            src={desktopmerrasimage}
            className="hidden lg:block w-2/4 xxl:w-2/4 xl:h-[30rem] lg:h-[25rem]  lg:mr-[-7rem] xl:mr-[-8.5rem] "
          />
        </div>
      </section>

      <section className=" p-4">
        <div className="w-full text-center">
          <p className="mb-4 font-semibold text-[#000B17]  text-base">
            Join the 100+ companies using the Segment platform
          </p>
          <ul className="flex gap-5 w-full md:w-[80%] mt-10 md:mx-auto">
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
                      className="h-14 w-14 rounded-full md:w-20 md:h-20 "
                      src={image.image}
                      alt="images of clients"
                    />
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </section>

      <section className=" max-sm:p-2 max-md:px-16 mt-8 md:p-6 ">
        <div className=" w-[80%] lg:max-w-[90%] xl:max-w-[83%] mx-auto ">
          <div className="sticky top-[3.9rem] md:top-[4.3rem] bg-white p-2">
            <h2 className="text-xl md:text-2xl font-bold text-orange-400 md:mb-4">
              Our Services
            </h2>
            <h1 className="text-2xl  font-extrabold  lg:text-6xl lg:w-4/5 mb-10  ">
              Lorem ipsum dolor sit amet, consectetur a
            </h1>
          </div>

          <div className=" px-3 sm:w-full overflow-hidden mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 my-5">
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

      <section className="mt-16 sm:mt-32 relative text-center">
        <div className=" bg-blue-600 h-[10rem] clip-octagon pt-2 pb-10 md:pt-4 md:pb-20 md:h-[15rem] lg:h-[24rem] xl:h-[28rem]">
          <h2 className="font-medium text-white sm:font-semibold sm:text-3xl md:mt-4 lg:font-semibold ">
            Our Product
          </h2>
          <h1 className="text-xl sm:text-4xl  text-white mb-4 lg:text-5xl font-black">
            School Management System
          </h1>
        </div>

        <Image
          src={schollmgt}
          alt="school management system image"
          className="w-full h-[15rem] bg-contain bg-no-repeat absolute md:h-[28rem] lg:h-[35rem]  xl:h-[50rem] xl:w-3/4 top-[4rem] sm:top-[5rem] lg:top-[10rem] xl:left-[15%]  z-30"
        ></Image>
      </section>

      <section className="mt-44  md:mt-[24rem] xl:mt-[32rem] sm:max-w-[83%] sm:mx-auto ">
        <h2 className="text-left  px-3 text-2xl w-5/6 font-extrabold sm:w-5/6 md:w-1/2 sm:text-5xl lg:ml-12  md:text-2xl lg:text-4xl  ">
          Trusted by startups and the worlds largest companies
        </h2>
        <div className="flex mt-4 xl:mt-8 flex-col lg:flex-row shadow-xl h-full  lg:w-[90%] mx-auto p-3 px-3 md:p-0 rounded-2xl ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            speed={2500}
            className="w-full  relative bg-blue-600 rounded-2xl rounded-br-[4rem] py-8 flex items-center justify-start "
          >
            {testimoonials.map((testimony) => (
              <SwiperSlide
                key={testimony.id}
                className="transition-all delay-75 ease-in-out h-full w-full"
              >
                <TestimonialCard
                  name={testimony.name}
                  description={testimony.description}
                  key={testimony.id}
                  position={testimony.position}
                />
              </SwiperSlide>
            ))}
            <SwipperNavbuttons className="absolute z-[3000] bottom-8 lg:bottom-16 right-8 " />
          </Swiper>

          <div className="w-full  rounded-br-[1rem] lg:w-4/6 bg-[#ffffff] py-20 px-2 flex flex-col gap-10 space-y-7 text-blue-600  sm:pl-8">
            <div className="">
              <h2 className="text-6xl font-extrabold ">90%</h2>
              <p className="text-xl font-bold mt-8 xl:w-1/2">
                Job success rate across all our project from our clieclients
              </p>
            </div>
            <h1 className="flex items-center justify-center ml-10 mt-5 gap-2">
              <span className="w-20 bg-blue-600 h-[0.09rem] "></span>
              <span className="font-semibold">Learn More</span>{" "}
              <span>&#62;</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-grey-100 flex items-center justify-center flex-col py-28 px-4 mt-20">
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

export default Home;
