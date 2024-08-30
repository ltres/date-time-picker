import { OwlDateTimeFormats } from "projects/picker/src/public_api";

export const locale = {
    short:"it",
    long: "it-IT",
    timeZone: "Europe/Rome",
    showTimezoneInfo: true,
    dateFormat: "day-month-year timeZoneName"
  }

export const datePickerFormat: {
    baseDateFormat: Intl.DateTimeFormatOptions
    [key:string]: Intl.DateTimeFormatOptions
  }  = {
    baseDateFormat: {year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, timeZone: locale.timeZone,  ...locale.showTimezoneInfo && {timeZoneName: "short"}},
  
    fullPickerInput: {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false, timeZone: locale.timeZone, ...locale.showTimezoneInfo && {timeZoneName: "short"}},
    datePickerInput: {year: 'numeric', month: 'numeric', day: 'numeric', hour12: false, timeZone: locale.timeZone,  ...locale.showTimezoneInfo && {timeZoneName: "short"}},
    timePickerInput: {hour: 'numeric', minute: 'numeric', hour12: false},
    monthYearLabel: {year: 'numeric', month: 'short', hour12: false},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric', hour12: false},
    monthYearA11yLabel: {year: 'numeric', month: 'long', hour12: false},
  };


  export const datePickerFormatFuncz: OwlDateTimeFormats = {
    parseInput: format,
    fullPickerInput: format,
    datePickerInput: format,
    timePickerInput: format,
    monthYearLabel: format,
    dateA11yLabel: format,
    monthYearA11yLabel: format,
  };
  
  function format(arg:Date): string{
    return arg.toString()
  }

  export const RECURRENCE_VALUES: Recurrence[] = [
    "daily",
    "weekly",
    "monthly",
    "yearly",
]
  
export const TIMEFRAME_VALUES: Timeframe[] = [
  "6 hours",
   "24 hours",
   "week",
   "month"
]


export type Recurrence =  "daily" |"weekly"|"monthly"|"yearly";

export type Timeframe = "6 hours" | "24 hours" | "week" | "month";