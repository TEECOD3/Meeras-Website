import Link from "next/link";
import React, { ReactNode } from "react";
import { MdHome } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import Image from "next/image";
import meeraslogo from "../../../public/Meeraslogo.png";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { Button } from "./button";

type props = {
  children: ReactNode;
};
const Sidebar = ({ children }: props) => {
  return (
    <div className="flex">
      <div className="fixed border-r-2 border-gray-200 w-20 lg:w-[18rem] h-screen transition-all duration-75 ease-in-out p-4 flex flex-col items-center justify-between">
        <div className="">
          <div className="h-[50px] w-[50px] py-3 lg:py-10">
            <Image
              src={meeraslogo}
              alt="meeras logo"
              height={100}
              width={100}
            />
          </div>
          <div className="flex flex-col items-start mt-10 gap-y-8">
            <Link href="/">
              <div className="flex gap-x-2 items-center justify-center capitalize text-blue-600">
                <BiHomeAlt2 className="text-blue-600 text-2xl lg:text-base" />
                <span className="lg:inline-block hidden">Dashboard</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex gap-x-2 items-center justify-center capitalize text-blue-600">
                <HiOutlineViewGridAdd className="text-blue-600 text-2xl lg:text-base" />
                <span className="lg:inline-block hidden ">blog</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex gap-x-2 items-center justify-center capitalize text-blue-600">
                <IoMdAdd className="text-blue-600 text-2xl lg:text-base" />
                <span className="lg:inline-block hidden">new blog</span>
              </div>
            </Link>
            <Link href="/">
              <div className="flex gap-x-2 items-center justify-center capitalize text-blue-600">
                <BiLogOut className="text-blue-600 text-2xl lg:text-base" />
                <span className="lg:inline-block hidden ">log out</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <Button className="bg-blue-600 rounded-lg capitalize flex gap-x-2">
            <IoMdAdd className="text-white text-2xl lg:text-base" />
            <span className="lg:inline-block hidden ">new post</span>
          </Button>
        </div>
      </div>
      <main className="ml-20 lg:ml-[18rem] w-full transition-all duration-75 ease-in-out">
        {children}
      </main>
      ;
    </div>
  );
};

export default Sidebar;
