import React from "react";
import { bsYearToAdYear } from "utils";
import { calendar_data, en } from "assets/RNepaliCalendar/data";

const AdView = () => {
  const currentEngYear = new Date().getFullYear();
  console.log("Current year: ", currentEngYear);
  console.log("Type of year: ", typeof currentEngYear);
  const currentEngMonth = new Date().getMonth();
  console.log("Current Month: ", currentEngMonth);
  console.log("Type of month: ", typeof currentEngMonth);

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
            height: "530px",
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
                    marginTop: "0px",
                    marginBottom: "0px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "#ccc",
                    color: "rgba(0, 0, 0, 0.9)",
                    borderRadius: "25px",
                    padding: "0px",
                  }}
                >
                  <button
                    className={
                      +currentEngMonth === index
                        ? "highlight-year-month"
                        : "year-month-button"
                    }
                    value={index + 1}
                  >
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
            height: "530px",
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
                    marginTop: "0px",
                    marginBottom: "0px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: "#ccc",
                    color: "rgba(0, 0, 0, 0.9)",
                    borderRadius: "25px",
                    padding: "0",
                  }}
                >
                  <button
                    className={
                      currentEngYear === +engYear
                        ? "highlight-year-month"
                        : "year-month-button"
                    }
                    value={year}
                  >
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
