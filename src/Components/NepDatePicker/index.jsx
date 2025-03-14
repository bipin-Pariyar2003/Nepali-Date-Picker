import React, { useState, useRef } from "react";
import { Button, Typography } from "@mui/material";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import DatePickerUI from "Components/DatePickerUI";
import { toNepaliNumber } from "assets/RNepaliCalendar";
import "./styles.css";
import { isValidDate } from "UI/MonthYearDayList/setup"; // Ensure this function validates the Nepali date
import { useDispatch, useSelector } from "react-redux";
import { setNepaliDate } from "features/dateSlice";

const NepDatePicker = () => {
  const selectedDate = useSelector((state) => state.date.nepaliDate);
  const dispatch = useDispatch();
  const handleChange = (newDate) => {
    dispatch(setNepaliDate(newDate));
  };

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

    // Prevent '00' day value from being set
    if (/^\d{4}\/\d{2}\/\d{2}$/.test(formattedValue)) {
      const [year, month, day] = formattedValue.split("/").map(Number);

      // If day is '00' or invalid, do not update the value
      if (day === 0) {
        e.target.value = formattedValue.slice(0, -2); // Remove the invalid day part
        return;
      }

      // If the date is valid, trigger the onChange callback
      if (isValidDate(formattedValue)) {
        handleChange(formattedValue);
      }
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

      <DatePickerUI anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  );
};

export default NepDatePicker;
