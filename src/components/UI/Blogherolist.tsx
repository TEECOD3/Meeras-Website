"use client";
import React from "react";
import Blogheroitem from "./Blogheroitem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

type posts = {
  posts: any;
};

function Blogherolist({ posts }: posts) {
  return (
    <ul className="relative flex items-center  xl:p-2 h-full w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="fade"
        modules={[Autoplay, Navigation]}
        speed={2500}
        className=" h-full p-4"
      >
        <div className="swiper-pagination"></div>
        {posts.map((post: any) => (
          <SwiperSlide
            key={post.id}
            className="h-full w-full transition-all delay-75 ease-in-out"
          >
            <Blogheroitem
              image={post.image}
              title={post.title}
              introduction={post.introduction}
              slug={post.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}

export default Blogherolist;
