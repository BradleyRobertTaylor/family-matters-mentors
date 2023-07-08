"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import styles from "./MainHeader.module.css";

export default function MainHeader({ children }) {
  const [navIsHidden, setNavIsHidden] = useState(false);

  const { scrollY } = useScroll();

  const update = () => {
    // if (scrollY?.current < scrollY?.prev) {
    //   setNavIsHidden(false);
    // } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
    //   setNavIsHidden(true);
    // }
    if (scrollY?.current < 100) {
      setNavIsHidden(false);
    } else {
      setNavIsHidden(true);
    }
  };

  useMotionValueEvent(scrollY, "change", update);

  const navVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25, pointerEvents: "none" },
  };

  return (
    <motion.header
      variants={navVariants}
      animate={navIsHidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className={styles.header}
    >
      {children}
    </motion.header>
  );
}
