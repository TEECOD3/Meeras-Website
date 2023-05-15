"use client";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface TemplateProps {
  children: ReactNode;
}

const template: FC<TemplateProps> = (props) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export default template;
