import * as React from "react";
import Popover from "@mui/material/Popover";
import { np } from "../../assets/RNepaliCalendar/data";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
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
              style={{ textAlign: "left", marginLeft: "20px" }}
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

            {/* next btn  */}
            <Button
              style={{ textAlign: "right", marginRight: "20px" }}
              // onClick={handleNextBtn}
            >
              <KeyboardArrowRightIcon sx={{ fontSize: 30 }} />
            </Button>
          </div>

          {/* body section  */}
          <div className="body"></div>
        </div>
      </Popover>
    </>
  );
}
