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
  const [selectedNepaliDate, setSelectedNepaliDate] = useState(initialNepaliDate);
  const [selectedEnglishDate, setSelectedEnglishDate] = useState(initialEnglishDate);

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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Ensures left, center, and right alignment
          padding: "0 20px",
          gap: "40px",
        }}
      >
        {/* Left Side (BsView) */}
        <div
          style={{
            display: "flex",
            flex: 1,
            gap: "50px",
            width: "100%",
            justifyContent: "center",
            position: "relative",
            paddingTop: "60px",
          }}
        >
          <h2 style={{ position: "absolute", top: 0, textDecoration: "underline" }}>
            Select date in B.S.
          </h2>
          <BsView selectedDate={selectedNepaliDate} onChange={handleNepaliDateChange} />
        </div>

        {/* Centered (DatePickers) */}
        <div
          style={{
            // margin: "60px",
            // marginTop: "60px",
            width: "min-content", // Set explicit width for more space
            minWidth: "350px", // Ensure it doesn't get too small
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            borderRadius: "10px",
            padding: "20px",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <NepDatePicker
            selectedDate={selectedNepaliDate}
            onChange={handleNepaliDateChange}
          />
          <EngDatePicker
            selectedDate={selectedEnglishDate}
            onChange={handleEngDateChange}
          />
        </div>

        {/* Right Side (AdView) */}
        <div
          style={{
            display: "flex",
            flex: 1,
            gap: "50px",
            width: "100%",
            justifyContent: "center",
            position: "relative",
            paddingTop: "60px",
          }}
        >
          <h2 style={{ position: "absolute", top: 0, textDecoration: "underline" }}>
            Select Date in A.D.
          </h2>
          <AdView selectedDate={selectedEnglishDate} onChange={handleEngDateChange} />
        </div>
      </div>
    </>
  );
}

export default App;
