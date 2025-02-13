import { ad2bs, bs2ad } from "../assets/RNepaliCalendar";
import { toNepaliNumber } from "../assets/RNepaliCalendar";
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

export { ad2bsHandler, bs2adHandler, nepDateFormatter };
