import React from "react";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import DatePickerUI from "../DatePickerUI";
import { useState } from "react";
const NepDatePicker = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleShowDatePicker = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            // type="date"
            type="text"
            id="date-input"
            placeholder="YYYY/MM/DD"
            style={{
              padding: "10px",
              paddingBottom: "15px",
              paddingTop: "15px",
              paddingLeft: "10px",
              fontSize: "16px",
              border: "none",
              position: "relative",
              width: "180px",
            }}
          />
          <Button id="calendar-btn" onClick={handleShowDatePicker}>
            <CalendarMonthIcon />
          </Button>
        </div>
        <DatePickerUI anchorEl={anchorEl} handleClose={handleClose} />
      </div>
    </>
  );
};

export default NepDatePicker;
