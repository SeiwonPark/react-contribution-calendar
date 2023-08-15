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
  return {
    year: time[3],
    month: fullMonths[time[1]],
    day: parseInt(time[2], 10),
    date: fullDates[time[0]],
  }
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
 * Parses integer value of month from `dateString`.
 * @param {string} dateString - String date format `YYYY-MM-DD`.
 * @example
 * // Returns 7
 * parseMonthFromDateString('2023-07-08')
 */
export const parseMonthFromDateString = (dateString: string): number => {
  return +dateString.slice(5, 7)
}

/**
 * Parses integer value of day from `dateString`.
 * @param {string} dateString - String date format `YYYY-MM-DD`.
 * @example
 * // Returns 8
 * parseDayFromDateString('2023-07-08')
 */
export const parseDayFromDateString = (dateString: string): number => {
  return +dateString.slice(8, 10)
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
 * Returns the index of the first day of year. Each index represents dates as follows:
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
export const getFirstDayIndexOfYear = (year: number = getCurrentYear()): number => {
  return new Date(year, 0, 1).getDay()
}

/**
 * Returns the index of day from the date. Each index represents dates as follows:
 * - `0`: Sunday
 * - `1`: Monday
 * - `2`: Tuesday
 * - `3`: Wednesday
 * - `4`: Thursday
 * - `5`: Friday
 * - `6`: Saturday
 * @param {string} date - Date string to calculate from.
 * @returns An index of the day of the month.
 */
export const getDayIndexOfMonth = (date: string): number => {
  return new Date(date).getDay()
}

/**
 * Current year in number format.
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

/**
 * Returns sum of numbers in the `array` up to the n-th index, or the whole array
 * if n is not provided.
 * @param {number[]} array - A number array.
 * @param {number} [n] - Optional. Last index to sum up to.
 */
export const getArraySum = (array: number[], n?: number): number => {
  if (n !== undefined && n < 0) {
    return 0
  }

  return array.reduce((accumulator, currentValue, index) => {
    if (n !== undefined) {
      return index <= n ? accumulator + currentValue : accumulator
    }
    return accumulator + currentValue
  }, 0)
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
 * Calculates the number of columns required for each row from the given input `year`.
 * @param {number} year - Year to calculate from, defaults to the current year.
 * @returns An array containing the number of columns for each row.
 * @example
 * // Returns [5, 4, 5, 5, 4, 5, 5, 4, 5, 4, 5, 5]
 * getColumnSpansForYears(2020)
 */
export const getColumnSpansForYears = (
  year: number = getCurrentYear(),
  startYear: number,
  endYear: number
): number[] => {
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

  // removes colSpans width if it's not the starting year
  if (year !== startYear && firstDayOfYear !== 0 && startYear !== endYear) {
    colSpans[0] -= 1
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

// /**
//  * This actually handles filling the `dayArray` with days based on the current year.
//  * @param {number[][]} dayArray - Sum of column spans for all months.
//  * @param {number} year - Year to calculate from, defaults to the current year.
//  * @returns Filled array from the given `dayArray` with days.
//  */
// export const fillDayArray = (dayArray: number[][], year: number = getCurrentYear()): number[][] => {
//   const daysInMonths = getDaysInMonths(year)
//   const firstDayIndexOfYear = getFirstDayIndexOfYear(year)

//   let currentMonthIndex = 0
//   let currentDay = 1
//   let currentDateIndex = firstDayIndexOfYear

//   while (currentMonthIndex < 12) {
//     // fills days in the 2D `dayArray`
//     for (let i = 0; i < daysInMonths[currentMonthIndex]; i++) {
//       dayArray[currentDateIndex % 7][~~(currentDateIndex / 7)] = currentDay
//       currentDateIndex++
//       currentDay++
//     }

//     // reset `currentDay` for the next month
//     if (currentDay > daysInMonths[currentMonthIndex]) {
//       currentDay = 1
//       currentMonthIndex++
//     }
//   }

//   return dayArray
// }

// // FIXME: whether to use or not
// export const getDayArrayUntilToday = (): number[][] => {
//   const currentYear = getCurrentYear()
//   let lastYearDayArray = getDayArrayFromYear(currentYear - 1)
//   let currentYearDayArray = getDayArrayFromYear(currentYear)

//   lastYearDayArray = lastYearDayArray.map((row) =>
//     row.filter((day, colIndex) => !(colIndex === row.length - 1 && day === 0))
//   )
//   currentYearDayArray = currentYearDayArray.map((row) => row.filter((day, colIndex) => !(colIndex === 0 && day === 0)))

//   const mergedDayArray: number[][] = lastYearDayArray.map((row, i) => row.concat(currentYearDayArray[i]))
//   return mergedDayArray
// }

// /**
//  * Gets 2D number array filled with days from the given year range.
//  * @param {number} startYear - Year to start creating day array.
//  * @param {number} endYear - Year to end creating day array.
//  * @returns A 2D array filled with actual days between startYear and endYear.
//  */
// export const getDayArray = (startYear: number, endYear: number): number[][] => {
//   let mergedDayArray: number[][] = []

//   for (let year = startYear; year <= endYear; ++year) {
//     let dayArray = getDayArrayFromYear(year, startYear, endYear)

//     // filter dayArray
//     if (year === startYear) {
//       dayArray = dayArray.map((row) => row.filter((day, colIndex) => !(colIndex === row.length - 1 && day === 0)))
//     }

//     if (startYear !== endYear && year === endYear) {
//       dayArray = dayArray.map((row) => row.filter((day, colIndex) => !(colIndex === 0 && day === 0)))
//     }

//     if (mergedDayArray.length === 0) {
//       mergedDayArray = mergedDayArray.concat(dayArray)
//     } else {
//       mergedDayArray = mergedDayArray.map((row, i) => row.concat(dayArray[i]))
//     }
//   }

//   const filteredMergedDayArray = mergedDayArray.map((array) => {
//     return array.filter((value, index) => {
//       return !(value === 0 && index !== 0)
//     })
//   })

//   return filteredMergedDayArray
// }

// export const getColIndex = (date: string, startYear: number, endYear: number) => {
//   const year = parseYearFromDateString(date)
//   const month = parseMonthFromDateString(date)
//   const day = parseDayFromDateString(date)

//   const colSpans = getColumnSpansForYears(year, startYear, endYear)
//   const dayArray = getDayArrayFromYear(year, startYear, endYear)

//   let monthIndex = getArraySum(colSpans, month - 3)
//   let c = monthIndex

//   for (c = monthIndex; c < dayArray[0].length; ++c) {
//     for (let r = 0; r < dayArray.length; ++r) {
//       if (dayArray[r][c] === day) {
//         return c
//       }
//     }
//   }

//   return monthIndex
// }

// /**
//  * Gets 2D number array filled with days from the given year depending on the column spans.
//  * @param {number} year - Year to calculate from, defaults to the current year.
//  * @returns A 2D array filled with actual days for the year.
//  */
// export const getDayArrayFromYear = (
//   year: number = getCurrentYear(),
//   startYear: number,
//   endYear: number
// ): number[][] => {
//   const colSpans = getColumnSpansForYears(year, startYear, endYear)
//   const sumOfSpans = getArraySum(colSpans)

//   const dayArray = createDayArray(sumOfSpans)
//   const filledDayArray = fillDayArray(dayArray, year)
//   return filledDayArray
// }

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
 * Returns date difference between two date strings. This could return negative value.
 * @param {string} fromDateString - Starting date string in 'YYYY-MM-DD' format.
 * @param {string} toDateString - Ending date string in 'YYYY-MM-DD' format.
 * @example
 * // Returns 30
 * getDateDifference("2023-01-01", "2023-01-31")
 *
 * // Returns -30
 * getDateDifference("2023-01-31", "2023-01-01")
 */
export const getDateDifference = (fromDateString: string, toDateString: string): number => {
  const date1 = new Date(fromDateString)
  const date2 = new Date(toDateString)
  const diff = Math.ceil((date2.getTime() - date1.getTime()) / 86400000)
  return diff
}

// -----------------------------------------------------------------------------------------------

/**
 * Returns empty 2D array filled with zeros representing rows for each date and
 * columns for each week in a year.
 * @param {number} startYear - The starting year for 2D array.
 * @param {number} endYear - The ending year for 2D array.
 */
const createArrays = (startYear: number, endYear: number): number[][] => {
  let columns = 0
  for (let year = startYear; year <= endYear; ++year) {
    const firstDayIndex = getFirstDayIndexOfYear(year)

    if (year === startYear || firstDayIndex === 0) {
      columns += 53
    } else {
      columns += 52
    }
  }

  return new Array(7).fill(0).map(() => new Array(columns).fill(0))
}

/**
 *
 * @param {string} start - The starting date for 2D array.
 * @param {string} end - The ending date for 2D array.
 * @returns
 */
export const fillIndexArray = (start: string, end: string): number[][] => {
  const startYear = parseYearFromDateString(start)
  const endYear = parseYearFromDateString(end)

  let indexArray: number[][] = createArrays(startYear, endYear)
  let lastColumn = 0
  let day = 1

  for (let year = startYear; year <= endYear; ++year) {
    const firstDayIndex = getFirstDayIndexOfYear(year)
    const daysInMonths = getDaysInMonths(year)

    let currentMonthIndex = 0
    let currentDay = 1
    let currentDateIndex = firstDayIndex

    while (currentMonthIndex < 12) {
      for (let i = 0; i < daysInMonths[currentMonthIndex]; ++i) {
        indexArray[currentDateIndex % 7][~~(currentDateIndex / 7) + lastColumn] = day

        currentDateIndex++
        currentDay++
        day++
      }

      if (currentDay > daysInMonths[currentMonthIndex]) {
        currentDay = 1
        currentMonthIndex++
      }
    }

    lastColumn += ~~(currentDateIndex / 7)
  }

  return indexArray
}

/**
 *
 * @param {string} start - The starting date for 2D array.
 * @param {string} end - The ending date for 2D array.
 * @returns
 */
export const fillDayArray = (start: string, end: string): number[][] => {
  const startYear = parseYearFromDateString(start)
  const endYear = parseYearFromDateString(end)
  console.log('startYear: ', startYear)
  console.log('endYear: ', endYear)

  let dayArray: number[][] = createArrays(startYear, endYear)
  let lastColumn = 0
  let day = 1

  for (let year = startYear; year <= endYear; ++year) {
    const firstDayIndex = getFirstDayIndexOfYear(year)
    const daysInMonths = getDaysInMonths(year)

    let currentMonthIndex = 0
    let currentDay = 1
    let currentDateIndex = firstDayIndex

    while (currentMonthIndex < 12) {
      for (let i = 0; i < daysInMonths[currentMonthIndex]; ++i) {
        dayArray[currentDateIndex % 7][~~(currentDateIndex / 7) + lastColumn] = currentDay

        currentDateIndex++
        currentDay++
        day++
      }

      if (currentDay > daysInMonths[currentMonthIndex]) {
        currentDay = 1
        currentMonthIndex++
      }
    }

    lastColumn += ~~(currentDateIndex / 7)
  }

  return dayArray
}

/**
 *
 * @param {number} startYear - The starting year to calculate from.
 * @param {string} targetDate - The date to get row and column indexes from.
 * @returns
 */
export const getRowAndColumnIndexFromDate = (startYear: number, targetDate: string) => {
  const startDate = `${startYear}-01-01`
  const targetDay = getDaysBetween(startDate, targetDate)
  const indexArray = fillIndexArray(startDate, targetDate)

  for (let r = 0; r < indexArray.length; ++r) {
    for (let c = 0; c < indexArray[r].length; ++c) {
      if (targetDay === indexArray[r][c]) {
        return { row: r, col: c }
      }
    }
  }
}

const getDaysBetween = (startDate: string, targetDate: string): number => {
  const from = new Date(startDate)
  const to = new Date(targetDate)
  const timeDifference = to.getTime() - from.getTime()
  return timeDifference / (1000 * 60 * 60 * 24) + 1
}
