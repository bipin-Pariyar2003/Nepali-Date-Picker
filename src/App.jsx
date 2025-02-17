import { useState } from "react";
import moment from "moment";

import Home from "Views/Home/index.jsx";
import NepDatePicker from "Components/NepDatePicker";
import { ad2bsHandler, bs2adHandler } from "utils";

import BsView from "Views/BsView";
import AdView from "Views/AdView";

import "./App.css";
import EngDatePicker from "./Components/EngDatePicker";

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
      {/* <div
        style={{
          margin: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: "1px solid rgba(0, 0, 0, 0.4)",
          borderRadius: "10px",
          padding: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EngDatePicker
          selectedDate={selectedEnglishDate}
          onChange={handleEngDateChange}
        />
        <NepDatePicker
          selectedDate={selectedNepaliDate}
          onChange={handleNepaliDateChange}
        />
      </div> */}

      {/* <BsView />
      <AdView /> */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Ensures left, center, and right alignment
          padding: "20px",
        }}
      >
        {/* Left Side (BsView) */}
        <div
          style={{ flex: "1", display: "flex", justifyContent: "flex-start" }}
        >
          <BsView />
        </div>

        {/* Centered (DatePickers) */}
        <div
          style={{
            margin: "60px",
            width: "40%", // Set explicit width for more space
            minWidth: "350px", // Ensure it doesn't get too small
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            borderRadius: "10px",
            padding: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EngDatePicker
            selectedDate={selectedEnglishDate}
            onChange={handleEngDateChange}
          />
          <NepDatePicker
            selectedDate={selectedNepaliDate}
            onChange={handleNepaliDateChange}
          />
        </div>

        {/* Right Side (AdView) */}
        <div style={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <AdView />
        </div>
      </div>
    </>
  );
}

export default App;
