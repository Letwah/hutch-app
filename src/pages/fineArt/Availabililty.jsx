import { useDispatch, useSelector } from "react-redux";
import { setAvailability, selectAvailability } from "../../features/appSlice";
import { AVAIL, SOLD } from "../../store/types";

const Availability = () => {
  //   console.log(sort);
  const dispatch = useDispatch();

  return (
    <>
      <select onChange={(e) => dispatch(setAvailability(e.target.value))}>
        <option value=""> See All</option>
        <option value={AVAIL}>Available to buy</option>
        <option value={SOLD}>Sold</option>
      </select>
    </>
  );
};

export default Availability;
