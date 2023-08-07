import Label from '../Label'
import { getColumnSpans, parseYearFromDateString, parseMonthFromDateString } from '../../utils'
import './index.css'

interface TableHeadProps {
  start: string
  end: string
  textColor: string
}

export default function TableHead({ start, end, textColor }: TableHeadProps) {
  const startYear = parseYearFromDateString(start)
  const startMonth = parseMonthFromDateString(start) - 1
  const endYear = parseYearFromDateString(end)
  const endMonth = parseMonthFromDateString(end) - 1

  let allColSpans: number[] = []
  let months: string[] = []

  for (let year = startYear; year <= endYear; ++year) {
    const colSpans = getColumnSpans(year)
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    if (year === startYear) {
      colSpans.splice(0, startMonth)
      monthNames.splice(0, startMonth)
    }

    if (year === endYear) {
      colSpans.splice(endMonth + 1)
      monthNames.splice(endMonth + 1)
    }

    allColSpans = allColSpans.concat(colSpans)
    months = months.concat(monthNames)
  }

  console.log(months)

  return (
    <thead>
      <tr>
        <Label textColor={textColor} style={{ width: '40px' }} colSpan={1}>
          {' '}
        </Label>
        {months.map((month, index) => (
          <Label textColor={textColor} key={index} colSpan={allColSpans[index]}>
            {month}
          </Label>
        ))}
      </tr>
    </thead>
  )
}
