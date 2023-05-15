import { FC } from "react";
import { MdOutlineClose } from "react-icons/md";
import meeraslogo from "../../images/Meeraslogo.png";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
        className="fixed top-0 left-0  h-full w-full bg-white z-[129030020039030920] flex items-center justify-start"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit="exit"
      >
        <MdOutlineClose
          className="text-3xl absolute text-orange-400 z-[8399] right-6 top-6"
          onClick={hideModalHandler}
        />

        <ul className="text-3xl space-y-8 p-10 capitalize font-rails font-medium text-orange-600">
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

          <Link href="About">
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
              About
            </motion.li>
          </Link>
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
                delay: 0.6,
              },
            }}
          >
            Product
          </motion.li>
          <motion.li
            variants={item}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            exit={{
              opacity: 0,
              y: 30,
              transition: {
                ease: "easeInOut",
                delay: 0.4,
              },
            }}
          >
            portfolio
          </motion.li>
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
          >
            blog
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
};

export default MobileNav;
