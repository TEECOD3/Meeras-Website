import React from "react";
import image from "../../images/meerasblogimg.png";
import Image from "next/image";
import image3 from "../../images/blogimage.jpg";
import { StaticImageData } from "next/image";

type Props = {
  name: string;
  image: StaticImageData;
  title: string;
  authorimage: StaticImageData;
  blogtext: string;
  date: string;
};

function Blogheroitem({
  name,
  image,
  title,
  authorimage,
  blogtext,
  date,
}: Props) {
  return (
    <li className="flex flex-col gap-x-[5rem] md:flex-row  md:justify-around md:gap-x-[4rem] xl:justify-between xl:gap-x-[10rem] ">
      <div className="h-full w-full  xl:w-1/2">
        <Image
          src={image}
          alt="meeras blog image"
          className="mx-auto w-full rounded-lg object-cover"
          loading="lazy"
          placeholder="blur"
        />
      </div>

      <div className="mx-auto flex w-full flex-col justify-between gap-y-4 lg:mt-8 lg:w-1/2">
        <div className="mx-auto">
          <h3 className="mt-2 text-base font-extrabold capitalize md:text-2xl md:leading-[2rem] lg:mt-0 xl:text-5xl xl:leading-[5rem]">
            {title}
          </h3>
          <p className="mt-2 text-base font-normal xl:mt-5 xl:text-xl">
            {blogtext}
          </p>
          <div className="mt-6  flex items-center justify-start gap-x-1 font-semibold">
            <Image
              src={authorimage}
              alt="authorimage"
              height={50}
              width={50}
              className="rounded-full"
            />
            <div className="flex flex-col lg:flex-row">
              <h4 className="capitalize">by {name}-</h4>
              <h3>{date}</h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Blogheroitem;
