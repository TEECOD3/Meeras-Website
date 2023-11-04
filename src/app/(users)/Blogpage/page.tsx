import Image from "next/image";
import React, { Suspense } from "react";
import { buttondata } from "../../../data/Data";
import Blogherolist from "../../../components/UI/Blogherolist";
import Blogpostlist from "../../../components/UI/Blogpostlist";
import Newsletter from "../../../components/UI/Newsletter";
import { blogposts } from "../../../data/Data";
import { Metadata } from "next";
import { Separator } from "@/components/UI/separator";

import LoadingBlogSkeleton from "@/components/UI/blogSkeleton";
import NewsletterBlue from "@/components/UI/NewsletterBlue";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Posts for Merras software solutions",
  icons: {
    icon: "/Meeraslogo.png",
  },
};

const Blogpage = async () => {
  return (
    <section className="pt-32">
      <section className="mx-auto px-3 lg:w-[90%] flex flex-col">
        <h2 className="sm:mt-10  text-3xl font-semibold uppercase lg:text-4xl mb-2 ">
          meeras blog
        </h2>
        <Separator />
        <article className="flex items-center justify-center h-[70vh] sm:h-full w-full ">
          <Suspense fallback={<LoadingBlogSkeleton />}>
            <Blogherolist posts={blogposts} />
          </Suspense>
        </article>
      </section>

      <Separator />

      <NewsletterBlue />
    </section>
  );
};

export default Blogpage;
