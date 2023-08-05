import React from "react";
import Link from "next/link";
import Facebook from "../../../public/assets/icons/Facebook";
import Instagram from "../../../public/assets/icons/Instagram";
import Twitter from "../../../public/assets/icons/Twitter";
import Whatsapp from "../../../public/assets/icons/Whatsapp";
import { FaLinkedinIn } from "react-icons/fa";
import meerasfooter from "public/images/merrasfooterimg.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" flex flex-col items-center justify-center bg-blue-900 px-3 pt-8 lg:pt-20">
      <div className=" mx-auto flex flex-col  gap-10 md:max-w-[83%] md:flex-row-reverse ">
        <div className="flex justify-between px-6 font-light text-white max-sm:text-sm md:flex-1  md:justify-around md:gap-10 md:px-0">
          <ul className="text-md flex flex-col gap-y-6 space-y-2 md:text-base">
            <h4 className="text-md font-bold">Company</h4>
            <li>
              <Link href="/Aboutpage">About us</Link>
            </li>
            <li>
              <Link href="/Blogpage">Blog</Link>
            </li>
          </ul>
          <ul className="space-y-8 md:text-base">
            <h4 className="font-bold ">Contact</h4>
            <li>Meerassoftware@gmail.com</li>
            <li>Whatsapp : +234 708 135 3229</li>
          </ul>
        </div>
        <div className=" mt-4 h-full px-4 sm:mt-0 md:w-3/6 ">
          <Image
            alt="nex"
            src={meerasfooter}
            className=" h-20 w-20 bg-contain bg-no-repeat "
          />
          <p className="text-md mt-6 font-light text-white sm:text-xl md:text-base lg:w-2/3">
            With our expertise in web development, mobile app development, IT
            infrastructure, virtual services, content management, artificial
            intelligence, and IoT, we are your trusted technology partner for a
            comprehensive range of digital solutions.
          </p>
          <ul className="mt-6 flex gap-4 ">
            <li className="flex h-10 w-10  items-center justify-center rounded-full bg-white">
              <a href="/" target="_blank">
                <Facebook />
              </a>
            </li>
            <li className="flex h-10 w-10   items-center justify-center rounded-full bg-white">
              <a href="https://instagram.com/Meerassoftware" target="_blank">
                <Instagram />
              </a>
            </li>
            <li className="flex h-10 w-10  items-center justify-center rounded-full bg-white">
              <a href="https://twitter.com/MeerasSoftware" target="_blank">
                <Twitter />
              </a>
            </li>
            <li className="flex  h-10 w-10   items-center justify-center rounded-full bg-white">
              <a
                href="https://www.linkedin.com/company/meeras-software-solution/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="flex h-10 w-10    items-center justify-center rounded-full bg-white">
              <Whatsapp />
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-3/4 text-center font-light text-white">
        <hr className="rounded-10 mx-auto w-2/3 bg-white/20 " />
        <p className="mb-8 mt-2 text-sm sm:mt-6">
          Copyright 2023 Meeras software solutions. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
