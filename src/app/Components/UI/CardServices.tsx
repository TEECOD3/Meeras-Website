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
      <div className="rounded-2xl bg-[#FFFFFF] overflow-hidden shadow-lg p-2">
        <div>
          <Image
            src={image}
            alt="image"
            className=" w-full rounded-xl  object-cover"
          />
        </div>
        <div className="px-2 md:pb-5 md:px-4 ">
          <h3 className="text-base  capitalize font-bold sm:text-base lg:text-xl text-blue-600 md:font-extrabold xxl:text-4xl">
            {title}
          </h3>
          <p className="text-sm sm:text-sm font-normal lg:text-base  xxl:text-3xl ">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardServices;
