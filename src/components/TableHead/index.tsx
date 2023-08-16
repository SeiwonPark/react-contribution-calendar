import Label from '../Label'
import {
  parseYearFromDateString,
  parseMonthFromDateString,
  getDayArray,
  getRowAndColumnIndexFromDate,
} from '../../utils'
import './index.css'

interface TableHeadProps {
  start: string
  end: string
  textColor: string
}

export default function TableHead({ start, end, textColor }: TableHeadProps) {
  const dayArray = getDayArray(start, end)

  const { row: startRow, col: startCol } = getRowAndColumnIndexFromDate(parseYearFromDateString(start), start)
  const { col: endCol } = getRowAndColumnIndexFromDate(parseYearFromDateString(start), end)

  const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const months: string[] = []
  const colSpans: number[] = []

  let prevMonth = -1

  for (let c = startCol; c <= endCol; ++c) {
    let currentMonth = 0
    if (c === startCol) {
      currentMonth = parseMonthFromDateString(dayArray[startRow][c]) - 1
    } else {
      currentMonth = parseMonthFromDateString(dayArray[0][c]) - 1
    }

    if (currentMonth !== prevMonth) {
      months.push(allMonths[currentMonth])
      prevMonth = currentMonth
      colSpans.push(0)
    }

    colSpans[colSpans.length - 1]++
  }

  return (
    <thead>
      <tr>
        <Label textColor={textColor} style={{ width: '40px' }} colSpan={1}>
          {' '}
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
