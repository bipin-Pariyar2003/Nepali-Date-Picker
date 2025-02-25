import { getCurrentBS } from "assets/RNepaliCalendar";
import DisplayList from "../DisplayList";
import { isValidDate, isValidDateAD } from "./setup";

// to get the actual current today
const currentYear = getCurrentBS().year;

const currentMonth = getCurrentBS().month;

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
    if (dateType === "BS")
      return (
        +viewDate.year === +currentYear &&
        +viewDate.month === +currentMonth &&
        index + 1 === +currentDay
      );
    else {
      return (
        +viewDate.year === new Date().getFullYear() &&
        +viewDate.month === new Date().getMonth() + 1 &&
        index + 1 === new Date().getDate()
      );
    }
  };

  const checkSelectedValue = ({ index }) => {
    return index + 1 === +viewDate.date;
  };
  if (viewDate.daysArray.length === 0) return null;

  return (
    <DisplayList
      title="Days"
      handleClick={handleClickDay}
      isToday={checkIsToday}
      isSelectedValue={checkSelectedValue}
      options={viewDate.daysArray}
      viewDate={viewDate}
    />
  );
};

export default DayDisplayList;
