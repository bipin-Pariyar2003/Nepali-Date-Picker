import React, { useEffect, useRef } from "react";

import "./index.css";

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
        {options.map((option, index) => {
          const isCurrent = isToday({ display: option.value, index });
          const isSelected = isSelectedValue({ display: option.value, index });

          return (
            <React.Fragment key={index}>
              <div>
                <button
                  ref={isSelected ? ref : null}
                  className={`${isCurrent ? "today" : ""} ${
                    isSelected ? "selected" : ""
                  } box`}
                  onClick={() => handleClick(option.value, index)}
                >
                  {option.display}
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
