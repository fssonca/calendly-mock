import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ScheduleState } from "../types";

/**
 * Example URL that returns:
 * {
 *   "data": {
 *     "available_times": ["2025-02-01T13:00:00Z", ...]
 *   }
 * }
 */
const API_URL =
  "https://5b94bbb0-4b84-4173-8753-c9b46c84fc76.mock.pstmn.io/appointment_availabilities/available_times?start_date_time=2023-12-01T18:30:00&end_date_time=2023-12-31T12:29:59";

export const fetchAvailableTimes = createAsyncThunk(
  "schedule/fetchAvailableTimes",
  async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Network error: ${response.status}`);
    }
    const data = await response.json();
    // data should have shape: { data: { available_times: string[] } }
    return data.data.available_times; // return the array of time strings
  }
);

const initialState: ScheduleState = {
  selectedTimezone: {
    tz: "America/New_York",
    label: "Eastern Time - US & Canada",
  },
  selectedDateKey: null,
  selectedTimeSlot: null,
  confirmationStep: false,
  isLoading: false,
  error: null,
  availableTimes: [],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    setSelectedDate(state, action: PayloadAction<string | null>) {
      state.selectedDateKey = action.payload;
      console.log("setSelectedDate called with:", action.payload);

      if (action.payload === null) {
        state.selectedTimeSlot = null;
      }
    },
    setSelectedTimeSlot(state, action: PayloadAction<string | null>) {
      state.selectedTimeSlot = action.payload;
    },
    setSelectedTimezone(
      state,
      action: PayloadAction<{ tz: string; label: string }>
    ) {
      state.selectedTimezone = action.payload;
    },
    setConfirmationStep(state, action: PayloadAction<boolean>) {
      state.confirmationStep = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAvailableTimes.pending, (state) => {
      state.isLoading = true;
      state.error = null; // reset any previous error
    });
    builder.addCase(fetchAvailableTimes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.availableTimes = action.payload; // the array of ISO strings
    });
    builder.addCase(fetchAvailableTimes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Failed to fetch times.";
    });
  },
});

export const {
  setConfirmationStep,
  setSelectedDate,
  setSelectedTimeSlot,
  setSelectedTimezone,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
