import Image from "next/image";
import React from "react";
import mobilemeerasimg from "public/images/meraasIco.png";
import desktopmerrasimage from "public/images/bigmerras.png";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Typewriter from "@/components/UI/Typewriter";
import Reveal from "@/components/UI/Reveal";
type Props = {};

function HeroSection({}: Props) {
  const [text, count] = useTypewriter({
    words: [`Presence`, "capabilities", "transformation", "excellence"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative mx-auto flex w-full flex-col lg:flex-row lg:gap-6 items-center justify-center ">
      <div className="mt-20 w-full   space-y-5 text-center sm:space-y-7 flex items-center  justify-center md:mt-20 lg:ml-[75px] md:space-y-10 lg:mt-6 lg:w-1/2 lg:space-y-5 lg:text-left xl:space-y-10">
        <div className="flex lg:items-start lg:justify-start flex-col gap-y-6 lg:gap-y-10 ">
          <Reveal>
            <h2 className="text-base font-semibold uppercase tracking-tight   sm:text-xl xxl:text-4xl">
              Software Solution for your Business
            </h2>
          </Reveal>
          <Reveal>
            <p className="font-semibold text-4xl lg:text-5xl uppercase tracking-tight">
              Empowering <br />
              Your Digital <br />
              presence
            </p>
          </Reveal>

          <Reveal>
            <p className="px-2 lg:px-0 tracking-tight font-semibold flex  flex-wrap md:text-base lg:text-base  lg:w-[80%] line-clamp-6 ">
              Are you ready to unlock the true potential of your business
              through cutting-edge software solutions? Look no further than
              meeras Software Solution! We are a leading technology company
              dedicated to providing innovative and customized software
              solutions to businesses of all sizes
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-4 flex w-full items-center justify-center lg:hidden">
        <Image
          src={mobilemeerasimg}
          alt="meeras image for mobile"
          className="bg-contain bg-no-repeat sm:w-[14rem] -mb-4"
          loading="lazy"
          height={300}
          width={600}
          placeholder="blur"
        />
      </div>

      <Image
        alt="meerasimage"
        src={desktopmerrasimage}
        className="hidden w-3/4  lg:block lg:h-[25rem] lg:w-2/4 xl:mr-[0]  xl:h-[30rem] xxl:w-3/4 "
        loading="lazy"
        placeholder="blur"
        height={300}
        width={600}
      />
    </div>
  );
}

export default HeroSection;
