import { FC, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AnimatePresence, delay, motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

interface AccordionProps {}

const Accordion: FC<AccordionProps> = () => {
  const [isactive, setisactive] = useState(false);
  const seticonHandler = () => {
    setisactive(!isactive);
  };
  return (
    <div className=" md:w-[80%] mt-8 ">
      <div className="">
        <div className="flex gap-2 flex-col items-center ">
          <div
            className="text-base md:text-xl cursor-pointer flex gap-1"
            onClick={seticonHandler}
          >
            <h4>What do Meeras Software Solution does?</h4>
            {isactive ? (
              <AiOutlineMinus />
            ) : (
              <MdKeyboardArrowDown className="text-2xl" />
            )}
          </div>

          <AnimatePresence>
            {isactive && (
              <motion.p
                className="text-sm w-[70%]"
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 4, opacity: 1 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                pariatur laborum a praesentium ipsam illum odit. Quo
                perspiciatis
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
