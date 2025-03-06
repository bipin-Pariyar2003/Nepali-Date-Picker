import React, { useEffect, useRef, useState } from "react";
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
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Function to handle window resizing
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add the resize event listener to track screen size changes
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      // Scroll to the selected element when the viewDate changes or the screen size changes
      ref.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [viewDate, windowSize]); // Trigger scroll when viewDate or windowSize changes

  return (
    <Stack
      style={{
        flexDirection: { xs: "row", md: "row" },
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
          textAlign: "center",
          position: "sticky",
          left: 0,
          top: 0,
          backgroundColor: "#ffffff",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          padding: { xs: "2px", md: "10px 20px" },
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
              ref={isSelected ? ref : null} // Attach ref to selected item
              className={`${isCurrent ? "today" : "box1"} ${
                isSelected ? "selected" : ""
              } box1`}
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
