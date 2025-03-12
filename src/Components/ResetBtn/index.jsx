import moment from "moment";
import { useDispatch } from "react-redux";
import { setEnglishDate } from "../../features/dateSlice";

const ResetBtn = () => {
  const dispatch = useDispatch();

  const handleChange = (newDate) => {
    dispatch(setEnglishDate(newDate));
  };
  const handleReset = () => {
    const currentEnglishDate = moment().format("YYYY/MM/DD");
    handleChange(currentEnglishDate);
  };

  return (
    <button className="reset-btn" onClick={handleReset}>
      Go to Today
    </button>
  );
};

export default ResetBtn;
