"use client";
import React from "react";
import Blogheroitem from "./Blogheroitem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { blogheroposts } from "@/app/data/Data";

type Props = {};

function Blogherolist({}: Props) {
  return (
    <ul className="relative  xl:p-10 h-[580px] md:h-[800px] lg:h-[580px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
            return '<span class="' + className + '">' + " .</span>";
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        speed={2500}
        className=" h-full p-4 "
      >
        <div className="swiper-pagination"></div>
        {blogheroposts.map((post) => (
          <SwiperSlide
            key={post.id}
            className="transition-all delay-75 ease-in-out h-full w-full"
          >
            <Blogheroitem
              name={post.name}
              image={post.image}
              title={post.title}
              authorimage={post.blogauthorimage}
              date={post.date}
              blogtext={post.blogtext}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}

export default Blogherolist;
