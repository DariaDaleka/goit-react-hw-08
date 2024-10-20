import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initForm = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .matches(
        /[a-z]/,
        "The password must contain at least 1 letter in lowercase"
      )
      .matches(
        /[A-Z]/,
        "The password must contain at leats 1 letter in uppercase"
      )
      .matches(/\d/, "The password must contain at least 1 number")
      .required("Password is required"),
  });

  return (
    <div className={s.wrapp}>
      <Formik
        initialValues={initForm}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field
              className={s.field}
              type="text"
              name="name"
              placeholder="Enter name..."
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            Email
            <Field
              className={s.field}
              type="email"
              name="email"
              placeholder="Enter email..."
            />
            <ErrorMessage className={s.error} name="email" component="span" />
          </label>
          <label className={s.label}>
            Password
            <Field
              className={s.field}
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </label>
          <button className={s.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
      <div className={s.textWrapp}>
        <h2>Register now!</h2>
        <p>You need to register to work with contacts</p>
      </div>
    </div>
  );
};

export default RegisterForm;