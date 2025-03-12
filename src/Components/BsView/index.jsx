import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import {
  DayDisplayList,
  MonthDisplayList,
  YearDisplayList,
} from "../UI/MonthYearDayList";
import { useDispatch, useSelector } from "react-redux";
import { setNepaliDate, setViewDateBS } from "features/dateSlice";

const BsView = () => {
  const selectedDate = useSelector((state) => state.date.nepaliDate);
  const viewDate = useSelector((state) => state.date.viewDateBS);
  const dispatch = useDispatch();
  const handleChange = (newDate) => {
    dispatch(setNepaliDate(newDate));
  };

  useEffect(() => {
    const year = selectedDate.split("/").at(0);
    const month = selectedDate.split("/").at(1);
    const date = selectedDate.split("/").at(2);
    dispatch(setViewDateBS({ year, month, date }));
  }, [selectedDate, dispatch]);
  return (
    <Stack
      direction={{ xs: "col", md: "row" }}
      gap={{ xs: 1, md: 4 }}
      style={{ overflow: "auto" }}
    >
      {/* showing the years  */}

      <YearDisplayList onChange={handleChange} viewDate={viewDate} dateType="BS" />

      <MonthDisplayList onChange={handleChange} viewDate={viewDate} dateType="BS" />

      <DayDisplayList onChange={handleChange} viewDate={viewDate} dateType="BS" />
    </Stack>
  );
};
export default BsView;
