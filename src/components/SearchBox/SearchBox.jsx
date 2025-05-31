import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBoxWrap}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        className={css.textWrap}
      />
    </div>
  );
}
