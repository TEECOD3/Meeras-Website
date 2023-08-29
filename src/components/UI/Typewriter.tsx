"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

const Typewriter = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [`Presence`, "capabilities", "transformation", "excellence"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <span className="capitalize text-orange-600 font-satisfy">
      {text}
      <Cursor cursorColor="orange" />
    </span>
  );
};

export default Typewriter;
