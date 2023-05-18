import Image from "next/image";
import React from "react";
import { buttondata } from "../data/Data";

import Blogherolist from "./Components/Blogherolist";
import Blogpostlist from "./Components/Blogpostlist";
import { Button } from "../Components/UI/Button";
import Newsletter from "./Components/Newsletter";

const Blogpage = () => {
  return (
    <section className="py-24 lg:py-28">
      <section className="w-[82%] mx-auto">
        <h2 className=" text-3xl lg:text-6xl font-extrabold capitalize mb-4 ">
          meeras blog
        </h2>
        <article className="mt-4">
          <Blogherolist />
        </article>
      </section>

      <section className="my-10">
        <div className="flex  w-full  mx-auto p-3 gap-4 lg:mt-6 border-dashed border-t-2 border-b-2 border-black ">
          <div className=" overflow-x-auto  mx-auto lg:w-[82%]">
            <div className="flex w-[60rem] no-scrollbar  gap-3 sm:gap-5 lg:gap-5 md:p-4 sm:w-full ">
              {buttondata.map((buttons) => (
                <button
                  key={buttons.id}
                  className="w-[30rem] md:w-[18rem] mx-auto p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3 w-full px-4 justify-between">
                    <div className="text-center flex-wrap text-[0.7rem] md:text-sm flex w-[90%] font-bold uppercase ">
                      {buttons.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[82%] mx-auto mt-16">
          <Blogpostlist />
        </div>
      </section>
    </section>
  );
};

export default Blogpage;
