import Label from '../Label'
import { getDayArray, getMonthsAndColSpans } from '../../utils'
import './index.css'

interface TableHeadProps {
  start: string
  end: string
  textColor: string
}

export default function TableHead({ start, end, textColor }: TableHeadProps) {
  const dayArray = getDayArray(start, end)
  const { months, colSpans } = getMonthsAndColSpans(start, end, dayArray)

  return (
    <thead>
      <tr>
        <Label textColor={textColor} style={{ width: '40px' }} colSpan={1}>
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
