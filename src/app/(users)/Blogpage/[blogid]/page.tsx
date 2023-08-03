import React from "react";
import HeroDetail from "@/components/sections/HeroDetail";
import Mainnews from "@/components/sections/Mainnews";
import { getpost } from "@/lib/getPost";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/getAllPosts";

//api.meerastravels.com/api/post/fugiat-est-consequatur-non-libero
type Props = {
  params: { blogid: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.blogid;
  const BlogData: Promise<Post> = getpost(slug);
  const BlogPostdata = await BlogData;

  return {
    title: BlogPostdata.data.author || "  Anonymous",
    description: `this is a post by ${BlogPostdata.data.author || "anonymous"}`,
  };
}
export default async function BlogDetailpage({ params }: Props) {
  const slug = params.blogid;
  const PostData: Promise<Post> = getpost(slug);
  const post = await PostData;

  return (
    <section className="mx-auto mb-28  w-[99.9%] bg-lightgreen py-24">
      <div className="h-full w-full">
        <HeroDetail post={post?.data} />
        <Mainnews post={post} />
      </div>
    </section>
  );
}
export async function generateStaticParams() {
  const PostsData: Promise<posts> = getAllPosts();
  const posts = await PostsData;

  return posts.data.map((post) => {
    blogid: post.id.toString();
  });
}
