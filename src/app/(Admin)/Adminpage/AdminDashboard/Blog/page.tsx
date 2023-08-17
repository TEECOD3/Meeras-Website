import BlogpostDashboard from "@/components/UI/BlogpostDashboard";
import Header from "@/components/UI/Header";
import { FilterXIcon } from "lucide-react";
import React from "react";
import { HiFilter } from "react-icons/hi";
import { blogPosts } from "@/data/Data";

const BlogPage = () => {
  return (
    <section>
      <Header pageName="Blog" />

      <div className="container  ">
        <div className="flex  justify-between w-[88%] mx-auto mt-7 pr-3 items-center  ">
          <p>Blog post</p>
          <div className="border-2 px-4 py-2 border-gray-300 flex items-center justify-center gap-x-2">
            <HiFilter className="text-blue-500" />
            <span className="text-blue-400">view</span>
          </div>
        </div>
        <div className="h-[0.1rem] w-full bg-gray-300 mt-4"></div>
        <BlogpostDashList />
      </div>
    </section>
  );
};

export default BlogPage;

function BlogpostDashList() {
  return (
    <>
      {blogPosts.map((post, i): any => (
        <BlogpostDashboard key={i} />
      ))}
    </>
  );
}
