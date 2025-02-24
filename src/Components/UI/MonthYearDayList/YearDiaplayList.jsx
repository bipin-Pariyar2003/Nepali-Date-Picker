import { calendar_data } from "assets/RNepaliCalendar/data";
import { getDaysInMonth, getCurrentBS, toNepaliNumber } from "assets/RNepaliCalendar";
import DisplayList from "../DisplayList";
import { bsYearToAdYear, getDaysInMonthAD } from "../../../utils";
import { isValidDate, isValidDateAD } from "./setup";

const currentYear = getCurrentBS().year;

const YearDisplayList = ({ onChange, setViewDate, viewDate, dateType = "BS" }) => {
  console.log(viewDate);
  const handleClickYearBS = (year) => {
    const daysInMonth = getDaysInMonth(year, viewDate.month);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const date = `${year}/${String(viewDate.month).padStart(2, 0)}/${String(
      viewDate.date
    ).padStart(2, 0)}`;

    if (isValidDate(date)) {
      onChange(date);
      return;
    }

    setViewDate((prev) => ({
      ...prev,
      year: year,
      daysArray,
    }));
  };

  const handleClickYearAD = (year) => {
    const daysInMonth = getDaysInMonthAD(year, viewDate.month);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const date = `${year}/${String(viewDate.month).padStart(2, 0)}/${String(
      viewDate.date
    ).padStart(2, 0)}`;
    // const isValidDate = moment(date, "YYYY/MM/DD").isValid();

    if (isValidDateAD(date)) {
      onChange(date);
      return;
    }
    setViewDate((prev) => ({
      ...prev,
      year,
      daysArray,
    }));
  };

  const handleClickYear = (year) => {
    if (dateType === "BS") {
      handleClickYearBS(year);
    } else {
      handleClickYearAD(year);
    }
  };

  const checkIsToday = ({ display }) => {
    return dateType === "BS"
      ? +display === currentYear
      : +display === new Date().getFullYear();
  };

  const checkSelectedValue = ({ display }) => {
    return +display === +viewDate.year;
  };

  return (
    <DisplayList
      title={dateType === "BS" ? "Year (B.S.)" : "Year (A.D.)"}
      handleClick={handleClickYear}
      isToday={checkIsToday}
      isSelectedValue={checkSelectedValue}
      options={
        dateType === "BS"
          ? // ? Object.keys(calendar_data).map((year) => {
            //     return toNepaliNumber(year);
            //   })
            Object.keys(calendar_data)
          : Object.keys(calendar_data)
              .map((year) => {
                const engYear = bsYearToAdYear(year);
                return engYear;
              })
              .filter((engYear) => !isNaN(engYear))
      }
    />
  );
};

export default YearDisplayList;
