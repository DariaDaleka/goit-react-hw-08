import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactEditor.module.css";


const ContactEditor = () => {
  const initForm = { name: "", number: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(addContact(values));
    options.resetForm();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 characters")
      .max(50, "Max 50 characters")
      .required("Required field!"),
    number: Yup.string()
      .matches(
        /^[0-9()+\-\s]+$/,
        "The phone number can only contain numbers and symbols +, -, (, ) and spaces') // Numbers and symbols are allowed"
      )
      .min(3, "Min 3 characters")
      .max(50, "Max 50 characters")
      .required("Required fild!"),
  });

  return (
    <Formik
      initialValues={initForm}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field
            type="text"
            name="name"
            placeholder="Enter name..."
            className={s.field}
          />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>
        <label className={s.label}>
          Phone
          <Field
            type="text"
            name="number"
            placeholder="Enter number..."
            className={s.field}
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>
      </Form>
    </Formik>
  );
};

export default ContactEditor;
