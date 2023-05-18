import Image from "next/image";
import React from "react";
import image from "../../images/meerasblogimg.png";
import { Button } from "@/app/Components/UI/Button";

type Props = {};

export default function Blogpost({}: Props) {
  return (
    <li className="relative h-[300px] md:h-[350px] lg:h-[450px] shadow-lg">
      <Image
        src={image}
        alt="blogimages"
        className=" absolute z-10 h-full w-full object-cover rounded-lg top-0 left-0"
      />

      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/70 to-black/10 z-[16]"></div>
      <div className="relative z-30   w-[80%] mx-auto  h-full flex flex-col justify-between py-6 ">
        <div className="text-white">
          <Button className="bg-orange-600 px-4 lg:px-10 py-2 lg:py-4 capitalize text-white text-sm lg:text-base outline-none focus:outline-none active:outline-none">
            #ui design
          </Button>
          <p className="mt-6 text-xl lg:text-4xl font-bold">
            Introducing Sprout: Modern Corporate Treasury for Businesses
          </p>
          <h2 className="mt-4 text-sm">By Jessica Marose - Jun 10, 2022</h2>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-white">15 comments</h4>
          <Button className="bg-white  px-4 lg:px-10 py-2 lg:py-4 capitalize text-black text-sm lg:text-base outline-none focus:outline-none active:outline-none">
            readmore
          </Button>
        </div>
      </div>
    </li>
  );
}
