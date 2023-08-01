import Image from "next/image";
import React from "react";
import someimage from "public/images/blogimage.jpg";

type Props = {};

export const Postdetails = (props: Props) => {
  return (
    <div className=" mt-2 border-b-2 border-gray-300 pb-3">
      <p className="text-sm text-gray-600 md:text-xl">
        We make it easy for you to share and collaborate on critical content —
        everything from contracts.
      </p>
      <div className="mt-2 flex items-center justify-center gap-x-4">
        <Image
          src={someimage}
          alt="authorsimage"
          placeholder="blur"
          loading="lazy"
          className="roundeed-full h-14 w-14 object-cover "
        />

        <div className=" flex flex-1 flex-col gap-y-1 text-gray-600 ">
          <div className="font-bold capitalize">orezi</div>
          <div className="text-sm ">June 2, 2022 at 9:16 am</div>
        </div>
      </div>
    </div>
  );
};
