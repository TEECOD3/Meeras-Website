"use client";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import merraslog from "public/images/Meeraslogo.png";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./Mobilenav";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineDown } from "react-icons/ai";
import { useHideNavBar } from "@/Hooks/useHideNavbar";

const NavBar = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const triggerPosition = 500; // Set your desired trigger position here
  const hideNavBar = useHideNavBar(triggerPosition);

  const loadContactpagehandler = () => {
    router.push("/Contactpage");
  };
  const openModalHandler = () => {
    setModalOpen(!ModalOpen);
  };

  const hidemodalHandler = () => {
    setModalOpen(false);
  };

  let aboutlink = (
    <Link href="/Aboutpage">
      <li className="mb-1">about</li>
    </Link>
  );

  if (pathname === "/Contactpage") {
    aboutlink = (
      <Link href="/Aboutpage">
        <li className="mb-1 flex items-center gap-x-3 ">
          <span>+234 813 4567 312</span> <AiOutlineDown />
        </li>
      </Link>
    );
  }
  return (
    <>
      <AnimatePresence>
        {ModalOpen && <MobileNav hideModalHandler={hidemodalHandler} />}
      </AnimatePresence>

      {hideNavBar ? null : (
        <nav className="max-w-[82%]">
          <div className="fixed z-50 mx-auto w-full bg-white/20  backdrop-blur-md max-lg:w-full ">
            <div className="mx-auto flex h-[4rem] w-[90%] items-center justify-between px-2 sm:h-[5rem]  sm:max-w-[84%] md:px-4">
              <Link href="/" className="">
                <Image
                  src={merraslog}
                  alt="meeras logo"
                  className="h-10 w-10 md:h-full md:w-full"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>

              <ul className="flex items-center justify-around  gap-2 font-medium capitalize max-lg:hidden max-lg:w-[50%] lg:w-[40%]">
                <Link href="/Aboutpage">
                  <li
                    className={`${
                      pathname === "/Aboutpage"
                        ? "font-bold  border-b-4 border-orange-600"
                        : " "
                    }`}
                  >
                    About
                  </li>
                </Link>

                <Link href="/Blogpage">
                  <li
                    className={`${
                      pathname === "/Blogpage"
                        ? "font-bold  border-b-4 border-orange-600"
                        : " "
                    }`}
                  >
                    blog
                  </li>
                </Link>
                <li>
                  <Button
                    onClick={loadContactpagehandler}
                    variant="default"
                    className={`${
                      pathname === "/Contactpage"
                        ? " hover:text-white-200 border-2 border-orange-500 bg-transparent font-bold text-orange-600 hover:bg-orange-200 "
                        : ""
                    } max-lg:text-[0.7rem]} cursor-pointer rounded-[0.5rem]  px-10 py-4 text-[1rem] max-xl:text-sm max-lg:py-2`}
                  >
                    {pathname === "/Contactpage" ? "Get Started" : "Contact Us"}
                  </Button>
                </li>
              </ul>

              <MdOutlineMenu
                className="cursor-pointer text-4xl lg:hidden "
                onClick={openModalHandler}
              />
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
