import { Formik, Form, Field } from "formik";

import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

import s from "./LoginForm.module.css";

const initForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };
  return (
    <div className={s.wrapp}>
      <Formik initialValues={initForm} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field
              className={s.field}
              type="email"
              name="email"
              placeholder="Enter email..."
            />
          </label>
          <label className={s.label}>
            Password
            <Field
              className={s.field}
              type="password"
              name="password"
              placeholder="Enter password..."
            />
          </label>
          <button className={s.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
      <div className={s.textWrapp}>
        <h2>Login now!</h2>
        <p>To go to contacts, enter your login and password</p>
      </div>
    </div>
  );
};

export default LoginForm;