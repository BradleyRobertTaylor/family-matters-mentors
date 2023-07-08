"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import styles from "./CourseForm.module.css";
import Button from "../Button/Button";

const validations = Yup.object({
  firstName: Yup.string()
    .trim()
    .max(20, "Must be 20 characters or less")
    .required("*"),
  lastName: Yup.string()
    .trim()
    .max(20, "Must be 20 characters or less")
    .required("*"),
  email: Yup.string().email("Invalid email address").required("*"),
  phoneNumber: Yup.string()
    .phone(["US", "MX"], "Please enter a valid phone number")
    .required("*"),
  age: Yup.string()
    .matches(/^[0-9]+$/, "This should only contain digits")
    .required("*"),
  numberOfChildren: Yup.string()
    .matches(/^[0-9]+$/, "This should only contain digits")
    .required("*"),
});

export default function CourseForm() {
  return (
    <section className={styles["form-section"]}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          age: "",
          numberOfChildren: "",
          comments: "",
        }}
        validationSchema={validations}
        onSubmit={async ({ firstName }, { resetForm }) => {
          alert(
            `Thank you ${firstName}. I'll make sure to get back to you to discuss the course with you.`
          );
          resetForm();
        }}
      >
        <Form className={styles.form}>
          <div className={styles["two-columns"]}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <span className="error">
                <ErrorMessage name="firstName" />
              </span>
              <Field placeholder="First name" name="firstName" type="text" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <span className="error">
                <ErrorMessage name="lastName" />
              </span>
              <Field placeholder="Last name" name="lastName" type="text" />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <span className="error">
              <ErrorMessage name="email" />
            </span>
            <Field placeholder="Email" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <span className="error">
              <ErrorMessage name="phoneNumber" />
            </span>
            <Field placeholder="Phone number" name="phoneNumber" type="text" />
          </div>
          <div className={styles["two-columns"]}>
            <div>
              <label htmlFor="age">Your Age:</label>
              <span className="error">
                <ErrorMessage name="age" />
              </span>
              <Field placeholder="Your age" name="age"></Field>
            </div>
            <div>
              <label htmlFor="numberOfChildren">Number of children:</label>
              <span className="error">
                <ErrorMessage name="numberOfChildren" />
              </span>
              <Field
                placeholder="Number of children if any"
                name="numberOfChildren"
              ></Field>
            </div>
          </div>
          <div>
            <label htmlFor="comments">Comments</label>
            <Field
              placeholder="Comments"
              rows="10"
              name="comments"
              type="text"
              as="textarea"
            />
          </div>
          <Button type="submit" text="Submit" />
        </Form>
      </Formik>
    </section>
  );
}
