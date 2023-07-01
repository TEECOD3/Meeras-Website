"use client";

import { Button } from "@/app/Components/UI/Button";
import Input from "@/app/Components/forms/input";
import React, { useRef } from "react";

type Props = {};

export default function Newsletter({}: Props) {
  const emailref = useRef<HTMLInputElement>(null!);
  return (
    <section className="mt-20 flex flex-col items-center justify-center bg-orange-500 px-2 py-28 max-w-7xl rounded-2xl mx-auto">
      <h2 className="lg:3/6 xl:1/4 px-2 text-center text-2xl font-bold text-white md:mb-10 md:w-2/4 md:text-4xl lg:text-5xl xl:text-6xl">
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
          variant="default"
          inputs={{
            type: "email",
            placeholder: "enter your email...",
          }}
          className="w-full border-blue-700 bg-white text-base md:-mb-5 md:p-4 xxl:p-9 xxl:text-2xl"
        />
        <Button
          className="mx-auto mt-4 w-1/2 p-3 hover:bg-white/75 hover:text-black text-black/75 text-[0.8rem] sm:w-2/3 md:p-5 lg:text-xl bg-white xxl:p-10 xxl:text-2xl"
          size="default"
          variants="default"
        >
          subscribe Now
        </Button>
      </form>
    </section>
  );
}
