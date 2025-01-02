import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  setConfirmationStep,
  setSelectedTimeSlot,
} from "../store/scheduleSlice";
import cx from "classnames";

export const TimeSlotForm: React.FC = () => {
  const dispatch = useDispatch();

  const { selectedDateKey, selectedTimezone, availableTimes } = useSelector(
    (state: RootState) => state.schedule
  );

  const [chosenSlot, setChosenSlot] = React.useState<string | null>(null);

  // Fallback in case date is not set yet
  const safeSelectedDateKey = selectedDateKey ?? "2025-01-01";

  // Format the top label (e.g. "Friday, January 3") in the user’s time zone
  const formattedDate = React.useMemo(() => {
    const dateObj = new Date(safeSelectedDateKey);
    return dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: selectedTimezone.tz, // <--- show date according to user’s TZ
    });
  }, [safeSelectedDateKey, selectedTimezone.tz]);

  // Get all available times for the selected day
  const timesForDay = React.useMemo(() => {
    if (!selectedDateKey) return [];
    return availableTimes.filter(
      (isoString) => isoString.split("T")[0] === selectedDateKey
    );
  }, [selectedDateKey, availableTimes]);

  // When user clicks a time slot, highlight it
  const handleSlotSelection = (isoString: string) => {
    // If the same slot is clicked again, it toggles off
    setChosenSlot((prev) => (prev === isoString ? null : isoString));
  };

  // When user confirms the time slot, dispatch to Redux & move to confirmation step
  const handleSlotConfirm = (isoString: string) => {
    dispatch(setSelectedTimeSlot(isoString));
    dispatch(setConfirmationStep(true));
  };

  return (
    <div className="p-4 pt-10">
      <div className="text-sm mb-8 text-left text-black">{formattedDate}</div>

      <div className="space-y-4">
        {timesForDay.map((isoString) => {
          // Convert each available time to the user’s chosen time zone
          const dateObj = new Date(isoString);
          const timeLabel = dateObj.toLocaleTimeString("en-US", {
            timeZone: selectedTimezone.tz,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          const isChosen = chosenSlot === isoString;

          return (
            <div
              key={isoString}
              className={cx(
                "flex items-center w-full overflow-hidden",
                "transition-all duration-300 ease-out",
                isChosen ? "gap-2" : "gap-0"
              )}
            >
              {/* Primary Button (Time Label) */}
              <button
                onClick={() => handleSlotSelection(isoString)}
                className={cx(
                  "h-[52px] font-bold text-sm rounded lowercase box-border border",
                  "transition-all duration-300 ease-out",
                  isChosen
                    ? "w-1/2 bg-black/60 text-white border-transparent"
                    : "w-full border-blue-600 border-opacity-50 text-blue-600"
                )}
              >
                {timeLabel}
              </button>

              {/* Next Button */}
              <button
                onClick={() => handleSlotConfirm(isoString)}
                className={cx(
                  "h-[52px] font-bold text-sm rounded lowercase transition-all duration-300 ease-out",
                  "overflow-hidden",
                  isChosen
                    ? "w-1/2 bg-blue-600 text-white opacity-100"
                    : "w-0 opacity-0 text-blue-600 bg-blue-600 cursor-pointer"
                )}
              >
                Next
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
