import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setsearch, selectsearch, selectSortByPrice } from "./appSlice";

const Search = () => {
  const search = useSelector(selectsearch);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const onInput = async (e) => {
    dispatch(setsearch(e.target.value));
    setErrors(
      await validate({ [e.target.id]: e.target.value }, "searchSchema")
    );
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
