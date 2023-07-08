import Image from "next/image";
import aquariumPic from "../../public/images/hero-image 1.jpg";
import jaiInstitute from "../../public/jai-institube.svg";
import wendyHeadshot from "../../public/images/headshot-cropped.png";
import upsideDown from "../../public/images/wendy-hero-image.jpg";
import { allura, poppins } from "../../app/layout";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles["section"]}>
      <div className={styles["about-section"]}>
        <div className={styles["top-section"]}>
          <h1 className={`${poppins.className} ${styles["section-title"]}`}>
            My Story
          </h1>
          <div className={styles["headshot-image"]}>
            <Image src={wendyHeadshot} />
          </div>
          <p className={`${poppins.className} ${styles["introduction"]}`}>
            Hello, I'm Wendy Reyes.
          </p>
          <p className={styles["job-title"]}>Parent Coach</p>
          <p>
            I'm the founder of The Magic In Parenting. With a deep passion for
            empowering parents and caregivers, I bring a diverse background and
            wealth of experience to my work. I hold a bachelor's degree in
            Education with a minor in Psychology, a master's degree in School
            Counseling, and have pursued additional studies in Clinical
            Counseling. As a certified parent coach, I am dedicated to
            supporting families on their journey toward healing and connection.
          </p>
          <p>
            Over the past decade, I have had the privilege of working closely
            with children of all ages and their families, both through volunteer
            work and as a school counselor. My experience spans various
            settings, including supporting children with diagnosed emotional and
            behavioral disorders and those facing challenges in unstable home
            and food environments. These encounters have provided me with
            valuable insights into the unique struggles and triumphs of families
            navigating complex circumstances.
          </p>
          <p>
            As an imperfect, solo parent myself, I understand firsthand the joys
            and struggles that come with raising neurodivergent children. My
            personal journey has shaped my approach to parenting and informs the
            compassionate and non-judgmental support I offer to others. Through
            my experiences, I have come to appreciate the transformative power
            of building authentic connections, fostering self-healing, and
            breaking generational cycles.
          </p>
          <p>
            I warmly invite you to join me on this transformative journey of
            parenting, where we can learn, grow, and create magic together.
            Together, we can break generational cycles, foster resilience, and
            build deep connections with our children that will shape their lives
            and the generations to come.
          </p>
          <div className={styles["signature-logo-wrapper"]}>
            <div className={styles["signature-column"]}>
              <p className={`${styles.outro}`}>With love & compassion,</p>
              <p className={`${allura.className} ${styles.name}`}>
                Wendy Reyes
              </p>
              <p className={styles["business-name"]}>
                Founder of The Magic In Parenting
              </p>
            </div>
            <Image
              src={jaiInstitute}
              alt="Jai Institute for Parenting Coach Certification Graduate"
              className={styles["jai-institute"]}
            />
          </div>
        </div>
      </div>
      <div className={styles["bottom-section"]}>
        <Image src={upsideDown} />
      </div>
    </section>
  );
}
