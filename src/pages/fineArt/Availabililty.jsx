import { useDispatch, useSelector } from "react-redux";
import { setAvailability, selectAvailability } from "../../features/appSlice";
import { AVAIL, SOLD } from "../../store/types";

const Availability = () => {
  //   console.log(sort);
  const dispatch = useDispatch();

  return (
    <>
      <select onChange={(e) => dispatch(setAvailability(e.target.value))}>
        <option value="">
          <p>See All</p>
        </option>
        <option value={AVAIL}>
          <p>Available to buy</p>
        </option>
        <option value={SOLD}>
          <p>Sold</p>
        </option>
      </select>
    </>
  );
};

export default Availability;
