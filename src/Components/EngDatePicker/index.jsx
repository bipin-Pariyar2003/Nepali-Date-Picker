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
          <p>
            Selected date in A.D.{" "}
            <span
              style={{
                color: "#143D60",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {selectedDate}
            </span>
          </p>{" "}
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
