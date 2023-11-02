import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

type CardProps = {
  image: StaticImageData;
  title: string;
  paragraph: string;
};

const CardServices = (props: CardProps) => {
  const { image, title, paragraph } = props;

  return (
    <Reveal>
      <div className="overflow-hidden cursor-pointer ring ring-slate-100 mb-3 ">
        <div>
          <Image
            src={image}
            alt="image"
            className="w-full h-[200px] bg-cover object-cover fill aspect-auto"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="px-4 md:px-6 mb-4 py-6 lg:h-[200px]">
          <h3 className="text-base font-semibold uppercase mb-3 text-black line-clamp-5 sm:text-xl   lg:text-xl xxl:text-4xl">
            {title}
          </h3>
          <p className="text-sm font-normal sm:text-sm lg:text-base">
            {paragraph}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export default CardServices;
