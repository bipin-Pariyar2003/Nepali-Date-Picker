import React from "react";
import { np, calendar_data } from "assets/RNepaliCalendar/data";
import { toNepaliNumber, getDaysInMonth } from "assets/RNepaliCalendar";
import moment from "moment";

const BsView = ({ selectedDate, onChange }) => {
  console.log("selectedDate: ", selectedDate);

  const [viewDate, setViewDate] = React.useState({
    year: selectedDate.split("/").at(0),
    month: selectedDate.split("/").at(1),
    date: selectedDate.split("/").at(2),
    daysArray: [],
  });
  React.useEffect(() => {
    const daysInMonth = getDaysInMonth(
      selectedDate.split("/").at(0),
      selectedDate.split("/").at("1")
    );
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    setViewDate({
      year: selectedDate.split("/").at(0),
      month: selectedDate.split("/").at(0),
      date: selectedDate.split("/").at(2),
      daysArray,
    });
  }, [selectedDate]);

  //getting days of the month

  //check if the date is valid
  const isValidDate = (date, format = "YYYY/MM/DD") => {
    return moment(date, format).isValid();
  };

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
                      +viewDate.year === +year
                        ? "highlight-year-month"
                        : "year-month-button"
                    }
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
                      +viewDate.month === index + 1
                        ? "highlight-year-month"
                        : "year-month-button"
                    }
                    onClick={() => {
                      const daysInMonth = getDaysInMonth(
                        +viewDate.year,
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
      {/* showing gatey  */}
      <div style={{ marginTop: "30px", marginLeft: "50px" }}>
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
    </>
  );
};
export default BsView;
