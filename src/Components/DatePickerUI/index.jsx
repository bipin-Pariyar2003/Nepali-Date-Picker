import * as React from "react";
import Popover from "@mui/material/Popover";
import { np } from "../../assets/RNepaliCalendar/data";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { calendar_data } from "../../assets/RNepaliCalendar/data";
import "./index.css";
import { useState } from "react";
// import getDaysInMonth from "../../assets/RNepaliCalendar/index";
import RNepaliCalendar from "../../assets/RNepaliCalendar";

export default function DatePickerUI({ anchorEl, handleClose }) {
  // creating object of RNepaliCalendar
  const nepaliCalendar = new RNepaliCalendar();
  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;

  //creating state for year and month
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  // creating static date for layout
  // const dateGatey = Array.from({ length: 30 }, (_, i) => i + 1);
  //calculate days of month
  console.log("selected month: ", selectedMonth);
  console.log("selected year: ", selectedYear);

  const dateGatey = Array.from(
    { length: nepaliCalendar.getDaysInMonth(selectedYear, selectedMonth) },
    (_, i) => i + 1
  );

  //handling date change
  const handleYearChange = (event) => {
    setSelectedYear(Number(event.target.value));
  };
  //handling month change
  const handleMonthChange = (event) => {
    setSelectedMonth(Number(event.target.value));
  };
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
            height: "350px",

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
              // onClick={handlePreBtn}
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
              // onClick={handleNextBtn}
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
              {/* loop to show 30 gateys static  */}
              {dateGatey.map((date, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      className="gatey"
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        borderRadius: "50%",

                        height: "25px",
                        width: "25px",
                        cursor: "pointer",
                      }}
                    >
                      {date}
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
