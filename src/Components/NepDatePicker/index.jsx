// import React, { useState, useRef } from "react";
// import { Button, TextField, Typography } from "@mui/material";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import DatePickerUI from "Components/DatePickerUI";
// import styles from "./styles";
// import { toNepaliNumber } from "assets/RNepaliCalendar";

// const NepDatePicker = ({ selectedDate, onChange }) => {
//   const inputRef = useRef(selectedDate);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const formattedNepaliDate = (date) => {
//     return (
//       toNepaliNumber(date.split("/").at(0)) +
//       "/" +
//       toNepaliNumber(date.split("/").at(1)) +
//       "/" +
//       toNepaliNumber(date.split("/").at(2))
//     );
//   };

//   const handleShowDatePicker = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   React.useEffect(() => {
//     if (inputRef && inputRef.current) inputRef.current.value = selectedDate;
//   }, [selectedDate]);

//   const handleInputChange = (e) => {
//     let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

//     if (value.length > 8) value = value.slice(0, 8); // Limit to YYYYMMDD format

//     let formattedValue = value.replace(/^(\d{4})(\d{0,2})(\d{0,2})$/, (_, y, m, d) => {
//       return [y, m, d].filter(Boolean).join("/");
//     });

//     e.target.value = formattedValue; // Update input field

//     // Check if input matches YYYY/MM/DD format and trigger handleChange
//     if (/^\d{4}\/\d{2}\/\d{2}$/.test(formattedValue)) {
//       onChange(formattedValue);
//     }
//   };

//   return (
//     <div className="nepali-date-picker">
//       <label>
//         <Typography
//           variant="h5"
//           sx={{
//             textAlign: "center",
//             marginTop: "15px",
//             marginBottom: "15px",
//             fontSize: { xs: "0.8rem", md: "1.5rem" },
//             fontWeight: "bold",
//           }}
//         >
//           बि .सं. &nbsp; {formattedNepaliDate(selectedDate)}
//         </Typography>
//       </label>

//       <div style={styles.box}>
//         <input
//           type="text"
//           onInput={handleInputChange}
//           placeholder="YYYY/MM/DD"
//           style={styles.input}
//           // onFocus={(e) =>
//           //   (e.target.style = { ...styles.input, ...styles.inputFocusActive })
//           // }
//           // onBlur={(e) => (e.target.style = styles.input)}
//           ref={inputRef}
//         />
//         {/* <Button
//           onClick={handleShowDatePicker}
//           sx={{
//             height: "30px",
//             width: "30px",
//             borderRadius: "50%",
//             border: "none",
//             outline: "none",
//             "&:hover": {
//               backgroundColor: "rgba(0, 0, 0, 0.1)", // Light grey hover effect
//               borderRadius: "50%", // Ensures rounded effect on hover
//             },
//             "&:focus": {
//               outline: "none",
//               border: "none",
//               boxShadow: "none",
//             },
//             "&:active": {
//               outline: "none",
//               border: "none",
//               boxShadow: "none",
//             },
//           }}
//         >
//           <CalendarMonthIcon sx={{ height: "20px", width: "20px" }} />
//         </Button> */}

//         <Button
//           onClick={handleShowDatePicker}
//           sx={{
//             height: "30px",
//             width: "30px",
//             minWidth: "30px", // Ensures button width does not stretch
//             borderRadius: "50%",
//             border: "none",
//             outline: "none",
//             display: "flex", // Ensures content is centered
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "20px",
//             // Adds space between input and button
//             "&:hover": {
//               borderRadius: "50%", // Ensures rounded effect on hover
//             },
//             "&:focus": {
//               outline: "none",
//               border: "none",
//               boxShadow: "none",
//             },
//             "&:active": {
//               outline: "none",
//               border: "none",
//               boxShadow: "none",
//             },
//           }}
//         >
//           <CalendarMonthIcon sx={{ height: "25px", width: "25px" }} />
//         </Button>
//       </div>

//       <DatePickerUI
//         anchorEl={anchorEl}
//         handleClose={handleClose}
//         onDateSelect={onChange}
//         selectedDate={selectedDate}
//       />
//     </div>
//   );
// };

// export default NepDatePicker;

import React, { useState, useRef } from "react";
import { Button, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
            marginTop: "15px",
            marginBottom: "15px",
            fontSize: { xs: "0.8rem", md: "1.5rem" },
            fontWeight: "bold",
          }}
        >
          बि .सं. &nbsp; {formattedNepaliDate(selectedDate)}
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

        <Button onClick={handleShowDatePicker} className="button">
          <CalendarMonthIcon sx={{ height: "25px", width: "25px" }} />
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
