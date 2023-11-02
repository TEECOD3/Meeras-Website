import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/Data";
import CardServices from "@/components/UI/CardServices";
import Reveal from "@/components/UI/Reveal";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className=" mx-auto w-[100%] lg:w-[90%] xxl:max-w-[83%] z-30">
      <Reveal>
        <div className="sticky top-[0] bg-white p-2 md:top-[0]">
          <h2 className="text-xl font-semibold  md:mb-2 md:text-3xl uppercase mb-4">
            Our Services
          </h2>
          <h1 className="mb-10 text-base font-semibold lg:w-4/5 lg:text-2xl uppercase tracking-tight">
            Transform your digital presence with Meeras Software Solution.
          </h1>
        </div>
      </Reveal>

      <div className="mx-auto w-[90%] my-5 grid grid-cols-1 gap-4 gap-y-8 overflow-hidden px-3 sm:w-full md:grid-cols-2 lg:grid-cols-3">
        {services.map((card) => (
          <CardServices
            key={card.id}
            paragraph={card.description}
            title={card.title}
            image={card.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
