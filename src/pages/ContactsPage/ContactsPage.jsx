import { useEffect } from 'react';
import ContactEditor from "../../components/ContactEditor/ContactEditor";
import SearchForm from "../../components/SearchForm/SearchForm";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";
import Loader from "../../components/Loader/Loader";

export default function ContactPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      
      <ContactEditor />
      
      <div className={css.contactsWrapper}>
        <SearchForm />
      </div>

      {isLoading && !error && (
        <div className="loader">
          <Loader />
        </div>
      )}

      {!isLoading && !error && (
        <div className={css.contactsWrapper}>
          <ContactList />
        </div>
      )}
    </div>
  );
}
