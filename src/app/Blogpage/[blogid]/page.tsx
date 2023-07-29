import React from "react";
import HeroDetail from "./sections/HeroDetail";
import Mainnews from "./sections/Mainnews";
import { getpost } from "@/app/utils/Query";

//api.meerastravels.com/api/post/fugiat-est-consequatur-non-libero

https: type Props = {
  params: { blogid: string };
};

export default async function BlogDetailpage({ params }: Props) {
  const slug = params.blogid;
  const post = await getpost(slug);
  

  return (
    <section className="mx-auto mb-28  w-[99.9%] bg-lightgreen py-24">
      <div className="h-full w-full">
        <HeroDetail post={post?.data} />
        <Mainnews post={post} />
      </div>
    </section>
  );
}
