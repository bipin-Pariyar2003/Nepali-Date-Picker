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
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 2 }}
        sx={{ overflow: "hidden" }}
      >
        {/* bs view  */}
        <Stack overflow={{ xs: "auto", md: "hidden" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              textDecoration: "underline",
              backgroundColor: "#786F99",
              paddingTop: "6px",
              paddingBottom: "6px",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            Select date in B.S.
          </Typography>
          <BsView selectedDate={selectedNepaliDate} onChange={handleNepaliDateChange} />
        </Stack>

        {/* date pickers  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { sx: 0, md: "20px" },
            padding: { xs: "0px", md: "20px" },
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: "min-content",
            minWidth: { sx: "100px", md: "350px" },
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
        </Box>

        {/* AD view  */}
        <Stack overflow={{ xs: "auto", md: "hidden" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              textDecoration: "underline",
              backgroundColor: "#786F99",
              paddingTop: "6px",
              paddingBottom: "6px",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            Select Date in A.D.
          </Typography>
          <AdView selectedDate={selectedEnglishDate} onChange={handleEngDateChange} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
