import React from "react";
import { formatDateKey } from "../../utils/dateUtils";
import { CalendarProps } from "../../types";
import { ArrowLeft } from "../../icons/arrowLeft";
import { ArrowRight } from "../../icons/arrowRight";

export const Calendar: React.FC<CalendarProps> = ({
  currentYear,
  currentMonth,
  daysInMonth,
  startWeekday,
  availableDatesMap,
  onPrevMonth,
  onNextMonth,
  canGoPrev,
  canGoNext,
  onDateClick,
}) => {
  const renderCalendarDays = () => {
    const daysArray = [];

    // leading blanks
    for (let i = 0; i < startWeekday; i++) {
      daysArray.push(<div key={`blank-${i}`} className="text-center p-2" />);
    }

    // actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(currentYear, currentMonth, day);
      const dateKey = formatDateKey(dateObj);
      const hasAvailability = !!availableDatesMap[dateKey];
      const isToday = dateKey === todayKey;

      daysArray.push(
        <button
          key={day}
          onClick={() => hasAvailability && onDateClick(dateKey)}
          className={`relative p-2 w-11 h-11 flex items-center justify-center 
            rounded-full mx-auto 
            ${
              isToday
                ? "after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-gray-500"
                : ""
            }
            ${
              hasAvailability
                ? "bg-[rgba(0,105,255,0.065)] hover:bg-[rgba(0,105,255,0.15)] cursor-pointer font-bold text-blue-600"
                : "cursor-default	text-gray-500"
            }
          `}
        >
          {day}
        </button>
      );
    }

    return daysArray;
  };

  const todayKey = new Date().toISOString().split("T")[0];

  const monthLabel = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    {
      month: "long",
    }
  );

  const prevBtnClasses = canGoPrev
    ? "bg-[rgba(0,105,255,0.065)] hover:bg-[rgba(0,105,255,0.15)] text-blue-600 cursor-pointer"
    : "text-gray-400 cursor-default";

  const nextBtnClasses = canGoNext
    ? "bg-[rgba(0,105,255,0.065)] hover:bg-[rgba(0,105,255,0.15)] text-blue-600 cursor-pointer"
    : "text-gray-400 cursor-default";

  return (
    <div className="flex flex-col w-full p-2">
      {/* 1) Month navigation row */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {/* PREV button */}
        <button
          onClick={canGoPrev ? onPrevMonth : undefined}
          className={`
            relative z-10 inline-flex justify-center items-center w-10 h-10 
            rounded-full
            ${prevBtnClasses}
          `}
        >
          <ArrowLeft classNames="w-5" />
        </button>

        <h2 className="w-[125px] text-center text-sm text-black">
          {monthLabel} {currentYear}
        </h2>

        {/* NEXT button */}
        <button
          onClick={canGoNext ? onNextMonth : undefined}
          className={`
            relative z-10 inline-flex justify-center items-center w-10 h-10
            rounded-full
            ${nextBtnClasses}
          `}
        >
          <ArrowRight classNames="w-5" />
        </button>
      </div>

      {/* 2) Day-of-week labels in a 7-column grid */}
      <div className="grid grid-cols-7 text-center mb-2 text-xs text-slate-700">
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
      </div>

      {/* 3) Actual calendar days in a 7-column grid */}
      <div className="grid grid-cols-7 gap-y-2">{renderCalendarDays()}</div>
    </div>
  );
};
