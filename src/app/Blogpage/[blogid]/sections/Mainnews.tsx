import Image from "next/image";
import React from "react";
import someimage from "../../../images/blogdetshero.png";
import Input from "@/app/Components/forms/input";
import { Button } from "@/app/Components/UI/Button";
import { AiFillLike } from "react-icons/ai";
import { BsInstagram, BsLink, BsTelegram, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Postdetails } from "../../Components/Postdetails";
import Blogpost from "../../Components/Blogpost";

const data = [];
const Mainnews = () => {
  return (
    <section className="mx-auto mb-5 flex w-full max-w-[95%] flex-col md:space-x-10 lg:max-w-[90%] lg:flex-row xl:space-x-36">
      <article className="flex-1">
        <p className="mt-10 text-base lg:text-xl">
          We make it easy for you to share and collaborate on critical content —
          everything from contracts to spreadsheets to videos — all on a single
          platform. And we help you keep it all secure. Fill out the form and we
          will show you how to get more done in the Content Cloud.
        </p>

        <section>
          <h3 className="mt-3 text-3xl font-bold capitalize md:text-5xl ">
            introducing sprout of modern comabait
          </h3>
          <Image
            src={someimage}
            alt="blogimagedescription"
            className=" mt-4  w-full object-cover md:h-[40rem]"
            loading="lazy"
            placeholder="blur"
          />
          <p className="mt-2 text-base md:mt-4 lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, quis
            facilisis semper integer pretium. Rutrum magna lacus dis purus,
            vitae eget. Nisl enim sit varius auctor. In enim urna mauris ac
            tellus aliquam turpis. Id vulputate orci amet sit nam consectetur
            feugiat nisl, volutpat. Morbi tortor ultrices vulputate euismod
            laoreet nibh consequat lectus tincidunt. Placerat aliquam viverra
            nunc cursus bibendum faucibus aliquam. Odio varius neque, mauris id
            ut aliquam. velit.
          </p>
          <p className="mt-4 text-base lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, quis
            facilisis semper integer pretium. Rutrum magna lacus dis purus,
            vitae eget. Nisl enim sit varius auctor. In enim urna mauris ac
            tellus aliquam turpis. Id vulputate orci amet sit nam consectetur
            feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vitae, quis facilisis semper integer pretium. Rutrum magna lacus dis
            purus, vitae eget. Nisl enim sit varius auctor. In enim urna mauris
            ac tellus aliquam turpis. Id vulputate orci amet sit nam consectetur
            feugiat nisl, volutpat. Morbi tortor ultrices vulputate euismod
            laoreet nibh consequat lectus tincidunt. Placerat ali
          </p>
        </section>
        <section>
          <h3 className="mt-3 text-3xl font-bold capitalize md:text-5xl ">
            introducing sprout of modern comabait
          </h3>
          <Image
            src={someimage}
            alt="blogimagedescription"
            className=" `w-full mt-4 bg-center object-cover md:h-[40rem]"
            loading="lazy"
            placeholder="blur"
          />
          <p className="font-nunito mt-2 text-base md:mt-4 lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, quis
            facilisis semper integer pretium. Rutrum magna lacus dis purus,
            vitae eget. Nisl enim sit varius auctor. In enim urna mauris ac
            tellus aliquam turpis. Id vulputate orci amet sit nam consectetur
            feugiat nisl, volutpat. Morbi tortor ultrices vulputate euismod
            laoreet nibh consequat lectus tincidunt. Placerat aliquam viverra
            nunc cursus bibendum faucibus aliquam. Odio varius neque, mauris id
            ut aliquam. velit.
          </p>
          <p className="mt-4 text-base lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, quis
            facilisis semper integer pretium. Rutrum magna lacus dis purus,
            vitae eget. Nisl enim sit varius auctor. In enim urna mauris ac
            tellus aliquam turpis. Id vulputate orci amet sit nam consectetur
            feugiat Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vitae, quis facilisis semper integer pretium. Rutrum magna lacus dis
            purus, vitae eget. Nisl enim sit varius auctor. In enim urna mauris
            ac tellus aliquam turpis. Id vulputate orci amet sit nam consectetur
            feugiat nisl, volutpat. Morbi tortor ultrices vulputate euismod
            laoreet nibh consequat lectus tincidunt. Placerat ali
          </p>
        </section>
        <section className=" mt-6 w-full rounded-xl bg-orange-500 p-6 px-6 lg:py-10 ">
          <div className="mx-auto md:w-2/3">
            <h3 className="text-center text-xl font-extrabold  text-white lg:text-5xl">
              Do you enjoy reading this?
            </h3>
            <h2 className="my-2 text-center text-sm font-medium text-white md:my-6 md:text-base">
              Receive regular financial education content.
            </h2>
            <div className="mx-auto flex flex-col items-center justify-center lg:flex-row xl:w-3/5 gap-x-2">
              <Input
                inputs={{
                  type: "text",
                  placeholder: "enter your email address..",
                }}
                className="mb-2 flex-1 bg-white p-3 text-base text-gray-500 lg:mb-0"
              />
              <button className="md:text-bold mx-auto mt-3 w-1/2  rounded-lg bg-white  py-3 text-sm font-bold capitalize text-black md:mt-0 md:w-4/12 lg:w-2/6">
                subscribe now
              </button>
            </div>
          </div>
        </section>
      </article>

      <div className="mx-auto mt-5 w-full md:mt-10 lg:w-2/5 xl:w-[30%]  ">
        <div className="flex w-full justify-center md:justify-start">
          <div className="flex h-28 w-28 flex-col items-center justify-center">
            <div className="inline-block cursor-pointer rounded-full bg-[#dceee6]  p-4 hover:scale-105">
              <AiFillLike className="fill-blue-500 text-5xl text-blue-500" />
            </div>
            <div className="mt-1  text-base font-extrabold ">73</div>
          </div>
        </div>

        <div className="mt-2 md:mt-6">
          <h3 className="text-xl font-bold capitalize text-gray-600 md:text-3xl">
            share post
          </h3>
          <div className="mt-3 flex w-full justify-between gap-x-4  md:mt-6">
            <div className="inline-block cursor-pointer rounded-full bg-[#dceee6]  p-4 hover:scale-105">
              <BsInstagram className="text-2xl text-blue-500" />
            </div>
            <div className="inline-block cursor-pointer rounded-full bg-[#dceee6]  p-4 hover:scale-105">
              <FaLinkedinIn className="text-2xl text-blue-500" />
            </div>
            <div className="inline-block cursor-pointer rounded-full bg-[#dceee6]  p-4 hover:scale-105">
              <BsTwitter className="text-2xl text-blue-500" />
            </div>
            <div className="inline-block cursor-pointer rounded-full bg-[#dceee6]  p-4 hover:scale-105">
              <BsTelegram className="text-2xl text-blue-500" />
            </div>
            <div className="inline-block cursor-pointer rounded-full bg-[#dceee6]  p-4 hover:scale-105">
              <BsLink className="text-2xl text-blue-500" />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className=" text-xl font-bold capitalize text-gray-600 md:text-3xl">
            15 comments
          </h3>

          <div className="mt-6">
            <Postdetails />
            <Postdetails />
            <Postdetails />
          </div>

          <div className="mt-4 space-y-8">
            <h3 className=" my-2 text-xl font-bold capitalize text-gray-600 md:my-6 md:text-3xl">
              related posts
            </h3>
            <Blogpost textclassName="text-sm" />
            <Blogpost textclassName="text-base md:text-xl" />
            <Blogpost textclassName="text-base md:text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainnews;
