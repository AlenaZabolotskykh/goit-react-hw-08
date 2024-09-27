import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink className={css.nav} to="/">
        Home
      </NavLink>
      <NavLink className={css.nav} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
