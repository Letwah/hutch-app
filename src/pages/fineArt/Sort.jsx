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
        <option value="">
          <p>Reset</p>
        </option>
        <option value={ASC}>
          <p>Asc</p>
        </option>
        <option value={DESC}>
          <p>Des</p>
        </option>
      </select>
    </>
  );
};

export default Sort;
