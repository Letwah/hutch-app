import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort, selectSort } from "../../features/appSlice";

const Sort = () => {
  const sort = useSelector(selectSort);
  //   console.log(sort);
  const dispatch = useDispatch();

  return (
    <>
      <select onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="">Reset</option>
        <option value="Asc">Asc</option>
        <option value="Des">Des</option>
      </select>
    </>
  );
};

export default Sort;
