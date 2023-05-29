import React from "react";
import contactimage from "../images/contactImage.png";
import Image from "next/image";
import Input from "../Components/forms/input";
import { Button } from "../Components/UI/Button";
import map from "../images/Mapsiclemap.png";

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
            <h4 className=" text-2xl font-bold  text-white  sm:text-5xl sm:leading-[4rem] md:w-11/12 lg:mt-16 lg:w-10/12 lg:text-7xl lg:leading-[6rem]">
              Distribute your brand from
              <span className="ml-1 font-black text-orange-600"> design </span>
              to
              <span className="ml-3 font-black text-orange-600 "> code</span>
            </h4>
            <p className="mt-3 p-3 text-sm  text-white xl:w-3/4">
              We make it easy for you to share and collaborate on critical
              content — everything from contracts to spreadsheets to videos —
              all on a single platform. And we help you keep it all secure. Fill
              out the form and we qill show you how to get more done in the
              Content Cloud. Spreadsheets to videos — all on a single platform.
              And we help you keep it all secure.
            </p>
          </div>
          <div className="mt-4 rounded-lg text-white md:mt-0 md:p-4 lg:w-1/2">
            <form
              action=""
              className="mx-auto space-y-2 rounded-lg bg-white p-4  sm:space-y-4 lg:space-y-8 xl:w-3/4"
            >
              <div className="flex gap-3">
                <Input inputs={{ placeholder: "first name", type: "text" }} />
                <Input inputs={{ placeholder: "last name", type: "text" }} />
              </div>

              <Input inputs={{ placeholder: "email", type: "email" }} />
              <Input inputs={{ placeholder: "phone number", type: "tel" }} />
              <Input inputs={{ placeholder: "company name", type: "text" }} />
              <textarea
                placeholder="how can the company help you"
                className="w-full resize-none rounded-lg border-[1px] border-gray-300 p-4 text-[0.7rem] outline-none focus:border-[1px] focus:border-gray-400 focus:outline-none"
              ></textarea>
              <p className="text-[0.8rem] text-black">
                By clicking on contact us, you agree to receive emails from Box
                regarding product and service updates, special offers, events
                and webinars, and other marketing materials. You may unsubscribe
                at any time.
              </p>

              <div className="bg-red-4 flex w-full justify-end ">
                <Button
                  className="px-16 py-4"
                  variants="default"
                  size="default"
                >
                  contact
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto bg-[#CEE2DA] p-4 md:p-10">
        <div className="">
          <Image src={map} alt="map" className="mx-auto object-cover" />
        </div>
      </section>
    </main>
  );
};

export default Contactpage;
