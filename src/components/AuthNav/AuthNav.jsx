import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <div className={s.cont}>
      <NavLink to="/register" className={clsx(buildLinkClass({ isActive: false }), s.signup)}>
        Sign Up
      </NavLink>
      <NavLink to="/login" className={clsx(buildLinkClass({ isActive: false }), s.login)}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
