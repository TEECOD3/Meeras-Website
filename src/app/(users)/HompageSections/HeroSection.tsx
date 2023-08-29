import Image from "next/image";
import React from "react";
import mobilemeerasimg from "public/images/meraasIco.png";
import desktopmerrasimage from "public/images/bigmerras.png";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Typewriter from "@/components/UI/Typewriter";
type Props = {};

function HeroSection({}: Props) {
  const [text, count] = useTypewriter({
    words: [`Presence`, "capabilities", "transformation", "excellence"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative mx-auto flex w-full flex-col lg:flex-row lg:gap-6 items-center justify-center ">
      <div className="mt-20  lg:p-10 space-y-5 text-center sm:space-y-7 flex items-center justify-end md:mt-20 lg:ml-20 md:space-y-10 lg:mt-6 lg:w-1/2 lg:space-y-5 lg:text-left xl:space-y-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-y-6 lg:gap-y-10 "
        >
          <h2 className="text-xl font-medium capitalize text-orange-600 sm:text-2xl xxl:text-4xl">
            Software Solution for your Business
          </h2>
          <p className="font-bold text-5xl  lg:text-6xl font-Raleway">
            Empowering <br />
            Your Digital <br />
            <Typewriter />
          </p>
          <p className="text-base px-2 lg:px-0 font-medium flex flex-wrap md:text-base lg:text-xl xl:w-3/4 ">
            Are you ready to unlock the true potential of your business through
            cutting-edge software solutions? Look no further than Software
            Solution! We are a leading technology company dedicated to providing
            innovative and customized software solutions to businesses of all
            sizes
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 2 }}
        className="mt-4 flex w-full items-center justify-center lg:hidden"
      >
        <Image
          src={mobilemeerasimg}
          alt="meeras image for mobile"
          className="bg-contain bg-no-repeat sm:w-[14rem] -mb-4"
          loading="lazy"
          height={300}
          width={600}
          placeholder="blur"
        />
      </motion.div>

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
