import React, { useEffect } from "react";

import { Stack } from "@mui/material";
import {
  DayDisplayList,
  MonthDisplayList,
  YearDisplayList,
} from "../UI/MonthYearDayList";
import { useDispatch, useSelector } from "react-redux";
import { setEnglishDate, setViewDateAD } from "features/dateSlice";

const AdView = () => {
  const selectedDate = useSelector((state) => state.date.englishDate);
  const viewDate = useSelector((state) => state.date.viewDateAD);
  const dispatch = useDispatch();
  const handleChange = (newDate) => {
    dispatch(setEnglishDate(newDate));
  };

  useEffect(() => {
    const year = selectedDate.split("/").at(0);
    const month = selectedDate.split("/").at(1);
    const date = selectedDate.split("/").at(2);
    dispatch(setViewDateAD({ year, month, date }));
  }, [selectedDate, dispatch]);

  return (
    <Stack
      direction={{ xs: "col", md: "row" }}
      gap={{ xs: 1, md: 4 }}
      style={{ overflow: "auto" }}
    >
      <DayDisplayList onChange={handleChange} viewDate={viewDate} dateType="AD" />
      <MonthDisplayList onChange={handleChange} viewDate={viewDate} dateType="AD" />

      <YearDisplayList onChange={handleChange} viewDate={viewDate} dateType="AD" />
    </Stack>
  );
};

export default AdView;
