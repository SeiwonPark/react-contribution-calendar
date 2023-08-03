export const getDate = () => {
  const time = new Date().toString().split(' ')
  return { year: time[3], month: time[1], day: time[2], date: time[0] }
}

export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export const getFirstDayOfYear = (year: number): number => {
  return new Date(year, 0, 1).getDay()
}

export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

/**
 * Calculates the number of days from the given input `year`.
 * @param {number} year - Year to calculate from
 * @returns The number of columns for each row
 * @example
 * // Returns
 * {
 *  'Sun': 53,
 *  'Mon': 52,
 *  'Tue': 52,
 *  'Wed': 52,
 *  'Thu': 52,
 *  'Fri': 52,
 *  'Sat': 52,
 * }
 * getNumberOfColumns(2023)
 */
export const getNumberOfColumns = (year: number = getCurrentYear()) => {
  const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const firstDay = getFirstDayOfYear(year)
  const totalDays = isLeapYear(year) ? 366 : 365

  const weeks = new Array(7).fill(52)

  for (let i = 0; i < totalDays % 7; i++) {
    weeks[(firstDay + i) % 7] += 1
  }

  const numOfColumns: KeyValuePair = {}
  for (let j = 0; j < 7; j++) {
    numOfColumns[dates[j]] = weeks[j]
  }

  return numOfColumns
}
