import { useDispatch, useSelector } from "react-redux";
import { setSortByDate, selectSortByDate } from "../../features/appSlice";
import { ASC, DESC } from "../../store/types";

const SortByDate = () => {
  const sort = useSelector(selectSortByDate);
  //   console.log(sortByDate);
  const dispatch = useDispatch();

  // const onSortByDate = [...fineArt];

  return (
    <>
      <select onChange={(e) => dispatch(setSortByDate(e.target.value))}>
        <option value="">sort by date</option>
        <option value={ASC}>Older works</option>
        <option value={DESC}>New work</option>
      </select>
    </>
  );
};

export default SortByDate;
