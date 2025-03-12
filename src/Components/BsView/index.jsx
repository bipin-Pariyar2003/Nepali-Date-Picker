import React from "react";
import { getDaysInMonth, toNepaliNumber } from "assets/RNepaliCalendar";
import { Stack } from "@mui/material";
import {
  DayDisplayList,
  MonthDisplayList,
  YearDisplayList,
} from "../UI/MonthYearDayList";
import { useDispatch, useSelector } from "react-redux";
import { setNepaliDate } from "../../features/dateSlice";

const BsView = () => {
  const selectedDate = useSelector((state) => state.date.nepaliDate);
  const dispatch = useDispatch();
  const handleChange = (newDate) => {
    dispatch(setNepaliDate(newDate));
  };

  const [viewDate, setViewDate] = React.useState({
    year: selectedDate.split("/").at(0),
    month: selectedDate.split("/").at(1),
    date: selectedDate.split("/").at(2),
    daysArray: [],
  });

  React.useEffect(() => {
    const daysInMonth = getDaysInMonth(
      selectedDate.split("/").at(0),
      selectedDate.split("/").at(1)
    );

    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    setViewDate({
      year: selectedDate.split("/").at(0),
      month: selectedDate.split("/").at(1),
      date: selectedDate.split("/").at(2),
      daysArray: daysArray.map((v) => ({
        display: toNepaliNumber(v),
        value: v,
      })),
    });
  }, [selectedDate]);

  return (
    <Stack
      direction={{ xs: "col", md: "row" }}
      gap={{ xs: 1, md: 4 }}
      style={{ overflow: "auto" }}
    >
      {/* showing the years  */}

      <YearDisplayList
        onChange={handleChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="BS"
      />

      <MonthDisplayList
        onChange={handleChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="BS"
      />

      <DayDisplayList
        onChange={handleChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="BS"
      />
    </Stack>
  );
};
export default BsView;
