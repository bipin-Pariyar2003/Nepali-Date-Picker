import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { Box, Stack } from "@mui/material";

const DisplayList = ({ handleClick, options, isToday, isSelectedValue, viewDate }) => {
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
      <Box
        sx={{
          padding: { xs: "2px", md: "10px 20px" },
          gap: { xs: 0.5, md: 1 },
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        {/* Extra empty space for centering first elements */}
        <Box sx={{ height: { xs: "0", md: "200px" } }}></Box>
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
        {/* Extra empty space for centering last elements */}
        <Box sx={{ height: { xs: "0px", md: "200px" } }}></Box>
      </Box>
    </Stack>
  );
};

export default DisplayList;
