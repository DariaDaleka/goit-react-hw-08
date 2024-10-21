import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import s from './ContactForm.module.css';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Min 3 characters')
    .max(50, 'Max 50 characters')
    .required('Required field!'),
  number: Yup.string()
    .matches(
      /^[0-9()+\-\s]+$/,
      "The phone number can only contain numbers and symbols +, -, (, ) and spaces') // Numbers and symbols are allowed"
    )
    .min(3, 'Min 3 characters')
    .max(50, 'Max 50 characters')
    .required('Required fild!'),
});

const ContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleUpdate = values => {
    dispatch(updateContact({ id: contact.id, ...values }));
    onClose();
  };

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={contactSchema}
      onSubmit={handleUpdate}>
      {({ handleChange, values }) => (
        <Form className={s.form}>
          <h4 className={s.title}>Contact Editing</h4>
          <label className={s.label}>
            New Name
            <Field
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter new name..."
              className={s.field}
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label className={s.label}>
            New Number
            <Field
              type="text"
              name="number"
              id="number"
              value={values.number}
              onChange={handleChange}
              placeholder="Enter new number..."
              className={s.field}
            />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <div className={s.wrappBtn}>
            <div className={s.buttonGroup}>
              <button type="submit" className={s.btnCheck}>
                Accept
              </button>
              <button onClick={onClose} className={s.btn}>
                Close
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
