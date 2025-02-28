import { useState } from "react";
import moment from "moment";

import NepDatePicker from "Components/NepDatePicker";
import { ad2bsHandler, bs2adHandler } from "utils";

import BsView from "Views/BsView";
import AdView from "Views/AdView";

import EngDatePicker from "Components/EngDatePicker";
import { Box, Stack, Typography } from "@mui/material";

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
      <Box className="heading" sx={{ fontSize: { xs: "0.5rem" } }}>
        <Typography sx={{ fontSize: { sm: "0.5rem", md: "1.5rem" }, fontWeight: "bold" }}>
          Nepali Date Converter (B.S - A.D){" "}
        </Typography>
      </Box>
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

        <Box
          style={{
            width: "min-content",
            minWidth: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
          sx={{ minWidth: { sx: "100px", md: "350px" } }}
        >
          <NepDatePicker
            selectedDate={selectedNepaliDate}
            onChange={handleNepaliDateChange}
          />
          <EngDatePicker
            selectedDate={selectedEnglishDate}
            onChange={handleEngDateChange}
          />
        </Box>
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
