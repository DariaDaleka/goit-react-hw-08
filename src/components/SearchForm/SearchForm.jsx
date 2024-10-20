import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

import s from "./SearchForm.module.css";

const SearchForm = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.wrapp}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={handleSearch}
          placeholder="Enter a name or number..."
        />
      </label>
    </div>
  );
};

export default SearchForm;