import Image from "next/image";
import React from "react";
import { buttondata } from "../data/Data";
import Blogherolist from "./Components/Blogherolist";
import Blogpostlist from "./Components/Blogpostlist";

import Newsletter from "./Components/Newsletter";
import { getimages, getposts } from "../utils/Query";

const Blogpage = async () => {
  const Posts = await getposts();

  const images = await getimages();
  const combinedimageandpost = Posts.data.map((item: any, index: number) => ({
    ...item,
    image: images[index % images.length].download_url,
  }));

  return (
    <section className="py-16 lg:py-28">
      <section className="mx-auto px-3 lg:w-[82%]  flex flex-col ">
        <h2 className=" mb-4 text-3xl font-extrabold capitalize  lg:text-6xl ">
          meeras blog
        </h2>
        <article className="flex items-center justify-center  w-full ">
          <Blogherolist combinedimageandpost={combinedimageandpost} />
        </article>
      </section>

      <section className="my-10">
        <div className="mx-auto flex  w-full gap-4 border-b-2 border-t-2 border-dashed border-black ">
          <div className=" mx-auto overflow-x-auto lg:w-[95%] ">
            <div className="no-scrollbar py-2 flex  gap-3 sm:w-full sm:gap-5 md:p-4 lg:gap-2  ">
              {buttondata.map((buttons) => (
                <button key={buttons.id} className="mx-auto p-2 shadow-sm ">
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

        <div className=" mx-auto mt-16 w-11/12 md:w-[82%]">
          <Blogpostlist combinedimageandpost={combinedimageandpost} />
        </div>
      </section>
      <Newsletter />
    </section>
  );
};

export default Blogpage;
