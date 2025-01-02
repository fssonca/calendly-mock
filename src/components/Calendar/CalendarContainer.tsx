import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getStartOfMonth,
  getDaysInMonth,
  getWeekday,
  extractDateKeyFromISO,
  monthHasAvailability,
} from "../../utils/dateUtils";
import { Calendar } from ".";
import { RootState } from "../../store/store";
import { setSelectedDate } from "../../store/scheduleSlice";

export const CalendarContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { availableTimes, selectedDateKey } = useSelector(
    (state: RootState) => state.schedule
  );

  const selectedDate = new Date(selectedDateKey || Date.now());

  const [currentYear, setCurrentYear] = useState<number>(
    selectedDate.getFullYear()
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    selectedDate.getMonth()
  );

  // Sync local state with Redux when `selectedDateKey` changes
  useEffect(() => {
    if (selectedDateKey) {
      const selectedDate = new Date(selectedDateKey);
      setCurrentYear(selectedDate.getFullYear());
      setCurrentMonth(selectedDate.getMonth());
    }
  }, [selectedDateKey]);

  const availableDatesMap = useMemo(() => {
    const map: { [dateKey: string]: string[] } = {};
    availableTimes.forEach((isoString) => {
      const dateKey = extractDateKeyFromISO(isoString);
      if (!map[dateKey]) {
        map[dateKey] = [];
      }
      map[dateKey].push(isoString);
    });
    return map;
  }, [availableTimes]);

  const hasAvailableTimeSlots = useMemo(() => {
    return monthHasAvailability(currentYear, currentMonth, availableDatesMap);
  }, [currentYear, currentMonth, availableDatesMap]);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const startOfMonth = getStartOfMonth(currentYear, currentMonth);
  const startWeekday = getWeekday(startOfMonth);

  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
    console.log("Navigating to previous month:", newYear, newMonth);
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
    console.log("Navigating to next month:", newYear, newMonth);
  };

  const handleDateClick = (dateKey: string) => {
    console.log("Selected date:", dateKey);
    dispatch(setSelectedDate(dateKey));
  };

  const canGoPrev = useMemo(() => {
    let prevMonth = currentMonth - 1;
    let prevYear = currentYear;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }
    return monthHasAvailability(prevYear, prevMonth, availableDatesMap);
  }, [currentMonth, currentYear, availableDatesMap]);

  const canGoNext = useMemo(() => {
    let nextMonth = currentMonth + 1;
    let nextYear = currentYear;
    if (nextMonth > 11) {
      nextMonth = 0;
      nextYear++;
    }
    return monthHasAvailability(nextYear, nextMonth, availableDatesMap);
  }, [currentMonth, currentYear, availableDatesMap]);

  console.log("Current month:", currentMonth, "Current year:", currentYear);

  return (
    <div className="max-w-xl mx-auto p-4 mb-4 relative">
      <Calendar
        currentYear={currentYear}
        currentMonth={currentMonth}
        daysInMonth={daysInMonth}
        startWeekday={startWeekday}
        availableDatesMap={availableDatesMap}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onDateClick={handleDateClick}
      />

      {!hasAvailableTimeSlots && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-white p-6 rounded-lg shadow-lg text-center w-3/4 border border-gray-200"
        >
          <p className="text-base font-bold text-red-900">
            No available time slots for this month
          </p> 
        </div>
      )}
    </div>
  );
};
