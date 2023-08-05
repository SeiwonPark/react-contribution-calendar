declare module 'react-contribution-calendar' {
  import { FunctionComponent } from 'react'

  export interface KeyValuePair {
    [key: string]: number | string
  }

  export interface InputDataProps {
    level: number
    data?: object
  }

  export interface InputData {
    [key: string]: InputDataProps
  }

  export interface ThemeProps {
    level0: string
    level1: string
    level2: string
    level3: string
    level4: string
  }

  export interface Theme {
    [key: string]: ThemeProps
  }

  export interface ContributionCalendarProps {
    data: InputDataProps[]
    theme?: string
  }

  export const ContributionCalendar: FunctionComponent<ContributionCalendarProps>
}
