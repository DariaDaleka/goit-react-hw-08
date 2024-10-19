import { CircleLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircleLoader color="#007bff" size={100} aria-label="Loading..." />
    </div>
  );
};

export default Loader;
