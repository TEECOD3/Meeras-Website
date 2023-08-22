import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type CardProps = {
  image: StaticImageData;
  title: string;
  paragraph: string;
};

const CardServices = (props: CardProps) => {
  const { image, title, paragraph } = props;

  return (
    <motion.div
      initial={{ y: 300 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl bg-[#FFFFFF] shadow-lg cursor-pointer "
    >
      <div>
        <Image
          src={image}
          alt="image"
          className="w-full h-[200px] bg-cover object-cover fill aspect-auto rounded-t-xl"
          loading="lazy"
          placeholder="blur"
        />
      </div>
      <div className="px-4 md:px-6 mb-2 py-4">
        <h3 className="text-base font-bold capitalize text-blue-600 sm:text-base md:font-extrabold lg:text-xl xxl:text-4xl">
          {title}
        </h3>
        <p className="text-sm font-normal sm:text-sm lg:text-base">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
};

export default CardServices;
