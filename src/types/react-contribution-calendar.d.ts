// Type definitions for react-contribution-calendar 1.1.0
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
  export const createTheme = (themeProps: ThemeProps): ThemeProps => {}

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
     * The text color of calendar indexes for months and dates, defaults to `#000`.
     */
    textColor?: string
    /**
     * The name of theme for the ContributionCalendar, defaults to `grass`. Also
     * `ThemeProps` could be added directly i.e. when trying to use custom theme.
     */
    theme?: string | ThemeProps
  }

  export const ContributionCalendar: FunctionComponent<ContributionCalendarProps>
}
