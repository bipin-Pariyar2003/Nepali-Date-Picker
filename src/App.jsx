import Home from "./Views/Home/index.jsx";
import "./App.css";
import EngDatePicker from "./Components/EngDatePicker/index.jsx";
import NepDatePicker from "./Components/NepDatePicker/index.jsx";
import RNepaliCalendar from "./assets/RNepaliCalendar/index.js";
import { ad2bsHandler, bs2adHandler } from "./utils/index.js";
import { useState } from "react";
function App() {
  //create obj of RNepaliCalendar
  const nepaliCalendar = new RNepaliCalendar();

  //initialize with current date
  const currentNepaliDate = nepaliCalendar.getCurrentBS();

  const initialNepaliDate = `${currentNepaliDate.year}/${String(
    currentNepaliDate.month
  ).padStart(2, "0")}/${String(currentNepaliDate.date).padStart(2, "0")}`;

  const initialEnglishDate = bs2adHandler(initialNepaliDate);

  //state 
  const [selectedNepaliDate, setSelectedNepaliDate] =
    useState(initialNepaliDate);
  const [selectedEnglishDate, setSelectedEnglishDate] =
    useState(initialEnglishDate);
    console.log("Selected Eng Date: ", selectedEnglishDate);
    console.log("Selected Nepali Date: ", selectedNepaliDate);

  //handling nepali date change
  const handleNepaliDateChange = (date) => {
    setSelectedNepaliDate(date);

    const engDate = bs2adHandler(date);
    setSelectedEnglishDate(engDate);
  };

  //handling eng date change
  const handleEngDateChange = (date) => {
    // if (!date) {
    //   return; // Prevent further processing
    // }
    setSelectedEnglishDate(date);
    const nepDate = ad2bsHandler(date);
    setSelectedNepaliDate(nepDate);
  };
  return (
    <>
      <Home />
      <div style={{ display: "flex", justifyContent: "center", gap: "300px" }}>
        <EngDatePicker
          selectedDate={selectedEnglishDate}
          onChange={handleEngDateChange}
        />
        <NepDatePicker
          selectedDate={selectedNepaliDate}
          onChange={handleNepaliDateChange}
        />
      </div>
    </>
  );
}

export default App;
