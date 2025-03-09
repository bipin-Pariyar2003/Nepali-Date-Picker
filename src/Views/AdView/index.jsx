import React from "react";
import { getDaysInMonth } from "utils";

import { Stack } from "@mui/material";
import {
  DayDisplayList,
  MonthDisplayList,
  YearDisplayList,
} from "../../Components/UI/MonthYearDayList";

const AdView = ({ selectedDate, onChange }) => {
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
      px={{ xs: 1, md: 0 }}
      pb={{ xs: 0, md: 2 }}
      gap={{ xs: 1, md: 4 }}
      style={{ overflow: "hidden" }}
    >
      <DayDisplayList
        onChange={onChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="AD"
      />
      <MonthDisplayList
        onChange={onChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="AD"
      />

      <YearDisplayList
        onChange={onChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="AD"
      />
    </Stack>
  );
};

export default AdView;
