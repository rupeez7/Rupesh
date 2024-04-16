import { configureStore } from "@reduxjs/toolkit";
import { dailySlice } from "../features/DailyBlogs/dailySlice";



export const store = configureStore({
  reducer: {
    dailySlice: dailySlice.reducer
  }
});
