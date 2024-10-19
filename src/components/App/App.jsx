import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectIsError, selectIsLoading } from "../../redux/selectors";
import Loader from "../Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      
      {isLoading && <Loader />}
      {isError && <p className={styles.error}>Error loading contacts. Please try again later.</p>}
      <ContactList />
    </div>
  );
};

export default App;
