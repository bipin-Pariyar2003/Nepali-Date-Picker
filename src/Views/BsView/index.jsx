import React from "react";
import { np, calendar_data } from "assets/RNepaliCalendar/data";
import { toNepaliNumber, getDaysInMonth, getCurrentBS } from "assets/RNepaliCalendar";
import "./index.css";

//getting current month year and day
const currentYear = getCurrentBS().year;

const currentMonth = getCurrentBS().month;

const currentDay = getCurrentBS().date;

const BsView = ({ selectedDate, onChange }) => {
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
  const isValidDate = (date) => {
    const daysInMonth = getDaysInMonth(date.split("/").at(0), date.split("/").at(1));

    return daysInMonth >= +date.split("/").at(2);
  };

  return (
    <>
      {/* showing the years  */}
      <div style={{ textAlign: "center" }}>
        <h3 style={{ textDecoration: "underline", textAlign: "center" }}>Years (B.S.)</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "73vh",
            overflowY: "auto",
            margin: "0px",
            // marginRight: "50px",
          }}
        >
          {Object.keys(calendar_data).map((year, index) => {
            const nepaliYear = toNepaliNumber(year);
            return (
              <React.Fragment key={index}>
                <div
                  style={{
                    // textAlign: "center",
                    margin: "0px",
                    marginRight: "10px",

                    // display: "flex",
                    // alignItems: "center",
                    // flexDirection: "column",
                  }}
                >
                  <button
                    className={`year
                       ${+currentYear === +year ? "current-year" : "year-month-button"}
                      ${
                        +viewDate.year === +year
                          ? "highlight-year-month"
                          : "year-month-button"
                      }
                       
                    `}
                    onClick={() => {
                      const daysInMonth = getDaysInMonth(year, viewDate.month);
                      const daysArray = Array.from(
                        { length: daysInMonth },
                        (_, i) => i + 1
                      );

                      const date = `${year}/${String(viewDate.month).padStart(
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
                        year: year,
                        daysArray,
                      }));
                    }}
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
      <div style={{}}>
        <h3 style={{ textDecoration: "underline" }}>Months</h3>

        <div
          style={{
            // marginTop: "0px",
            // display: "flex",
            // flexDirection: "column",
            height: "73vh",
            overflowY: "auto",
          }}
        >
          {np.monthName.full.map((month, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  style={{
                    // textAlign: "center",
                    margin: "0px",
                    marginRight: "10px",

                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <button
                    value={index + 1}
                    className={`month
                      ${
                        +currentYear === +viewDate.year && +currentMonth === index + 1
                          ? "current-month"
                          : "year-month-button"
                      }
                      ${
                        +viewDate.month === index + 1
                          ? "highlight-year-month"
                          : "year-month-button"
                      }

                    `}
                    onClick={() => {
                      const daysInMonth = getDaysInMonth(+viewDate.year, index + 1);
                      const daysArray = Array.from(
                        { length: daysInMonth },
                        (_, i) => i + 1
                      );

                      const date = `${viewDate.year}/${String(index + 1).padStart(
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
      {/* showing gatey  */}
      <div style={{}}>
        <h3 style={{ textDecoration: "underline" }}>Days</h3>
        <div
          style={{
            marginTop: "0px",
            // display: "flex",
            // flexDirection: "column",
            height: "73vh",
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
                    value={+day}
                    className={`day
                      ${
                        +currentYear === +viewDate.year &&
                        +currentMonth === +viewDate.month &&
                        +currentDay === +day
                          ? "today"
                          : "day-button"
                      }
                      ${+viewDate.date === +day ? "highlight-day" : "day-button"}
                    `}
                    onClick={() => {
                      const date = `${viewDate.year}/${String(viewDate.month).padStart(
                        2,
                        0
                      )}/${String(index + 1).padStart(2, 0)}`;

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
    </>
  );
};
export default BsView;
