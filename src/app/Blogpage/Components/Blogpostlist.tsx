import React from "react";
import Blogpost from "./Blogpost";

// interface posts {
//   id: number;
//   title: string;
//   content: string;
//   published_at: string;
//   author: string;
//   slug: string;
// }

type Props = {
  Posts: any;
};

export default function Blogpostlist({ Posts }: Props) {
  return (
    <ul className=" grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-y-24 gap-x-20">
      {Posts.map((item: any) => (
        <Blogpost
          key={item.id}
          author={item.author}
          title={item.title}
          published_at={item.published_at}
          slug={item.slug}
          content={item.content}
        />
      ))}
    </ul>
  );
}
