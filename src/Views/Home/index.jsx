import { useState } from "react";
import moment from "moment";
import { useMediaQuery } from "@mui/material"; // Import useMediaQuery
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
        height: { xs: "100%", md: "100svh" },
        gap: { xs: 0, md: 2 },
      }}
    >
      {/* Heading */}
      <Box
        className="heading"
        sx={{
          height: { xs: "30px", md: "50px" },
          textAlign: "center",
          // mb: { xs: 1, md: 0 },
        }}
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
        gap={{ xs: 8, md: 2 }}
        sx={{
          overflow: "hidden",
          width: "100%",
          flex: 1,
        }}
      >
        {/* B.S View */}
        <Stack
          sx={{
            gap: { xs: 0, md: 2 },
            // border: "1px solid black",
            flex: 1,
            m: { xs: 1, md: 2 },
            mt: { xs: 1, md: 0 },
          }}
        >
          <BsView selectedDate={selectedNepaliDate} onChange={handleNepaliDateChange} />
        </Stack>

        {/* Date Pickers */}

        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "10px", md: "20px" },
            padding: { xs: "0px", md: "20px" },
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: { xs: "100%", md: "350px" },
            margin: "0 auto",
          }}
        >
          <NepDatePicker
            selectedDate={selectedNepaliDate}
            onChange={handleNepaliDateChange}
            sx={{ width: { xs: "80%", sm: "100%" } }}
          />
          <EngDatePicker
            sx={{ height: "min-content", width: { xs: "80%", sm: "100%" } }}
            selectedDate={selectedEnglishDate}
            onChange={handleEngDateChange}
          />
          <Box sx={{ flexGrow: 1 }} />

          {selectedEnglishDate !== initialEnglishDate && (
            <ResetBtn
              setSelectedEnglishDate={setSelectedEnglishDate}
              onChange={handleEngDateChange}
            />
          )}
        </Box> */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", // Keeps everything centered
            flex: 1,
            width: { xs: "100%", md: "350px" },
            margin: "0 auto",
            position: "relative", // Make this a relative container for positioning elements
            height: "100%", // Ensure full height is available to center content
          }}
        >
          {/* Stack to center Date Pickers */}
          <Stack
            spacing={2}
            alignItems="center"
            sx={{
              height: "auto", // Ensures height is based on content, no stretching
              justifyContent: "center", // Keeps date pickers centered
              position: "relative", // Relative positioning of content inside
            }}
          >
            <NepDatePicker
              selectedDate={selectedNepaliDate}
              onChange={handleNepaliDateChange}
              sx={{ width: { xs: "80%", sm: "100%" } }}
            />
            <EngDatePicker
              sx={{ height: "min-content", width: { xs: "80%", sm: "100%" } }}
              selectedDate={selectedEnglishDate}
              onChange={handleEngDateChange}
            />
          </Stack>

          {/* Reset Button positioned absolutely at the bottom */}
          {selectedEnglishDate !== initialEnglishDate && (
            <Box
              sx={{
                position: "absolute", // Position the reset button at the bottom
                bottom: "80px",
                width: "100%",
                textAlign: "center",
                paddingBottom: "16px", // Add some padding for spacing
              }}
            >
              <ResetBtn
                setSelectedEnglishDate={setSelectedEnglishDate}
                onChange={handleEngDateChange}
              />
            </Box>
          )}
        </Box>

        {/* A.D View */}
        <Stack
          sx={{
            gap: { xs: 0, md: 2 },
            flex: 1,
            m: { xs: 1, md: 2 },
            mt: { xs: 0, md: 0 },
          }}
        >
          <AdView selectedDate={selectedEnglishDate} onChange={handleEngDateChange} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
