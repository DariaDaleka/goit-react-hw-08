import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

import { FaAddressBook } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <p className={s.userName}>
        {" "}
        Welcome, <span className={s.span}>{user.name}</span> to your phone book{" "}
      </p>
      <span>
        <FaAddressBook className={s.icon} />
      </span>
      <button className={s.btn} onClick={() => dispatch(logOut())}>
        Logout <LuLogOut />
      </button>
    </div>
  );
};

export default UserMenu;