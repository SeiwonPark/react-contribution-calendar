/**
 * This is for handling the issue of storing the object data with string keys.
 *
 * Note: Each object might need proper types rather than this.
 */
interface KeyValuePair {
  [key: string]: number | string
}

/**
 * Defines properties of each data from the input data list.
 */
interface InputDataProps {
  /**
   * This represents the level of data. The higher the level, the more priority it gets.
   * Levels are ranging from `0` to `4`.
   */
  level: number
  /**
   * This attribute is for containing any type of object data to embrace various usages.
   *
   * Note: Currently the type `object` might have flexibility but should be reconsidered.
   */
  data?: object
}

/**
 * This is for holding a collection of data entries. Each key is the identifier of an entry
 * and the value of the key is an `InputDataProps` which contains information about the level
 * of data and any type of object data. The level is used to set the priority of the data.
 */
interface InputData {
  [key: string]: InputDataProps
}

interface ThemeProps {
  /**
   * Level 0 color. This is the lowest level of priority.
   */
  level0: string
  /**
   * Level 1 color.
   */
  level1: string
  /**
   * Level 2 color.
   */
  level2: string
  /**
   * Level 3 color.
   */
  level3: string
  /**
   * Level 4 color. This is the highest level of priority.
   */
  level4: string
}

/**
 * This is for holding a set of themes. Each key is the identifier of a theme and the value
 * of the key is an `ThemeProps` which contains information about the level of color intensity.
 */
interface Theme {
  [key: string]: ThemeProps
}
