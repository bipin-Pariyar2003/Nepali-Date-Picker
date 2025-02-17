import { ad2bs, bs2ad } from "assets/RNepaliCalendar";
import { toNepaliNumber } from "assets/RNepaliCalendar";
import { calendar_data } from "../assets/RNepaliCalendar/data";
const ad2bsHandler = (adDate) => {
  const { year, month, date } = ad2bs(adDate);

  return `${String(year).padStart(4, 0)}/${String(month).padStart(
    2,
    0
  )}/${String(date).padStart(2, 0)}`;
};

const bs2adHandler = (bsDate) => {
  const { year, month, date } = bs2ad(bsDate);

  return `${year}/${String(month).padStart(2, 0)}/${String(date).padStart(
    2,
    0
  )}`;
};

//only convert year from BS to AD (2081 = 2025)
const bsYearToAdYear = (bsYear) => {
  const { year } = bs2ad(`${bsYear}/01/01`);
  return year;
};

//formats date from "20222524" to "2022/25/24"
const nepDateFormatter = (date) => {
  const nepaliDate = toNepaliNumber(date);
  const formattedNepaliDate =
    nepaliDate.slice(0, 4) +
    "/" +
    nepaliDate.slice(4, 6) +
    "/" +
    nepaliDate.slice(6, 8) +
    "";
  return formattedNepaliDate;
};

//getting days in month english date
const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export {
  ad2bsHandler,
  bs2adHandler,
  nepDateFormatter,
  bsYearToAdYear,
  getDaysInMonth,
};
