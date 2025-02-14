import React from "react";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DatePickerUI from "../DatePickerUI";
import { useState } from "react";
import RNepaliCalendar from "../../assets/RNepaliCalendar";

const nepaliCalendar = new RNepaliCalendar();
const NepDatePicker = ({ selectedDate, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleShowDatePicker = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //handle input change
  const formatDateInput = (value) => {
    // Remove non-numeric characters except slashes
    value = value.replace(/[^0-9/]/g, "");

    // Remove extra slashes if present
    value = value.replace(/\/+/g, "/");

    let parts = value.split("/").map((part) => part.replace(/\D/g, "")); // Extract numeric parts

    let year = parts[0] || "";
    let month = parts[1] || "";
    let day = parts[2] || "";

    // Ensure correct year input
    if (year.length > 4) year = year.slice(0, 4);

    // Auto-pad month and day only when necessary
    if (month.length === 1 && parseInt(month) > 1) month = "0" + month;
    if (day.length === 1 && parseInt(day) > 1) day = "0" + day;

    let formattedDate = year;
    if (month) formattedDate += "/" + month;
    if (day) formattedDate += "/" + day;

    return formattedDate;
  };

  const handleInputChange = (e) => {
    let formattedValue = formatDateInput(e.target.value);
    onChange(formattedValue);
  };

  return (
    <>
      <div className="nepali-date-picker">
        <label htmlFor="date">
          {" "}
          <p>
            Selected date in B.S.{" "}
            <span
              style={{
                color: "#143D60",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {/* {nepDateFormatter(selectedDate)} */}
              {selectedDate}
            </span>
          </p>
          <b
            style={{
              color: "#143D60",
              fontSize: "1.3rem",
              textDecoration: "underline",
            }}
          >
            Date in B.S.
          </b>
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
            type="text"
            required
            pattern="\d{4}/\d{2}/\d{2}"
            title="Enter date in YYYY/MM/DD format"
            // type="number"
            id="neplai-date-input"
            placeholder={selectedDate || "YYYY/MM/DD"}
            // value={nepDateFormatter(selectedDate) || ""}
            value={selectedDate || ""}
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
            onChange={handleInputChange}
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
    </>
  );
};

export default NepDatePicker;
