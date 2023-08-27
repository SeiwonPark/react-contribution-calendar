// Type definitions for react-contribution-calendar 1.2.11
// Project: https://github.com/seiwon-yaehee/react-contribution-calendar
// Definitions by: Seiwon Park <https://github.com/SeiwonPark>
//                 Yaehee Choe <https://github.com/YaeheeChoe>

/// <reference path="./types.d.ts" />

declare module 'react-contribution-calendar' {
  import { FunctionComponent } from 'react'
  /**
   * Returns an object of ThemeProps which could be used as theme attribute of
   * ContributionCalendarProps.
   * @param {ThemeProps} themeProps - Theme color properties from level 0 to 4.
   */
  export const createTheme: (themeProps: ThemeProps) => ThemeProps

  /**
   * This is for attributes of <ContributionCalendar /> functional component.
   */
  export interface ContributionCalendarProps {
    /**
     * List of items in the data, defaults to an empty list `[]`.
     */
    data?: InputData[]
    /**
     * The starting date of calendar, defaults to 1st January of current year.
     * To set `start` date, `end` date should be provided as well.
     */
    start?: string
    /**
     * The ending date of calendar, defaults to 31st December of current year.
     * To set `end` date, `start` date should be provided as well.
     */
    end?: string
    /**
     * The text color of calendar indexes for months and dates, defaults to `#1F2328`.
     */
    textColor?: string
    /**
     * Whether to set calendar start on Sunday or not, defaults to `true`.
     * If set to false, the week will start on Monday.
     */
    startsOnSunday?: boolean
    /**
     * Whether to include the boundary column or not, defaults to `true`.
     */
    includeBoundary?: boolean
    /**
     * The size of width of each cell, defaults to `10`px.
     */
    cx?: number
    /**
     * The size of height of each cell, defaults to `10`px.
     */
    cy?: number
    /**
     * The border radius of each cell, defaults to `2`px.
     */
    cr?: number
    /**
     * The name of theme for the ContributionCalendar, defaults to `grass`. Also
     * `ThemeProps` could be added directly i.e. when trying to use custom theme.
     */
    theme?: string | ThemeProps
    /**
     * Click event handler for table cells. This takes `cellData` as optional value.
     */
    onCellClick?: MouseEventHandler
    /**
     * Root styles for the ContributionCalendar.
     */
    style?: CSSProperties
  }

  /**
   * `ContributionCalendar` is a React component that renders data contributions over time,
   * similar to the contribution graph seen on GitHub profiles.
   *
   * This calendar displays data in cells, with varying color intensities based on the value
   * of each data point. The appearance and behavior of the calendar can be customized using
   * the provided props.
   *
   * @example
   * ```tsx
   * import { ContributionCalendar } from 'react-contribution-calendar';
   *
   * const data = [
   *  {
   *     '2023-07-08': {
   *       level: 1,
   *     }
   *   },
   *  {
   *     '2023-07-09': {
   *       level: 4,
   *       data: {},            // data with any kinds of keys can be set
   *     }
   *   },
   *  {
   *     '2023-03-31': {
   *       level: 3,
   *       data: {
   *         myKey: 'my data'  // data with any kinds of keys can be set
   *       },
   *     }
   *   },
   *   // ...
   * ];
   *
   *
   * <ContributionCalendar data={data} theme="grass" />
   * ```
   *
   * @version 1.2.11
   * @see {@link https://github.com/seiwon-yaehee/react-contribution-calendar#apis}
   */
  export const ContributionCalendar: FunctionComponent<ContributionCalendarProps>
}
