import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.phone,
      })
    );
    options.resetForm();
  };

  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("This field is required!"),
    phone: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(15, "Maximum of 15 numbers")
      .matches(/^[0-9]*$/, "Only numbers!")
      .required("This field is required!"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={orderSchema}
    >
      <Form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor={nameId} className={styles.label}>
            Name:
          </label>
          <Field
            className={styles.input}
            id={nameId}
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="p" className={styles.error} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={phoneId} className={styles.label}>
            Phone:
          </label>
          <Field
            className={styles.input}
            id={phoneId}
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
          <ErrorMessage name="phone" component="p" className={styles.error} />
        </div>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
