import { getCurrentBS } from "assets/RNepaliCalendar";
import DisplayList from "../DisplayList";
import { isValidDate, isValidDateAD } from "./setup";

const currentDay = getCurrentBS().date;

const DayDisplayList = ({ onChange, setViewDate, viewDate, dateType = "BS" }) => {
  const handleClickDayBS = (index) => {
    const date = `${viewDate.year}/${String(viewDate.month).padStart(2, 0)}/${String(
      index + 1
    ).padStart(2, 0)}`;

    if (isValidDate(date)) {
      onChange(date);
      return;
    }

    setViewDate((prev) => ({
      ...prev,
      date: index + 1,
    }));
  };

  const handleClickDayAD = (index) => {
    const date = `${viewDate.year}/${String(viewDate.month).padStart(2, 0)}/${String(
      index + 1
    ).padStart(2, 0)}`;

    if (isValidDateAD(date)) {
      onChange(date);
      return;
    }

    setViewDate((prev) => ({
      ...prev,
      date: index + 1,
    }));
  };

  const handleClickDay = (_, index) => {
    if (dateType === "BS") {
      handleClickDayBS(index);
    } else {
      handleClickDayAD(index);
    }
  };
  const checkIsToday = ({ index }) => {
    if (dateType === "BS") return index + 1 === +currentDay;
    return index + 1 === new Date().getDate();
  };

  const checkSelectedValue = ({ index }) => {
    return index + 1 === +viewDate.date;
  };

  return (
    <DisplayList
      title="Days"
      handleClick={handleClickDay}
      isToday={checkIsToday}
      isSelectedValue={checkSelectedValue}
      options={viewDate.daysArray}
    />
  );
};

export default DayDisplayList;
