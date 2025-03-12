import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "features/dateSlice";
export const store = configureStore({
  reducer: {
    date: dateReducer,
  },
});

export default store;
