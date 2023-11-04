import React from "react";
import imagea from "../../images/meerasblogimg.png";
import Image from "next/image";
import image3 from "public/images/blogimage.jpg";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  introduction: string;
  title?: string;
  slug?: string;
  image: StaticImageData;
};

function Blogheroitem({ title, slug, introduction, image }: Props) {
  const router = useRouter();
  return (
    <li className=" flex-col flex h-full  items-center gap-x-[5rem] md:flex-row py-10 md:justify-around md:gap-x-[4rem] justify-center xl:gap-x-[10rem] ">
      <div className="h-[400px]  w-full lg:w-1/2 relative">
        <Image
          src={image}
          fill
          placeholder="blur"
          alt="meeras blog image"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="mx-auto flex w-full flex-col justify-between gap-y-4 lg:mt-4 xl:w-1/2 ">
        <div className="mx-auto">
          <h3 className="mt-4 text-xl font-semibold uppercase md:text-3xl leading-[35px] md:leading-[45px] lg:mt-0 ">
            {title}
          </h3>
          <p className="mt-2 text-base font-normal xl:mt-5">
            {introduction?.slice(0, 200)}{" "}
            <span
              onClick={() => {
                router.push(` /Blogpage/${slug}`);
              }}
              className="text-sm text-blue-400 font-semibold cursor-pointer capitalize"
            >
              read more
            </span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Blogheroitem;
