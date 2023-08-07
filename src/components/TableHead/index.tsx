import Label from '../Label'
import { getColumnSpans, parseYearFromDateString } from '../../utils'
import './index.css'

interface TableHeadProps {
  start: string
  end: string
  textColor: string
}

export default function TableHead({ start, end, textColor }: TableHeadProps) {
  const startYear = parseYearFromDateString(start)
  const endYear = parseYearFromDateString(end)

  let allColSpans: number[] = []
  for (let year = startYear; year <= endYear; ++year) {
    const colSpans = getColumnSpans(year)
    allColSpans = allColSpans.concat(colSpans)
  }

  const months = Array(endYear - startYear + 1)
    .fill(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
    .flat()

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
