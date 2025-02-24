import { getDaysInMonth } from "assets/RNepaliCalendar";
import moment from "moment";

const isValidDate = (date) => {
  const daysInMonth = getDaysInMonth(date.split("/").at(0), date.split("/").at(1));

  return daysInMonth >= +date.split("/").at(2);
};

const isValidDateAD = (date, format = "YYYY/MM/DD") => {
  return moment(date, format).isValid();
};

export { isValidDate, isValidDateAD };
