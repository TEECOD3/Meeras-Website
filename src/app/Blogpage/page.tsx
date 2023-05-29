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
      <section className="mx-auto w-[82%]">
        <h2 className=" mb-4 text-3xl font-extrabold capitalize lg:text-6xl ">
          meeras blog
        </h2>
        <article className="mt-4">
          <Blogherolist />
        </article>
      </section>

      <section className="my-10">
        <div className="mx-auto  flex  w-full gap-4 border-b-2 border-t-2 border-dashed border-black p-3 lg:mt-6 ">
          <div className=" mx-auto  overflow-x-auto lg:w-[82%]">
            <div className="no-scrollbar flex w-[60rem]  gap-3 sm:w-full sm:gap-5 md:p-4 lg:gap-5 ">
              {buttondata.map((buttons) => (
                <button
                  key={buttons.id}
                  className="mx-auto w-[30rem] p-4 shadow-sm md:w-[18rem]"
                >
                  <div className="flex w-full items-center justify-between gap-3 px-4">
                    <div className="flex w-[90%] flex-wrap text-center text-[0.7rem] font-bold uppercase md:text-sm ">
                      {buttons.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" mx-auto mt-16 w-11/12 md:w-[82%]">
          <Blogpostlist />
        </div>
      </section>
    </section>
  );
};

export default Blogpage;
