import React from "react";
import Blogpost from "./Blogpost";

type Props = {};

export default function Blogpostlist({}: Props) {
  return (
    <ul className=" grid grid-cols-1 md:grid-cols-2 gap-y-16 lg:gap-y-24 gap-x-20">
      <Blogpost />
      <Blogpost />
      <Blogpost />
      <Blogpost />
      <Blogpost />
    </ul>
  );
}
