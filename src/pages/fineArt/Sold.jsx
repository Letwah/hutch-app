import { useDispatch, useSelector } from "react-redux";
import { setSold, selectSold } from "../../features/appSlice";
import { AVAIL, SOLD } from "../../store/types";

const Sold = () => {
  //   console.log(sort);
  const dispatch = useDispatch();

  return (
    <>
      <select onChange={(e) => dispatch(setSold(e.target.value))}>
        <option value=""> Availability: See All</option>
        <option value={AVAIL}>Available to buy</option>
        <option value={SOLD}>Sold</option>
      </select>
    </>
  );
};

export default Sold;
