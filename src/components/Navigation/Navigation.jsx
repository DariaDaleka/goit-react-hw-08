import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink to="/" className={buildLinkClass} end>
        Home
      </NavLink>
      {isLoggedIn && ( 
        <>
          <span className={s.divider}></span>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
