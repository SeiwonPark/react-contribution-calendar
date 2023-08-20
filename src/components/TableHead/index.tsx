import Label from '../Label'
import {
  getDayArray,
  getDayIndexFromDateString,
  getMonthsAndColSpans,
  parseYearFromDateString,
  parseMonthFromDateString,
  parseDayFromDateString,
} from '../../utils'
import './index.css'

interface TableHeadProps {
  start: string
  end: string
  textColor: string
  startsOnSunday: boolean
  cy: number
}

export default function TableHead({ start, end, textColor, startsOnSunday, cy }: TableHeadProps) {
  const dayArray = getDayArray(start, end, startsOnSunday)
  const lastYear = parseYearFromDateString(end)
  const lastMonth = parseMonthFromDateString(end)
  const lastDay = parseDayFromDateString(end)
  const lastDayOfMonth = getDayIndexFromDateString(`${lastYear}-${lastMonth}-01`)
  const { months, colSpans } = getMonthsAndColSpans(start, end, dayArray, startsOnSunday)

  return (
    <thead>
      <tr>
        <Label textColor={textColor} style={{ width: '4em', fontSize: cy }} colSpan={1}>
          &nbsp;
        </Label>
        {months.map((month, index) => {
          let colSpan = colSpans[index]

          if (months.length > 1 && lastDay < 10 && lastDayOfMonth !== 0 && index === months.length - 2) {
            colSpan--
          } else if (months.length > 1 && lastDay < 10 && lastDayOfMonth !== 0 && index === months.length - 1) {
            colSpan++
          }

          return (
            <Label textColor={textColor} style={{ fontSize: cy }} key={index} colSpan={colSpan}>
              {month}
            </Label>
          )
        })}
      </tr>
    </thead>
  )
}
