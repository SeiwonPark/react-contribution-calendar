declare module 'react-contribution-calendar' {
  import { FunctionComponent } from 'react'

  export interface InputDataProps {
    level: number
    data?: object
  }

  export interface ThemeProps {
    level0: string
    level1: string
    level2: string
    level3: string
    level4: string
  }

  export interface ContributionCalendarProps {
    data: InputDataProps[]
    theme?: ThemeProps
  }

  const ContributionCalendar: FunctionComponent<ContributionCalendarProps>

  export default ContributionCalendar
}
