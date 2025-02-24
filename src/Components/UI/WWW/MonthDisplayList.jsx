import { np, en } from "assets/RNepaliCalendar/data";
import { getDaysInMonth, getCurrentBS } from "assets/RNepaliCalendar";
import DisplayList from "../DisplayList";
import { getDaysInMonthAD } from "../../../utils";
import { isValidDate, isValidDateAD } from "./setup";

const currentMonth = getCurrentBS().month;

const MonthDisplayList = ({ onChange, setViewDate, viewDate, dateType = "BS" }) => {
  const handleClickMonthBS = (index) => {
    const daysInMonth = getDaysInMonth(+viewDate.year, index + 1);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const date = `${viewDate.year}/${String(index + 1).padStart(2, 0)}/${String(
      viewDate.date
    ).padStart(2, 0)}`;

    if (isValidDate(date)) {
      onChange(date);
      return;
    }

    setViewDate((prev) => ({
      ...prev,
      month: index + 1,
      daysArray,
    }));
  };

  const handleClickMonthAD = (index) => {
    const daysInMonth = getDaysInMonthAD(viewDate.year, index + 1);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const date = `${viewDate.year}/${String(index + 1).padStart(2, 0)}/${String(
      viewDate.date
    ).padStart(2, 0)}`;
    // const isValidDate = moment(date, "YYYY/MM/DD").isValid();

    if (isValidDateAD(date)) {
      onChange(date);
      return;
    }

    setViewDate((prev) => ({
      ...prev,
      month: index + 1,
      daysArray,
    }));
  };

  const handleClickMonth = (_, index) => {
    if (dateType === "BS") {
      handleClickMonthBS(index);
    } else {
      handleClickMonthAD(index);
    }
  };

  const checkIsToday = ({ index }) => {
    if (dateType === "BS") return index + 1 === +currentMonth;
    return index === new Date().getMonth();
  };

  const checkSelectedValue = ({ index }) => {
    return index + 1 === +viewDate.month;
  };

  return (
    <DisplayList
      title="Months"
      handleClick={handleClickMonth}
      isToday={checkIsToday}
      isSelectedValue={checkSelectedValue}
      options={dateType === "BS" ? np.monthName.full : en.monthName.full}
    />
  );
};

export default MonthDisplayList;
