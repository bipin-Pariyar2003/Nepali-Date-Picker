import React from "react";
import { bs2adHandler, bsYearToAdYear } from "utils";
import { calendar_data, en } from "assets/RNepaliCalendar/data";

const AdView = () => {
  return (
    <>
      {/* showing the months  */}

      <div style={{ marginTop: "30px", marginRight: "50px" }}>
        <h3 style={{ textDecoration: "underline" }}>Months</h3>

        <div
          style={{
            marginLeft: "0px",
            marginTop: "0px",
            display: "flex",
            flexDirection: "column",
            height: "500px",
            overflowY: "auto",
          }}
        >
          {en.monthName.full.map((month, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  style={{
                    textAlign: "center",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "#ccc",
                    color: "rgba(0, 0, 0, 0.9)",
                    borderRadius: "25px",
                    padding: "0px",
                  }}
                >
                  <button className="year-month-button" value={index + 1}>
                    {month}
                  </button>
                </div>
                <br />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* showing the years  */}
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Years (A.D.)</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "500px",
            overflowY: "auto",
          }}
        >
          {Object.keys(calendar_data)
            .map((year) => {
              const engYear = bsYearToAdYear(year);
              return { engYear, year }; // Return both values for later use
            })
            .filter(({ engYear }) => !isNaN(engYear)) // Filter out NaN values
            .map(({ engYear, year }, index) => (
              <React.Fragment key={index}>
                <div
                  style={{
                    textAlign: "center",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "#ccc",
                    color: "rgba(0, 0, 0, 0.9)",
                    borderRadius: "25px",
                    padding: "0",
                  }}
                >
                  <button className="year-month-button" value={year}>
                    {engYear}
                  </button>
                </div>
                <br />
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default AdView;
