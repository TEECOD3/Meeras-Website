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
    <li className="flex flex-col gap-x-[5rem] lg:gap-x-[10rem] lg:flex-row justify-between ">
      <div className="lg:w-2/4">
        <Image
          src={image}
          alt="meeras blog image"
          className="w-full object-cover  sm:w-1/2 sm:h-[200px] lg:h-[450px] lg:w-full mx-auto rounded-lg"
        />
      </div>

      <div className="sm:w-1/2 mx-auto lg:w-2/4 flex flex-col justify-between gap-y-4 mt-8">
        <div className="mx-auto">
          <h3 className="text-base md:text-3xl lg:text-5xl md:leading-[3rem] lg:leading-[5rem] capitalize font-extrabold mt-4 lg:mt-0">
            {title}
          </h3>
          <p className="text-base md:text-xl lg:text-2xl font-normal mt-4 lg:mt-10">
            {blogtext}
          </p>
          <div className="flex  font-semibold items-center justify-start gap-x-1 mt-6">
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
