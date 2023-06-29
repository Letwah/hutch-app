import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  selectSearch,
  selectSortByPrice,
} from "../../features/appSlice";

const Search = () => {
  const search = useSelector(selectSearch);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const onInput = async (e) => {
    dispatch(setSearch(e.target.value));

    onInput(e.target.value);
    // validate input - can write like this

    const res = await validate(onInput);
    setErrors(res);
  };

  return (
    <>
      <input
        value={search}
        id="search"
        onInput={onInput}
        type="text"
        placeholder="search..."
      />
      {/* ///not sure about */}
      <p>{errors && errors.image.id}</p>

      <select onChange={(e) => dispatch(selectSortByPrice(e.target.value))}>
        <option value="">Reset</option>
        <option value="Ascending">Asc</option>
        <option value="Descending">Des</option>
      </select>
    </>
  );
};
export default Search;
