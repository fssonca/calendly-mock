import React, { useEffect, useMemo, useRef, useState } from "react";
import { TIMEZONE_GROUPS } from "../data/timezones";
import { TimezoneSelectorProps } from "../types";
import ToggleButton from "./ToggleButton";

export const TimezoneSelector: React.FC<TimezoneSelectorProps> = ({
  selectedTz,
  use12Hour,
  onSelect,
  setUse12Hour,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [refreshFlag, setRefreshFlag] = useState(Date.now());

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus the search input when the component mounts
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefreshFlag(Date.now()); // re-render the component to display the actual time
    }, 2000);

    return () => {
      console.log(refreshFlag); // clear lint no-unused-vars issue
      clearInterval(intervalId);
    };
  }, [refreshFlag]);

  const getLocalTime = (tz: string) => {
    try {
      return new Date().toLocaleTimeString([], {
        timeZone: tz,
        hour: "2-digit",
        minute: "2-digit",
        hour12: use12Hour,
      });
    } catch {
      return "N/A";
    }
  };

  const filteredTimezones = useMemo(() => {
    const normalizedSearch = searchValue.toLowerCase();
    return Object.entries(TIMEZONE_GROUPS).map(([regionName, tzArray]) => {
      const matchingTimezones = tzArray.filter(({ tz, label }) => {
        if (!normalizedSearch) return true;
        return (
          tz.toLowerCase().includes(normalizedSearch) ||
          label.toLowerCase().includes(normalizedSearch)
        );
      });
      return { regionName, matchingTimezones };
    });
  }, [searchValue]);

  return (
    <div className="w-full max-w-md">
      {/* Search bar */}
      <div className="p-4">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="
            border border-gray-300 
            focus:border-blue-600 focus:border-2
            w-full p-2 px-4
            rounded-lg focus:outline-none
            text-sm placeholder-gray-600
            h-[46px]
          "
        />
      </div>

      {/* 12h/24h toggle header */}
      <div className="px-4 h-10 flex items-center justify-between w-full text-xs text-black mb-2">
        <span className="font-bold uppercase">Time zone</span>

        <div className="flex items-center justify-center rounded-full px-2 py-1 space-x-2 hover:bg-gray-200">
          <span>am/pm</span>
          <ToggleButton
            onClick={setUse12Hour}
            checked={!use12Hour}
            classNames="mt-1"
          />
          <span>24h</span>
        </div>
      </div>

      {/* Timezone list */}
      <div className="h-40 overflow-y-auto">
        {filteredTimezones.map(({ regionName, matchingTimezones }) => {
          if (matchingTimezones.length === 0) return null;

          return (
            <div
              key={regionName}
              role="group"
              aria-labelledby={`group-${regionName}`}
            >
              <div
                id={`group-${regionName}`}
                className="font-bold text-black text-sm mb-1 text-left pl-4 uppercase"
              >
                {regionName}
              </div>

              {matchingTimezones.map(({ tz, label }) => {
                const localTime = getLocalTime(tz);
                const isSelected = selectedTz === tz;

                return (
                  <button
                    key={tz}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => onSelect(tz, label)}
                    className={`
                        block w-full text-left px-6 h-9 text-xs
                        ${
                          isSelected
                            ? "bg-blue-600 text-white"
                            : "bg-white text-black hover:bg-[rgba(0,105,255,0.15)]"
                        }
                      `}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="mr-2">{label}</span>
                      </div>
                      <span>{localTime}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
