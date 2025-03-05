import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { Typography } from "@mui/material";
const EngDatePicker = ({ selectedDate, onChange }) => {
  const handleDateChange = (date) => {
    // convert moment obj to YYYY/MM/DD format
    const formattedDate = date.format("YYYY/MM/DD");
    onChange(formattedDate);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <label>
          <hr
            style={{ border: "1px solid black", marginTop: "15px", marginBottom: "0px" }}
          />
          <Typography
            variant="h5"
            sx={{
              marginTop: "15px",
              marginBottom: "0px",
              fontSize: { xs: "0.8rem", md: "1.5rem" },
              fontWeight: "bold",
            }}
          >
            {selectedDate} &nbsp; A.D.
          </Typography>{" "}
        </label>
        <br />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            onChange={handleDateChange}
            format={"YYYY/MM/DD"}
            value={moment(selectedDate, "YYYY/MM/DD")}
            sx={{
              width: {
                xs: "245px",
                md: "100%",
              },
              height: {
                xs: "30px",
                md: "100%",
              },
              padding: { xs: "5px", md: "10px" },
              marginBottom: { xs: "20px" },
              marginTop: { xs: "0px" },
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default EngDatePicker;
