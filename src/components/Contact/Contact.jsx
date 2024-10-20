import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { RiPhoneFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import s from "./Contact.module.css";
import ContactEditor from "../ContactEditor/ContactEditor"; // Импортируем ContactEditor
import { useState } from "react";
import { Modal, Box } from "@mui/material"; // Импортируем модальные компоненты

const Contact = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <>
      <li className={s.item}>
        <div className={s.contact}>
          <span className={s.name}>
            <IoPerson className={s.icon} /> {contact.name}:
          </span>
          <span className={s.number}>
            <RiPhoneFill className={s.icon} /> {contact.number}
          </span>
        </div>
        <div className={s.wrappBtn}>
          <button className={s.btn} onClick={() => dispatch(deleteContact(contact.id))}>
            <MdDelete />
          </button>
          <button onClick={handleEditToggle} className={s.btn}>
            <FaUserEdit />
          </button>
        </div>
      </li>

      {/* Модальное окно для редактирования контакта */}
      <Modal open={isEditing} onClose={handleEditToggle}>
        <Box
          sx={{
            width: 400,
            height: 'auto',
            borderRadius: 5,
            margin: "auto",
            marginTop: 100,
            padding: 2,
            backgroundColor: "white",
          }}
        >
          <h4 className={s.title}>
            Editing a <span className={s.span}>contact</span>
          </h4>
          <ContactEditor contact={contact} onClose={handleEditToggle} /> {/* Передаем contact */}
        </Box>
      </Modal>
    </>
  );
};

export default Contact;
