import { motion } from "framer-motion";
import styles from "./SideDrawer.module.css";

export default function SideDrawer({ children }) {
  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles["side-drawer"]}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {children}
    </motion.aside>
  );
}
