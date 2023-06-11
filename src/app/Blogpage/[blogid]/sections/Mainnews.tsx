import Image from "next/image";
import React from "react";
import someimage from "../../../images/blogdetshero.png";
import Input from "@/app/Components/forms/input";
import { Button } from "@/app/Components/UI/Button";
const Mainnews = () => {
  return (
    <section className="max-auto mx-auto mb-20 flex w-full max-w-[95%] flex-col space-x-10 lg:max-w-[90%] lg:flex-row xl:space-x-36">
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
            className=" mt-3  w-full object-cover md:h-[40rem]"
            loading="lazy"
            placeholder="blur"
          />
          <p className="mt-2 text-base md:mt-4 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, quis
            facilisis semper integer pretium. Rutrum magna lacus dis purus,
            vitae eget. Nisl enim sit varius auctor. In enim urna mauris ac
            tellus aliquam turpis. Id vulputate orci amet sit nam consectetur
            feugiat nisl, volutpat. Morbi tortor ultrices vulputate euismod
            laoreet nibh consequat lectus tincidunt. Placerat aliquam viverra
            nunc cursus bibendum faucibus aliquam. Odio varius neque, mauris id
            ut aliquam. velit.
          </p>
          <p className="mt-4 text-base lg:text-xl">
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
            className=" `w-full mt-3 bg-center object-cover md:h-[40rem]"
            loading="lazy"
            placeholder="blur"
          />
          <p className="font-nunito mt-2 text-base md:mt-4 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, quis
            facilisis semper integer pretium. Rutrum magna lacus dis purus,
            vitae eget. Nisl enim sit varius auctor. In enim urna mauris ac
            tellus aliquam turpis. Id vulputate orci amet sit nam consectetur
            feugiat nisl, volutpat. Morbi tortor ultrices vulputate euismod
            laoreet nibh consequat lectus tincidunt. Placerat aliquam viverra
            nunc cursus bibendum faucibus aliquam. Odio varius neque, mauris id
            ut aliquam. velit.
          </p>
          <p className="mt-4 text-base lg:text-xl">
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
        <section className=" mt-6 w-full rounded-xl bg-orange-500 p-6 ">
          <div className="mx-auto md:w-2/3">
            <h3 className="text-center text-xl font-extrabold  text-white lg:text-3xl">
              Do you enjoy reading this?
            </h3>
            <h2 className="my-2 text-center text-sm font-medium text-white md:my-6 md:text-base">
              Receive regular financial education content.
            </h2>
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <Input
                inputs={{
                  type: "text",
                  placeholder: "enter your email address..",
                }}
                className="mb-2 flex-1 bg-orange-400/80 p-3 text-base text-white lg:mb-0 "
              />
              <button className="md:text-bold mx-auto mt-3 w-1/2  rounded-lg bg-white  py-3 text-sm font-bold capitalize text-black md:mt-0 md:w-4/12 lg:w-2/6">
                subscribe now
              </button>
            </div>
          </div>
        </section>
      </article>

      <aside className=" mx-auto bg-blue-300  lg:w-2/5">aside</aside>
    </section>
  );
};

export default Mainnews;
