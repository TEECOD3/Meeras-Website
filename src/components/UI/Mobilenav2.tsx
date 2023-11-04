import {
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  MenuIcon,
  TwitterIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/UI/sheet";
import { Separator } from "@/components/UI/separator";

import Whatsapp from "../../../public/assets/icons/Whatsapp";

export function Mobilenav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="z-[900000000000]">
        <ul className=" flex flex-col gap-y-10 text-xl font-semibold px-2 py-10 uppercase mt-10">
          <Link href="/Aboutpage">
            <SheetClose>
              <li className="uppercase  text-xl">About us</li>
            </SheetClose>
          </Link>
          <Separator />
          <Link href="/Blogpage">
            <SheetClose>
              <li className="uppercase  text-xl">blog</li>
            </SheetClose>
          </Link>
          <Separator />
          <Link href="/Aboutpage">
            <SheetClose>
              <li className="uppercase  text-xl">policy and privacy</li>
            </SheetClose>
          </Link>
          <Separator />
          <div className="flex items-center justify-center">
            <div className="w-full uppercase flex-col flex items-left justify-center">
              <ul className="flex gap-x-3 justify-between ">
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
