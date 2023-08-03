"use client";
import React from "react";
import Blogheroitem from "./Blogheroitem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";


interface posts {
  id: number;
  title: string;
  content: string;
  publihed_at: string;
  author: string;
  slug: string;
  like: number;
  comment: number;
  image: string;
}
type Props = {
  combinedimageandpost: posts[];
};

function Blogherolist({ combinedimageandpost }: Props) {
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
        // pagination={{
        //   el: ".swiper-pagination",
        //   clickable: true,
        //   renderBullet(index, className) {
        //     return '<span class="' + className + '">' + " .</span>";
        //   },
        // }}
        modules={[Autoplay, Navigation]}
        speed={2500}
        className=" h-full p-4"
      >
        <div className="swiper-pagination"></div>
        {combinedimageandpost.map((post) => (
          <SwiperSlide
            key={post.id}
            className="h-full w-full transition-all delay-75 ease-in-out"
          >
            <Blogheroitem
              image={post.image}
              key={post.id}
              author={post.author}
              title={post.title}
              like={post.like}
              comment={post.comment}
              publihed_at={post.publihed_at}
              slug={post.slug}
              content={post.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  );
}

export default Blogherolist;
