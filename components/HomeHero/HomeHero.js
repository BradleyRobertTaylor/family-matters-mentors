import Link from "next/link";
import Image from "next/image";

import { playfair_display, poppins, allura } from "../../app/layout";
import circleHeroImg from "../../public/images/wendy-circle.png";
import christinaImg from "../../public/images/christina-headshot.png";

import styles from "./HomeHero.module.css";
import Button from "../Button/Button";

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero__text"]}>
        <h1 className={`${styles["hero__title"]} ${poppins.className}`}>
          Empowering Parents, Inspiring Families
        </h1>
        <p className={styles["hero__paragraph"]}>
          Our dedication lies in strengthening parents and caregivers, equipping
          them with the necessary resources to facilitate their inner healing
          journey.
        </p>
        <Button text="Learn More" href="#ourmission" />
      </div>
      <div className={styles["hero__img"]}>
        <Image
          src={christinaImg}
          alt="Picture of Wendy upside down in kitchen."
        />
      </div>
    </section>
  );
}
