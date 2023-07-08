"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import familyImage from "../../public/images/gus-moretta-BCyfpZE3aVE-unsplash.jpg";
import crazyWhiteKids from "../../public/images/ashton-bingham-SAHBl2UpXco-unsplash.jpg";
import styles from "./Mission.module.css";

export default function Mission() {
  return (
    <section id="ourmission" className={styles["mission-section"]}>
      <h2 className={styles["mission-title"]}>Our Mission</h2>
      <div className={styles["mission-wrapper"]}>
        <div className={styles["card"]}>
          <div className={styles["image-column"]}>
            <Image
              src={familyImage}
              alt="Image of family outside in a field pointing at the sun."
            />
          </div>
          <div className={styles["text-box"]}>
            <h3 className={styles["title"]}>Mission Statement</h3>
            <p className={styles["paragraph"]}>
              At Family Matters & Mentors, our mission is to empower parents and
              caregivers to break generational patterns, cultivate deep
              connections with their children, and nurture their inner healing.
              We are committed to providing science-based education, mindfulness
              practices, and compassionate support that allows individuals to
              navigate the complexities of parenting with understanding,
              resilience, and love. Through our coaching programs, educational
              videos, and community engagement, we aim to create a world where
              parents, guardians, and children thrive together, fostering a
              culture of empathy, connection, and personal growth.
            </p>
          </div>
        </div>
        <div className={styles["card"]}>
          <div className={styles["image-column"]}>
            <Image
              src={crazyWhiteKids}
              alt="Two kids having fun and laughing."
            />
          </div>
          <div className={styles["text-box"]}>
            <h3 className={styles["title"]}>Vision Statement</h3>
            <p className={styles["paragraph"]}>
              Our vision is a world where every parent and caregiver embraces
              their capacity for healing and connection, creating harmonious
              relationships with their children and fostering a nurturing
              environment for their development. We envision a society where
              parenting is approached with mindfulness, emotional intelligence,
              and a deep understanding of the neurodevelopmental needs of
              children. We aspire to be the leading resource for parents seeking
              transformation, support, and evidence-based tools to guide them on
              their journey. Through our work, we envision a ripple effect of
              love, compassion, and healing that positively impacts families,
              communities, and generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
