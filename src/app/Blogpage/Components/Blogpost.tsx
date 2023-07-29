"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import React from "react";
import image from "../../images/meerasblogimg.png";
import { Button } from "@/app/Components/UI/Button";
import { useRouter, usePathname } from "next/navigation";

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

export default function Blogpost({
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
  const path = usePathname();

  const blogdetailNavigationhandler = () => {
    router.push(`/Blogpage/${slug}`);
  };


  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day}${daySuffix(day)} ${month} ${year}`;
  };

  const daySuffix = (day: number) => {
    if (day === 1 || day === 21 || day === 31) {
      return "st";
    } else if (day === 2 || day === 22) {
      return "nd";
    } else if (day === 3 || day === 23) {
      return "rd";
    } else {
      return "th";
    }
  };

  return (
    <li className="relative h-[300px] shadow-lg md:h-[350px] lg:h-[450px]">
      <Image
        height={200}
        width={300}
        src={image}
        alt="blogimages"
        className=" absolute left-0 top-0 z-10 h-full w-full rounded-lg object-cover"
      />

      <div className="absolute left-0 top-0 z-[16] h-full w-full bg-gradient-to-r from-black/70 to-black/10 "></div>
      <div className="relative z-30   mx-auto flex  h-full w-[80%] flex-col justify-between py-6 lg:pb-6 lg:pt-10">
        <div className="text-white">
          <Button className="bg-orange-600 px-4 py-2 text-sm capitalize text-white outline-none focus:outline-none active:outline-none lg:px-10 lg:py-4 lg:text-base">
            #Computer
          </Button>
          <p
            className={twMerge(
              `mt-6 text-2xl font-bold lg:text-4xl capitalize ${textclassName}`
            )}
          >
            {title}
          </p>
          <h2 className="mt-4 text-sm">By {formatDate(publihed_at)}</h2>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="text-white">{comment} comments</h4>
          <Button
            onClick={blogdetailNavigationhandler}
            className="mb-3  bg-white px-4 py-2 text-sm capitalize text-black outline-none focus:outline-none active:outline-none lg:px-10 lg:py-4 lg:text-base"
          >
            readmore
          </Button>
        </div>
      </div>
    </li>
  );
}
