import Image, { StaticImageData } from "next/image";

type CardProps = {
  image: StaticImageData;
  title: string;
  paragraph: string;
};

const CardServices = (props: CardProps) => {
  const { image, title, paragraph } = props;

  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-[#FFFFFF] p-2 shadow-lg">
        <div>
          <Image
            src={image}
            alt="image"
            className=" w-full rounded-xl  object-cover"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="px-2 md:px-8 md:pb-5 ">
          <h3 className="text-base  font-bold capitalize text-blue-600 sm:text-base md:font-extrabold lg:text-xl xxl:text-4xl">
            {title}
          </h3>
          <p className="text-sm font-normal sm:text-sm lg:text-xl ">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardServices;
