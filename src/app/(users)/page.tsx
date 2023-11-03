"use client";
import { FC, Suspense } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HompageSections/HeroSection";
import Companies from "./HompageSections/Companies";
import Services from "./HompageSections/Services";
import Product from "./HompageSections/Product";
import Testimony from "./HompageSections/Testimony";
import HomeNewsletter from "./HompageSections/HomeNewsletter";
import LoadingBlogSkeleton from "@/components/UI/blogSkeleton";

interface homeprops {}
const Home: FC<homeprops> = () => {
  return (
    <>
      <Suspense fallback={<LoadingBlogSkeleton />}>
        <section className=" relative bg-[#FFEFE3] p-4 lg:py-24">
          <HeroSection />
        </section>

        <section className="p-4">
          <Companies />
        </section>

        <section className=" mt-4 max-md:px-12 max-sm:p-2 md:p-6 ">
          <Services />
        </section>

        <section className="relative mt-16 text-center sm:mt-32">
          <Product />
        </section>

        <section className="mt-44 mx-auto w-[90%] md:mt-[24rem] xl:mt-[32rem] ">
          <Testimony />
        </section>

        <section className="mt-20 flex flex-col items-center justify-center bg-grey-100 px-4 py-28">
          <HomeNewsletter />
        </section>
      </Suspense>
    </>
  );
};

export default Home;
