import * as React from "react";
import Popover from "@mui/material/Popover";
import { np } from "../../assets/RNepaliCalendar/data";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { calendar_data } from "../../assets/RNepaliCalendar/data";
import "./index.css";
export default function DatePickerUI({ anchorEl, handleClose }) {
  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;
  // creating static date for layout
  const dateGatey = Array.from({ length: 30 }, (_, i) => i + 1);
  // let [selectedMonth, setSelectedMonth] = React.useState("");

  // //handling pre btn

  // const handlePreBtn = () => {

  //   setSelectedMonth(selectedMonth--);
  // };
  //handling next btn
  // const handleNextBtn = () => {
  //   setSelectedMonth(selectedMonth++);
  // };
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
            >
              {np.monthName.full.map((name, index) => {
                return (
                  <React.Fragment key={index}>
                    <option>{name}</option>
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
            >
              {Object.keys(calendar_data).map((year, index) => {
                return (
                  <React.Fragment key={index}>
                    <option value="">{year}</option>
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
                        cursor: "default",
                        height: "25px",
                        width: "25px",
                        cursor: "pointer",
                        fontSize: "1.1rem",
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
