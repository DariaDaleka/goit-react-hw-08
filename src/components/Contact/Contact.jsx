import { useDispatch } from "react-redux";

import { Modal, Box } from "@mui/material";

import { deleteContact } from "../../redux/contacts/operations";

import { RiPhoneFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

import s from "./Contact.module.css";
import UpdateContactForm from "../ContactEditor/ContactEditor";
import { useState } from "react";

const Contact = ({ contact }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  return (
    <>
      <li className={s.item}>
        <div className={s.contact}>
          <span className={s.name}>
            {" "}
            <IoPerson /> {contact.name}:
          </span>
          <span className={s.number}>
            {" "}
            <RiPhoneFill /> {contact.number}
          </span>
        </div>
        <div className={s.wrappBtn}>
          <button
            className={s.btn}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            <MdDelete />
          </button>
          <button onClick={handleOpen} className={s.btn}>
            <FaUserEdit />
          </button>
        </div>
      </li>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            height: 300,
            borderRadius: 5,
            margin: "auto",
            marginTop: 30,
            padding: 2,
            backgroundColor: "gray",
          }}
        >
          <h4 className={s.title}>
            Editing a <span className={s.span}>contact</span>{" "}
          </h4>
          <UpdateContactForm contact={contact} onClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default Contact;