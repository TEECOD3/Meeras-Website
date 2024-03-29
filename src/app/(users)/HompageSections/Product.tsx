import Image from "next/image";
import React from "react";
import schollmgt from "public/images/schoomgtsys.png";

type Props = {};

const Product = (props: Props) => {
  return (
    <>
      <div className="clip-octagon h-[10rem] bg-blue-600 pb-10 pt-2 md:h-[15rem] md:pb-20 md:pt-4 lg:h-[24rem] xl:h-[28rem]">
        <h2 className="font-medium text-white sm:text-3xl sm:font-semibold md:mt-4 lg:font-semibold uppercase mb-4">
          Our Product
        </h2>
        <h1 className="mb-4 text-xl  font-semibold uppercase text-white sm:text-3xl  max-md:mb-4">
          School Management System
        </h1>
      </div>

      <Image
        loading="lazy"
        placeholder="blur"
        src={schollmgt}
        alt="school management system image"
        className="absolute top-[5rem] z-30 h-[15rem] object-cover w-full  bg-no-repeat  sm:top-[5rem] md:h-[28rem] lg:top-[10rem] lg:h-[35rem] xl:left-[15%] xl:h-[40rem]  xl:w-[70rem]"
      ></Image>
    </>
  );
};

export default Product;
