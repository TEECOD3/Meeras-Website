import { Button } from "@/app/Components/UI/Button";
import Input from "@/app/Components/forms/input";
import React from "react";

type Props = {};

export default function Newsletter({}: Props) {
  return (
    <section>
      <div className="mx-auto  flex w-11/12 flex-col justify-between rounded-2xl bg-orange-500 p-10 md:flex-row lg:p-20 ">
        <div className=" md:w-1/2">
          <h4 className="font-bold text-white sm:text-3xl lg:w-10/12 xl:text-7xl">
            Ready to simplify how you work?
          </h4>
        </div>

        <div className=" flex flex-col gap-y-6 md:w-1/2 md:flex-row md:gap-x-3 lg:items-center lg:justify-center">
          <Input
            inputs={{ placeholder: "Enter your email" }}
            className="mt-6 bg-orange-200 text-white lg:mt-0 lg:text-base"
          />
          <Button className=" w-1/2 bg-white  px-8 py-1 text-sm md:w-4/12 md:py-4">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
}
