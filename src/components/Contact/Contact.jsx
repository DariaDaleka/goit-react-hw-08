import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RiPhoneFill } from 'react-icons/ri';
import { IoPerson } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';
import s from './Contact.module.css';
import ContactForm from '../ContactForm/ContactForm';
import { useState } from 'react';
import { Modal, Box } from '@mui/material';

const Contact = ({ contact }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditModalOpen = () => setIsEditModalOpen(true);
  const handleEditModalClose = () => setIsEditModalOpen(false);

  const handleDeleteModalOpen = () => setIsDeleteModalOpen(true);
  const handleDeleteModalClose = () => setIsDeleteModalOpen(false);

  const dispatch = useDispatch();

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
          <button className={s.btn} onClick={handleDeleteModalOpen}>
            <MdDelete />
          </button>
          <button onClick={handleEditModalOpen} className={s.btn}>
            <FaUserEdit />
          </button>
        </div>
      </li>

      <Modal open={isDeleteModalOpen} onClose={handleDeleteModalClose}>
        <Box className={s.modalBoxDelete}>
          <h4>Are you sure you want to delete this contact?</h4>
          <div className={s.buttonGroup}>
            <button
              className={s.btnDelete}
              onClick={() => {
                dispatch(deleteContact(contact.id));
                handleDeleteModalClose();
              }}>
              Delete
            </button>
            <button className={s.btnDelete} onClick={handleDeleteModalClose}>
              Cancel
            </button>
          </div>
        </Box>
      </Modal>

      <Modal open={isEditModalOpen} onClose={handleEditModalClose}>
        <Box className={s.modalBoxEdit}>
          <ContactForm contact={contact} onClose={handleEditModalClose} />
        </Box>
      </Modal>
    </>
  );
};

export default Contact;
