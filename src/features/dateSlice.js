import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { ad2bsHandler, bs2adHandler } from "utils";

const initialEnglishDate = moment().format("YYYY/MM/DD");
const initialNepaliDate = ad2bsHandler(initialEnglishDate);

const dateSlice = createSlice({
  name: "date",
  initialState: {
    englishDate: initialEnglishDate,
    nepaliDate: initialNepaliDate,
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

    resetDates: (state) => {
      state.nepaliDate = initialNepaliDate;
      state.englishDate = initialEnglishDate;
    },
  },
});

export const { setNepaliDate, setEnglishDate, resetDates } = dateSlice.actions;
export default dateSlice.reducer;
