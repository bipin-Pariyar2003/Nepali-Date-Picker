import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

//handle props
const EngDatePicker = ({ selectedDate, onChange }) => {
  const handleDateChange = (date) => {
    // convert moment obj to YYYY/MM/DD format
    const formattedDate = date.format("YYYY/MM/DD");
    onChange(formattedDate);
  };

  // const [selectedDate, setSelectedDate] = useState("2024/12/16");
  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <label htmlFor="date">
          {" "}
          <b
            style={{
              color: "#143D60",
              fontSize: "1.3rem",
              textDecoration: "underline",
            }}
          >
            Date in A.D.
          </b>
        </label>
        <br />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            onChange={handleDateChange}
            format={"YYYY/MM/DD"}
            value={moment(selectedDate, "YYYY/MM/DD")}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default EngDatePicker;
