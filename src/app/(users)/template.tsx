"use client";
import { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TemplateProps {
  children: ReactNode;
}

const template: FC<TemplateProps> = (props) => {
  const { children } = props;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className=""
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default template;
