import moment from "moment";

import { useSelector } from "react-redux";
import NepDatePicker from "Components/NepDatePicker";

import BsView from "Components/BsView";
import AdView from "Components/AdView";

import EngDatePicker from "Components/EngDatePicker";
import { Box, Stack, Typography } from "@mui/material";
import ResetBtn from "Components/ResetBtn";

function Home() {
  //for conditional rendering of reset btn
  const selectedEnglishDate = useSelector((state) => state.date.englishDate);

  return (
    <Stack
      sx={{
        height: { md: "100svh" },
        minHeight: { xs: "100svh", md: "100svh" },
        overflow: "auto",
        gap: { xs: 0, md: 2 },
      }}
    >
      <Box
        className="heading"
        sx={{
          height: { xs: "30px", md: "50px" },
          textAlign: "center",
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

      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 2 }}
        sx={{
          overflow: "hidden",
          width: "100%",
          flex: 1,
          // alighItems: { xs: "space-between", md: "center" },
        }}
      >
        {/* B.S View */}
        <Stack
          sx={{
            gap: { xs: 2, md: 2 },
            flex: 1,
            justifyContent: { xs: "center" },
            m: { xs: 1, md: 2 },
            mt: { xs: 0, md: 0 },
          }}
        >
          <BsView />
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-start", md: "center" },
            flex: 1,
            width: { xs: "100%", md: "350px" },
            margin: "0 auto",
            position: "relative",
            height: "100%",
            mt: { xs: "0px", md: "0px" }, // Move date picker up on mobile (adjust the value as needed)
          }}
        >
          {/* Stack to center Date Pickers */}
          <Stack
            spacing={2}
            alignItems="center"
            sx={{
              height: "auto",
              justifyContent: { md: "center" },
              position: "relative",
            }}
          >
            <NepDatePicker sx={{ width: { xs: "80%", sm: "100%" } }} />
            <EngDatePicker
              sx={{ height: "min-content", width: { xs: "80%", sm: "100%" } }}
            />
          </Stack>

          {/* Reset Button positioned absolutely at the bottom */}
          {selectedEnglishDate !== moment().format("YYYY/MM/DD") && (
            <Box
              sx={{
                position: { xs: "static", md: "absolute" },
                bottom: { xs: 0, md: "80px" },
                width: "100%",
                textAlign: "center",
              }}
            >
              <ResetBtn />
            </Box>
          )}
        </Box>

        {/* A.D View */}
        <Stack
          sx={{
            gap: { xs: 2, md: 2 },
            flex: 1,
            justifyContent: { xs: "center" },
            m: { xs: 1, md: 2 },
            mt: { xs: 0, md: 0 },
          }}
        >
          <AdView />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Home;
