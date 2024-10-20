import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.wrapper}>
        <div className={css.content}>
          <h1 className={css.title}>
            Welcome to the <span>PhoneBook!</span>
          </h1>
          <p className={css.text}>
            Manage your contacts quickly and conveniently. Add, edit and delete contacts in just a few clicks.
          </p>
        </div>
      </div>
    </>
  );
}
