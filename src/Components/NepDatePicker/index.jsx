import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DatePickerUI from "../DatePickerUI";
import RNepaliCalendar from "../../assets/RNepaliCalendar";

const nepaliCalendar = new RNepaliCalendar();

const NepDatePicker = ({ selectedDate, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    // Set the initial date value in YYYY/MM/DD format
    if (selectedDate) {
      setDate(selectedDate);
    }
  }, [selectedDate]);

  const handleShowDatePicker = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formatDate = (value) => {
    // Remove non-numeric characters
    value = value.replace(/\D/g, "");

    // Extract year, month, and day
    let year = value.slice(0, 4);
    let month = value.slice(4, 6);
    let day = value.slice(6, 8);

    // Ensure valid month (1-12)
    if (month) {
      let monthNum = parseInt(month, 10);
      if (monthNum > 12) month = "12";
      if (monthNum < 1 && month.length === 2) month = "01";
    }

    // Ensure valid day (1-33)
    if (day) {
      let dayNum = parseInt(day, 10);
      if (dayNum > 33) day = "33";
      if (dayNum < 1 && day.length === 2) day = "01";
    }

    // Construct formatted date
    let formattedDate = year;
    if (month) formattedDate += `/${month}`;
    if (day) formattedDate += `/${day}`;

    return formattedDate;
  };

  const handleChange = (e) => {
    let value = e.target.value;
    const cursorPosition = e.target.selectionStart;

    // Allow backspacing and corrections
    if (value === "") {
      setDate("");
      onChange(""); // Call onChange with empty value
      return;
    }

    // Format the input
    let formatted = formatDate(value);
    
    // Update the date state
    setDate(formatted);
    onChange(formatted); // Call onChange to update the parent component

    // Restore cursor position
    if (cursorPosition <= 4) {
      e.target.setSelectionRange(cursorPosition, cursorPosition); // Keep cursor in year
    } else if (cursorPosition <= 7) {
      e.target.setSelectionRange(cursorPosition + 1, cursorPosition + 1); // Keep cursor in month
    } else {
      e.target.setSelectionRange(cursorPosition + 1, cursorPosition + 1); // Keep cursor in day
    }
  };

  const handleFocus = (e) => {
    // Allow the user to manually position the cursor
    const input = e.target;
    // No automatic selection of year, month, or day
  };

  return (
    <div className="nepali-date-picker">
      <label htmlFor="date">
        <p className="text">
          Selected date in B.S.{" "}
          <span className="text-imp">
            {selectedDate}
          </span>
        </p>
        <p className="sub-heading">Date in B.S.</p>
      </label>
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
          className="input-field"
          type="text"
          required
          pattern="\d{4}/\d{2}/\d{2}"
          title="Enter date in YYYY/MM/DD format"
          id="neplai-date-input"
          placeholder="YYYY/MM/DD"
          value={date}
          onChange={handleChange} // Format on change
          onFocus={handleFocus}
          style={{
            padding: "10px",
            paddingBottom: "15px",
            paddingTop: "15px",
            paddingLeft: "15px",
            fontSize: "16px",
            border: "none",
            position: "relative",
            width: "180px",
            backgroundColor: "#F8F5E9",
          }}
          maxLength={10}
        />
        <Button id="calendar-btn" onClick={handleShowDatePicker}>
          <CalendarMonthIcon />
        </Button>
      </div>
      <DatePickerUI
        anchorEl={anchorEl}
        handleClose={handleClose}
        onDateSelect={onChange}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default NepDatePicker;