import Label from '../Label'
import { getDayArray, getMonthsAndColSpans } from '../../utils'
import './index.css'

interface TableHeadProps {
  start: string
  end: string
  textColor: string
  startsOnSunday: boolean
}

export default function TableHead({ start, end, textColor, startsOnSunday }: TableHeadProps) {
  const dayArray = getDayArray(start, end, startsOnSunday)
  const { months, colSpans } = getMonthsAndColSpans(start, end, dayArray, startsOnSunday)

  return (
    <thead>
      <tr>
        <Label textColor={textColor} style={{ width: '3.5em' }} colSpan={1}>
          &nbsp;
        </Label>
        {months.map((month, index) => (
          <Label textColor={textColor} key={index} colSpan={colSpans[index]}>
            {month}
          </Label>
        ))}
      </tr>
    </thead>
  )
}
