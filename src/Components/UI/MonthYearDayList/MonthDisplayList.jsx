import { np, en } from "assets/RNepaliCalendar/data";
import { getDaysInMonth, getCurrentBS, toNepaliNumber } from "assets/RNepaliCalendar";
import DisplayList from "../DisplayList";
import { getDaysInMonthAD } from "../../../utils";
import { isValidDate, isValidDateAD } from "./setup";
import { useMemo } from "react";

const currentYear = getCurrentBS().year;
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
      daysArray: daysArray.map((v) => ({
        display: toNepaliNumber(v),
        value: v,
      })),
    }));
  };

  const handleClickMonthAD = (index) => {
    const daysInMonth = getDaysInMonthAD(viewDate.year, index + 1);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const date = `${viewDate.year}/${String(index + 1).padStart(2, 0)}/${String(
      viewDate.date
    ).padStart(2, 0)}`;

    if (isValidDateAD(date)) {
      onChange(date);
      return;
    }

    setViewDate((prev) => ({
      ...prev,
      month: index + 1,
      daysArray: daysArray.map((v) => ({
        display: v,
        value: v,
      })),
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
    if (dateType === "BS")
      return +viewDate.year === +currentYear && index + 1 === +currentMonth;
    return +viewDate.year === new Date().getFullYear() && index === new Date().getMonth();
  };

  const checkSelectedValue = ({ index }) => {
    return index + 1 === +viewDate.month;
  };

  const monthOptions = useMemo(() => {
    if (dateType === "BS")
      return np.monthName.full.map((v) => ({ display: v, value: v }));
    return en.monthName.full.map((v) => ({ display: v, value: v }));
  }, []);

  return (
    <DisplayList
      title="Months"
      handleClick={handleClickMonth}
      isToday={checkIsToday}
      isSelectedValue={checkSelectedValue}
      options={monthOptions}
      viewDate={viewDate}
    />
  );
};

export default MonthDisplayList;
