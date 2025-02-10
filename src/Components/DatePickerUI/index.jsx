import * as React from "react";
import Popover from "@mui/material/Popover";
import { np } from "../../assets/RNepaliCalendar/data";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { calendar_data } from "../../assets/RNepaliCalendar/data";
export default function DatePickerUI({ anchorEl, handleClose }) {
  const open = Boolean(anchorEl);
  const id = open ? "date-picker-popover" : undefined;
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
            <div
              className="body-header"
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#DF6D14",
              }}
            ></div>
          </div>
        </div>
      </Popover>
    </>
  );
}
