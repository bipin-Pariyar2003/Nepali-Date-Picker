import React from "react";

import "./index.css";

const DisplayList = ({ handleClick, title, options, isToday, isSelectedValue }) => {
  return (
    <div style={{ overflow: "auto", position: "relative" }}>
      <h3
        style={{
          textDecoration: "underline",
          textAlign: "center",
          position: "sticky",
          top: 0,
          backgroundColor: "rgb(240, 240, 240)",
        }}
      >
        {title}
      </h3>
      <div style={{ padding: "10px 20px" }}>
        {options.map((display, index) => {
          return (
            <React.Fragment key={index}>
              <div>
                <button
                  className={`${isToday({ display, index }) ? "today" : ""} ${
                    isSelectedValue({ display, index }) ? "selected" : ""
                  } box`}
                  onClick={() => handleClick(display, index)}
                >
                  {display}
                </button>
              </div>
              <br />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayList;
