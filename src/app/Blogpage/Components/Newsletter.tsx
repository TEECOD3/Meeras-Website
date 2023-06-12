import { Button } from "@/app/Components/UI/Button";
import Input from "@/app/Components/forms/input";
import React from "react";

type Props = {};

export default function Newsletter({}: Props) {
  return (
    <section>
      <div className="mx-auto  flex w-10/12 flex-col justify-between rounded-2xl bg-orange-500 p-10 md:flex-row lg:p-20 ">
        <div className=" md:w-1/2">
          <h4 className="font-bold text-white sm:text-3xl  xl:text-7xl">
            Ready to simplify how you work?
          </h4>
        </div>

        <div className=" flex flex-col gap-x-3 gap-y-6 md:w-1/2 md:flex-row lg:items-center lg:justify-center">
          <Input
            inputs={{ placeholder: "Enter your email" }}
            className="mt-6 flex-1 bg-orange-200 text-white lg:mt-0 lg:text-base"
          />
          <Button className=" w-[40%] bg-white  text-sm lg:w-4/12 lg:py-3">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
}
