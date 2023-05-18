import { Button } from "@/app/Components/UI/Button";
import Input from "@/app/Components/forms/input";
import React from "react";

type Props = {};

export default function Newsletter({}: Props) {
  return (
    <section>
      <div className="w-11/12  bg-orange-500 p-10 lg:p-20 mx-auto flex flex-col md:flex-row rounded-2xl justify-between ">
        <div className=" md:w-1/2">
          <h4 className="sm:text-3xl lg:text-7xl font-bold text-white lg:w-10/12">
            Ready to simplify how you work?
          </h4>
        </div>

        <div className=" flex flex-col md:flex-row lg:items-center lg:justify-center md:w-1/2 gap-y-6 md:gap-x-3">
          <Input
            inputs={{ placeholder: "Enter your email" }}
            className="bg-orange-200 lg:text-base text-white mt-6 lg:mt-0"
          />
          <Button className=" w-1/2 md:w-5/12 lg:w-4/12 py-4 md:py-0 lg:py-6 lg:px-8 bg-white">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
}
