import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
//handle props
const EngDatePicker = ({ selectedDate, onChange }) => {
  //update nepali date also
  const handleDateChange = (date) => {
    // convert moment obj to YYYY/MM/DD format
    const formattedDate = date.format("YYYY/MM/DD");
    onChange(formattedDate);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <label htmlFor="date">
          <hr
            style={{ border: "1px solid black", marginTop: "15px", marginBottom: "15px" }}
          />
          <h2 style={{ marginTop: "15px" }}>{selectedDate} &nbsp; A.D.</h2>{" "}
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
