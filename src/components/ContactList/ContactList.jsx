import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

const ContactList = () => {
  const filteredContact = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContact.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;