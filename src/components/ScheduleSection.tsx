import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTimezone } from "../store/scheduleSlice";
import { TzObj } from "../types";
import { CalendarContainer } from "./Calendar/CalendarContainer";
import { TimezoneSelector } from "./TimezoneSelector";
import globe from "../assets/globe.svg"
import arrowDown from "../assets/arrow-down.svg";
import { RootState } from "../store/store";

/**
 * This component:
 * 1) Renders the CalendarContainer (the main calendar + availability).
 * 2) Has a button to toggle the TimezoneSelector popover.
 */
export const ScheduleSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [use12Hour, setUse12Hour] = useState(true);

  const dispatch = useDispatch();

  const selectedTimezone = useSelector(
    (state: RootState) => state.schedule.selectedTimezone
  );

  const setTimezone = (tzObj: TzObj) => {
    dispatch(setSelectedTimezone(tzObj));
  };

  return (
    <div className="h-full">
      <CalendarContainer />

      <div className="relative inline-block w-full px-4">
        <div className="w-full mt-1">
          <div className="text-left text-sm font-bold">Time zone</div>
          <div className="w-full mt-2">
            <button
              className="w-full text-left rounded-full hover:bg-gray-200 p-2 text-xs"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-left text-xs text-black">
                <img src={globe} className="w-4 mr-2" />
                <span>{selectedTimezone.label}</span>
                <span className="ml-1 lowercase">
                  (
                  {new Date().toLocaleTimeString([], {
                    timeZone: selectedTimezone.tz,
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: use12Hour,
                  })}
                  )
                </span>
                <img
                  src={arrowDown}
                  className={`w-2 ml-1 ${isOpen && "rotate-180"}`}
                />
              </div>
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="
              absolute bottom-full left-1/2
              transform -translate-x-1/2
              w-[95%]
              bg-white
              rounded-md
              shadow-custom
              z-50
              border border-[#d4e0ed]
              max-h-[320px]
              h-auto
              overflow-hidden
            "
          >
            <TimezoneSelector
              selectedTz={selectedTimezone.tz}
              selectedLabel={selectedTimezone.label}
              use12Hour={use12Hour}
              setUse12Hour={setUse12Hour}
              onSelect={(tz, label) => {
                setTimezone({ tz, label });
                setIsOpen(false);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
