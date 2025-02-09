import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
const EngDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState("2024/12/16");
  const handleDateChange = (event)=>{
    setSelectedDate(event.target.value);
  }
  return (
    <>
    <div style={{ textAlign: "center" }}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker 
        onChange={handleDateChange}
        format={"YYYY/MM/DD"}
        value={moment(selectedDate, "YYYY/MM/DD")}
        />
      </LocalizationProvider>
    </div>
    
    </>
    
  );
};

export default EngDatePicker;
