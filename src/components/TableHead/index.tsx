import Label from '../Label'
import { getDayArray, getMonthsAndColSpans } from '../../utils'
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
  const { months, colSpans } = getMonthsAndColSpans(start, end, dayArray, startsOnSunday)

  return (
    <thead>
      <tr>
        <Label textColor={textColor} style={{ width: '4em', fontSize: cy }} colSpan={1}>
          &nbsp;
        </Label>
        {months.map((month, index) => (
          <Label textColor={textColor} style={{ fontSize: cy }} key={index} colSpan={colSpans[index]}>
            {month}
          </Label>
        ))}
      </tr>
    </thead>
  )
}
