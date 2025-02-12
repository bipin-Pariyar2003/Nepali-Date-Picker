import React from "react";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import DatePickerUI from "../DatePickerUI";
import { useState } from "react";
const NepDatePicker = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  //parent component
  const [selectedDate, setSelectedDate] = useState(null);

  const handleShowDatePicker = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //handle date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // handleClose();
  };

  return (
    <>
      <div className="nepali-date-picker">
        <div
          className="header"
          style={{
            alignItems: "center",
            gap: "0px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            id="date-input"
            placeholder={selectedDate || "YYYY/MM/DD"}
            // value={selectedDate || ""}
            style={{
              padding: "10px",
              paddingBottom: "15px",
              paddingTop: "15px",
              paddingLeft: "10px",
              fontSize: "16px",
              border: "none",
              position: "relative",
              width: "180px",
              backgroundColor: "#F8F5E9",
            }}
          />
          <Button id="calendar-btn" onClick={handleShowDatePicker}>
            <CalendarMonthIcon />
          </Button>
        </div>
        <DatePickerUI
          anchorEl={anchorEl}
          handleClose={handleClose}
          onDateSelect={handleDateSelect}
        />
      </div>
    </>
  );
};

export default NepDatePicker;
