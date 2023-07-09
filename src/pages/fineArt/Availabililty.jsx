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
          <div>
            {" "}
            <p>See All</p>
          </div>
        </option>
        <option value={AVAIL}>
          <div>
            <p>Available to buy</p>
          </div>
        </option>
        <option value={SOLD}>
          <div>
            <p>Sold</p>
          </div>
        </option>
      </select>
    </>
  );
};

export default Availability;
