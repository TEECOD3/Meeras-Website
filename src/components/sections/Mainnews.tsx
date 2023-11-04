import Image from "next/image";
import React from "react";
import someimage from "public/images/blogdetshero.png";
import { Input } from "../UI/input";
import { Button } from "../UI/button";

import { Textarea } from "../UI/textarea";
import NewsletterBlue from "../UI/NewsletterBlue";

type Props = {
  post: any;
};
const Mainnews = ({ post }: Props) => {
  return (
    <>
      <section className="mx-auto mb-5 flex w-full  max-w-[95%] flex-col md:space-x-10 lg:max-w-[90%] ">
        <article className="w-full mt-10">
          <section>
            <h3 className="mt-3  font-semibold  text-base leading-[28px] lg:leading-[30px] my-8">
              {post?.introduction}
            </h3>

            <ul>
              {post?.points?.map((point: any, i: number) => (
                <li key={i}>
                  <p className="font-semibold my-4">{point?.title}</p>
                  {point?.description.map((desc: any, idx: number) => (
                    <span
                      key={desc}
                      className="mt-4 leading-[30px] lg:leading-[35px]"
                    >
                      {desc}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </section>

          <form className="w-full lg:w-1/2">
            <h2 className="text-2xl text-black font-bold capitalize mt-6">
              leave a comment
            </h2>
            <p className="my-3">
              Your email address will not be published. Required fields are
              marked *
            </p>

            <div className="flex flex-col gap-y-6">
              <Textarea
                className="mt-4"
                placeholder="Enter your comment ...."
              />
              <div className="flex-col flex gap-y-6">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-lightgreen"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-lightgreen"
                />
                <Input
                  type="text"
                  placeholder="website"
                  className="bg-lightgreen"
                />
              </div>

              <Button className="px-3 h-10 capitalize rounded-none">
                Post your comment
              </Button>
            </div>
          </form>
        </article>
      </section>
      <NewsletterBlue />
    </>
  );
};

export default Mainnews;
