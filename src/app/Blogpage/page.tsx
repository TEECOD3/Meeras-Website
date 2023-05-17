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
        <p className="mb-10 text-base ">
          We make it easy for you to share and collaborate on critical conten
          ontent Cloud. Spreadsheets to videos — all on a single platform.
        </p>

        <article>
          <Blogherolist />
        </article>
      </section>
    </main>
  );
};

export default Blogpage;
