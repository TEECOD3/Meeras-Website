import SwipperNavbuttons from "@/components/UI/SwipperNavbuttons";
import TestimonialCard from "@/components/UI/TestimonialCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { testimoonials } from "@/data/Data";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {};

const Testimony = (props: Props) => {
  return (
    <>
      {" "}
      <h2 className="text-left text-xl font-semibold uppercase sm:text-2xl md:text-3xl ">
        Trusted by startups and the worlds largest companies
      </h2>
      <div className="mx-auto mt-4 flex h-full flex-col  p-3  px-3  lg:flex-row xl:mt-8 ">
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
              className="h-full w-full transition-all delay-75 ease-in-out "
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

        <div className="flex w-full flex-col gap-10 space-y-7 rounded-br-[1rem] bg-[#ffffff] px-2 py-20 text-blue-600 sm:pl-8  lg:w-4/6">
          <div className="">
            <h2 className="text-6xl font-extrabold ">90%</h2>
            <p className="mt-8 text-xl font-bold xl:w-1/2">
              Job success rate across all our project from our clients
            </p>
          </div>
          <h1 className="ml-10 mt-5 flex items-center justify-center gap-2">
            <span className="h-[0.09rem] w-20 bg-blue-600 "></span>
            <Link href="/Contactpage">
              <span className="font-semibold">Learn More</span>
            </Link>
            <span>&#62;</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Testimony;
