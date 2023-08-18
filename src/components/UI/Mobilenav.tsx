import { FC } from "react";
import { MdOutlineClose } from "react-icons/md";
import meeraslogo from "public/images/Meeraslogo.png";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../../../public/assets/icons/Facebook";
import Twitter from "../../../public/assets/icons/Twitter";
import Instagram from "../../../public/assets/icons/Instagram";
import {
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  TwitterIcon,
} from "lucide-react";
import Whatsapp from "../../../public/assets/icons/Whatsapp";
interface MobileNavProps {
  hideModalHandler: () => void;
}

const MobileNav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler } = props;

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        delay: 0.9,
      },
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 botton-0 overflow-hidden h-full w-full bg-white z-[129030020039030920]"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit="exit"
      >
        <MdOutlineClose
          className="text-3xl absolute text-blue-500 z-[8399] right-6 top-12"
          onClick={hideModalHandler}
        />

        <ul className=" flex flex-col gap-y-5 text-base font-semibold px-2 py-10  capitalize font-rails  text-blue-600 ">
          <Link href="/">
            <motion.li
              variants={item}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
              onClick={hideModalHandler}
              className="mb-7"
            >
              <Image
                alt="meerras logo"
                src={meeraslogo}
                className=" h-16 w-16  sm:h-20 sm:w-20 "
              />
            </motion.li>
          </Link>

          <Link href="/Aboutpage">
            <motion.li
              variants={item}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
              onClick={hideModalHandler}
            >
              About us
            </motion.li>
          </Link>

          <Link href="/Blogpage">
            <motion.li
              variants={item}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
              onClick={hideModalHandler}
            >
              blog
            </motion.li>
          </Link>
          <Link href="/Aboutpage">
            <motion.li
              variants={item}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
              onClick={hideModalHandler}
            >
              policy and privacy
            </motion.li>
          </Link>
          <div>
            <motion.div
              variants={item}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
              onClick={hideModalHandler}
              className="w-full capitalize"
            >
              <span className="">social media</span>
              <ul className="flex gap-x-3 w-full justify-between mt-5">
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
            </motion.div>
          </div>
          <Link href="/Contactpage">
            <motion.button
              variants={item}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 24,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
              onClick={hideModalHandler}
              className="w-full capitalize border-blue-600 rounded-lg border-2 py-2"
            >
              contact us
            </motion.button>
          </Link>
        </ul>
      </motion.div>
    </>
  );
};

export default MobileNav;
