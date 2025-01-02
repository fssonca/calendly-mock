export const getStartOfMonth = (year: number, month: number): Date => {
  return new Date(year, month, 1);
};

export const getDaysInMonth = (year: number, month: number): number => {
  // month is zero-based (0 = January, 1 = February, etc.)
  return new Date(year, month + 1, 0).getDate();
};

export const getWeekday = (date: Date): number => {
  // Sunday = 0, Monday = 1, ...
  return date.getDay();
};

export const formatDateKey = (date: Date): string => {
  // e.g. "2025-02-01"
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Quick helper to parse the date part from an ISO string (e.g. "2025-02-01T13:00:00Z")
export const extractDateKeyFromISO = (isoString: string): string => {
  return isoString.split("T")[0];
};

export const monthHasAvailability = (
  year: number,
  month: number,
  availableDatesMap: { [dateKey: string]: string[] }
) => {
  const end = new Date(year, month + 1, 0); // last day of month

  // We'll loop from day=1 until day=end.getDate() and see if any dateKey is in `availableDatesMap`
  for (let day = 1; day <= end.getDate(); day++) {
    const dateKey = new Date(year, month, day).toISOString().split("T")[0];
    if (availableDatesMap[dateKey]?.length > 0) {
      return true; // found an available date
    }
  }
  return false;
};

export const getFormattedDateTime = (isoString: string | null) => {
  if (!isoString) return "";
  const dateObj = new Date(isoString);
  // Example: "Friday, January 3, 2025 at 11:30 AM"
  return dateObj.toLocaleString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
