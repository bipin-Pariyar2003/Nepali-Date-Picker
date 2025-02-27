import { useState } from "react";
import moment from "moment";

import NepDatePicker from "Components/NepDatePicker";
import { ad2bsHandler, bs2adHandler } from "utils";

import BsView from "Views/BsView";
import AdView from "Views/AdView";

import EngDatePicker from "Components/EngDatePicker";
import { Stack } from "@mui/material";

function Home() {
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
    <Stack
      sx={{
        height: "100svh",
      }}
    >
      <div className="heading">
        <h2>Nepali Date Converter (B.S - A.D) </h2>
      </div>
      <Stack direction="row" gap={2} pl={4} sx={{ overflow: "hidden" }}>
        <Stack overflow={{ xs: "auto", md: "hidden" }}>
          <h2
            style={{
              textDecoration: "underline",
              backgroundColor: "#786F99",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          >
            Select date in B.S.
          </h2>
          <BsView selectedDate={selectedNepaliDate} onChange={handleNepaliDateChange} />
        </Stack>

        <div
          style={{
            width: "min-content",
            // height: "min-content",
            minHeight: "350px",
            // maxHeight: "450px",
            minWidth: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            // border: "1px solid rgba(0, 0, 0, 0.4)",
            // borderRadius: "10px",
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
        <Stack overflow={{ xs: "auto", md: "hidden" }}>
          <h2
            style={{
              textDecoration: "underline",
              backgroundColor: "#786F99",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          >
            Select Date in A.D.
          </h2>
          <AdView selectedDate={selectedEnglishDate} onChange={handleEngDateChange} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
