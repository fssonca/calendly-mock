import { configureStore } from "@reduxjs/toolkit";
import scheduleSlice from "./scheduleSlice";

export const store = configureStore({
  reducer: {
    schedule: scheduleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
