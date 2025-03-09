import React, { useState, useRef } from "react";
import { Button, Typography } from "@mui/material";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import DatePickerUI from "Components/DatePickerUI";
import { toNepaliNumber } from "assets/RNepaliCalendar";
import "./styles.css"; // Import your CSS file

const NepDatePicker = ({ selectedDate, onChange }) => {
  const inputRef = useRef(selectedDate);
  const [anchorEl, setAnchorEl] = useState(null);

  const formattedNepaliDate = (date) => {
    return (
      toNepaliNumber(date.split("/").at(0)) +
      "/" +
      toNepaliNumber(date.split("/").at(1)) +
      "/" +
      toNepaliNumber(date.split("/").at(2))
    );
  };

  const handleShowDatePicker = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if (inputRef && inputRef.current) inputRef.current.value = selectedDate;
  }, [selectedDate]);

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    if (value.length > 8) value = value.slice(0, 8); // Limit to YYYYMMDD format

    let formattedValue = value.replace(/^(\d{4})(\d{0,2})(\d{0,2})$/, (_, y, m, d) => {
      return [y, m, d].filter(Boolean).join("/");
    });

    e.target.value = formattedValue; // Update input field

    // Check if input matches YYYY/MM/DD format and trigger handleChange
    if (/^\d{4}\/\d{2}\/\d{2}$/.test(formattedValue)) {
      onChange(formattedValue);
    }
  };

  return (
    <div className="nepali-date-picker">
      <label>
        <Typography
          variant="h5"
          sx={{
            marginTop: { xs: 0, md: "15px" },
            marginBottom: "15px",
            fontSize: { xs: "0.8rem", md: "1.5rem" },
            fontWeight: "bold",
          }}
        >
          बि .सं.&nbsp; {formattedNepaliDate(selectedDate)}
        </Typography>
      </label>

      <div className="box">
        <input
          type="text"
          onInput={handleInputChange}
          placeholder="YYYY/MM/DD"
          className="input"
          ref={inputRef}
        />

        <Button
          variant="text"
          onClick={handleShowDatePicker}
          className="button"
          sx={{ color: "#757575" }}
        >
          <InsertInvitationIcon sx={{ height: "24px", width: "24px" }} />
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
