import React, { useState } from "react";
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
        <label htmlFor="date">
          <hr
            style={{ border: "1px solid black", marginTop: "15px", marginBottom: "15px" }}
          />
          <Typography
            variant="h5"
            sx={{
              marginTop: "15px",
              fontSize: { xs: "0.8rem", md: "1.5rem" },
              fontWeight: "bold",
            }}
          >
            {selectedDate} &nbsp; A.D.
          </Typography>{" "}
        </label>
        <br />
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            onChange={handleDateChange}
            format={"YYYY/MM/DD"}
            value={moment(selectedDate, "YYYY/MM/DD")}
            sx={{
              width: {
                xs: "245px",
              },
              height: {
                xs: "50px",
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default EngDatePicker;

////////////////////////// 2nd way //////////////////////////
// import React from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// import moment from "moment";
// import { Typography, TextField, InputAdornment } from "@mui/material";
// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// const EngDatePicker = ({ selectedDate, onChange }) => {
//   const handleDateChange = (date) => {
//     // convert moment obj to YYYY/MM/DD format
//     const formattedDate = date.format("YYYY/MM/DD");
//     onChange(formattedDate);
//   };

//   return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         <label htmlFor="date">
//           <hr
//             style={{ border: "1px solid black", marginTop: "15px", marginBottom: "15px" }}
//           />
//           <Typography variant="h5" sx={{ marginTop: "15px" }}>
//             {selectedDate} &nbsp; A.D.
//           </Typography>
//         </label>
//         <br />
//         <LocalizationProvider dateAdapter={AdapterMoment}>
//           <DatePicker
//             onChange={handleDateChange}
//             format={"YYYY/MM/DD"}
//             value={moment(selectedDate, "YYYY/MM/DD")}
//             slots={{
//               textField: (params) => (
//                 <TextField
//                   {...params}
//                   sx={{
//                     width: {
//                       xs: "245px", // Width for extra small screens (e.g., mobile devices)
//                       sm: "auto", // Width for small and larger screens
//                     },
//                   }}
//                   InputAdornmentProps={{
//                     position: "end",
//                   }}
//                   slotProps={{
//                     input: {
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <CalendarTodayIcon />
//                         </InputAdornment>
//                       ),
//                     },
//                   }}
//                 />
//               ),
//             }}
//           />
//         </LocalizationProvider>
//       </div>
//     </>
//   );
// };

// export default EngDatePicker;
