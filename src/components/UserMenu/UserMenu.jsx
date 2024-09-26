import css from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div className={css.wrapper}>
      <p>Welcome User</p>
      <button type="button">Log Out</button>
    </div>
  );
}
