import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaUser, FaPhone, FaTrash } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <FaUser className={styles.icon} />
        <h3 className={styles.name}>{name}</h3>
        <FaPhone className={styles.icon} />
        <p className={styles.phone}>{number}</p>
      </div>
      <button className={styles.btn} onClick={handleDelete}>
        <FaTrash className={styles.btnIcon} />
        Delete
      </button>
    </div>
  );
};

export default Contact;
