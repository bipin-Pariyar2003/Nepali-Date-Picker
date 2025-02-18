import React from "react";
import { bsYearToAdYear, getDaysInMonth } from "utils";
import { calendar_data, en } from "assets/RNepaliCalendar/data";
import moment from "moment";

const AdView = ({ selectedDate, onChange }) => {
  const [viewDate, setViewDate] = React.useState({
    year: selectedDate.split("/").at(0),
    month: selectedDate.split("/").at(1),
    date: selectedDate.split("/").at(2),
    daysArray: [],
  });

  React.useEffect(() => {
    const daysInMonth = getDaysInMonth(
      selectedDate.split("/").at(0),
      selectedDate.split("/").at(1)
    );
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setViewDate({
      year: selectedDate.split("/").at(0),
      month: selectedDate.split("/").at(1),
      date: selectedDate.split("/").at(2),
      daysArray,
    });
  }, [selectedDate]);

  //check if the date is valid
  const isValidDate = (date, format = "YYYY/MM/DD") => {
    return moment(date, format).isValid();
  };

  return (
    <>
      {/* showing days  */}
      <div style={{ marginTop: "30px", marginRight: "50px" }}>
        <h3 style={{ textDecoration: "underline" }}>Days</h3>
        <div
          style={{
            marginTop: "0px",
            display: "flex",
            flexDirection: "column",
            height: "530px",
            overflowY: "auto",
          }}
        >
          {viewDate.daysArray.map((day, index) => {
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
                  }}
                >
                  <button
                    className={
                      +viewDate.date === index + 1
                        ? "highlight-day"
                        : "day-button"
                    }
                    onClick={() => {
                      const date = `${viewDate.year}/${String(
                        viewDate.month
                      ).padStart(2, 0)}/${String(index + 1).padStart(2, 0)}`;
                      // const isValidDate = moment(date, "YYYY/MM/DD").isValid();

                      if (isValidDate(date)) {
                        onChange(date);
                        return;
                      }

                      setViewDate((prev) => ({
                        ...prev,
                        date: index + 1,
                      }));
                    }}
                  >
                    {day}
                  </button>
                </div>
                <br />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* showing the months  */}
      <div style={{ marginTop: "30px", marginRight: "50px" }}>
        <h3 style={{ textDecoration: "underline" }}>Months</h3>

        <div
          style={{
            marginLeft: "0px",
            marginTop: "0px",
            gap: "0px",
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
                      +viewDate.month === index + 1
                        ? "highlight-year-month"
                        : "year-month-button"
                    }
                    onClick={() => {
                      const daysInMonth = getDaysInMonth(
                        viewDate.year,
                        index + 1
                      );
                      const daysArray = Array.from(
                        { length: daysInMonth },
                        (_, i) => i + 1
                      );

                      const date = `${viewDate.year}/${String(
                        index + 1
                      ).padStart(2, 0)}/${String(viewDate.date).padStart(
                        2,
                        0
                      )}`;
                      // const isValidDate = moment(date, "YYYY/MM/DD").isValid();

                      if (isValidDate(date)) {
                        onChange(date);
                        return;
                      }

                      setViewDate((prev) => ({
                        ...prev,
                        month: index + 1,
                        daysArray,
                      }));
                    }}
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
          {[2022, 2023, 2024, 2025, 2026].map((engYear, index) => (
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
                    +viewDate.year === +engYear
                      ? "highlight-year-month"
                      : "year-month-button"
                  }
                  onClick={() => {
                    const daysInMonth = getDaysInMonth(engYear, viewDate.month);
                    const daysArray = Array.from(
                      { length: daysInMonth },
                      (_, i) => i + 1
                    );

                    const date = `${engYear}/${String(viewDate.month).padStart(
                      2,
                      0
                    )}/${String(viewDate.date).padStart(2, 0)}`;
                    // const isValidDate = moment(date, "YYYY/MM/DD").isValid();

                    if (isValidDate(date)) {
                      onChange(date);
                      return;
                    }

                    setViewDate((prev) => ({
                      ...prev,
                      year: engYear,
                      daysArray,
                    }));
                  }}
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
