import React from "react";
import { getDaysInMonth } from "assets/RNepaliCalendar";
import { Stack } from "@mui/material";
import {
  DayDisplayList,
  MonthDisplayList,
  YearDisplayList,
} from "../../Components/UI/MonthYearDayList";

const BsView = ({ selectedDate, onChange }) => {
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
      daysArray,
    });
  }, [selectedDate]);

  return (
    <Stack direction="row" gap={4} style={{ overflow: "hidden" }}>
      {/* showing the years  */}

      <YearDisplayList
        onChange={onChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="BS"
      />

      <MonthDisplayList
        onChange={onChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="BS"
      />

      <DayDisplayList
        onChange={onChange}
        setViewDate={setViewDate}
        viewDate={viewDate}
        dateType="BS"
      />
    </Stack>
  );
};
export default BsView;
