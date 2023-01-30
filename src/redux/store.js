import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./todoslice/Todoslice";

export const store = configureStore({
  reducer: {
    todo: todoslice,
  },
});
