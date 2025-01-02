// A custom “master list” of time zones grouped by region
export const TIMEZONE_GROUPS = {
  "US/Canada": [
    {
      tz: "America/Los_Angeles",
      label: "Pacific Time - US & Canada",
    },
    {
      tz: "America/Denver",
      label: "Mountain Time - US & Canada",
    },
    {
      tz: "America/Chicago",
      label: "Central Time - US & Canada",
    },
    {
      tz: "America/New_York",
      label: "Eastern Time - US & Canada",
    },
    {
      tz: "America/Anchorage",
      label: "Alaska Time",
    },
    {
      tz: "America/Phoenix",
      label: "Arizona, Yukon Time",
    },
    {
      tz: "America/St_Johns",
      label: "Newfoundland Time",
    },
    {
      tz: "Pacific/Honolulu",
      label: "Hawaii Time",
    },
  ],
  America: [
    {
      tz: "America/Adak",
      label: "America/Adak",
    },
    {
      tz: "America/Argentina/Buenos_Aires",
      label: "Buenos Aires Time",
    },
    {
      tz: "America/Asuncion",
      label: "Asuncion Time",
    },
    {
      tz: "America/Bogota",
      label: "Bogota, Jamaica, Lima Time",
    },
    {
      tz: "America/Campo_Grande",
      label: "America/Campo Grande",
    },
    {
      tz: "America/Caracas",
      label: "Caracas Time",
    },
    {
      tz: "America/Godthab",
      label: "America/Godthab",
    },
    {
      tz: "America/Halifax",
      label: "Atlantic Time",
    },
    {
      tz: "America/Regina",
      label: "Saskatchewan, Guatemala, Costa Rica Time",
    },
    {
      tz: "America/Havana",
      label: "America/Havana",
    },
    {
      tz: "America/Mazatlan",
      label: "America/Mazatlan",
    },
    {
      tz: "America/Mexico_City",
      label: "Mexico City Time",
    },
    {
      tz: "America/Montevideo",
      label: "Montevideo Time",
    },
    {
      tz: "America/Miquelon",
      label: "America/Miquelon",
    },
    {
      tz: "America/Noronha",
      label: "America/Noronha",
    },
    {
      tz: "America/Santiago",
      label: "Santiago Time",
    },
    {
      tz: "America/Santa_Isabel",
      label: "America/Santa Isabel",
    },
    {
      tz: "America/Sao_Paulo",
      label: "Brasilia Time",
    },
  ],
  Africa: [
    {
      tz: "Africa/Cairo",
      label: "Africa/Cairo",
    },
    {
      tz: "Africa/Kigali",
      label: "Central Africa Time",
    },
    {
      tz: "Africa/Lagos",
      label: "West Africa Time",
    },
    {
      tz: "Africa/Windhoek",
      label: "Africa/Windhoek",
    },
  ],
  Asia: [
    {
      tz: "Asia/Amman",
      label: "Jordan Time",
    },
    {
      tz: "Asia/Baghdad",
      label: "Baghdad, East Africa Time",
    },
    {
      tz: "Asia/Baku",
      label: "Asia/Baku",
    },
    {
      tz: "Asia/Beirut",
      label: "Lebanon Time",
    },
    {
      tz: "Asia/Damascus",
      label: "Syria Time",
    },
    {
      tz: "Asia/Dhaka",
      label: "Asia/Dhaka",
    },
    {
      tz: "Asia/Dubai",
      label: "Dubai Time",
    },
    {
      tz: "Asia/Gaza",
      label: "Asia/Gaza",
    },
    {
      tz: "Asia/Irkutsk",
      label: "Asia/Irkutsk",
    },
    {
      tz: "Asia/Bangkok",
      label: "Indochina Time",
    },
    {
      tz: "Asia/Jerusalem",
      label: "Israel Time",
    },
    {
      tz: "Asia/Kabul",
      label: "Kabul Time",
    },
    {
      tz: "Pacific/Majuro",
      label: "Pacific/Majuro",
    },
    {
      tz: "Asia/Karachi",
      label: "Pakistan, Maldives Time",
    },
    {
      tz: "Asia/Kathmandu",
      label: "Kathmandu Time",
    },
    {
      tz: "Asia/Calcutta",
      label: "India, Sri Lanka Time",
    },
    {
      tz: "Asia/Krasnoyarsk",
      label: "Krasnoyarsk Time",
    },
    {
      tz: "Asia/Omsk",
      label: "Asia/Omsk",
    },
    {
      tz: "Asia/Rangoon",
      label: "Asia/Rangoon",
    },
    {
      tz: "Asia/Shanghai",
      label: "China, Singapore, Perth",
    },
    {
      tz: "Asia/Tehran",
      label: "Tehran Time",
    },
    {
      tz: "Asia/Tokyo",
      label: "Japan, Korea Time",
    },
    {
      tz: "Asia/Vladivostok",
      label: "Asia/Vladivostok",
    },
    {
      tz: "Asia/Yakutsk",
      label: "Asia/Yakutsk",
    },
    {
      tz: "Asia/Yekaterinburg",
      label: "Yekaterinburg Time",
    },
    {
      tz: "Asia/Yerevan",
      label: "Asia/Yerevan",
    },
  ],
  Atlantic: [
    {
      tz: "Atlantic/Azores",
      label: "Azores Time",
    },
    {
      tz: "Atlantic/Cape_Verde",
      label: "Cape Verde Time",
    },
  ],
  Australia: [
    {
      tz: "Australia/Adelaide",
      label: "Adelaide Time",
    },
    {
      tz: "Australia/Brisbane",
      label: "Brisbane Time",
    },
    {
      tz: "Australia/Darwin",
      label: "Australia/Darwin",
    },
    {
      tz: "Australia/Eucla",
      label: "Australia/Eucla",
    },
    {
      tz: "Australia/Lord_Howe",
      label: "Australia/Lord Howe",
    },
    {
      tz: "Australia/Perth",
      label: "Australia/Perth",
    },
    {
      tz: "Australia/Sydney",
      label: "Sydney, Melbourne Time",
    },
  ],
  UTC: [
    {
      tz: "Etc/UTC",
      label: "UTC Time",
    },
  ],
  Europe: [
    {
      tz: "Europe/Paris",
      label: "Central European Time",
    },
    {
      tz: "Europe/Athens",
      label: "Eastern European Time",
    },
    {
      tz: "Europe/London",
      label: "UK, Ireland, Lisbon Time",
    },
    {
      tz: "Europe/Minsk",
      label: "Minsk Time",
    },
    {
      tz: "Europe/Moscow",
      label: "Moscow Time",
    },
    {
      tz: "Europe/Istanbul",
      label: "Turkey Time",
    },
  ],
  Pacific: [
    {
      tz: "Pacific/Apia",
      label: "Pacific/Apia",
    },
    {
      tz: "Pacific/Auckland",
      label: "Auckland Time",
    },
    {
      tz: "Pacific/Chatham",
      label: "Pacific/Chatham",
    },
    {
      tz: "Pacific/Easter",
      label: "Pacific/Easter",
    },
    {
      tz: "Pacific/Fiji",
      label: "Pacific/Fiji",
    },
    {
      tz: "Pacific/Gambier",
      label: "Pacific/Gambier",
    },
    {
      tz: "Pacific/Kiritimati",
      label: "Pacific/Kiritimati",
    },
    {
      tz: "Pacific/Majuro",
      label: "Pacific/Majuro",
    },
    {
      tz: "Pacific/Marquesas",
      label: "Pacific/Marquesas",
    },
    {
      tz: "Pacific/Norfolk",
      label: "Pacific/Norfolk",
    },
    {
      tz: "Pacific/Noumea",
      label: "Pacific/Noumea",
    },
    {
      tz: "Pacific/Pago_Pago",
      label: "Pacific/Pago Pago",
    },
    {
      tz: "Pacific/Pitcairn",
      label: "Pacific/Pitcairn",
    },
    {
      tz: "Pacific/Tarawa",
      label: "Pacific/Tarawa",
    },
    {
      tz: "Pacific/Tongatapu",
      label: "Pacific/Tongatapu",
    },
  ],
};
