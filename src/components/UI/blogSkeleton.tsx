import React from "react";
import { Loader2Icon } from "lucide-react";
import { Skeleton } from "./skeleton";

const LoadingBlogSkeleton = () => {
  return (
    <div className="py-20 lg:py-32">
      <section className="">
        <div className="flex flex-col gap-y-5">
          <div className="w-[80%] mx-auto">
            <Skeleton className="h-14 w-52" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-[80%] mx-auto mt-2 lg:mt-5 items-center lg:gap-x-[15rem]">
            <Skeleton className=" w-full l h-[200px] lg:h-[450px] lg:w-[500px]" />
            <div className="flex-col gap-y-6  w-full flex lg:h-[500px] mt-4 lg:w-[600px] mx-auto justify-center items-start">
              <Skeleton className="h-20 w-full lg:w-[30rem] " />

              <Skeleton className="h-4 w-11/12 lg:w-[28rem] " />
              <Skeleton className="h-4 w-10/12 lg:w-[26rem]" />
              <Skeleton className="h-4 w-9/12 lg:w-[24rem]" />
              <Skeleton className="h-4 w-7/12 lg:w-[20rem]" />

              <Skeleton className="h-10 w-6/12 lg:w-[16rem]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingBlogSkeleton;
