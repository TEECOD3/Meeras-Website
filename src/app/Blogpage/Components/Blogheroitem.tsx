import React from "react";
import imagea from "../../images/meerasblogimg.png";
import Image from "next/image";
import image3 from "../../images/blogimage.jpg";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  textclassName?: string;
  title?: string;
  slug?: string;
  content?: string;
  publihed_at?: any;
  author?: string;
  like?: number;
  comment?: number;
  image: string;
};

const text =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magn deserunt nam consectetur debitis, qui, dicta unde beatae solutincidunt natus eum illo quo corporis quia, numquam fugit iste saepecommodi?";

function Blogheroitem({
  textclassName,
  title,
  slug,
  like,
  content,
  comment,
  image,
  publihed_at,
  author,
}: Props) {
  const router = useRouter();
  return (
    <li className=" flex-col flex h-full items-center gap-x-[5rem] md:flex-row py-10 md:justify-around md:gap-x-[4rem] justify-center xl:gap-x-[10rem] ">
      <div className="h-full w-full xl:w-1/2">
        <Image
          src={image}
          height={400}
          width={400}
          alt="meeras blog image"
          className="mx-auto max-h-[500px] w-full rounded-lg object-cover"
          loading="lazy"
        />
      </div>

      <div className="mx-auto flex w-full flex-col justify-between gap-y-4 lg:mt-4 xl:w-1/2 ">
        <div className="mx-auto">
          <h3 className="mt-2 text-base font-extrabold capitalize md:text-2xl md:leading-[2rem] lg:mt-0 xl:text-5xl">
            {title}
          </h3>
          <p className="mt-2 text-base font-normal xl:mt-5 xl:text-xl">
            {text.slice(0, 200)}{" "}
            <span
              onClick={() => {
                router.push(` /Blogpage/${slug}`);
              }}
              className="text-sm text-blue-400 font-bold cursor-pointer"
            >
              read more
            </span>
          </p>
          <div className="mt-6  flex items-center justify-start gap-x-1 font-semibold">
            <Image
              src={image3}
              alt="authorimage"
              height={50}
              width={50}
              className="rounded-full"
            />
            <div className="flex flex-col lg:flex-row gap-x-2 items-left">
              <h4 className="capitalize">by {author || "annonymous"}</h4>
              <h3>{publihed_at}</h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Blogheroitem;
