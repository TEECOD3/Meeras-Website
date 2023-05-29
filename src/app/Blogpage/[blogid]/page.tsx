import React from "react";
import HeroDetail from "./sections/HeroDetail";

type Props = {};

export default function BlogDetailpage({}: Props) {
  return (
    <section className="mx-auto mb-28 h-screen w-[99.9%] bg-lightgreen py-24">
      <div className="h-full w-full">
        <HeroDetail />
      </div>
    </section>
  );
}
