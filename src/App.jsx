import { useState } from "react";
import moment from "moment";

import Home from "~Views/Home/index.jsx";
import EngDatePicker from "~Components/EngDatePicker/index.jsx";
import NepDatePicker from "~Components/NepDatePicker/index.jsx";
import { ad2bsHandler, bs2adHandler } from "~utils/index.js";

import "./App.css";

function App() {
  const initialEnglishDate = moment().format("YYYY/MM/DD");

  const initialNepaliDate = ad2bsHandler(initialEnglishDate);

  //state
  const [selectedNepaliDate, setSelectedNepaliDate] =
    useState(initialNepaliDate);
  const [selectedEnglishDate, setSelectedEnglishDate] =
    useState(initialEnglishDate);

  //handling nepali date change
  const handleNepaliDateChange = (date) => {
    setSelectedNepaliDate(date);
    const engDate = bs2adHandler(date);
    setSelectedEnglishDate(engDate);
  };

  //handling eng date change
  const handleEngDateChange = (date) => {
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
