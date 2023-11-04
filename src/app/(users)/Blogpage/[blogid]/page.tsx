import React from "react";
import HeroDetail from "@/components/sections/HeroDetail";
import Mainnews from "@/components/sections/Mainnews";
import { getpost } from "@/lib/getPost";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/getAllPosts";
import { blogposts } from "../../../../data/Data";

//api.meerastravels.com/api/post/fugiat-est-consequatur-non-libero
type Props = {
  params: { blogid: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.blogid;
  const BlogPostdata = blogposts.find((post) => post.id === slug);

  return {
    title: BlogPostdata?.title || "  Anonymous",
    description: `this is a post by ${BlogPostdata?.title || "anonymous"}`,
  };
}
export default async function BlogDetailpage({ params }: Props) {
  const slug = params.blogid;
  const BlogPostdata = blogposts.find((post) => post.id === slug);

  return (
    <section className="mx-auto mb-28  w-[99.9%] pt-32">
      <div className="h-full w-full">
        <HeroDetail post={BlogPostdata} />
        <Mainnews post={BlogPostdata} />
      </div>
    </section>
  );
}
export async function generateStaticParams() {
  const PostsData = getAllPosts();
  const posts = await PostsData;

  return posts.data.map((post: any) => {
    blogid: post.id.toString();
  });
}
