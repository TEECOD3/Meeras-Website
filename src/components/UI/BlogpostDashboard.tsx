import React from "react";
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { BsPencilFill } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
const BlogpostDashboard = () => {
  return (
    <div className="flex justify-between items-center mt-4 lg:pr-10 py-2 border-b-[0.09rem] border-gray-200">
      <div className="flex gap-x-10">
        <div className="flex gap-x-5">
          <div className="p-2 bg-[#DAE9FC] text-[#1473E6] font-bold text-base rounded-sm flex items-center justify-center">
            CP
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-base">Blog Name</p>
            <p className="text-[0.8rem] text-gray-300">11 June 2020</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center ">
          <Hashtagcontainer tagname="frontend development" />
          <Hashtagcontainer tagname="Ui/Ux Design" />
        </div>
      </div>

      <div className="flex gap-x-6">
        <div className="flex gap-x-5">
          <div className="flex items-center gap-x-1">
            <BiBookOpen className="text-[0.8rem] " />
            <span className="text-[0.8rem]">193,900</span>
          </div>
          <div className="flex items-center gap-x-1">
            <AiOutlineLike className="text-[0.8rem] " />
            <span className="text-[0.8rem]">193,900</span>
          </div>
          <div className="flex items-center gap-x-1">
            <AiOutlineComment className="text-[0.8rem]" />
            <span className="text-[0.8rem]">193,900</span>
          </div>
        </div>

        <div className="flex gap-x-2">
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default BlogpostDashboard;

type hashtag = {
  tagname: string;
};
function Hashtagcontainer({ tagname }: hashtag) {
  return (
    <>
      <div className=" py-2 px-3 bg-red-100 text-red-500 rounded-lg text-[0.7rem]">
        {tagname}
      </div>
    </>
  );
}

function DeleteButton() {
  return (
    <>
      <div className=" p-2 rounded-full border-2 border-red-600">
        <MdDeleteOutline className="text-red-600" />
      </div>
    </>
  );
}

function EditButton() {
  return (
    <>
      <div className=" p-2 rounded-full border-2 border-blue-600">
        <BsPencilFill className="text-blue-600" />
      </div>
    </>
  );
}
