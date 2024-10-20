import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../../redux/contacts/operations";
import s from "./ContactEditor.module.css";


const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("Required field!"),
  number: Yup.string()
    .matches(
      /^[0-9()+\-\s]+$/,
      "The phone number can only contain numbers and symbols +, -, (, ) and spaces"
    )
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("Required field!"),
});

const ContactEditor = ({ contact = null, onClose }) => { // Принимаем onClose
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (contact) {
      dispatch(updateContact({ id: contact.id, ...values }));
      onClose(); // Закрываем модалку после успешного обновления
    } else {
      dispatch(addContact(values));
      resetForm();
      onClose(); // Закрываем модалку после успешного добавления
    }
  };

  return (
    <Formik
      initialValues={{
        name: contact ? contact.name : "",
        number: contact ? contact.number : "",
      }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form className={s.form}>
          <label className={s.label}>
            {contact ? "New name" : "Name"}
            <Field
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder={contact ? "Enter new name..." : "Enter name..."}
              className={s.field}
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            {contact ? "New Number" : "Phone"}
            <Field
              type="text"
              name="number"
              value={values.number}
              onChange={handleChange}
              placeholder={contact ? "Enter new number..." : "Enter number..."}
              className={s.field}
            />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <div className={s.wrappBtn}>
            <button type="submit" className={s.btn}>
              {contact ? "Update" : "Add Contact"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactEditor;
