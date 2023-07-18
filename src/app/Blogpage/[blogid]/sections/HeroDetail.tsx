import Image from "next/image";
import React from "react";
import heroimage from "../../../images/blogdetshero.png";
import image from "../../../images/blogimage.jpg";

interface postdetails {}

type Props = {
  post: any;
};

export default function HeroDetail({ post }: Props) {
  return (
    <section className="relative h-full w-full md:px-10 md:py-10 ">
      <Image
        src={heroimage}
        alt="blog detail hero image"
        loading="lazy"
        placeholder="blur"
        className="absolute left-0 top-0 z-10 h-full w-full bg-cover object-cover "
      />
      <div className="absolute left-0 top-0 z-[14] h-full w-full bg-black/50"></div>

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center  py-6 text-white md:p-0">
        <h4 className=" text-xl font-medium md:mb-4 md:text-2xl md:font-bold ">
          UI/UX Design
        </h4>
        <h2 className="mb-3 text-center text-2xl font-extrabold md:w-1/2 md:text-4xl xl:mb-6 xl:text-6xl xl:leading-[5rem]">
          {post.title}
        </h2>
        <h4 className="mb-4 w-3/4 text-center text-sm font-normal md:mb-6 md:text-base lg:w-1/3">
          {post.content}
        </h4>

        <div className="flex flex-col">
          <div className="mb-6 flex items-center justify-center gap-x-4">
            <Image
              src={image}
              alt="author image"
              loading="lazy"
              placeholder="blur"
              className="h-16 w-16 rounded-full"
            />
            <Image
              src={image}
              alt="author image"
              loading="lazy"
              placeholder="blur"
              className="h-16 w-16 rounded-full"
            />
          </div>

          <div className="flex gap-x-3 text-base font-semibold capitalize md:mb-2">
            <span>{post.author}</span>
            <span>oloyede seyi</span>
          </div>

          <div className="item-center flex flex-col justify-center gap-y-4 text-center">
            <div className="text-semibold text-base">jun 10 ,2022</div>
            <div className="text-light text-sm">2min read</div>
          </div>
        </div>
      </div>
    </section>
  );
}
