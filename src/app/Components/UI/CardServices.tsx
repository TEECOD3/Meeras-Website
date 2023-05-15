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
      <div className="rounded-2xl bg-[#FFFFFF] overflow-hidden shadow-lg p-2 lg:p-8">
        <div>
          <Image src={image} alt="image" className=" w-full rounded-xl" />
        </div>
        <div className="">
          <h3 className="text-[0.8rem] capitalize font-bold sm:text-base lg:text-xl text-blue-600 md:font-extrabold xxl:text-4xl">
            {title}
          </h3>
          <p className="text-[0.5rem] font-semibold sm:text-sm md:font-normal lg:text-base  xxl:text-3xl ">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardServices;
