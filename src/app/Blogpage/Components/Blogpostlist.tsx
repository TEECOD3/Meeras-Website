import React from "react";
import Blogpost from "./Blogpost";

interface posts {
  id: number;
  title: string;
  content: string;
  publihed_at: string;
  author: string;
  slug: string;
  like: number;
  comment: number;
  image: string;
}

type Props = {
  combinedimageandpost: posts[];
};

export default function Blogpostlist({ combinedimageandpost }: Props) {
  return (
    <ul className=" grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-y-24 gap-x-20">
      {combinedimageandpost.map((item: posts) => (
        <Blogpost
          image={item.image}
          key={item.id}
          author={item.author}
          title={item.title}
          like={item.like}
          comment={item.comment}
          publihed_at={item.publihed_at}
          slug={item.slug}
          content={item.content}
        />
      ))}
    </ul>
  );
}
