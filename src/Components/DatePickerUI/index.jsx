import * as React from "react";
import Popover from "@mui/material/Popover";
import { np } from "~assets/RNepaliCalendar/data";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { calendar_data } from "~assets/RNepaliCalendar/data";
import "./index.css";
import { getCurrentBS, toNepaliNumber } from "~assets/RNepaliCalendar";
import RNepaliCalendar from "~assets/RNepaliCalendar";
import { useEffect } from "react";

// pass the formatted date too
export default function DatePickerUI({
  anchorEl,
  handleClose,
  onDateSelect,
  selectedDate,
}) {
  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;

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
        sx={{ mt: 1.5, ml: -25.5 }}
      >
        <PopUp
          selectedDate={selectedDate}
          onDateSelect={onDateSelect}
          handleClose={handleClose}
        />
      </Popover>
    </>
  );
}

const PopUp = ({ selectedDate, onDateSelect, handleClose }) => {
  const nepaliCalendar = new RNepaliCalendar();

  const [viewDate, setViewDate] = React.useState({
    year: selectedDate.split("/").at(0),
    month: selectedDate.split("/").at(1),
  });
  // Update viewDate when selectedDate changes
  useEffect(() => {
    setViewDate({
      year: selectedDate.split("/").at(0),
      month: selectedDate.split("/").at(1),
    });
  }, [selectedDate]);

  const { year, month, date } = getCurrentBS();

  const initialDayOfWeek = nepaliCalendar.getInitialNepaliDay(
    viewDate.year,
    viewDate.month
  );
  //calculate days of month
  const dateGatey = Array.from(
    { length: nepaliCalendar.getDaysInMonth(viewDate.year, viewDate.month) },
    (_, i) => i + 1
  );

  // create an array to pad the days  before first day of the month
  const paddedDateGatey = Array(initialDayOfWeek).fill(null).concat(dateGatey);

  //handling date change
  const handleYearChange = (event) => {
    setViewDate({ ...viewDate, year: event.target.value });
  };
  //handling month change
  const handleMonthChange = (event) => {
    setViewDate({ ...viewDate, month: event.target.value });
  };
  const handleDayChange = (date) => {
    if (!date) return;
    onDateSelect(
      `${viewDate.year}/${String(viewDate.month).padStart(2, 0)}/${String(
        date
      ).padStart(2, 0)}`
    );
    handleClose();
  };

  //handling previous btn
  const handlePreBtn = () => {
    if (+viewDate.month === 1) {
      setViewDate({ ...viewDate, year: +viewDate.year - 1, month: 12 });
    } else {
      setViewDate({ ...viewDate, month: +viewDate.month - 1 });
    }
  };

  // handling next btn
  const handleNextBtn = () => {
    if (+viewDate.month === 12) {
      setViewDate({ ...viewDate, year: +viewDate.year + 1, month: 1 });
    } else {
      setViewDate({ ...viewDate, month: +viewDate.month + 1 });
    }
  };

  const isSelected = (date) => {
    return (
      selectedDate ===
      `${viewDate.year}/${viewDate.month}/${String(date).padStart(2, 0)}`
    );
  };

  const isToday = (gatay) => {
    return (
      `${year}/${month}/${date}` ===
      `${viewDate.year}/${viewDate.month}/${String(gatay).padStart(2, 0)}`
    );
  };

  return (
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
          style={{
            textAlign: "left",
            marginLeft: "10px",
            marginRight: "10px",
          }}
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
          value={+viewDate.month}
        >
          {np.monthName.full.map((name, index) => {
            return (
              <React.Fragment key={index}>
                <option value={index + 1}>{name}</option> // Month values should
                be 1-12
              </React.Fragment>
            );
          })}
        </select>

        {/* years selection  */}
        <select
          className="years-select"
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
          value={viewDate.year}
        >
          {Object.keys(calendar_data).map((year, index) => {
            const nepaliYear = toNepaliNumber(year);
            return (
              <React.Fragment key={index}>
                <option value={year}>{nepaliYear}</option>
              </React.Fragment>
            );
          })}
        </select>

        {/* next btn  */}
        <Button
          style={{
            textAlign: "right",
            marginRight: "10px",
            marginLeft: "10px",
          }}
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
                  className={`gatey ${isSelected(date) ? "selected-day" : ""} ${
                    isToday(date) ? "today" : ""
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
                  {toNepaliNumber(date)}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
