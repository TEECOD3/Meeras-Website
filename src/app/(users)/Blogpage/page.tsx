import Image from "next/image";
import React, { Suspense } from "react";
import { buttondata } from "../../../data/Data";
import Blogherolist from "../../../components/UI/Blogherolist";
import Blogpostlist from "../../../components/UI/Blogpostlist";
import Newsletter from "../../../components/UI/Newsletter";
import { getAllPosts, getimages } from "../../../lib/getAllPosts";
import { Metadata } from "next";
import { posts } from "../../../../type";
import { images } from "../../../../type";
import LoadingBlogSkeleton from "@/components/UI/blogSkeleton";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Posts for Merras software solutions",
  icons: {
    icon: "/Meeraslogo.png",
  },
};

const Blogpage = async () => {
  const PostsData: Promise<posts> = getAllPosts();
  const imageData: Promise<images> = getimages();
  const [posts, images] = await Promise.all([PostsData, imageData]);
  const combinedimageandpost = posts.data.map((item: any, index: number) => ({
    ...item,
    image: images[index % images.length].download_url,
  }));

  return (
    <section className="py-16 lg:py-28">
      <section className="mx-auto px-3 lg:w-[82%] flex flex-col">
        <h2 className="sm:mt-10 mb-4 text-3xl font-extrabold capitalize  lg:text-6xl ">
          meeras blog
        </h2>
        <article className="flex items-center justify-center h-[70vh] sm:h-full w-full ">
          <Suspense fallback={<LoadingBlogSkeleton />}>
            <Blogherolist combinedimageandpost={combinedimageandpost} />
          </Suspense>
        </article>
      </section>

      <section className="my-10">
        <div className="mx-auto flex  w-full gap-4 border-b-2 border-t-2 border-dashed border-black ">
          <div className=" mx-auto overflow-x-auto lg:w-[95%] ">
            <div className="no-scrollbar py-2 flex  gap-3 sm:w-full sm:gap-5 md:p-4 lg:gap-2 snap-x snap-mandatory">
              {buttondata.map((buttons) => (
                <button
                  key={buttons.id}
                  className="mx-auto p-2 shadow-sm snap-center"
                >
                  <div className="flex w-full items-center  gap-3">
                    <div className="font-bold uppercase text-[0.5rem] lg:text-[1rem]   ">
                      {buttons.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" mx-auto mt-10 w-11/12 md:w-[82%] ">
          <Blogpostlist combinedimageandpost={combinedimageandpost} />
        </div>
      </section>
      <Newsletter />
    </section>
  );
};

export default Blogpage;
