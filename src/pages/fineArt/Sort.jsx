import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortByPrice, selectSortByPrice } from "../../features/appSlice";

const Sort = () => {
  const sortByPrice = useSelector(selectSortByPrice);
  //   console.log(sortByPrice);
  const dispatch = useDispatch();

  const onSelect = async (e) => {
    dispatch(setSortByPrice(e.target.value));
    // console.log(sortByPrice);
  };

  return (
    <>
      <select onSelect={onSelect}>
        <option value="">Reset</option>
        <option value="Ascending">Asc</option>
        <option value="Descending">Des</option>
      </select>
    </>
  );
};

export default Sort;
