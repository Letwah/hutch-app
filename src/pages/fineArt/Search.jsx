import { useState } from "react";
import { validate } from "../../validation";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, selectSearch } from "../../features/appSlice";

const Search = () => {
  const search = useSelector(selectSearch);
  // console.log(search);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const onInput = async (e) => {
    dispatch(setSearch(e.target.value));
    // validate input - can write like this

    const res = await validate({ search: e.target.value }, "search");
    setErrors(res);
    // console.log(res);
  };

  return (
    <>
      <input
        id="search"
        onInput={onInput}
        type="text"
        placeholder="search..."
      />

      <p>{errors && errors.search}</p>
    </>
  );
};
export default Search;
