import Image from "next/image";
import React from "react";
import someimage from "../../images/blogimage.jpg";

type Props = {};

export const Postdetails = (props: Props) => {
  return (
    <div className=" border-b-2 border-gray-500">
      <p>
        We make it easy for you to share and collaborate on critical content —
        everything from contracts.
      </p>
      <div className="flex gap-x-4 items-center justify-center">
        <Image
          src={someimage}
          alt="authorsimage"
          placeholder="blur"
          loading="lazy"
          className="roundeed-full h-14 w-14 object-cover "
        />

        <div className=" flex  flex-1 flex-col gap-y-4 ">
          <div className="">orezi</div>
          <div className="">June 2, 2022 at 9:16 am</div>
        </div>
      </div>
    </div>
  );
};
