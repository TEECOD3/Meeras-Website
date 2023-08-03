import React from "react";
import contactimage from "public/images/contactImage.png";
import Image from "next/image";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import map from "public/images/Mapsiclemap.png";
import { Textarea } from "@/components/UI/textarea";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Contact Merras software solutions",
  icons: {
    icon: "/Meeraslogo.png",
  },
};

const Contactpage = () => {
  return (
    <main>
      <section className="relative flex w-full justify-center py-24 md:px-20 ">
        <Image
          src={contactimage}
          alt="contactimage"
          className="z-5 absolute left-0 top-0 h-full w-full object-cover"
          loading="lazy"
          placeholder="blur"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30" />

        <div className="item-center relative z-30 flex h-full w-full flex-col justify-between  px-4 sm:px-20 md:px-2 md:text-left lg:w-[89%] lg:flex-row lg:p-12 lg:px-1">
          <div className="mb-3 flex h-full flex-col  text-center md:mb-0  md:text-left lg:my-auto lg:mt-5 lg:w-1/2">
            <h4 className=" text-2xl font-extrabold  text-white  sm:text-5xl   lg:mt-16  lg:text-7xl">
              Get in Touch with Meeras&nbsp;
              <span className="text-orange-600">Software Solution</span>
            </h4>
            <p className="mt-3 p-3 text-sm  text-white xl:w-3/4">
              Thank you for your interest in Meeras Software Solution. We
              welcome the opportunity to connect with you and discuss how our
              innovative technology solutions can benefit your business. Please
              feel free to reach out to us using the contact information
              provided below:
            </p>
          </div>
          <div className="mt-4 rounded-lg text-white md:mt-0 md:p-4 lg:w-1/2">
            <form
              action=""
              className="mx-auto space-y-2 rounded-lg bg-white p-4  sm:space-y-4 lg:space-y-8 xl:w-3/4"
            >
              <div className="flex gap-3">
                <Input
                  type="firstname"
                  placeholder="enter your firstname"
                  className="text-gray-600 capitalize"
                />
                <Input
                  type="lastname"
                  placeholder="enter your lastname"
                  className="text-gray-600 capitalize"
                />
              </div>

              <Input
                type="email"
                placeholder="enter your email"
                className="text-gray-600 capitalize"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="text-gray-600 capitalize"
              />
              <Input
                type="text"
                placeholder="enter your company's name"
                className="text-gray-600 capitalize"
              />
              <Textarea
                placeholder="how can the company help you"
                className="w-full resize-none rounded-lg border-[1px] border-gray-300 p-4  text-gray-500 outline-none focus:border-[1px] focus:border-gray-400 focus:outline-none"
              ></Textarea>
              <p className="text-[0.8rem] text-black">
                By clicking on contact us, you agree to receive emails from Box
                regarding product and service updates, special offers, events
                and webinars, and other marketing materials. You may unsubscribe
                at any time.
              </p>

              <div className="bg-red-4 flex w-full justify-end ">
                <Button className="px-16 py-4" size="default">
                  contact
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto bg-[#CEE2DA] p-4 md:p-10">
        <div className="">
          <Image
            src={map}
            alt="map"
            className="mx-auto object-cover"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </section>
    </main>
  );
};

export default Contactpage;
