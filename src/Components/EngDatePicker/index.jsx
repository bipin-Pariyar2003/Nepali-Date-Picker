import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setEnglishDate } from "features/dateSlice";

const EngDatePicker = () => {
  const selectedDate = useSelector((state) => state.date.englishDate);
  const dispatch = useDispatch();
  const hangleChange = (newDate) => {
    dispatch(setEnglishDate(newDate));
  };
  const handleDateChange = (date) => {
    // convert moment obj to YYYY/MM/DD format
    const formattedDate = date.format("YYYY/MM/DD");
    hangleChange(formattedDate);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <label>
          <hr
            style={{
              border: "1px solid black",
              marginTop: "5px",
              marginBottom: "0px",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
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
                      xs: "43px",
                      md: "55px",
                    },
                    width: {
                      xs: "200px",
                      md: "100%",
                    },
                  },
                },
              },
              openPickerButton: {
                sx: {
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
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
