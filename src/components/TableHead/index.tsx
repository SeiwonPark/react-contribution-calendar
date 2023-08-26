import Label from '../Label'
import { getDayArray, getDayIndexFromDateString, getMonthsAndColSpans, parseDateFromDateString } from '../../utils'
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
  const { day: startDay } = parseDateFromDateString(start)
  const { year: endYear, month: endMonth, day: endDay } = parseDateFromDateString(end)
  const monthIndexOfEndDay = getDayIndexFromDateString(`${endYear}-${endMonth}-01`)
  const { months, colSpans } = getMonthsAndColSpans(start, end, dayArray, startsOnSunday)

  return (
    <thead>
      <tr>
        <Label textColor={textColor} style={{ fontSize: cy }} colSpan={1}>
          &nbsp;
        </Label>
        {months.map((month, index) => {
          let colSpan = colSpans[index]

          if (colSpans.length === 1 && colSpans[0] === 1) {
            colSpan++
          } else if (months.length > 1 && endDay < 10 && monthIndexOfEndDay !== 0 && index === months.length - 2) {
            colSpan--
          } else if (months.length > 1 && endDay < 10 && monthIndexOfEndDay !== 0 && index === months.length - 1) {
            colSpan++
          }

          const isLastColumnOfStartMonth = index === 0 && months.length > 1 && colSpan <= 1 && startDay >= 21

          return (
            <Label
              textColor={textColor}
              style={{ fontSize: cy }}
              key={index}
              colSpan={colSpan}
              hide={isLastColumnOfStartMonth}
            >
              {month}
            </Label>
          )
        })}
      </tr>
    </thead>
  )
}
