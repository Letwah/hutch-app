import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort, selectSort } from "../../features/appSlice";

const Sort = () => {
  const sort = useSelector(selectSort);
  //   console.log(sortByPrice);
  const dispatch = useDispatch();

  const onChange = async (e) => {
    dispatch(setSort(e.target.value));
    // console.log(sortByPrice);
  };

  return (
    <>
      <select onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="">Reset</option>
        <option value="Ascending">Asc</option>
        <option value="Descending">Des</option>
      </select>
    </>
  );
};

export default Sort;
