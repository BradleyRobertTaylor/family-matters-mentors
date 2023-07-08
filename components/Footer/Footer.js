"use client";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["newsletter-signup"]}>
        <p className={styles["newsletter-signup__heading"]}>
          Come for parenting guidance. Stay for something much bigger.
        </p>
        <p className={styles["newsletter-signup__message"]}>
          Subscribe to Family Matters & Mentors' monthly newsletter to get tips
          sent to your inbox.
        </p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={async ({ email }, { resetForm }) => {
            alert("Thank your for signing up!");
            resetForm();
          }}
        >
          <Form>
            <label className={styles.hidden} htmlFor="email">
              Email
            </label>
            <Field
              className={styles["email-field"]}
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"></path>
                  <path
                    fill="currentColor"
                    d="M14.707 5.636l5.657 5.657a1 1 0 010 1.414l-5.657 5.657a1 1 0 01-1.414-1.414l3.95-3.95H4a1 1 0 110-2h13.243l-3.95-3.95a1 1 0 111.414-1.414z"
                  ></path>
                </g>
              </svg>
            </button>
          </Form>
        </Formik>
      </div>
      <nav className={styles["footer-nav"]}>
        <ul className={styles["footer-nav__list"]}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/course">12 Week Course</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
