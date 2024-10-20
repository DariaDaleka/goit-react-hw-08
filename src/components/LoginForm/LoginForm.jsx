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
    <div className={s.wrapper}>
      <div className={s.textWrapper}>
        <h2>Welcome Back!</h2>
        <p>Please log in to access your contacts.</p>
      </div>
      <Formik initialValues={initForm} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            Email
            <Field
              className={s.field}
              type="email"
              name="email"
              placeholder="Enter your email..."
            />
          </label>
          <label className={s.label}>
            Password
            <Field
              className={s.field}
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
          </label>
          <div className={s.buttonWrapper}>
            <button className={s.btn} type="submit">
              Log In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
