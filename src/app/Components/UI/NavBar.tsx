"use client";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { Button } from "../../Components/UI/Button";
import Link from "next/link";
import merraslog from "../../images/Meeraslogo.png";
import { AnimatePresence } from "framer-motion";
import MobileNav from "../UI/Mobilenav";
import Image from "next/image";

const NavBar = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const openModalHandler = () => {
    setModalOpen(!ModalOpen);
  };

  const hidemodalHandler = () => {
    setModalOpen(false);
  };
  return (
    <>
      <AnimatePresence>
        {ModalOpen && <MobileNav hideModalHandler={hidemodalHandler} />}
      </AnimatePresence>

      <nav className="max-w-[100rem]">
        <div className="fixed z-50 w-full backdrop-blur-md bg-white/20  mx-auto max-lg:w-full ">
          <div className="h-[4rem] w-[90%] flex justify-between items-center px-2 md:px-4 sm:h-[5rem]  sm:max-w-[84%] mx-auto">
            <Link href="/" className="">
              <Image
                src={merraslog}
                alt="meeras logo"
                className="h-10 w-10 md:w-full md:h-full"
              />
            </Link>
            <ul className="flex justify-around sm:w-[80%]  md:w-[60%] lg:w-[70%] xl:w-[50%] font-medium items-center gap-2 max-lg:hidden capitalize max-lg:w-[70%]  ">
              <Link href="/about">
                <li className="mb-1">about</li>
              </Link>
              <Link href="/">
                <li className="mb-1">product</li>
              </Link>

              <Link href="/">
                <li className="mb-1">portfolio</li>
              </Link>
              <Link href="/">
                <li className="mb-1">blog</li>
              </Link>
              <Link href="/">
                <li className="mb-1">contact</li>
              </Link>
              <li>
                <Button
                  variants="default"
                  className="py-4 px-10 max-lg:py-2  rounded-[0.5rem] cursor-pointer text-[1rem] max-lg:text-[0.7rem] max-xl:text-sm "
                >
                  Contact Us
                </Button>
              </li>
            </ul>

            <MdOutlineMenu
              className="lg:hidden text-4xl cursor-pointer "
              onClick={openModalHandler}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
