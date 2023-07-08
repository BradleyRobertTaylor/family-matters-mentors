"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/images/white-logo.png";
import logoShadow from "../../public/images/logo-shadow.png";
import styles from "./Logo.module.css";
import { poppins } from "@/app/layout";

export default function Logo() {
  const pathname = usePathname();

  return (
    <a href="/">
      <p className={`${poppins.className} ${styles["text-logo"]}`}>
        Family Matters & Mentors
      </p>
    </a>
  );

  return (
    <a href={"/"}>
      <div className={styles.logo}>
        <Image
          className={styles.text}
          src={logo}
          alt="The Magic in Parenting logo"
        />
        {pathname !== "/contact" && (
          <Image
            className={styles.shadow}
            src={logoShadow}
            alt="The Magic in Parenting logo"
          />
        )}
      </div>
    </a>
  );
}

// <Image src={logoShadow} alt="The Magic in Parenting logo" />
