import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id} className={styles.item}>
            <Contact {...contact} />
          </li>
        ))
      ) : (
        <li className={styles.empty}>Any contacts</li>
      )}
    </ul>
  );
};

export default ContactList;
