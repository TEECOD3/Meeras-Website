import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import React, { useRef } from "react";

type Props = {};

const HomeNewsletter = (props: Props) => {
  const emailref = useRef<HTMLInputElement>(null!);
  return (
    <>
      {" "}
      <h2 className="lg:3/6 xl:1/4 px-2 text-center text-xl font-semibold text-[#000B17] md:mb-10 md:w-2/4 md:text-3xl uppercase lg:text-4xl ">
        Ready to simplify how you work?
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = emailref.current.value;
          console.log(email);
          emailref.current.value = "";
        }}
        className="mt-2 flex w-full flex-col items-center justify-center space-y-4 md:h-10 md:w-1/2  md:flex-row md:gap-6"
      >
        <Input
          ref={emailref}
          type="email"
          placeholder="Enter Your Email..."
          className="w-full border-[2px] border-blue-600 rounded-none bg-[#EAEAEA] text-base md:-mb-5 md:p-6 xxl:p-5 xxl:text-2xl"
        />
        <Button
          className="mx-auto mt-4 w-1/2 p-3  text-[0.8rem] sm:w-2/3 md:p-6 lg:text-xl xxl:p-10 xxl:text-2xl uppercase "
          size="default"
          variant="default"
        >
          subscribe Now
        </Button>
      </form>
    </>
  );
};

export default HomeNewsletter;
