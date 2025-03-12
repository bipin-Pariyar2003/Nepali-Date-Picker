import React from "react";
import { getDaysInMonth } from "utils";

import { Stack } from "@mui/material";
import {
  DayDisplayList,
  MonthDisplayList,
  YearDisplayList,
} from "../UI/MonthYearDayList";
import { useDispatch, useSelector } from "react-redux";
import { setEnglishDate } from "features/dateSlice";

const AdView = () => {
  const selectedDate = useSelector((state) => state.date.englishDate);
  const dispatch = useDispatch();
  const handleChange = (newDate) => {
    dispatch(setEnglishDate(newDate));
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
        display: v,
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
      <DayDisplayList
        onChange={handleChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="AD"
      />
      <MonthDisplayList
        onChange={handleChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="AD"
      />

      <YearDisplayList
        onChange={handleChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="AD"
      />
    </Stack>
  );
};

export default AdView;
