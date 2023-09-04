import { ERROR, customError } from '../exceptions'

export const isValidDateFormat = (dateString: string) => {
  const re = /^\d{4}-\d{2}-\d{2}$/

  if (!re.test(dateString)) {
    throw customError(ERROR.Date, `Invalid date string ${dateString}. The date string should be 'YYYY-MM-DD' format.`)
  }

  try {
    const date = new Date(dateString)
    return date.toISOString().slice(0, 10) === dateString
  } catch {
    throw customError(ERROR.Date, `Invalid date string ${dateString}. Please check the date.`)
  }
}

export const isValidDateRange = (start: string, end: string) => {
  if (start > end) {
    throw customError(ERROR.Date, 'The starting date should be earlier than the ending date.')
  }
}

export const isValidDaysOfTheWeek = (daysOfTheWeek: string[]) => {
  if (daysOfTheWeek.length !== 7) {
    throw customError(ERROR.Number, 'The length of the `daysOfTheWeek` should be exact 7.')
  }
}
