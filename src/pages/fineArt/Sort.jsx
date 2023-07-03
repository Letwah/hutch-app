import { useDispatch, useSelector } from "react-redux";
import { setSort, selectSort } from "../../features/appSlice";
import { ASC, DESC } from "../../store/types";

const Sort = () => {
  const sort = useSelector(selectSort);
  //   console.log(sort);
  const dispatch = useDispatch();

  // const onSort = [...fineArt];

  return (
    <>
      <select onChange={(e) => dispatch(setSort(e.target.value))}>
        <option value="">Reset</option>
        <option value={ASC}>Asc</option>
        <option value={DESC}>Des</option>
      </select>
    </>
  );
};

export default Sort;
