import Label from '../Label'
import { getColumnSpans, getCurrentYear } from '../../utils'
import './index.css'

interface TableHeadProps {
  textColor: string
}

export default function TableHead({ textColor }: TableHeadProps) {
  const year = getCurrentYear()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const colSpans = getColumnSpans(year)

  return (
    <thead>
      <tr>
        <Label textColor={textColor} style={{ width: '40px' }} colSpan={1}>
          {' '}
        </Label>
        {months.map((month, index) => (
          <Label textColor={textColor} key={month} colSpan={colSpans[index]}>
            {month}
          </Label>
        ))}
      </tr>
    </thead>
  )
}
