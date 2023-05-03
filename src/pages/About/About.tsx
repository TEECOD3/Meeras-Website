import React from "react";
import aboutlogo from "../About/assets/images/AboutPagehero.png";
import aboutusimage from "../About/assets/images/AboutUsImage.png";
import { Button } from "../../Components/UI/Button";

const About = () => {
  return (
    <main className="pt-20">
      <section className=" h-[70vh] sm:h-[90vh]  xl:h-[100vh] bg-white lg:py-4 mb-4">
        <div className="w-full h-full relative mx-auto flex flex-col  lg:flex-row   sm:w-[80%] md:w-[70%]  md:mt-14  lg:mt-0 lg:w-[90%] lg:p-20 lg:gap-1 ">
          <div className="text-center mt-20 space-y-5 sm:space-y-7 md:space-y-10 lg:space-y-4 xl:space-y-5 md:mt-4 lg:text-left lg:w-1/2 ">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-4xl xl:text-6xl xxl:text-8xl lg:leading-14 px-1 ">
              Distribute your brand from design to code
            </h1>
            <p className="font-bold text-base md:text-xl lg:text-base xl:w-3/4 xxl:text-3xl text-blue-500">
              Software Solution for your Business
            </p>
          </div>
          <div className="mt-10 h-[10rem] mb-5 lg:mt-0 lg:absolute  lg:top-4  lg:w-[80%] right-[10rem] xxl:w-2/4 xl:h-[30rem] lg:h-[25rem] ">
            <img src={aboutlogo} className="" />
          </div>
        </div>
      </section>
      <section className="  flex flex-col md:flex-row mb-8">
        <div className=" w-full lg:h-[500px]  md:w-1/2">
          <img
            src={aboutusimage}
            alt="about us image"
            className="object-cover "
          />
        </div>

        <div className=" md:w-1/2 p-4 xl:px-8 xl:py-8">
          <h2 className=" text-2xl md:text-4xl xl:text-[54px] font-extrabold xl:w-3/4 lg:leading-[1.3] ">
            Distribute your brand from
            <span className="text-blue-600 ml-1">design to code</span>
          </h2>
          <p className="sm:mt-2 text-sm lg:text-base text-[#000B17] xl:w-3/4 lg:py-3">
            We make it easy for you to share and collaborate on critical content
            — everything from contracts to spreadsheets to videos — all on a
            single platform. And we help you keep it all secure. Fill out the
            form and we'll show you how to get more done in the Content Cloud.
            Spreadsheets to videos — all on a single platform.
          </p>

          <Button
            variants="default"
            size="default"
            className="rounded-none px-6 py-3 sm:mt-10"
          >
            contact us
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
