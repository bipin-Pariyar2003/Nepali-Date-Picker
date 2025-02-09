import React from "react";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import moment from "moment";
import DatePickerUI from "../DatePickerUI";
import { useState, useEffect } from "react";
const NepDatePicker = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleShowDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <>
      <div class="nepali-date-picker">
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
              width: "150px",
              padding: "10px",
              paddingBottom: "15px",
              paddingTop: "15px",
              paddingLeft: "10px",
              fontSize: "16px",
              border: "none",
              position: "relative",
            }}
          />
          <Button id="calendar-btn" onClick={handleShowDatePicker}>
            <CalendarMonthIcon />
          </Button>
        </div>
        {showDatePicker && <DatePickerUI />}
        <div class="calendar" id="calendar"></div>
      </div>
    </>
  );
};

export default NepDatePicker;
