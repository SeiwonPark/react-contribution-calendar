/**
 * Gets current date details.
 * @returns An object containing the full year, month name, day of the month, and
 * day of the week for the current date.
 * @example
 * Returns
 * {
 *  year: '2023',
 *  month: 'Jul',
 *  day: '08',
 *  date: 'Sat'
 * }
 * getDate()
 */
export const getDate = () => {
  const time = new Date().toString().split(' ')
  return { year: time[3], month: time[1], day: time[2], date: time[0] }
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
  let currentDay = getFirstDayIndexOfYear(year)
  let colSpans = []

  for (let i = 0; i < 12; i++) {
    let daysInMonth = daysInMonths[i]
    let cols = 0

    for (let j = 0; j < daysInMonth; j++) {
      // if `currentDay` is the beginning of a new column
      if (currentDay === 0) {
        cols++
      }
      currentDay = (currentDay + 1) % 7
    }

    if (i === 0) {
      cols++
    }

    colSpans.push(cols)
  }

  return colSpans
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
