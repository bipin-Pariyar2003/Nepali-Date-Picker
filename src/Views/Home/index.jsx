import { useState } from "react";
import moment from "moment";

import NepDatePicker from "Components/NepDatePicker";
import { ad2bsHandler, bs2adHandler } from "utils";

import BsView from "Views/BsView";
import AdView from "Views/AdView";

import EngDatePicker from "Components/EngDatePicker";
import { Box, Stack, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";

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
        height: { xs: "100%", md: "100svh" },
      }}
    >
      <Box className="heading" sx={{ height: { xs: "20px", md: "50px" } }}>
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", md: "1.5rem" },
            fontWeight: "bold",
          }}
        >
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
              fontWeight: { xs: "bolder", md: "bold" },
              textAlign: "center",
              textDecoration: { xs: "none", md: "underline" },
              padding: { xs: "0px", md: "6px" },
              backgroundColor: "#786F99",
              fontSize: { xs: "0.8rem", md: "1.5rem" },
              height: { xs: "20px", md: "40px" },
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
            margin: { xs: "0 auto", md: "0" }, // Center in mobile view only
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
              fontWeight: { xs: "bolder", md: "bold" },
              textAlign: "center",
              padding: { xs: "0px", md: "6px" },
              textDecoration: { xs: "none", md: "underline" },
              backgroundColor: "#786F99",
              fontSize: { xs: "0.8rem", md: "1.5rem" },
              height: { xs: "20px", md: "40px" },
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
