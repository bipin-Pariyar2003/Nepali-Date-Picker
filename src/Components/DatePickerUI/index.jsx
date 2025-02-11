import * as React from "react";
import Popover from "@mui/material/Popover";
import { np } from "../../assets/RNepaliCalendar/data";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { calendar_data } from "../../assets/RNepaliCalendar/data";
import "./index.css";
import { useState, useEffect, useCallback } from "react";

import RNepaliCalendar from "../../assets/RNepaliCalendar";
// pass the formatted date too
export default function DatePickerUI({ anchorEl, handleClose, onDateSelect }) {
  // export default function DatePickerUI({ anchorEl, handleClose }) {
  // creating object of RNepaliCalendar
  const nepaliCalendar = new RNepaliCalendar();
  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;

  // getting current Nepali Date
  const currentNepaliDate = nepaliCalendar.getCurrentBS();
  // creating state for year and month
  const [selectedMonth, setSelectedMonth] = useState(+currentNepaliDate.month);
  const [selectedYear, setSelectedYear] = useState(+currentNepaliDate.year);
  const [selectedDay, setSelectedDay] = useState(+currentNepaliDate.date);

  // creating state for whole date
  // const [selectedDate, setSelectedDate] = useState(currentNepaliDate.date);

  // Format the selected date as YYYY/MM/DD
  const formattedSelectedDate = `${selectedYear}/${String(
    selectedMonth
  ).padStart(2, "0")}/${String(selectedDay).padStart(2, "0")}`;

  // // Update parent component with selected date whenever it changes
  useEffect(() => {
    if (onDateSelect) {
      onDateSelect(formattedSelectedDate);
    }
  }, [formattedSelectedDate, onDateSelect]);

  // calculate the initial day of the week for the first day of the month
  const initialDayOfWeek = nepaliCalendar.getInitialNepaliDay(
    selectedYear,
    selectedMonth
  );
  //calculate days of month
  const dateGatey = Array.from(
    { length: nepaliCalendar.getDaysInMonth(selectedYear, selectedMonth) },
    (_, i) => i + 1
  );

  // create an array to pad the days  before first day of the month
  const paddedDateGatey = Array(initialDayOfWeek).fill(null).concat(dateGatey);

  //handling date change
  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };
  //handling month change
  const handleMonthChange = (event) => {
    setSelectedMonth(Number(event.target.value));
  };
  const handleDayChange = (date) => {
    if (!date) return;
    setSelectedDay(+date);
  };

  //handling previous btn
  const handlePreBtn = () => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      // setSelectedYear(selectedYear-1);
      setSelectedYear((sYear) => sYear - 1);
    } else {
      setSelectedMonth((sMonth) => sMonth - 1);
    }
  };

  // handling next btn
  const handleNextBtn = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear((sYear) => sYear + 1);
      setSelectedDay(1);
    } else {
      setSelectedMonth((sMonth) => sMonth + 1);
    }
  };

//  //handle next btn
//  const handleNextBtn = () =>{
//   const newMonth = selectedMonth ===12? 1 : selectedMonth+1;
//   const newYear = selectedMonth ===12? selectedYear+1 : selectedYear;
//     // Ensure we have calendar data for the new month and year
//     if (calendar_data[newYear] && calendar_data[newYear][newMonth - 1]) {
//       setSelectedMonth(newMonth);
//       setSelectedYear(newYear);
//       setSelectedDay(1);  // Reset to first day of the new month
//     } else {
//       console.error(`No calendar data for year ${newYear}, month ${newMonth}`);
//       // Optionally, you could show a user-friendly error message
//     }
//  }

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ mt: 1.5, ml: -25 }}
      >
        <div
          className="date-picker-ui"
          style={{
            width: "350px",
            height: "360px",

            backgroundColor: "#F8F5E9", //cream
          }}
        >
          {/* header section  */}
          <div
            className="date-picker-heading"
            style={{
              display: "flex",
              width: "100%",
              height: "50px",
              textAlign: "center",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#9DC08B", //greenish
            }}
          >
            {/* previous btn  */}
            <Button
              style={{ textAlign: "left", marginLeft: "10px" }}
              onClick={handlePreBtn}
            >
              <KeyboardArrowLeftIcon sx={{ fontSize: 30 }} />
            </Button>

            {/* selecting MONTH  */}
            <select
              name="months"
              id="months"
              style={{
                width: "120px",
                height: "40px",
                textAlign: "center",
                borderRadius: "5px",
                fontSize: "15px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onChange={handleMonthChange}
              value={selectedMonth}
            >
              {np.monthName.full.map((name, index) => {
                return (
                  <React.Fragment key={index}>
                    <option value={index + 1}>{name}</option>
                  </React.Fragment>
                );
              })}
            </select>

            {/* years selection  */}
            <select
              name="years"
              id="years"
              style={{
                width: "120px",
                height: "40px",
                textAlign: "center",
                borderRadius: "5px",
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onChange={handleYearChange}
              value={selectedYear}
            >
              {Object.keys(calendar_data).map((year, index) => {
                return (
                  <React.Fragment key={index}>
                    <option value={year}>{year}</option>
                  </React.Fragment>
                );
              })}
            </select>

            {/* next btn  */}
            <Button
              style={{ textAlign: "right", marginRight: "10px" }}
              onClick={handleNextBtn}
            >
              <KeyboardArrowRightIcon sx={{ fontSize: 30 }} />
            </Button>
          </div>

          {/* body section  */}
          <div className="body">
            {/* days section   BAAR === AAITA SOM MANGAL*/}
            <div
              className="body-header"
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#DF6D14",
                display: "grid",
                gridTemplateColumns: "repeat(7,1fr)",
                alignContent: "center",
                fontWeight: "bold",
                cursor: "default",
              }}
            >
              {np.dayName.short.map((name, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      style={{
                        borderRight: "1px solid #F8F5E9",
                        padding: "5px",
                        textAlign: "center",
                      }}
                    >
                      {name}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            {/* displaying GATEY  */}
            <div
              className="body-body"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7,1fr)",
                alignContent: "center",
              }}
            >
              {/* showing gatey  */}
              {paddedDateGatey.map((date, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      value={date}
                      // className="gatey"
                      className={`gatey ${
                        date === selectedDay ? "selected-day" : ""
                      }`}
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        borderRadius: "50%",
                        height: "25px",
                        width: "25px",
                        cursor: date ? "pointer" : "default",
                      }}
                      onClick={() => handleDayChange(date)}
                    >
                      {date || ""}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
