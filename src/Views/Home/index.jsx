import { useState } from "react";
import moment from "moment";

import NepDatePicker from "Components/NepDatePicker";
import { ad2bsHandler, bs2adHandler } from "utils";

import BsView from "Views/BsView";
import AdView from "Views/AdView";

import EngDatePicker from "Components/EngDatePicker";
import { Box, Stack, Typography } from "@mui/material";
import ResetBtn from "Views/ResetBtn";

function Home() {
  const initialEnglishDate = moment().format("YYYY/MM/DD");
  const initialNepaliDate = ad2bsHandler(initialEnglishDate);

  // State
  const [selectedNepaliDate, setSelectedNepaliDate] = useState(initialNepaliDate);
  const [selectedEnglishDate, setSelectedEnglishDate] = useState(initialEnglishDate);

  // Handling Nepali date change
  const handleNepaliDateChange = (date) => {
    setSelectedNepaliDate(date);
    const engDate = bs2adHandler(date);
    setSelectedEnglishDate(engDate);
  };

  // Handling English date change
  const handleEngDateChange = (date) => {
    setSelectedEnglishDate(date);
    const nepDate = ad2bsHandler(date);
    setSelectedNepaliDate(nepDate);
  };

  return (
    <Stack
      sx={{
        height: { xs: "100svh", md: "100svh" },
        gap: { xs: 0, md: 2 },
      }}
    >
      {/* Heading */}
      <Box
        className="heading"
        sx={{ height: { xs: "30px", md: "50px" }, textAlign: "center" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" },
            fontWeight: "bold",
          }}
        >
          Nepali Date Converter (B.S - A.D)
        </Typography>
      </Box>

      {/* Main Container */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 2 }}
        sx={{
          overflow: "hidden",
          width: "100%",
          display: "flex",
          flex: 1,
        }}
      >
        {/* B.S View */}
        <Stack
          sx={{
            width: "100%",
            gap: { xs: 0, md: 2 },
            border: "1px solid black",
            flex: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              textDecoration: { xs: "none", md: "underline" },
              padding: "6px",
              fontSize: { xs: "1rem", md: "1.5rem" },
              height: { xs: "30px", md: "40px" },
            }}
          >
            Select date in B.S.
          </Typography>
          <BsView selectedDate={selectedNepaliDate} onChange={handleNepaliDateChange} />
        </Stack>

        {/* Date Pickers */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "10px", md: "20px" },
            padding: { xs: "0px", md: "20px" },
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: { xs: "100%", md: "350px" }, // Mobile: Full width, Desktop: Fixed width
            margin: "0 auto",
          }}
        >
          <NepDatePicker
            selectedDate={selectedNepaliDate}
            onChange={handleNepaliDateChange}
            sx={{ width: { xs: "80%", sm: "100%" } }} // Mobile: 80%, Desktop: 100%
          />
          <EngDatePicker
            sx={{ height: "min-content", width: { xs: "80%", sm: "100%" } }} // Mobile: 80%, Desktop: 100%
            selectedDate={selectedEnglishDate}
            onChange={handleEngDateChange}
          />
          <ResetBtn
            setSelectedEnglishDate={setSelectedEnglishDate}
            onChange={handleEngDateChange}
          />
        </Box>

        {/* A.D View */}
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            gap: { xs: 0, md: 2 },
            border: "1px solid black",
            flex: 1,
            display: "flex",
            justifyContent: { xs: "flex-end" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              padding: "6px",
              textDecoration: { xs: "none", md: "underline" },
              fontSize: { xs: "1rem", md: "1.5rem" },
              height: { xs: "30px", md: "40px" },
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
