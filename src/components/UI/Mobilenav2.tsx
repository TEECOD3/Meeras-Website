import {
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  MenuIcon,
  TwitterIcon,
} from "lucide-react";
import { FC } from "react";
import { MdOutlineClose } from "react-icons/md";
import meeraslogo from "public/images/Meeraslogo.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../../../public/assets/icons/Facebook";
import Twitter from "../../../public/assets/icons/Twitter";
import Instagram from "../../../public/assets/icons/Instagram";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/sheet";
import { Button } from "./button";
import Whatsapp from "../../../public/assets/icons/Whatsapp";
import { FaHamburger } from "react-icons/fa";

export function Mobilenav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="z-[900000000000]">
        <ul className=" flex flex-col gap-y-10 text-xl font-semibold px-2 py-10 uppercase ">
          <SheetClose>
            <Link href="/Aboutpage">
              <li className="uppercase  text-xl">About us</li>
            </Link>
          </SheetClose>
          <SheetClose>
            <Link href="/Blogpage">
              <li className="uppercase  text-xl">blog</li>
            </Link>
          </SheetClose>
          <SheetClose>
            <Link href="/Aboutpage">
              <li className="uppercase  text-xl">policy and privacy</li>
            </Link>
          </SheetClose>
          <div className="flex items-center justify-center">
            <div className="w-full uppercase flex-col flex items-center justify-center">
              <span className="">social media</span>
              <ul className="flex gap-x-3 w-10/12 mx-auto justify-between mt-8">
                <li>
                  <a
                    href="https://instagram.com/Meerassoftware"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </li>
                <a href="https://instagram.com/Meerassoftware" target="_blank">
                  <li>
                    <TwitterIcon />
                  </li>
                </a>

                <a href="https://instagram.com/Meerassoftware" target="_blank">
                  <li>
                    <InstagramIcon />
                  </li>
                </a>
                <a
                  href="https://www.linkedin.com/company/meeras-software-solution/"
                  target="_blank"
                >
                  <li>
                    <Linkedin />
                  </li>
                </a>
                <li>
                  <Whatsapp />
                </li>
              </ul>
            </div>
          </div>
          <SheetClose>
            <Link href="/Contactpage">
              <motion.button className="w-full rounded-none border-black border-2 py-2 ring-2 text-xl uppercase ">
                contact us
              </motion.button>
            </Link>
          </SheetClose>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
