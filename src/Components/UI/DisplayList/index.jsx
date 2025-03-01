import React, { useEffect, useRef } from "react";

import "./index.css";
import { Box, Stack, Typography } from "@mui/material";

const DisplayList = ({
  handleClick,
  title,
  options,
  isToday,
  isSelectedValue,
  viewDate,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [viewDate]);

  return (
    <Stack
      style={{
        flexDirection: { xs: "column", md: "row" },
        overflow: "auto",
        position: "relative",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          fontSize: { xs: "0.5rem", md: "1.2rem" },
          textDecoration: "underline",
          textAlign: "center",
          position: "sticky",
          left: 0,
          top: 0,
          backgroundColor: "#938BAE",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          padding: "10px 20px",
          gap: 1,
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        {options.map((option, index) => {
          const isCurrent = isToday({ display: option.value, index });
          const isSelected = isSelectedValue({ display: option.value, index });

          return (
            <button
              key={option.value}
              style={{
                marginBottom: "5px",
              }}
              ref={isSelected ? ref : null}
              className={`${isCurrent ? "today" : ""} ${
                isSelected ? "selected" : ""
              } box`}
              onClick={() => handleClick(option.value, index)}
            >
              {option.display}
            </button>
          );
        })}
      </Box>
    </Stack>
  );
};

export default DisplayList;
