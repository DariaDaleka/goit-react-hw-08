import { useEffect, useState } from 'react';
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import SearchForm from "../../components/SearchForm/SearchForm";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  // Состояние для управления отображением ContactEditor
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null); // Контакт для редактирования

  useEffect(() => {
    dispatch(fetchContacts());

    if (error) {
      toast.error(error);
    }
  }, [dispatch, error]);

  // Функция для открытия редактора контакта
  const openEditor = (contact = null) => {
    setCurrentContact(contact);
    setIsEditorOpen(true);
  };

  // Функция для закрытия редактора
  const closeEditor = () => {
    setIsEditorOpen(false);
    setCurrentContact(null); // Сброс текущего контакта
  };

  return (
    <motion.div
      className={css.wrapper}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <div className={css.formWrapper}>
        <SearchForm />
        <button className={css.addButton} onClick={() => openEditor()}>
          Add Contact
        </button>
      </div>

      {isLoading && !error && (
        <div className="loader">
          <Loader />
        </div>
      )}

      {!isLoading && !error && (
        <div className={css.contactsWrapper}>
          <ContactList onEditContact={openEditor} /> {/* Передаем функцию для редактирования */}
        </div>
      )}

      {/* Условно отображаем ContactEditor */}
      {isEditorOpen && (
        <ContactEditor 
          contact={currentContact} 
          onClose={closeEditor} 
        />
      )}
    </motion.div>
  );
}
