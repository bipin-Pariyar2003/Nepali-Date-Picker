import React from "react";
import { np, calendar_data } from "assets/RNepaliCalendar/data";
import { getCurrentBS, toNepaliNumber } from "assets/RNepaliCalendar";
const BsView = () => {
  const currentBS = getCurrentBS();
  const currentNepaliYear = currentBS.year;
  const currentNepaliMonth = currentBS.month;

  return (
    <>
      {/* showing the years  */}
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Years (B.S.)</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "530px",
            overflowY: "auto",
            marginTop: "0px",
            marginRight: "50px",
          }}
        >
          {Object.keys(calendar_data).map((year, index) => {
            const nepaliYear = toNepaliNumber(year);
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
                    padding: "0",
                  }}
                >
                  <button
                    className={
                      +year === currentNepaliYear
                        ? "highlight-year-month"
                        : "year-month-button"
                    }
                    value={year}
                  >
                    {nepaliYear}
                  </button>
                </div>
                <br />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* showing the months  */}
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Months</h3>

        <div
          style={{
            marginTop: "0px",
            display: "flex",
            flexDirection: "column",
            height: "530px",

            overflowY: "auto",
          }}
        >
          {np.monthName.full.map((month, index) => {
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
                    value={index + 1}
                    className={
                      +currentNepaliMonth === index + 1
                        ? "highlight-year-month"
                        : "year-month-button"
                    }
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
    </>
  );
};
export default BsView;
