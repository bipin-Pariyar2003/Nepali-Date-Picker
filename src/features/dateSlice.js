import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { ad2bsHandler, bs2adHandler, getDaysInMonth } from "utils";

const initialEnglishDate = moment().format("YYYY/MM/DD");
const initialNepaliDate = ad2bsHandler(initialEnglishDate);

const getViewDate = (date) => {
  const year = +date.split("/")[0];
  const month = +date.split("/")[1];
  const day = +date.split("/")[2];
  const daysInMonth = getDaysInMonth(year, month);
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => ({
    display: i + 1,
    value: i + 1,
  }));

  return { year, month, date: day, daysArray };
};

const initialEngViewDate = getViewDate(initialEnglishDate);

const initialNepViewDate = getViewDate(initialNepaliDate);

const dateSlice = createSlice({
  name: "date",
  initialState: {
    englishDate: initialEnglishDate,
    nepaliDate: initialNepaliDate,
    viewDateAD: initialEngViewDate,
    viewDateBS: initialNepViewDate,
  },

  reducers: {
    setNepaliDate: (state, action) => {
      state.nepaliDate = action.payload;
      state.englishDate = bs2adHandler(action.payload);
    },

    setEnglishDate: (state, action) => {
      state.englishDate = action.payload;
      state.nepaliDate = ad2bsHandler(action.payload);
    },
    setViewDateAD: (state, action) => {
      state.viewDateAD = getViewDate(
        `${action.payload.year}/${action.payload.month}/${action.payload.date}`
      );
    },

    setViewDateBS: (state, action) => {
      state.viewDateBS = getViewDate(
        `${action.payload.year}/${action.payload.month}/${action.payload.date}`
      );
    },

    resetDates: (state) => {
      state.nepaliDate = initialNepaliDate;
      state.englishDate = initialEnglishDate;
      state.viewDateAD = initialEngViewDate;
      state.viewDateBS = initialNepViewDate;
    },
  },
});

export const {
  setNepaliDate,
  setEnglishDate,
  setViewDateAD,
  setViewDateBS,
  resetDates,
  // viewDateAD,
  // viewDateBS,
} = dateSlice.actions;
export default dateSlice.reducer;
