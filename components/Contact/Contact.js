"use client";

import styles from "./Contact.module.css";
import Image from "next/image";
import aquariumPic from "../../public/images/hero-image 1.jpg";
import something from "../../public/images/humphrey-muleba-jrOPyEXA8DE-unsplash.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";

const validations = Yup.object({
  name: Yup.string()
    .trim()
    .max(20, "Must be 20 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string()
    .trim()
    .max(20, "Must be 20 characters or less")
    .required("Subject is required"),
  message: Yup.string().trim().required("Message is required"),
});

export default function Contact() {
  return (
    <section className={styles["contact-section"]}>
      <div className={styles.image}>
        <Image src={something} />
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={validations}
        onSubmit={async ({ name }, { resetForm }) => {
          alert(`Thanks ${name}. I'll get back to you as soon as I can.`);
          resetForm();
        }}
      >
        <Form className={styles.form}>
          <h1>Contact</h1>
          <label htmlFor="name">
            <span className="error">
              <ErrorMessage name="name" />
            </span>
            <Field placeholder="Name" name="name" type="text" />
          </label>
          <label htmlFor="email">
            <span className="error">
              <ErrorMessage name="email" />
            </span>
            <Field placeholder="Email Address" name="email" type="text" />
          </label>
          <label htmlFor="subject">
            <span className="error">
              <ErrorMessage name="subject" />
            </span>
            <Field placeholder="Subject" name="subject" type="subject" />
          </label>
          <label htmlFor="message">
            <span className="error">
              <ErrorMessage name="message" />
            </span>
            <Field
              as="textarea"
              rows="10"
              placeholder="Your Message"
              name="message"
              type="text"
            />
          </label>
          <Button classes={styles.button} type="submit" text="Send Message" />
        </Form>
      </Formik>
    </section>
  );
}
