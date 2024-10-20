import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { motion } from "framer-motion"; 
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  
  const slideIn = {
    hidden: { x: '-100%', opacity: 0 }, 
    visible: { x: 0, opacity: 1 }, 
  };

  return (
    <div className={s.wrapper}>
      <motion.p 
        className={s.userName} 
        initial="hidden" 
        animate="visible" 
        variants={slideIn} 
        transition={{ duration: 1 }}
      >
        Welcome, <span className={s.span}>{user.name}</span> to your PhoneBook
      </motion.p>
      <button className={s.btn} onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
