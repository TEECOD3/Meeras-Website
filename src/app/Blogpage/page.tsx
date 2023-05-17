import Image from "next/image";
import React from "react";

import Blogherolist from "./Components/Blogherolist";

const Blogpage = () => {
  return (
    <main className="py-28 bg-lightgreen">
      <section className="w-[82%] mx-auto">
        <h2 className=" text-3xl lg:text-6xl font-extrabold capitalize mb-4 ">
          meeras blog
        </h2>

        <article>
          <Blogherolist />
        </article>
      </section>
    </main>
  );
};

export default Blogpage;
