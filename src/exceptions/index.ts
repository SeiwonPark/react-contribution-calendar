/**
 * Creates a named custom error with message.
 * @param {string} name - The name of the error.
 * @param {string} message - The error message.
 * @returns {Error} Error instance.
 */
export const customError = (name: string, message: string): Error => {
  const error = new Error(message)
  error.name = name
  return error
}

export enum ERROR {
  Number = 'Number Error',
  String = 'String Error',
  Date = 'Date Error',
}
