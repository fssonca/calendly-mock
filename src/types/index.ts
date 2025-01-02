export interface CalendarProps {
  currentYear: number;
  currentMonth: number;
  daysInMonth: number;
  startWeekday: number; // 0 = Sunday
  availableDatesMap: { [dateKey: string]: string[] };
  canGoPrev: boolean;
  canGoNext: boolean;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onDateClick: (arg: string) => void;
}

export interface RightPanelProps {
  selectedDateKey: string | null;
  selectedTimeSlot: string | null;
  setSelectedTimeSlot: (slot: string | null) => void;
  availableDatesMap: { [dateKey: string]: string[] };
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
}

export interface AvailableTimesResponse {
  data: {
    available_times: string[];
  };
}

export interface TimezoneSelectorProps {
  selectedLabel: string;
  selectedTz: string; // The IANA tz (e.g. "America/New_York")
  onSelect: (tz: string, label: string) => void;
  use12Hour: boolean;
  setUse12Hour: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ScheduleState {
  selectedTimezone: {
    tz: string;
    label: string;
  };
  selectedDateKey: string | null;
  selectedTimeSlot: string | null;
  confirmationStep: boolean;
  isLoading: boolean;
  error: string | null;
  availableTimes: string[];
}

export interface ToggleButtonProps {
  onClick: (checkedState: boolean) => void;
  checked: boolean;
  classNames?: string;
}

export type TzObj = { tz: string; label: string };
