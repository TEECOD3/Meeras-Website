import React from "react";
import aboutlogo from "../About/assets/images/AboutPagehero.png";

const About = () => {
  return (
    <main className="pt-20">
      <section className="  bg-white  p-3 lg:py-10 mb-20">
        <div className="w-full h-full relative mx-auto flex flex-col  lg:flex-row   sm:w-[80%] md:w-[70%]  md:mt-14  lg:mt-0 lg:w-[90%] lg:p-20 lg:gap-1 ">
          <div className="text-center mt-20 space-y-5 sm:space-y-7 md:space-y-10 lg:space-y-4 xl:space-y-5 md:mt-4 lg:text-left lg:w-1/2 ">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-4xl xl:text-6xl xxl:text-8xl lg:leading-14 ">
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
    </main>
  );
};

export default About;
