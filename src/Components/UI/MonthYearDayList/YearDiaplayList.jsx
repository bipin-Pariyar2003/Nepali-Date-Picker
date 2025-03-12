import { calendar_data } from "assets/RNepaliCalendar/data";
import { getDaysInMonth, getCurrentBS, toNepaliNumber } from "assets/RNepaliCalendar";
import DisplayList from "../DisplayList";
import { bsYearToAdYear, getDaysInMonthAD } from "utils";
import { isValidDate, isValidDateAD } from "./setup";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

const currentYear = getCurrentBS().year;

const YearDisplayList = ({ onChange, setViewDate, viewDate, dateType = "BS" }) => {
  const dispatch = useDispatch();

  const handleClickYearBS = (year) => {
    const daysInMonth = getDaysInMonth(year, viewDate.month);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1).map((v) => ({
      display: toNepaliNumber(v),
      value: v,
    }));

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
      daysArray: daysArray.map((v) => ({
        display: toNepaliNumber(v),
        value: v,
      })),
    }));
  };

  const handleClickYearAD = (year) => {
    const daysInMonth = getDaysInMonthAD(year, viewDate.month);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1).map((v) => ({
      display: v,
      value: v,
    }));

    const date = `${year}/${String(viewDate.month).padStart(2, 0)}/${String(
      viewDate.date
    ).padStart(2, 0)}`;

    if (isValidDateAD(date)) {
      onChange(date);
      return;
    }

    setViewDate((prev) => ({
      ...prev,
      year,
      daysArray: daysArray.map((v) => ({
        display: v,
        value: v,
      })),
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
    if (Array.isArray(display)) return +display[0] === +viewDate.year;
    return +display === +viewDate.year;
  };

  const yearOptions = useMemo(() => {
    if (dateType === "BS") {
      return Object.keys(calendar_data).map((v) => ({
        display: toNepaliNumber(v),
        value: v,
      }));
    }

    return Object.keys(calendar_data)
      .map((v) => {
        const adYear = bsYearToAdYear(v);
        return {
          display: adYear,
          value: adYear,
        };
      })
      .filter((item) => !isNaN(item.display));
  }, [calendar_data, dateType]);

  return (
    <DisplayList
      handleClick={handleClickYear}
      isToday={checkIsToday}
      isSelectedValue={checkSelectedValue}
      options={yearOptions}
      viewDate={viewDate}
    />
  );
};

export default YearDisplayList;

// import { calendar_data } from "assets/RNepaliCalendar/data";
// import { getDaysInMonth, getCurrentBS, toNepaliNumber } from "assets/RNepaliCalendar";
// import DisplayList from "../DisplayList";
// import { bsYearToAdYear, getDaysInMonthAD } from "utils";
// import { isValidDate, isValidDateAD } from "./setup";
// import { useMemo } from "react";

// const currentYear = getCurrentBS().year;

// const YearDisplayList = ({ onChange, setViewDate, viewDate, dateType = "BS" }) => {
//   const handleClickYearBS = (year) => {
//     const daysInMonth = getDaysInMonth(year, viewDate.month);
//     const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1).map((v) => ({
//       display: toNepaliNumber(v),
//       value: v,
//     }));

//     const date = `${year}/${String(viewDate.month).padStart(2, 0)}/${String(
//       viewDate.date
//     ).padStart(2, 0)}`;

//     if (isValidDate(date)) {
//       onChange(date);
//       return;
//     }

//     setViewDate((prev) => ({
//       ...prev,
//       year: year,
//       daysArray: daysArray.map((v) => ({
//         display: toNepaliNumber(v),
//         value: v,
//       })),
//     }));
//   };

//   const handleClickYearAD = (year) => {
//     const daysInMonth = getDaysInMonthAD(year, viewDate.month);
//     const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1).map((v) => ({
//       display: v,
//       value: v,
//     }));

//     const date = `${year}/${String(viewDate.month).padStart(2, 0)}/${String(
//       viewDate.date
//     ).padStart(2, 0)}`;

//     if (isValidDateAD(date)) {
//       onChange(date);
//       return;
//     }

//     setViewDate((prev) => ({
//       ...prev,
//       year,
//       daysArray: daysArray.map((v) => ({
//         display: v,
//         value: v,
//       })),
//     }));
//   };

//   const handleClickYear = (year) => {
//     if (dateType === "BS") {
//       handleClickYearBS(year);
//     } else {
//       handleClickYearAD(year);
//     }
//   };

//   const checkIsToday = ({ display }) => {
//     return dateType === "BS"
//       ? +display === currentYear
//       : +display === new Date().getFullYear();
//   };

//   const checkSelectedValue = ({ display }) => {
//     if (Array.isArray(display)) return +display[0] === +viewDate.year;
//     return +display === +viewDate.year;
//   };

//   const yearOptions = useMemo(() => {
//     if (dateType === "BS") {
//       return Object.keys(calendar_data).map((v) => ({
//         display: toNepaliNumber(v),
//         value: v,
//       }));
//     }

//     return Object.keys(calendar_data)
//       .map((v) => {
//         const adYear = bsYearToAdYear(v);
//         return {
//           display: adYear,
//           value: adYear,
//         };
//       })
//       .filter((item) => !isNaN(item.display));
//   }, [calendar_data, dateType]);

//   return (
//     <DisplayList
//       handleClick={handleClickYear}
//       isToday={checkIsToday}
//       isSelectedValue={checkSelectedValue}
//       options={yearOptions}
//       viewDate={viewDate}
//     />
//   );
// };

// export default YearDisplayList;
