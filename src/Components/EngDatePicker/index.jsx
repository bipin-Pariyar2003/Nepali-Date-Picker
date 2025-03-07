import React from "react";
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
            style={{
              border: "1px solid black",
              marginTop: "10px",
              marginBottom: "0px",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              marginTop: "15px",
              marginBottom: "5px",
              fontSize: { xs: "0.8rem", md: "1.5rem" },
              fontWeight: "bold",
            }}
          >
            {selectedDate} &nbsp; A.D.
          </Typography>{" "}
        </label>

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            onChange={handleDateChange}
            format={"YYYY/MM/DD"}
            value={moment(selectedDate, "YYYY/MM/DD")}
            slotProps={{
              textField: {
                InputProps: {
                  sx: {
                    height: {
                      xs: "43px", // Smaller height for mobile
                      md: "53px", // Default height for desktop
                    },
                    width: {
                      xs: "200px", // Full width for mobile
                      md: "100%", // Full width for desktop
                    },
                    padding: { xs: "5px", md: "10px" },
                  },
                },
              },
              openPickerButton: {
                sx: {
                  "&:focus": {
                    outline: "none", // Remove default outline
                    boxShadow: "none", // Remove any box-shadow
                  },
                  "&:focus-visible": {
                    outline: "none",
                    boxShadow: "none",
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default EngDatePicker;
