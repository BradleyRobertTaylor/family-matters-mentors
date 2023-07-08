"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Logo from "../Logo/Logo";
import SocialNavLinks from "./SocialNavLinks";
import HamburgerMenu from "../icons/HamburgerMenu";
import SideDrawer from "./SideDrawer";

import styles from "./MainNavigation.module.css";
import Backdrop from "../Backdrop/Backdrop";

export default function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function openDrawerHandler() {
    setDrawerIsOpen(true);
  }

  function closeDrawerHandler() {
    setDrawerIsOpen(false);
  }

  const pathname = usePathname();

  useEffect(() => {
    if (drawerIsOpen) {
      setDrawerIsOpen((state) => !state);
    }
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {drawerIsOpen && (
          <>
            <Backdrop onClick={closeDrawerHandler} />
            <SideDrawer>
              <nav className={styles["main-navigation-drawer-nav"]}>
                <NavLinks />
              </nav>
              <SocialNavLinks />
            </SideDrawer>
          </>
        )}
      </AnimatePresence>
      <MainHeader>
        <Logo />
        <HamburgerMenu
          onClick={drawerIsOpen ? closeDrawerHandler : openDrawerHandler}
        />
        <nav className={styles["main-navigation"]} id="primary-navigation">
          <NavLinks />
          <SocialNavLinks classes={styles["main-navigation-social-links"]} />
        </nav>
      </MainHeader>
    </>
  );
}
