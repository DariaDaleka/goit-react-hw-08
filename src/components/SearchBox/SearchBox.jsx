import styles from "./SearchBox.module.css";
import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedNameFilter, changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedNameFilter);
  const searchId = useId();

  return (
    <div className={styles.wrapperSearch}>
      <label htmlFor={searchId} className={styles.label}>
        Find contacts by name
      </label>
      <input
        className={styles.input}
        id={searchId}
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default SearchBox;
