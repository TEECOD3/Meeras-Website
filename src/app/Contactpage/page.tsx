import React from "react";
import contactimage from "../images/contactImage.png";
import Image from "next/image";
import Input from "../Components/forms/input";
import { Button } from "../Components/UI/Button";
import map from "../images/Mapsiclemap.png";
import { type } from "os";

const Contactpage = () => {
  return (
    <main>
      <section className="relative w-full flex justify-center md:px-20 py-24 ">
        <Image
          src={contactimage}
          alt="contactimage"
          className="w-full h-full absolute top-0 left-0 z-5 object-cover"
        />
        <div className="bg-black/60 absolute top-0 left-0 h-full w-full z-10" />

        <div className="relative h-full w-full z-30 px-4 sm:px-20 md:px-2 lg:px-1 lg:p-12 md:text-left flex flex-col lg:flex-row justify-between item-center">
          <div className="flex  h-full flex-col text-center md:text-left lg:w-1/2  lg:mt-5 mb-3 md:mb-0 lg:my-auto">
            <h4 className=" text-2xl sm:text-5xl  font-bold  text-white sm:leading-[4rem] lg:leading-[6rem] lg:text-7xl md:w-11/12 lg:w-10/12 lg:mt-16">
              Distribute your brand from
              <span className="text-orange-600 font-black ml-1"> design </span>
              to
              <span className="text-orange-600 font-black ml-3 "> code</span>
            </h4>
            <p className="text-white text-sm mt-3  xl:w-3/4 p-3">
              We make it easy for you to share and collaborate on critical
              content — everything from contracts to spreadsheets to videos —
              all on a single platform. And we help you keep it all secure. Fill
              out the form and we qill show you how to get more done in the
              Content Cloud. Spreadsheets to videos — all on a single platform.
              And we help you keep it all secure.
            </p>
          </div>
          <div className="text-white md:p-4 lg:w-1/2 rounded-lg mt-4 md:mt-0">
            <form
              action=""
              className="bg-white p-4 xl:w-3/4 mx-auto space-y-2  sm:space-y-4 lg:space-y-8 rounded-lg"
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
                className="border-[1px] border-gray-300 p-4 w-full rounded-lg focus:border-gray-400 focus:border-[1px] outline-none focus:outline-none resize-none text-[0.7rem]"
              ></textarea>
              <p className="text-black text-[0.8rem]">
                By clicking on contact us, you agree to receive emails from Box
                regarding product and service updates, special offers, events
                and webinars, and other marketing materials. You may unsubscribe
                at any time.
              </p>

              <div className="w-full bg-red-4 flex justify-end ">
                <Button className="px-16" variants="default" size="default">
                  contact
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#CEE2DA] mx-auto p-4 md:p-10">
        <div className="">
          <Image src={map} alt="map" className="mx-auto object-cover" />
        </div>
      </section>
    </main>
  );
};

export default Contactpage;
