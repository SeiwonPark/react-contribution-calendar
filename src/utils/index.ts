import { THEMES } from '../styles/colors'

/**
 * Gets date details.
 * @param {Date} _date - Date to calculate from, defaults to current date.
 * @returns An object containing the full year, month name, day of the month, and
 * day of the week for the current date.
 * @example
 * Returns
 * {
 *  year: '2023',
 *  month: 'July',
 *  day: '08',
 *  date: 'Saturday'
 * }
 * getDateDetails()
 */
export const getDateDetails = (_date: Date = new Date()) => {
  const fullDates: KeyValuePair = {
    Sun: 'Sunday',
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
  }

  const fullMonths: KeyValuePair = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December',
  }

  const time = _date.toString().split(' ')
  return { year: time[3], month: fullMonths[time[1]], day: parseInt(time[2], 10), date: fullDates[time[0]] }
}

/**
 * Gets string representation of the date from the given `year`, `month`, and `day`.
 * @param {number} year - Year to calculate from.
 * @param {number} colIndex - An index of each colSpan for months. Range from 0 to 52.
 * @param {number} day - Day of the month to calculate from.
 * @returns A string representation of the date.
 * @example
 * // Returns 'Saturday, July 8, 2023'
 * getDateTooltip(2023, 6, 8)
 */
export const getDateTooltip = (year: number, colIndex: number, day: number) => {
  const month = getMonthIndex(colIndex, day, year)
  const date = getDateDetails(new Date(year, month, day))
  return `${date.date}, ${date.month} ${date.day}, ${date.year}`
}

/**
 * Gets string representation of the date from the given year, month, and day.
 * @param {number} year - Year to calculate from.
 * @param {number} colIndex - An index of each colSpan for months. Range from 0 to 52.
 * @param {number} day - Day of the month to calculate from.
 * @returns A string representation of the date in 'YYYY-MM-DD' format.
 * @example
 * // Returns '2023-07-08'
 * getDateStringFromIndex(2023, 6, 8)
 */
export const getDateStringFromIndex = (year: number, colIndex: number, day: number): string => {
  const month = getMonthIndex(colIndex, day, year)
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

/**
 * Gets string representation of the date from the given year, monthIndex, and day.
 * @param {number} year - Year to calculate from.
 * @param {number} monthIndex - An index of month to calculate from. Range from `0`(January) to `11`(December).
 * @param {number} day - Day of the month to calculate from.
 * @returns A string representation of the date in 'YYYY-MM-DD' format.
 * @example
 * // Returns '2023-07-08'
 * getDateString(2023, 6, 8)
 */
export const getDateString = (year: number, monthIndex: number, day: number): string => {
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

/**
 * Parses integer value of year from `dateString`.
 * @param {string} dateString - String date format `YYYY-MM-DD`.
 * @example
 * // Returns 2023
 * parseYearFromDateString('2023-07-08')
 */
export const parseYearFromDateString = (dateString: string): number => {
  return +dateString.slice(0, 4)
}

/**
 * Determines if the given `year` is a leap year or not.
 * @param {number} year - Year to calculate from, defaults to the current year.
 */
export const isLeapYear = (year: number = getCurrentYear()): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

/**
 * The number of days for each month is fixed, with the exception of February,
 * which changes based on whether the year is a leap year or not.
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns The number of days in each month for the year.
 */
const getDaysInMonths = (year: number = getCurrentYear()): number[] => {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}

/**
 * Returns the index of the first day. Each index represents dates as follows:
 * - `0`: Sunday
 * - `1`: Monday
 * - `2`: Tuesday
 * - `3`: Wednesday
 * - `4`: Thursday
 * - `5`: Friday
 * - `6`: Saturday
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns An index of the first day of the year.
 */
const getFirstDayIndexOfYear = (year: number = getCurrentYear()): number => {
  return new Date(year, 0, 1).getDay()
}

/**
 * Current year in number format.
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

/**
 * Returns sum of numbers in the `array`.
 * @param {number[]} array - A number of array.
 */
export const getArraySum = (array: number[]): number => {
  return array.reduce((x, y) => x + y, 0)
}

/**
 * Calculates the number of columns required for each row from the given input `year`.
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns An array containing the number of columns for each row.
 * @example
 * // Returns [5, 4, 5, 5, 4, 5, 5, 4, 5, 4, 5, 5]
 * getColumnSpans(2020)
 */
export const getColumnSpans = (year: number = getCurrentYear()): number[] => {
  const daysInMonths = getDaysInMonths(year)
  const firstDayOfYear = getFirstDayIndexOfYear(year)
  const colSpans: number[] = []
  let currentDay = firstDayOfYear

  for (let i = 0; i < 12; i++) {
    const daysInMonth = daysInMonths[i]
    let cols = 0

    for (let j = 0; j < daysInMonth; j++) {
      // if `currentDay` is the beginning of a new column
      if (currentDay === 0) {
        cols++
      }
      currentDay = (currentDay + 1) % 7
    }

    if (i === 0 && firstDayOfYear !== 0) {
      cols++
    }

    colSpans.push(cols)
  }

  return colSpans
}

/**
 * Gets month index from the given column index and day.
 * @param {number} colIndex - An index of each colSpan for months. Range from 0 to 52.
 * @param {number} day - Day of the month.
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns The month index for the given column index and day.
 * @example
 * // Returns 1 (for February)
 * getMonthIndex(4, 1, 2023)
 */
export const getMonthIndex = (colIndex: number, day: number, year: number = getCurrentYear()): number => {
  const colSpans = getColumnSpans(year)
  const daysInMonths = getDaysInMonths(year)

  let sumOfColumns = 0
  let sumOfDays = 0
  let i = 0

  for (i = 0; i < colSpans.length; i++) {
    sumOfColumns += colSpans[i]
    sumOfDays += daysInMonths[i]

    if (colIndex + 1 === sumOfColumns && day < 7) {
      return i + 1
    } else if (colIndex < sumOfColumns && day <= sumOfDays) {
      return i
    }
  }

  return i
}

/**
 * Creates an empty day array to store all days of the year.
 * @param {number} sumOfSpans - Sum of column spans for all months.
 * @returns A 2D number array as much as all days in a year filled with `0`.
 */
const createDayArray = (sumOfSpans: number): number[][] => {
  return new Array(7).fill(0).map(() => new Array(sumOfSpans).fill(0))
}

/**
 * This actually handles filling the `dayArray` with days based on the current year.
 * @param {number[][]} dayArray - Sum of column spans for all months.
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns Filled array from the given `dayArray` with days.
 */
const fillDayArray = (dayArray: number[][], year: number = getCurrentYear()): number[][] => {
  const daysInMonths = getDaysInMonths(year)
  const firstDayIndexOfYear = getFirstDayIndexOfYear(year)

  let currentMonthIndex = 0
  let currentDay = 1
  let currentDateIndex = firstDayIndexOfYear

  while (currentMonthIndex < 12) {
    // fills days in the 2D `dayArray`
    for (let i = 0; i < daysInMonths[currentMonthIndex]; i++) {
      dayArray[currentDateIndex % 7][~~(currentDateIndex / 7)] = currentDay
      currentDateIndex++
      currentDay++
    }

    // reset `currentDay` for the next month
    if (currentDay > daysInMonths[currentMonthIndex]) {
      currentDay = 1
      currentMonthIndex++
    }
  }

  return dayArray
}

// FIXME: whether to use or not
export const getDayArrayUntilToday = (): number[][] => {
  const currentYear = getCurrentYear()
  let lastYearDayArray = getDayArrayFromYear(currentYear - 1)
  let currentYearDayArray = getDayArrayFromYear(currentYear)

  lastYearDayArray = lastYearDayArray.map((row) =>
    row.filter((day, colIndex) => !(colIndex === row.length - 1 && day === 0))
  )
  currentYearDayArray = currentYearDayArray.map((row) => row.filter((day, colIndex) => !(colIndex === 0 && day === 0)))

  const mergedDayArray: number[][] = lastYearDayArray.map((row, i) => row.concat(currentYearDayArray[i]))
  return mergedDayArray
}

/**
 * Gets 2D number array filled with days from the given year range.
 * @param {number} startYear - Year to start creating day array.
 * @param {number} endYear - Year to end creating day array.
 * @returns A 2D array filled with actual days between startYear and endYear.
 */
export const getDayArray = (startYear: number, endYear: number): number[][] => {
  let mergedDayArray: number[][] = []

  for (let year = startYear; year <= endYear; ++year) {
    let dayArray = getDayArrayFromYear(year)

    // filter dayArray
    if (year === startYear) {
      dayArray = dayArray.map((row) => row.filter((day, colIndex) => !(colIndex === row.length - 1 && day === 0)))
    }

    // in case `startYear` and `endYear` are the same
    if (year === endYear) {
      dayArray = dayArray.map((row) => row.filter((day, colIndex) => !(colIndex === 0 && day === 0)))
    }

    if (mergedDayArray.length === 0) {
      mergedDayArray = mergedDayArray.concat(dayArray)
    } else {
      mergedDayArray = mergedDayArray.map((row, i) => row.concat(dayArray[i]))
    }
  }

  return mergedDayArray
}

/**
 * Gets 2D number array filled with days from the given year depending on the column spans.
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns A 2D array filled with actual days for the year.
 */
export const getDayArrayFromYear = (year: number = getCurrentYear()): number[][] => {
  const colSpans = getColumnSpans(year)
  const sumOfSpans = getArraySum(colSpans)

  const dayArray = createDayArray(sumOfSpans)
  const filledDayArray = fillDayArray(dayArray, year)
  return filledDayArray
}

/**
 * Parses given `inputData` and returns the data in a `Map` structure.
 * @param {InputData[]} inputData - JSON list format input data.
 * @returns Parsed map from the given JSON list.
 */
export const parseInputData = (inputData: InputData[]): Map<string, InputDataProps> => {
  const parsedData = new Map<string, InputDataProps>()

  inputData.forEach((data) => {
    Object.keys(data).forEach((date) => {
      parsedData.set(date, data[date])
    })
  })

  return parsedData
}

/**
 * Convert given data to a ThemeProps
 * @param {string | ThemeProps} inputTheme - Predefined theme name string or custom color ThemeProps
 * @returns Converted ThemeProps from theme name or user define color props
 */
export const createTheme = (inputTheme: string | ThemeProps): ThemeProps => {
  return typeof inputTheme === 'string' ? THEMES[inputTheme] : inputTheme
}

/**
 * Returns date difference between two date strings.
 * @param {string} dateString1 - Date string in 'YYYY-MM-DD' format.
 * @param {string} dateString2 - Date string in 'YYYY-MM-DD' format.
 */
export const getDateDifference = (dateString1: string, dateString2: string): number => {
  const date1 = new Date(dateString1)
  const date2 = new Date(dateString2)
  const diff = Math.abs(date2.getTime() - date1.getTime())
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return diffDays
}
